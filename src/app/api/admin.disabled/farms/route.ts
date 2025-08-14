import { NextRequest, NextResponse } from "next/server";
import { adminPool } from "@/lib/admin-db";

// Helper function to check admin authentication
async function checkAdminAuth(req: NextRequest) {
  const adminToken = req.headers.get('x-admin-token');
  const expectedToken = process.env.ADMIN_TOKEN;
  
  if (!expectedToken) {
    throw new Error('Admin not configured');
  }
  
  if (!adminToken || adminToken !== expectedToken) {
    throw new Error('Unauthorized');
  }
}

export async function GET(req: NextRequest) {
  try {
    await checkAdminAuth(req);
    
    if (!adminPool) {
      return NextResponse.json(
        { error: 'Database not available' },
        { status: 503 }
      );
    }
    
    const url = new URL(req.url);
    const status = url.searchParams.get("status");
    
    let query = "SELECT * FROM farm_shops";
    const params: string[] = [];
    
    if (status) {
      params.push(status);
      query += " WHERE record_status = $1";
    }
    
    query += " ORDER BY created_at DESC LIMIT 100";
    
    const { rows } = await adminPool.query(query, params);
    return NextResponse.json(rows);
  } catch (error) {
    console.error('Admin farms GET error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal error' },
      { status: error instanceof Error && error.message.includes('Unauthorized') ? 401 : 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    await checkAdminAuth(req);
    
    if (!adminPool) {
      return NextResponse.json(
        { error: 'Database not available' },
        { status: 503 }
      );
    }
    
    const body = await req.json();
    const { id, record_status, verified_by } = body;
    
    if (!id || !record_status) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const { rows } = await adminPool.query(
      `UPDATE farm_shops 
       SET record_status = $1, verified_by = $2, updated_at = now()
       WHERE id = $3
       RETURNING *`,
      [record_status, verified_by, id]
    );
    
    if (rows.length === 0) {
      return NextResponse.json({ error: 'Farm not found' }, { status: 404 });
    }
    
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.error('Admin farms PUT error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal error' },
      { status: error instanceof Error && error.message.includes('Unauthorized') ? 401 : 500 }
    );
  }
}
