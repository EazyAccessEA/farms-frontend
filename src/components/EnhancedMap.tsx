// PuredgeOS V1: Enhanced Map Component
// Immersive map experience with signature interactions

'use client';

import React, { useEffect, useRef, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

// 🎭 Interactive Marker Component
const InteractiveMarker: React.FC<{
  farm: {
    id: string;
    name: string;
    address: string;
    postcode: string;
    lat: number;
    lng: number;
    verified_photo_url?: string;
    produce_tags?: string[];
  };
  map: maplibregl.Map;
  onClick?: (farm: any) => void;
}> = ({ farm, map, onClick }) => {
  const markerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (!markerRef.current || !map) return;

    // Create custom marker element
    const markerElement = document.createElement('div');
    markerElement.className = 'custom-marker';
    markerElement.innerHTML = `
      <div class="marker-container">
        <div class="marker-pulse"></div>
        <div class="marker-icon">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <div class="marker-label">${farm.name}</div>
      </div>
    `;

    // Add hover effects
    markerElement.addEventListener('mouseenter', () => {
      setIsHovered(true);
      markerElement.classList.add('marker-hovered');
    });

    markerElement.addEventListener('mouseleave', () => {
      setIsHovered(false);
      markerElement.classList.remove('marker-hovered');
    });

    // Add click effects
    markerElement.addEventListener('click', () => {
      setIsSelected(true);
      markerElement.classList.add('marker-selected');
      onClick?.(farm);
      
      // Remove selection after animation
      setTimeout(() => {
        setIsSelected(false);
        markerElement.classList.remove('marker-selected');
      }, 1000);
    });

    // Create and add marker to map
    const marker = new maplibregl.Marker({
      element: markerElement,
      anchor: 'bottom'
    })
    .setLngLat([farm.lng, farm.lat])
    .addTo(map);

    // Add popup
    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      maxWidth: '300px',
      className: 'farm-popup'
    }).setHTML(`
      <div class="popup-content">
        <h3 class="popup-title">${farm.name}</h3>
        <p class="popup-address">${farm.address}, ${farm.postcode}</p>
        ${farm.produce_tags && farm.produce_tags.length > 0 ? `
          <div class="popup-tags">
            ${farm.produce_tags.slice(0, 3).map(tag => `
              <span class="popup-tag">${tag}</span>
            `).join('')}
          </div>
        ` : ''}
        <div class="popup-actions">
          <button class="popup-btn primary">View Details</button>
          <button class="popup-btn secondary">Get Directions</button>
        </div>
      </div>
    `);

    marker.setPopup(popup);

    // Show popup on hover
    markerElement.addEventListener('mouseenter', () => {
      popup.addTo(map);
    });

    markerElement.addEventListener('mouseleave', () => {
      popup.remove();
    });

    return () => {
      marker.remove();
    };
  }, [farm, map, onClick]);

  return null;
};

