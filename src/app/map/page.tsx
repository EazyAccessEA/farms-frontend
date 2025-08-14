'use client';

import { useEffect, useRef, useState } from "react";

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
  const mapRef = useRef<unknown>(null);
  const mapElRef = useRef<HTMLDivElement | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedFarm, setSelectedFarm] = useState<Farm | null>(null);

  // Load farm data with PuredgeOS clarity
  useEffect(() => {
    fetch("/api/farms")
      .then((r) => r.json())
      .then((data) => {
        setFarms(data);
        setLoading(false);
      })
      .catch((e) => {
        setError("Unable to load farm locations");
        setLoading(false);
      });
  }, []);

  // Initialize map with PuredgeOS immersion
  useEffect(() => {
    if (!isClient || !mapElRef.current || farms.length === 0) return;

    const initMap = async () => {
      try {
        const L = await import("leaflet");
        
        // Create map centered on UK with PuredgeOS clarity
        const map = L.default.map(mapElRef.current!).setView([54.5, -2.5], 6);
        mapRef.current = map;

        // Add tile layer with attribution
        L.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap contributors"
        }).addTo(map);

        // Add markers with PuredgeOS signature moments
        farms.forEach((farm) => {
          if (typeof farm.lat === "number" && typeof farm.lng === "number") {
            const marker = L.default.marker([farm.lat, farm.lng]).addTo(map);
            
            // PuredgeOS clarity: Clear, actionable popup content
            const popupHtml = `
              <div style="min-width:280px; padding:16px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
                <h3 style="margin:0 0 8px 0; font-size:18px; font-weight:600; color:#1a1a1a;">${farm.name}</h3>
                <p style="margin:0 0 12px 0; font-size:14px; color:#666; line-height:1.4;">
                  ${farm.address}<br/>
                  ${farm.postcode}
                </p>
                ${farm.produce_tags && farm.produce_tags.length > 0 ? `
                  <div style="margin-top:12px;">
                    <span style="font-size:12px; font-weight:500; color:#888; text-transform:uppercase; letter-spacing:0.5px;">Produces:</span>
                    <div style="margin-top:6px; display:flex; flex-wrap:wrap; gap:4px;">
                      ${farm.produce_tags.map(tag => 
                        `<span style="background:#f0f9ff; color:#0369a1; padding:4px 8px; border-radius:12px; font-size:12px; font-weight:500;">${tag}</span>`
                      ).join('')}
                    </div>
                  </div>
                ` : ''}
              </div>
            `;
            
            marker.bindPopup(popupHtml);
            
            // PuredgeOS immersion: Signature moment - marker click animation
            marker.on('click', () => {
              setSelectedFarm(farm);
              // Add subtle animation feedback
              marker.getElement()?.style.setProperty('transform', 'scale(1.1)');
              setTimeout(() => {
                marker.getElement()?.style.setProperty('transform', 'scale(1)');
              }, 150);
            });
          }
        });
      } catch (error) {
        setError("Map failed to load");
      }
    };

    initMap();
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
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#1e293b',
            marginBottom: '8px'
          }}>Loading Farm Map</h1>
          <p style={{ 
            margin: 0, 
            fontSize: '16px', 
            color: '#64748b' 
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
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
      }}>
        <div style={{ textAlign: 'center', maxWidth: '400px', padding: '24px' }}>
          <div style={{
            width: '48px',
            height: '48px',
            background: '#ef4444',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            color: 'white',
            fontSize: '24px'
          }}>⚠️</div>
          <h1 style={{ 
            margin: 0, 
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#991b1b',
            marginBottom: '8px'
          }}>Unable to Load Map</h1>
          <p style={{ 
            margin: 0, 
            fontSize: '16px', 
            color: '#7f1d1d',
            marginBottom: '24px'
          }}>{error}</p>
          <button 
            onClick={() => window.location.reload()}
            style={{
              background: '#3b82f6',
              color: 'white',
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'background 0.2s ease'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = '#2563eb'}
            onMouseOut={(e) => e.currentTarget.style.background = '#3b82f6'}
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
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
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
            fontSize: '24px', 
            fontWeight: '600', 
            color: '#0c4a6e',
            marginBottom: '8px'
          }}>Discovering Farms</h1>
          <p style={{ 
            margin: 0, 
            fontSize: '16px', 
            color: '#0369a1' 
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
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      {/* PuredgeOS Clarity: Clear header with purpose */}
      <header style={{
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        padding: '20px 24px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h1 style={{ 
            margin: 0, 
            fontSize: '28px', 
            fontWeight: '700', 
            color: '#1e293b',
            marginBottom: '4px'
          }}>Farm Discovery Map</h1>
          <p style={{ 
            margin: 0, 
            fontSize: '16px', 
            color: '#64748b',
            marginBottom: '16px'
          }}>
            Explore {farms.length} verified farm locations. Click markers for details.
          </p>
          
          {/* PuredgeOS Clarity: Clear action indicators */}
          <div style={{
            display: 'flex',
            gap: '12px',
            alignItems: 'center',
            fontSize: '14px',
            color: '#64748b'
          }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#3b82f6',
                borderRadius: '50%'
              }}></div>
              Click markers
            </span>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                background: '#10b981',
                borderRadius: '50%'
              }}></div>
              Verified farms
            </span>
          </div>
        </div>
      </header>

      {/* PuredgeOS Immersion: Signature map experience */}
      <main style={{ padding: '24px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: selectedFarm ? '1fr 320px' : '1fr',
          gap: '24px',
          height: 'calc(100vh - 200px)'
        }}>
          {/* Map Container */}
          <div
            ref={mapElRef}
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              border: '1px solid rgba(0, 0, 0, 0.1)'
            }}
          />

          {/* PuredgeOS Clarity: Farm details panel */}
          {selectedFarm && (
            <div style={{
              background: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '16px',
              padding: '24px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              height: 'fit-content',
              maxHeight: '100%',
              overflow: 'auto'
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: '16px'
              }}>
                <h2 style={{
                  margin: 0,
                  fontSize: '20px',
                  fontWeight: '600',
                  color: '#1e293b'
                }}>{selectedFarm.name}</h2>
                <button
                  onClick={() => setSelectedFarm(null)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '20px',
                    cursor: 'pointer',
                    color: '#64748b',
                    padding: '4px',
                    borderRadius: '4px',
                    transition: 'background 0.2s ease'
                  }}
                  onMouseOver={(e) => e.currentTarget.style.background = '#f1f5f9'}
                  onMouseOut={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  ×
                </button>
              </div>
              
              <div style={{ marginBottom: '16px' }}>
                <p style={{
                  margin: 0,
                  fontSize: '14px',
                  color: '#64748b',
                  lineHeight: '1.5'
                }}>
                  {selectedFarm.address}<br/>
                  {selectedFarm.postcode}
                </p>
              </div>

              {selectedFarm.produce_tags && selectedFarm.produce_tags.length > 0 && (
                <div>
                  <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#374151',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>Produces</h3>
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '6px'
                  }}>
                    {selectedFarm.produce_tags.map((tag, index) => (
                      <span key={index} style={{
                        background: '#f0f9ff',
                        color: '#0369a1',
                        padding: '6px 12px',
                        borderRadius: '20px',
                        fontSize: '12px',
                        fontWeight: '500'
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
        <div style={{ marginTop: '24px' }}>
          <h2 style={{
            margin: '0 0 16px 0',
            fontSize: '20px',
            fontWeight: '600',
            color: '#1e293b'
          }}>All Verified Farms ({farms.length})</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '16px'
          }}>
            {farms.map((farm) => (
              <div
                key={farm.id}
                onClick={() => setSelectedFarm(farm)}
                                 style={{
                   background: 'rgba(255, 255, 255, 0.95)',
                   backdropFilter: 'blur(20px)',
                   borderRadius: '12px',
                   padding: '16px',
                   border: '1px solid rgba(0, 0, 0, 0.1)',
                   cursor: 'pointer',
                   transition: 'all 0.2s ease'
                 }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <h3 style={{
                  margin: '0 0 8px 0',
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#1e293b'
                }}>{farm.name}</h3>
                <p style={{
                  margin: '0 0 12px 0',
                  fontSize: '14px',
                  color: '#64748b',
                  lineHeight: '1.4'
                }}>
                  {farm.address}, {farm.postcode}
                </p>
                {farm.produce_tags && farm.produce_tags.length > 0 && (
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '4px'
                  }}>
                    {farm.produce_tags.map((tag, index) => (
                      <span key={index} style={{
                        background: '#f0f9ff',
                        color: '#0369a1',
                        padding: '4px 8px',
                        borderRadius: '12px',
                        fontSize: '11px',
                        fontWeight: '500'
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
    </div>
  );
}
