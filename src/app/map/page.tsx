'use client';

import { useEffect, useRef, useState } from "react";
import { PuredgeOS, PuredgeOSComponents, PuredgeOSUtils } from '@/lib/puredgeos';
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

  // Load farm data with PuredgeOS clarity
  useEffect(() => {
    fetch("/api/farms")
      .then((r) => r.json())
      .then((data) => {
        setFarms(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Unable to load farm locations");
        setLoading(false);
      });
  }, []);

  // Initialize MapLibre map with PuredgeOS immersion
  useEffect(() => {
    if (!isClient || !mapElRef.current || farms.length === 0) return;

    const initMap = async () => {
      try {
        // Create MapLibre map with PuredgeOS clarity
        const map = new maplibregl.Map({
          container: mapElRef.current!,
          style: {
            version: 8,
            sources: {
              'osm': {
                type: 'raster',
                tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
                tileSize: 256,
                attribution: '&copy; OpenStreetMap contributors'
              }
            },
            layers: [
              {
                id: 'osm-tiles',
                type: 'raster',
                source: 'osm',
                minzoom: 0,
                maxzoom: 22
              }
            ]
          },
          center: [-2.5, 54.5], // UK center
          zoom: 6,
          maxZoom: 18,
          minZoom: 3
        });

        mapRef.current = map;

        // Add navigation controls with PuredgeOS styling
        map.addControl(new maplibregl.NavigationControl(), 'top-right');

        // Wait for map to load
        map.on('load', () => {
          setMapLoaded(true);
          
                     // Add farm markers with PuredgeOS signature moments
           farms.forEach((farm) => {
            if (typeof farm.lat === "number" && typeof farm.lng === "number") {
              // Create custom marker element
              const markerEl = document.createElement('div');
              markerEl.className = 'farm-marker';
              markerEl.style.cssText = `
                width: 24px;
                height: 24px;
                background: linear-gradient(135deg, ${PuredgeOS.colors.primary[500]} 0%, ${PuredgeOS.colors.primary[600]} 100%);
                border: 3px solid white;
                border-radius: 50%;
                box-shadow: ${PuredgeOS.shadows.lg};
                cursor: pointer;
                transition: all ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth};
                animation: markerPulse 2s ease-in-out infinite;
              `;

              // Add pulse animation
              const style = document.createElement('style');
              style.textContent = `
                @keyframes markerPulse {
                  0%, 100% { transform: scale(1); }
                  50% { transform: scale(1.1); }
                }
              `;
              document.head.appendChild(style);

              // Create popup with PuredgeOS clarity
              const popup = new maplibregl.Popup({
                closeButton: true,
                closeOnClick: false,
                maxWidth: '300px',
                className: 'farm-popup'
              }).setHTML(`
                <div style="font-family: ${PuredgeOS.typography.fontFamily.primary}; padding: 8px;">
                  <h3 style="margin:0 0 8px 0; font-size:18px; font-weight:600; color:${PuredgeOS.colors.semantic.text.primary};">${farm.name}</h3>
                  <p style="margin:0 0 12px 0; font-size:14px; color:${PuredgeOS.colors.semantic.text.secondary}; line-height:1.4;">
                    ${farm.address}<br/>
                    ${farm.postcode}
                  </p>
                  ${farm.produce_tags && farm.produce_tags.length > 0 ? `
                    <div style="margin-top:12px;">
                      <span style="font-size:12px; font-weight:500; color:${PuredgeOS.colors.semantic.text.tertiary}; text-transform:uppercase; letter-spacing:0.5px;">Produces:</span>
                      <div style="margin-top:6px; display:flex; flex-wrap:wrap; gap:4px;">
                        ${farm.produce_tags.map(tag => 
                          `<span style="background:${PuredgeOS.colors.primary[50]}; color:${PuredgeOS.colors.primary[700]}; padding:4px 8px; border-radius:12px; font-size:12px; font-weight:500;">${tag}</span>`
                        ).join('')}
                      </div>
                    </div>
                  ` : ''}
                </div>
              `);

                             // Create marker with PuredgeOS immersion
               new maplibregl.Marker({
                 element: markerEl,
                 anchor: 'center'
               })
                 .setLngLat([farm.lng, farm.lat])
                 .setPopup(popup)
                 .addTo(map);

              // PuredgeOS signature moment - marker click animation
              markerEl.addEventListener('click', () => {
                setSelectedFarm(farm);
                // Add bounce animation
                markerEl.style.animation = 'none';
                                 void markerEl.offsetHeight; // Trigger reflow
                markerEl.style.animation = 'markerBounce 0.6s ease-out';
                
                // Add bounce keyframes
                const bounceStyle = document.createElement('style');
                bounceStyle.textContent = `
                  @keyframes markerBounce {
                    0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                    40% { transform: translateY(-10px); }
                    60% { transform: translateY(-5px); }
                  }
                `;
                document.head.appendChild(bounceStyle);
                
                // Reset animation after bounce
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
            }
          });
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

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isClient, farms]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // PuredgeOS Clarity: Clear loading states
  if (!isClient) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        fontFamily: PuredgeOS.typography.fontFamily.primary
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #e2e8f0',
            borderTop: '3px solid #3b82f6',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <h1 style={{ 
            margin: 0, 
            fontSize: PuredgeOS.typography.fontSize['2xl'],
            fontWeight: PuredgeOS.typography.fontWeight.semibold,
            color: PuredgeOS.colors.semantic.text.primary,
            marginBottom: PuredgeOS.spacing[2]
          }}>Loading Farm Map</h1>
          <p style={{ 
            margin: 0, 
            fontSize: PuredgeOS.typography.fontSize.base,
            color: PuredgeOS.colors.semantic.text.secondary
          }}>Preparing your local farm discovery experience</p>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // PuredgeOS Clarity: Clear error states
  if (error) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
        fontFamily: PuredgeOS.typography.fontFamily.primary
      }}>
        <div style={{ textAlign: 'center', maxWidth: '400px', padding: PuredgeOS.spacing[6] }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: PuredgeOS.colors.error[500],
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            color: 'white',
            fontSize: PuredgeOS.typography.fontSize['2xl']
          }}>⚠️</div>
          <h1 style={{ 
            margin: 0, 
            fontSize: PuredgeOS.typography.fontSize['2xl'],
            fontWeight: PuredgeOS.typography.fontWeight.semibold,
            color: PuredgeOS.colors.error[800],
            marginBottom: PuredgeOS.spacing[2]
          }}>Unable to Load Map</h1>
          <p style={{ 
            margin: 0, 
            fontSize: PuredgeOS.typography.fontSize.base,
            color: PuredgeOS.colors.error[700],
            marginBottom: PuredgeOS.spacing[6]
          }}>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              ...PuredgeOSComponents.button.base,
              ...PuredgeOSComponents.button.primary
            }}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // PuredgeOS Clarity: Clear loading states
  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        fontFamily: PuredgeOS.typography.fontFamily.primary
      }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
            width: '40px',
            height: '40px',
            border: '3px solid #e0f2fe',
            borderTop: '3px solid #0ea5e9',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <h1 style={{ 
            margin: 0, 
            fontSize: PuredgeOS.typography.fontSize['2xl'],
            fontWeight: PuredgeOS.typography.fontWeight.semibold,
            color: PuredgeOS.colors.primary[800],
            marginBottom: PuredgeOS.spacing[2]
          }}>Discovering Farms</h1>
          <p style={{ 
            margin: 0, 
            fontSize: PuredgeOS.typography.fontSize.base,
            color: PuredgeOS.colors.primary[700]
          }}>Loading verified farm locations near you</p>
        </div>
        <style jsx>{`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  // PuredgeOS Main Experience: Clarity + Immersion
  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      fontFamily: PuredgeOS.typography.fontFamily.primary
    }}>
      {/* PuredgeOS Clarity: Clear header with purpose */}
      <header style={{
        ...PuredgeOSUtils.glass('light'),
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        padding: `${PuredgeOS.spacing[5]} ${PuredgeOS.spacing[6]}`,
        position: 'sticky',
        top: 0,
        zIndex: PuredgeOS.zIndex.sticky
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: PuredgeOS.typography.fontSize['3xl'],
            fontWeight: PuredgeOS.typography.fontWeight.bold,
            color: PuredgeOS.colors.semantic.text.primary,
            marginBottom: PuredgeOS.spacing[1]
          }}>Farm Discovery Map</h1>
          <p style={{ 
            margin: 0, 
            fontSize: PuredgeOS.typography.fontSize.base,
            color: PuredgeOS.colors.semantic.text.secondary,
            marginBottom: PuredgeOS.spacing[4]
          }}>
            Explore {farms.length} verified farm locations. Click markers for details.
          </p>
          
          {/* PuredgeOS Clarity: Clear action indicators */}
          <div style={{
            display: 'flex',
            gap: PuredgeOS.spacing[3],
            alignItems: 'center',
            fontSize: PuredgeOS.typography.fontSize.sm,
            color: PuredgeOS.colors.semantic.text.secondary
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: PuredgeOS.spacing['1.5']
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: PuredgeOS.colors.primary[500],
                borderRadius: '50%'
              }}></div>
              Click markers
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: PuredgeOS.spacing['1.5']
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: PuredgeOS.colors.success[500],
                borderRadius: '50%'
              }}></div>
              Verified farms
            </span>
          </div>
        </div>
      </header>

      {/* PuredgeOS Immersion: Signature map experience */}
      <main style={{ padding: PuredgeOS.spacing[6], maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: selectedFarm ? '1fr 320px' : '1fr',
          gap: PuredgeOS.spacing[6],
          height: 'calc(100vh - 200px)'
        }}>
          {/* Map Container */}
          <div
            ref={mapElRef}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: PuredgeOS.borderRadius['2xl'],
              overflow: 'hidden',
              ...PuredgeOSUtils.elevate(4),
              border: '1px solid rgba(0, 0, 0, 0.1)',
              opacity: mapLoaded ? 1 : 0,
              transition: `opacity ${PuredgeOS.motion.duration.slow} ${PuredgeOS.motion.easing.smooth}`
            }}
          />

          {/* PuredgeOS Clarity: Farm details panel */}
          {selectedFarm && (
            <div style={{
              ...PuredgeOSUtils.glass('light'),
              borderRadius: PuredgeOS.borderRadius['2xl'],
              padding: PuredgeOS.spacing[6],
              border: '1px solid rgba(0, 0, 0, 0.1)',
              ...PuredgeOSUtils.elevate(4),
              height: 'fit-content',
              maxHeight: '100%',
              overflow: 'auto',
              animation: 'slideIn 0.3s ease-out'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: PuredgeOS.spacing[4]
              }}>
                <h2 style={{
                  margin: 0,
                  fontSize: PuredgeOS.typography.fontSize.xl,
                  fontWeight: PuredgeOS.typography.fontWeight.semibold,
                  color: PuredgeOS.colors.semantic.text.primary
                }}>{selectedFarm.name}</h2>
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
                    transition: `all ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth}`
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = PuredgeOS.colors.semantic.background.tertiary}
                  onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  ×
                </button>
              </div>
              
              <div style={{ marginBottom: PuredgeOS.spacing[4] }}>
                <p style={{
                  margin: 0,
                  fontSize: PuredgeOS.typography.fontSize.sm,
                  color: PuredgeOS.colors.semantic.text.secondary,
                  lineHeight: PuredgeOS.typography.lineHeight.normal
                }}>
                  {selectedFarm.address}<br/>
                  {selectedFarm.postcode}
                </p>
              </div>

              {selectedFarm.produce_tags && selectedFarm.produce_tags.length > 0 && (
                <div>
                  <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: PuredgeOS.typography.fontSize.sm,
                    fontWeight: PuredgeOS.typography.fontWeight.semibold,
                    color: PuredgeOS.colors.semantic.text.primary,
                    textTransform: 'uppercase',
                    letterSpacing: PuredgeOS.typography.letterSpacing.wide
                  }}>Produces</h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: PuredgeOS.spacing['1.5']
                  }}>
                    {selectedFarm.produce_tags.map((tag, index) => (
                      <span key={index} style={{
                        background: PuredgeOS.colors.primary[50],
                        color: PuredgeOS.colors.primary[700],
                        padding: `${PuredgeOS.spacing[1.5]} ${PuredgeOS.spacing[3]}`,
                        borderRadius: PuredgeOS.borderRadius.full,
                        fontSize: PuredgeOS.typography.fontSize.sm,
                        fontWeight: PuredgeOS.typography.fontWeight.medium
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* PuredgeOS Clarity: Farm list for context */}
        <div style={{ marginTop: PuredgeOS.spacing[6] }}>
          <h2 style={{
            margin: '0 0 16px 0',
            fontSize: PuredgeOS.typography.fontSize.xl,
            fontWeight: PuredgeOS.typography.fontWeight.semibold,
            color: PuredgeOS.colors.semantic.text.primary
          }}>All Verified Farms ({farms.length})</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: PuredgeOS.spacing[4]
          }}>
            {farms.map((farm) => (
              <div
                key={farm.id}
                onClick={() => setSelectedFarm(farm)}
                style={{
                  ...PuredgeOSUtils.glass('light'),
                  borderRadius: PuredgeOS.borderRadius.xl,
                  padding: PuredgeOS.spacing[4],
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  cursor: 'pointer',
                  transition: `all ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth}`,
                  animation: 'fadeIn 0.5s ease-out'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = PuredgeOS.shadows.lg;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = PuredgeOS.shadows.md;
                }}
              >
                <h3 style={{
                  margin: '0 0 8px 0',
                  fontSize: PuredgeOS.typography.fontSize.base,
                  fontWeight: PuredgeOS.typography.fontWeight.semibold,
                  color: PuredgeOS.colors.semantic.text.primary
                }}>{farm.name}</h3>
                <p style={{
                  margin: '0 0 12px 0',
                  fontSize: PuredgeOS.typography.fontSize.sm,
                  color: PuredgeOS.colors.semantic.text.secondary,
                  lineHeight: PuredgeOS.typography.lineHeight.normal
                }}>
                  {farm.address}, {farm.postcode}
                </p>
                {farm.produce_tags && farm.produce_tags.length > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: PuredgeOS.spacing[1]
                  }}>
                    {farm.produce_tags.map((tag, index) => (
                      <span key={index} style={{
                        background: PuredgeOS.colors.primary[50],
                        color: PuredgeOS.colors.primary[700],
                        padding: `${PuredgeOS.spacing[1]} ${PuredgeOS.spacing[2]}`,
                        borderRadius: PuredgeOS.borderRadius.full,
                        fontSize: PuredgeOS.typography.fontSize.xs,
                        fontWeight: PuredgeOS.typography.fontWeight.medium
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* PuredgeOS Motion: CSS Animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
