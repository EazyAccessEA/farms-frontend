"use client";
import { useEffect, useState } from "react";
import FarmMap from "@/components/FarmMap";

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

export default function MapPage() {
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFarms() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch("/api/farms");
        
        if (!response.ok) {
          throw new Error(`Failed to fetch farms: ${response.status}`);
        }
        
        const data = await response.json();
        setFarms(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load farms");
        console.error("Error fetching farms:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchFarms();
  }, []);

  if (loading) {
    return (
      <main className="max-w-6xl mx-auto p-6">
        <div className="text-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold mb-2">Loading Farm Map</h2>
          <p className="text-gray-600">Fetching farm locations...</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="max-w-6xl mx-auto p-6">
        <div className="text-center py-12">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <h2 className="text-xl font-semibold mb-2">Error Loading Map</h2>
            <p>{error}</p>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Farm Map</h1>
        <p className="text-gray-600 mb-4">
          Discover verified farm shops near you. Click on markers to see details.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800">
            <strong>{farms.length}</strong> verified farm{farms.length !== 1 ? 's' : ''} found
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <FarmMap farms={farms} />
      </div>

      {farms.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">All Farm Listings</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {farms.map((farm) => (
              <div
                key={farm.id}
                className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-lg mb-2">{farm.name}</h3>
                <p className="text-gray-600 mb-1">{farm.address}</p>
                <p className="text-gray-600 mb-2">{farm.postcode}</p>
                <p className="text-sm text-gray-500 mb-3">
                  Location: {farm.lat.toFixed(4)}, {farm.lng.toFixed(4)}
                </p>
                {farm.produce_tags && farm.produce_tags.length > 0 && (
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
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}
