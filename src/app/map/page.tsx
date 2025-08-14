"use client";
import { useEffect, useState } from "react";

type Farm = {
  id: string; name: string; lat: number; lng: number; verified_photo_url?: string;
};
export default function MapPage() {
  const [farms, setFarms] = useState<Farm[]>([]);
  useEffect(() => { fetch("/api/farms").then(r => r.json()).then(setFarms); }, []);
  return (
    <main style={{maxWidth: 960, margin: "2rem auto"}}>
      <h2>Map (placeholder)</h2>
      <p>We'll wire Leaflet/Mapbox later. For now, {farms.length} verified listings load from the API.</p>
      <ul>
        {farms.map(f => (<li key={f.id}>{f.name} — ({f.lat.toFixed(4)}, {f.lng.toFixed(4)})</li>))}
      </ul>
    </main>
  );
}
