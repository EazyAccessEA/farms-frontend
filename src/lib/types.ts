import type { ListingSchema } from "@farm/schema";
// The json2ts generator emitted ambient types in @farm/schema/dist/types.d.ts.
// For DX, define a local interface using fields we need most often:
export interface FarmListing {
  id: string;
  name: string;
  address: string;
  postcode: string;
  lat: number;
  lng: number;
  record_status: "draft"|"needs_review"|"verified"|"rejected";
  verified_photo_url?: string;
  produce_tags?: string[];
}
