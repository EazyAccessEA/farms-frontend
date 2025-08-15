'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PuredgeOS, PuredgeOSComponents, PuredgeOSUtils } from '@/lib/puredgeos';
import { puredgeTelemetry } from '@/lib/puredge-telemetry';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

type Farm = {
  id: string;
  name: string;
  address: string;
  postcode: string;
  lat: number;
  lng: number;
  verified_photo_url?: string;
  produce_tags?: string[];
};

export default function MapPage() {
  const mapRef = useRef<maplibregl.Map | null>(null);
  const mapElRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFarms, setFilteredFarms] = useState<Farm[]>([]);

  // PuredgeOS 2.0: Load farm data
  useEffect(() => {
    fetch("/api/farms")
      .then((r) => r.json())
      .then((data) => {
        setFarms(data);
        setFilteredFarms(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load farm data.");
        setLoading(false);
      });
  }, []);

  // PuredgeOS 2.0: Search and filter functionality
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredFarms(farms);
      return;
    }

    const filtered = farms.filter(farm => 
      farm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farm.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farm.postcode.toLowerCase().includes(searchQuery.toLowerCase()) ||
      farm.produce_tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setFilteredFarms(filtered);
  }, [searchQuery, farms]);

  // PuredgeOS 2.0: Initialize map
  useEffect(() => {
    if (!isClient || !mapElRef.current || farms.length === 0) return;

    const initMap = async () => {
      try {
        // Create MapLibre map
        const map = new maplibregl.Map({
          container: mapElRef.current!,
          style: {
            version: 8,
            sources: {
              osm: {
                type: 'raster',
                tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                tileSize: 256,
                attribution: '&copy; OpenStreetMap contributors'
              }
            },
            layers: [
              {
                id: 'osm-layer',
                type: 'raster',
                source: 'osm'
              }
            ]
          },
          center: [-1.8723, 52.4746], // Birmingham area
          zoom: 10,
          maxZoom: 18,
          minZoom: 3,
          interactive: true,
          trackResize: true
        });

        mapRef.current = map;

        // Add navigation controls
        map.addControl(new maplibregl.NavigationControl({
          showCompass: true,
          showZoom: true,
          visualizePitch: false
        }), 'top-right');

        // Wait for map to load
        map.on('load', () => {
          setMapLoaded(true);
          // Small delay to ensure map is fully rendered
          setTimeout(() => {
            addMarkersToMap(farms);
          }, 100);
        });

        // Handle map errors
        map.on('error', () => {
          setError("Map failed to load");
        });

      } catch {
        setError("Map failed to load");
      }
    };

    initMap();

    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isClient, farms]);

  // PuredgeOS 2.0: Add markers to map
  const addMarkersToMap = (farmsToShow: Farm[]) => {
    if (!mapRef.current || !mapLoaded) return;

    console.log('Adding markers for farms:', farmsToShow.length);
    console.log('Map center:', mapRef.current.getCenter());
    console.log('Map zoom:', mapRef.current.getZoom());

    // Remove existing markers
    const existingMarkers = document.querySelectorAll('.farm-marker');
    existingMarkers.forEach(marker => marker.remove());

    farmsToShow.forEach((farm) => {
      if (typeof farm.lat === "number" && typeof farm.lng === "number") {
        // Create marker element with proper positioning
        const markerEl = document.createElement('div');
        markerEl.className = 'farm-marker';
        markerEl.style.cssText = `
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, ${PuredgeOS.colors.primary[500]} 0%, ${PuredgeOS.colors.primary[600]} 100%);
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: ${PuredgeOS.shadows.lg};
          cursor: pointer;
          transition: all ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth};
          animation: markerPulse 2s ease-in-out infinite;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;

        // Create popup
        const popup = new maplibregl.Popup({
          closeButton: true,
          closeOnClick: false,
          maxWidth: '350px',
          className: 'farm-popup',
          anchor: 'bottom'
        }).setHTML(`
          <div style="font-family: ${PuredgeOS.typography.fontFamily.primary}; padding: 16px; min-width: 280px;">
            <h3 style="margin:0 0 12px 0; font-size:20px; font-weight:600; color:${PuredgeOS.colors.semantic.text.primary}; line-height:1.3;">${farm.name}</h3>
            <p style="margin:0 0 16px 0; font-size:15px; color:${PuredgeOS.colors.semantic.text.secondary}; line-height:1.4;">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style="display:inline; margin-right:6px; vertical-align:middle;">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              ${farm.address}<br/>
              ${farm.postcode}
            </p>
            ${farm.produce_tags && farm.produce_tags.length > 0 ? `
              <div style="margin-top:16px;">
                <span style="font-size:13px; font-weight:500; color:${PuredgeOS.colors.semantic.text.tertiary}; text-transform:uppercase; letter-spacing:0.5px;">Available Produce:</span>
                <div style="margin-top:8px; display:flex; flex-wrap:wrap; gap:6px;">
                  ${farm.produce_tags.map(tag => 
                    `<span style="background:${PuredgeOS.colors.primary[50]}; color:${PuredgeOS.colors.primary[700]}; padding:6px 10px; border-radius:16px; font-size:13px; font-weight:500;">${tag}</span>`
                  ).join('')}
                </div>
              </div>
            ` : ''}
            <div style="margin-top:16px; padding-top:12px; border-top:1px solid ${PuredgeOS.colors.semantic.border.light};">
              <button onclick="window.open('https://maps.google.com/?q=${farm.lat},${farm.lng}', '_blank')" style="
                background: ${PuredgeOS.colors.primary[500]};
                color: white;
                border: none;
                padding: 8px 16px;
                border-radius: 8px;
                font-size: 14px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.2s ease;
              " onmouseover="this.style.background='${PuredgeOS.colors.primary[600]}'" onmouseout="this.style.background='${PuredgeOS.colors.primary[500]}'">
                Get Directions
              </button>
            </div>
          </div>
        `);

        // Create and add marker with proper positioning
        new maplibregl.Marker({
          element: markerEl,
          anchor: 'center'
        })
          .setLngLat([farm.lng, farm.lat])
          .setPopup(popup)
          .addTo(mapRef.current!);
          
        console.log(`Added marker for ${farm.name} at [${farm.lng}, ${farm.lat}]`);

        // Marker click handler
        markerEl.addEventListener('click', () => {
          setSelectedFarm(farm);
          
          // Animation
          markerEl.style.animation = 'none';
          void markerEl.offsetHeight;
          markerEl.style.animation = 'markerBounce 0.6s ease-out';
          
          setTimeout(() => {
            markerEl.style.animation = 'markerPulse 2s ease-in-out infinite';
          }, 600);
        });

        // Hover effects
        markerEl.addEventListener('mouseenter', () => {
          markerEl.style.transform = 'scale(1.2)';
          markerEl.style.boxShadow = PuredgeOS.shadows.xl;
        });

        markerEl.addEventListener('mouseleave', () => {
          markerEl.style.transform = 'scale(1)';
          markerEl.style.boxShadow = PuredgeOS.shadows.lg;
        });

        // Keyboard accessibility
        markerEl.setAttribute('tabindex', '0');
        markerEl.setAttribute('role', 'button');
        markerEl.setAttribute('aria-label', `View details for ${farm.name}`);
        markerEl.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            markerEl.click();
          }
        });
      }
    });
  };

  // PuredgeOS 2.0: Update markers when filtered farms change
  useEffect(() => {
    if (mapLoaded) {
      addMarkersToMap(filteredFarms);
    }
  }, [filteredFarms, mapLoaded]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // PuredgeOS 2.0: Measure metrics after page load
  useEffect(() => {
    const measureMetrics = async () => {
      try {
        const metrics = await puredgeTelemetry.measureAll('/map');
        console.log('PuredgeOS 2.0 Map Metrics:', metrics);
      } catch (error) {
        console.warn('PuredgeOS 2.0: Failed to measure metrics:', error);
      }
    };
    
    setTimeout(measureMetrics, 3000);
  }, []);

  if (loading) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: PuredgeOS.colors.semantic.background.primary
      }}>
        <div style={{
          textAlign: 'center',
          color: PuredgeOS.colors.semantic.text.primary
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: `3px solid ${PuredgeOS.colors.semantic.border.light}`,
            borderTop: `3px solid ${PuredgeOS.colors.primary[500]}`,
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }} />
          <p>Loading map...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: PuredgeOS.colors.semantic.background.primary
      }}>
        <div style={{
          textAlign: 'center',
          color: PuredgeOS.colors.semantic.text.primary
        }}>
          <div style={{
            fontSize: '48px',
            marginBottom: '16px'
          }}>⚠️</div>
          <p>{error}</p>
          <button
            onClick={() => window.location.reload()}
            style={{
              ...PuredgeOSComponents.button.base,
              ...PuredgeOSComponents.button.primary,
              marginTop: '16px'
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      position: 'relative'
    }}>
      {/* Search interface */}
      <div style={{
        position: 'absolute',
        top: PuredgeOS.spacing[6],
        left: PuredgeOS.spacing[6],
        right: PuredgeOS.spacing[6],
        zIndex: 1000,
        maxWidth: '500px'
      }}>
        <div style={{
          ...PuredgeOSUtils.glass('light'),
          padding: PuredgeOS.spacing[4],
          borderRadius: PuredgeOS.borderRadius.lg,
          border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
          boxShadow: PuredgeOS.shadows.lg
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: PuredgeOS.spacing[3]
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: PuredgeOS.colors.semantic.text.secondary }}>
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
            <input
              type="text"
              placeholder="Search farms, produce, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                flex: 1,
                border: 'none',
                background: 'transparent',
                fontSize: PuredgeOS.typography.fontSize.base,
                color: PuredgeOS.colors.semantic.text.primary,
                outline: 'none',
                minHeight: '40px'
              }}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: PuredgeOS.spacing[2],
                  borderRadius: PuredgeOS.borderRadius.base,
                  color: PuredgeOS.colors.semantic.text.secondary
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            )}
          </div>
          {searchQuery && (
            <div style={{
              marginTop: PuredgeOS.spacing[3],
              fontSize: PuredgeOS.typography.fontSize.sm,
              color: PuredgeOS.colors.semantic.text.secondary
            }}>
              Found {filteredFarms.length} farm{filteredFarms.length !== 1 ? 's' : ''}
            </div>
          )}
        </div>
      </div>

      {/* Map container */}
      <div 
        ref={mapElRef}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: PuredgeOS.borderRadius.lg,
          overflow: 'hidden'
        }}
      />

      {/* Selected farm info */}
      {selectedFarm && (
        <div style={{
          position: 'absolute',
          bottom: PuredgeOS.spacing[6],
          left: PuredgeOS.spacing[6],
          right: PuredgeOS.spacing[6],
          maxWidth: '500px',
          ...PuredgeOSUtils.glass('light'),
          padding: PuredgeOS.spacing[6],
          borderRadius: PuredgeOS.borderRadius.lg,
          border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
          boxShadow: PuredgeOS.shadows.lg,
          zIndex: 1000,
          animation: 'slideInUp 0.3s ease-out'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: PuredgeOS.spacing[4]
          }}>
            <h3 style={{
              fontSize: PuredgeOS.typography.fontSize.lg,
              fontWeight: PuredgeOS.typography.fontWeight.semibold,
              color: PuredgeOS.colors.semantic.text.primary,
              margin: 0,
              marginBottom: PuredgeOS.spacing[2]
            }}>
              {selectedFarm.name}
            </h3>
            <button
              onClick={() => setSelectedFarm(null)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: PuredgeOS.typography.fontSize.xl,
                cursor: 'pointer',
                color: PuredgeOS.colors.semantic.text.secondary,
                padding: PuredgeOS.spacing[1],
                borderRadius: PuredgeOS.borderRadius.base,
                minWidth: '32px',
                minHeight: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: `all ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth}`
              }}
              onMouseOver={(e) => e.currentTarget.style.background = PuredgeOS.colors.semantic.background.tertiary}
              onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
              aria-label="Close farm details"
            >
              ×
            </button>
          </div>
          <p style={{
            fontSize: PuredgeOS.typography.fontSize.sm,
            color: PuredgeOS.colors.semantic.text.secondary,
            margin: 0,
            marginBottom: PuredgeOS.spacing[3]
          }}>
            {selectedFarm.address}, {selectedFarm.postcode}
          </p>
          {selectedFarm.produce_tags && selectedFarm.produce_tags.length > 0 && (
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: PuredgeOS.spacing[2],
              marginBottom: PuredgeOS.spacing[4]
            }}>
              {selectedFarm.produce_tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    background: PuredgeOS.colors.primary[100],
                    color: PuredgeOS.colors.primary[700],
                    padding: `${PuredgeOS.spacing[1]} ${PuredgeOS.spacing[2]}`,
                    borderRadius: PuredgeOS.borderRadius.md,
                    fontSize: PuredgeOS.typography.fontSize.sm,
                    fontWeight: PuredgeOS.typography.fontWeight.medium
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <div style={{
            display: 'flex',
            gap: PuredgeOS.spacing[3]
          }}>
            <button
              onClick={() => window.open(`https://maps.google.com/?q=${selectedFarm.lat},${selectedFarm.lng}`, '_blank')}
              style={{
                ...PuredgeOSComponents.button.base,
                ...PuredgeOSComponents.button.primary,
                fontSize: PuredgeOS.typography.fontSize.sm,
                padding: `${PuredgeOS.spacing[2]} ${PuredgeOS.spacing[4]}`,
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                gap: PuredgeOS.spacing[2]
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Get Directions
            </button>
            <button
              onClick={() => window.open(`tel:+44${selectedFarm.postcode.replace(/\s/g, '')}`, '_blank')}
              style={{
                ...PuredgeOSComponents.button.base,
                fontSize: PuredgeOS.typography.fontSize.sm,
                padding: `${PuredgeOS.spacing[2]} ${PuredgeOS.spacing[4]}`,
                minHeight: '40px',
                background: PuredgeOS.colors.semantic.background.secondary,
                color: PuredgeOS.colors.semantic.text.primary,
                border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
                display: 'flex',
                alignItems: 'center',
                gap: PuredgeOS.spacing[2]
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Farm
            </button>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div style={{
        position: 'absolute',
        top: PuredgeOS.spacing[6],
        right: PuredgeOS.spacing[6],
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: PuredgeOS.spacing[3]
      }}>
        <Link
          href="/"
          style={{
            ...PuredgeOSComponents.button.base,
            ...PuredgeOSComponents.button.primary,
            fontSize: PuredgeOS.typography.fontSize.base,
            padding: `${PuredgeOS.spacing[3]} ${PuredgeOS.spacing[4]}`,
            textDecoration: 'none',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: PuredgeOS.spacing[2],
            background: PuredgeOS.colors.semantic.background.primary,
            color: PuredgeOS.colors.semantic.text.primary,
            border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
            boxShadow: PuredgeOS.shadows.sm,
            minHeight: '48px',
            minWidth: '100px'
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          Back
        </Link>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes markerPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes markerBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
