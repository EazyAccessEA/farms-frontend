import { NextRequest, NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const tag = url.searchParams.get("tag");
  const organicOnly = url.searchParams.get("organic") === "true";

  const clauses = [`record_status='verified'`];
  const params: any[] = [];
  if (tag) {
    params.push(tag);
    clauses.push(`$${params.length} = any(produce_tags)`);
  }
  if (organicOnly) clauses.push(`organic_certified = true`);

  const where = clauses.length ? "where " + clauses.join(" and ") : "";
  const { rows } = await pool.query(
    `select id, name, address, postcode, lat, lng, produce_tags, verified_photo_url
     from farm_shops ${where} limit 200`,
    params
  );
  return NextResponse.json(rows);
}
