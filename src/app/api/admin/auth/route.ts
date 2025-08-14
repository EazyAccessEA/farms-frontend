import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  // TODO: Implement proper admin authentication
  // This should check against environment variables or secure tokens
  
  const adminToken = req.headers.get('x-admin-token');
  const expectedToken = process.env.ADMIN_TOKEN;
  
  if (!expectedToken) {
    return NextResponse.json({ error: 'Admin not configured' }, { status: 500 });
  }
  
  if (!adminToken || adminToken !== expectedToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  return NextResponse.json({ authenticated: true });
}
