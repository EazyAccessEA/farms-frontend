"use client";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix for default marker icons in Leaflet with Next.js
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(L.Icon.Default.prototype as any)._getIconUrl = function() {
  return "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png";
};

interface Farm {
  id: string;
  name: string;
  address: string;
  postcode: string;
  lat: number;
  lng: number;
  produce_tags?: string[];
  verified_photo_url?: string;
}

interface FarmMapComponentProps {
  farms: Farm[];
  className?: string;
}

export default function FarmMapComponent({ farms, className = "" }: FarmMapComponentProps) {
  const [mapCenter, setMapCenter] = useState<[number, number]>([52.4746, -1.8723]); // Default to UK

  // Set map center based on available farms
  useEffect(() => {
    if (farms.length > 0) {
      const avgLat = farms.reduce((sum, farm) => sum + farm.lat, 0) / farms.length;
      const avgLng = farms.reduce((sum, farm) => sum + farm.lng, 0) / farms.length;
      setMapCenter([avgLat, avgLng]);
    }
  }, [farms]);

  return (
    <div className={`h-96 w-full ${className}`}>
      <MapContainer
        center={mapCenter}
        zoom={10}
        style={{ height: "100%", width: "100%" }}
        className="rounded-lg shadow-lg"
        aria-label="Interactive map showing farm locations"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {farms.map((farm) => (
          <Marker
            key={farm.id}
            position={[farm.lat, farm.lng]}
            aria-label={`Farm marker for ${farm.name}`}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-semibold text-lg mb-2">{farm.name}</h3>
                <p className="text-gray-600 mb-1">{farm.address}</p>
                <p className="text-gray-600 mb-2">{farm.postcode}</p>
                {farm.produce_tags && farm.produce_tags.length > 0 && (
                  <div className="mb-2">
                    <p className="text-sm font-medium text-gray-700 mb-1">Produces:</p>
                    <div className="flex flex-wrap gap-1">
                      {farm.produce_tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                {farm.verified_photo_url && (
                  <div className="mt-2">
                    <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-gray-500 text-sm">Farm Photo</span>
                    </div>
                  </div>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
