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
  return <FarmMapComponent farms={farms} className={className} />;
}
