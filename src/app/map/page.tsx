'use client';

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
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
          center: [-1.8723, 52.4746], // Center on first farm (Birmingham area)
          zoom: 10,
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
              // Create custom marker element with proper positioning
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
                position: relative;
                transform: translate(-50%, -50%);
              `;

              // Add pulse animation
              const style = document.createElement('style');
              style.textContent = `
                @keyframes markerPulse {
                  0%, 100% { transform: translate(-50%, -50%) scale(1); }
                  50% { transform: translate(-50%, -50%) scale(1.1); }
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

              // Create marker with proper positioning
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
                    0%, 20%, 50%, 80%, 100% { transform: translate(-50%, -50%) translateY(0); }
                    40% { transform: translate(-50%, -50%) translateY(-10px); }
                    60% { transform: translate(-50%, -50%) translateY(-5px); }
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
                markerEl.style.transform = 'translate(-50%, -50%) scale(1.2)';
                markerEl.style.boxShadow = PuredgeOS.shadows.xl;
              });

              markerEl.addEventListener('mouseleave', () => {
                markerEl.style.transform = 'translate(-50%, -50%) scale(1)';
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

  // PuredgeOS Clarity: Loading state
  if (loading) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: PuredgeOS.colors.semantic.background.primary,
        fontFamily: PuredgeOS.typography.fontFamily.primary
      }}>
        <div style={{
          textAlign: 'center',
          color: PuredgeOS.colors.semantic.text.primary
        }}>
          <div style={{
            fontSize: PuredgeOS.typography.fontSize.xl,
            fontWeight: PuredgeOS.typography.fontWeight.semibold,
            marginBottom: PuredgeOS.spacing[4]
          }}>
            Loading Farm Map...
          </div>
          <div style={{
            fontSize: PuredgeOS.typography.fontSize.base,
            color: PuredgeOS.colors.semantic.text.secondary
          }}>
            Finding local farms near you
          </div>
        </div>
      </div>
    );
  }

  // PuredgeOS Clarity: Error state
  if (error) {
    return (
      <div style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: PuredgeOS.colors.semantic.background.primary,
        fontFamily: PuredgeOS.typography.fontFamily.primary
      }}>
        <div style={{
          textAlign: 'center',
          color: PuredgeOS.colors.semantic.text.primary
        }}>
          <div style={{
            fontSize: PuredgeOS.typography.fontSize.xl,
            fontWeight: PuredgeOS.typography.fontWeight.semibold,
            marginBottom: PuredgeOS.spacing[4],
            color: PuredgeOS.colors.error[600]
          }}>
            {error}
          </div>
          <div style={{
            fontSize: PuredgeOS.typography.fontSize.base,
            color: PuredgeOS.colors.semantic.text.secondary
          }}>
            Please try refreshing the page
          </div>
        </div>
      </div>
    );
  }

  // PuredgeOS Immersion: Main map interface
  return (
    <div style={{
      height: '100vh',
      background: PuredgeOS.colors.semantic.background.primary,
      fontFamily: PuredgeOS.typography.fontFamily.primary,
      position: 'relative'
    }}>
      {/* Map container with proper dimensions */}
      <div 
        ref={mapElRef}
        style={{
          width: '100%',
          height: '100%',
          opacity: mapLoaded ? 1 : 0,
          transition: `opacity ${PuredgeOS.motion.duration.base} ${PuredgeOS.motion.easing.smooth}`
        }}
      />

      {/* PuredgeOS Clarity: Selected farm info */}
      {selectedFarm && (
        <div style={{
          position: 'absolute',
          top: PuredgeOS.spacing[6],
          left: PuredgeOS.spacing[6],
          right: PuredgeOS.spacing[6],
          maxWidth: '400px',
          ...PuredgeOSUtils.glass('light'),
          padding: PuredgeOS.spacing[6],
          borderRadius: PuredgeOS.borderRadius.lg,
          border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
          boxShadow: PuredgeOS.shadows.lg,
          zIndex: 1000
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
              gap: PuredgeOS.spacing[2]
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
        </div>
      )}

             {/* PuredgeOS Clarity: Back button */}
       <div style={{
         position: 'absolute',
         top: PuredgeOS.spacing[6],
         right: PuredgeOS.spacing[6],
         zIndex: 1000
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
             gap: PuredgeOS.spacing[2],
             background: PuredgeOS.colors.semantic.background.primary,
             color: PuredgeOS.colors.semantic.text.primary,
             border: `1px solid ${PuredgeOS.colors.semantic.border.light}`,
             boxShadow: PuredgeOS.shadows.sm
           }}
         >
           <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M19 12H5M12 19l-7-7 7-7"/>
           </svg>
           Back
         </Link>
       </div>
    </div>
  );
}
