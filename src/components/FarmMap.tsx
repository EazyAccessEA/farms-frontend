"use client";
import dynamic from "next/dynamic";

// Dynamically import the entire map component to avoid SSR issues
const FarmMapComponent = dynamic(() => import("./FarmMapComponent"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-96 bg-gray-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading map...</p>
      </div>
    </div>
  ),
});

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

interface FarmMapProps {
  farms: Farm[];
  className?: string;
}

export default function FarmMap({ farms, className = "" }: FarmMapProps) {
  console.log("FarmMap render - farms:", farms, "className:", className);
  
  if (!farms || farms.length === 0) {
    return (
      <div className={`h-96 w-full bg-gray-100 flex items-center justify-center ${className}`}>
        <div className="text-center">
          <p className="text-gray-600">No farm data available</p>
          <p className="text-sm text-gray-500 mt-2">Farms: {JSON.stringify(farms)}</p>
        </div>
      </div>
    );
  }

  return <FarmMapComponent farms={farms} className={className} />;
}
