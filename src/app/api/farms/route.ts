import { NextResponse } from "next/server";

// Replace this with your real DB query later.
// For now, this reads like your seed: name, address, postcode, lat, lng
export async function GET() {
  const farms = [
    {
      id: "00000000-0000-0000-0000-000000000001",
      name: "Old Hall Farm",
      address: "Test Lane",
      postcode: "B10 0AA",
      lat: 52.4746,
      lng: -1.8723,
      verified_photo_url: "",
      produce_tags: ["veg", "dairy"]
    },
    {
      id: "00000000-0000-0000-0000-000000000002",
      name: "Green Valley Farm",
      address: "Meadow Road",
      postcode: "B15 2AA",
      lat: 52.4800,
      lng: -1.8900,
      verified_photo_url: "",
      produce_tags: ["fruit", "eggs"]
    },
    {
      id: "00000000-0000-0000-0000-000000000003",
      name: "Sunny Acres",
      address: "Country Lane",
      postcode: "B20 3BB",
      lat: 52.4700,
      lng: -1.8500,
      verified_photo_url: "",
      produce_tags: ["veg", "honey"]
    }
  ];

  return NextResponse.json(farms);
}