// 🎨 Enhanced Map Component
export const EnhancedMap: React.FC<{
  farms: Array<{
    id: string;
    name: string;
    address: string;
    postcode: string;
    lat: number;
    lng: number;
    verified_photo_url?: string;
    produce_tags?: string[];
  }>;
  onFarmSelect?: (farm: any) => void;
  className?: string;
}> = ({ farms, onFarmSelect, className = '' }) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<maplibregl.Map | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedFarm, setSelectedFarm] = useState<any>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    // Initialize map with enhanced styling
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: {
        version: 8,
        sources: {
          'osm': {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            attribution: '© OpenStreetMap contributors'
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
      center: farms.length > 0 ? [farms[0].lng, farms[0].lat] : [-0.118092, 51.509865],
      zoom: 10,
      pitch: 45,
      bearing: 0,
      antialias: true
    });

    // Add enhanced controls
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');
    map.current.addControl(new maplibregl.FullscreenControl(), 'top-right');

    // Add custom CSS for enhanced styling
    const style = document.createElement('style');
    style.textContent = `
      .custom-marker {
        cursor: pointer;
        transition: all 0.3s ease;
      }

      .marker-container {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .marker-pulse {
        position: absolute;
        width: 40px;
        height: 40px;
        background: rgba(34, 197, 94, 0.3);
        border-radius: 50%;
        animation: pulse 2s infinite;
        pointer-events: none;
      }

      .marker-icon {
        position: relative;
        z-index: 1;
        width: 32px;
        height: 32px;
        background: linear-gradient(135deg, #22c55e, #16a34a);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        box-shadow: 0 4px 12px rgba(34, 197, 94, 0.3);
        transition: all 0.3s ease;
      }

      .marker-label {
        position: absolute;
        top: -30px;
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 12px;
        white-space: nowrap;
        opacity: 0;
        transform: translateY(-10px);
        transition: all 0.3s ease;
        pointer-events: none;
      }

      .marker-hovered .marker-icon {
        transform: scale(1.2);
        box-shadow: 0 6px 20px rgba(34, 197, 94, 0.4);
      }

      .marker-hovered .marker-label {
        opacity: 1;
        transform: translateY(0);
      }

      .marker-selected .marker-icon {
        animation: bounce 0.6s ease;
      }

      .farm-popup {
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        border: none;
      }

      .popup-content {
        padding: 16px;
        min-width: 250px;
      }

      .popup-title {
        font-size: 16px;
        font-weight: 600;
        margin: 0 0 8px 0;
        color: #1f2937;
      }

      .popup-address {
        font-size: 14px;
        color: #6b7280;
        margin: 0 0 12px 0;
      }

      .popup-tags {
        display: flex;
        gap: 4px;
        margin-bottom: 12px;
        flex-wrap: wrap;
      }

      .popup-tag {
        background: #dbeafe;
        color: #1e40af;
        padding: 2px 8px;
        border-radius: 12px;
        font-size: 12px;
      }

      .popup-actions {
        display: flex;
        gap: 8px;
      }

      .popup-btn {
        flex: 1;
        padding: 8px 12px;
        border: none;
        border-radius: 6px;
        font-size: 12px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }

      .popup-btn.primary {
        background: #0ea5e9;
        color: white;
      }

      .popup-btn.primary:hover {
        background: #0284c7;
        transform: translateY(-1px);
      }

      .popup-btn.secondary {
        background: #f3f4f6;
        color: #374151;
      }

      .popup-btn.secondary:hover {
        background: #e5e7eb;
        transform: translateY(-1px);
      }

      @keyframes pulse {
        0% {
          transform: scale(1);
          opacity: 1;
        }
        100% {
          transform: scale(2);
          opacity: 0;
        }
      }

      @keyframes bounce {
        0%, 100% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.3);
        }
      }

      .map-container {
        position: relative;
        width: 100%;
        height: 600px;
        border-radius: 16px;
        overflow: hidden;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }

      .map-overlay {
        position: absolute;
        top: 20px;
        left: 20px;
        right: 20px;
        z-index: 1;
        pointer-events: none;
      }

      .map-search {
        background: white;
        border-radius: 12px;
        padding: 16px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        pointer-events: auto;
        margin-bottom: 16px;
      }

      .map-stats {
        display: flex;
        gap: 12px;
        flex-wrap: wrap;
      }

      .stat-card {
        background: rgba(255, 255, 255, 0.9);
        backdrop-filter: blur(10px);
        border-radius: 8px;
        padding: 12px 16px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        pointer-events: auto;
        transition: all 0.3s ease;
      }

      .stat-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      }

      .stat-number {
        font-size: 24px;
        font-weight: 700;
        color: #0ea5e9;
        margin: 0;
      }

      .stat-label {
        font-size: 12px;
        color: #6b7280;
        margin: 0;
      }
    `;
    document.head.appendChild(style);

    // Map load event
    map.current.on('load', () => {
      setIsLoaded(true);
      
      // Add farms as markers
      farms.forEach(farm => {
        InteractiveMarker({
          farm,
          map: map.current!,
          onClick: (selectedFarm) => {
            setSelectedFarm(selectedFarm);
            onFarmSelect?.(selectedFarm);
            
            // Smooth fly to selected farm
            map.current?.flyTo({
              center: [selectedFarm.lng, selectedFarm.lat],
              zoom: 14,
              duration: 2000,
              curve: 1.42,
              easing: (t) => t
            });
          }
        });
      });

      // Add smooth zoom and pan transitions
      map.current.on('zoom', () => {
        const zoom = map.current?.getZoom() || 0;
        const markers = document.querySelectorAll('.custom-marker');
        
        markers.forEach((marker: any) => {
          const scale = Math.max(0.5, Math.min(1.5, zoom / 10));
          marker.style.transform = `scale(${scale})`;
        });
      });

      // Add map interaction feedback
      map.current.on('movestart', () => {
        document.body.style.cursor = 'grabbing';
      });

      map.current.on('moveend', () => {
        document.body.style.cursor = 'default';
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
      }
      document.head.removeChild(style);
    };
  }, [farms, onFarmSelect]);

  return (
    <div className={`map-container ${className}`}>
      <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />
      
      {/* Map Overlay */}
      <div className="map-overlay">
        <div className="map-search">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Discover Local Farms
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Click on markers to explore fresh produce near you
          </p>
          <div className="map-stats">
            <div className="stat-card">
              <p className="stat-number">{farms.length}</p>
              <p className="stat-label">Local Farms</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">24/7</p>
              <p className="stat-label">Fresh Harvest</p>
            </div>
            <div className="stat-card">
              <p className="stat-number">100%</p>
              <p className="stat-label">Verified</p>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Farm Info */}
      {selectedFarm && (
        <div className="absolute bottom-20 left-20 right-20 z-10">
          <div className="bg-white rounded-12px p-6 shadow-lg border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">{selectedFarm.name}</h3>
              <button 
                onClick={() => setSelectedFarm(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p className="text-gray-600 mb-4">{selectedFarm.address}, {selectedFarm.postcode}</p>
            {selectedFarm.produce_tags && selectedFarm.produce_tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {selectedFarm.produce_tags.map((tag: string, index: number) => (
                  <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <div className="flex gap-3">
              <button className="btn btn-primary flex-1">View Details</button>
              <button className="btn btn-secondary flex-1">Get Directions</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EnhancedMap;
