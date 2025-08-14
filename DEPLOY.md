# Vercel Deployment Instructions

## Step 1: Create Vercel Project

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import the `farms-frontend` repository
4. Set project name: `farm-companion-frontend`

## Step 2: Configure Environment Variables

In your Vercel project settings, add these environment variables:

### Required for Public Routes (Read-Only)
```
DATABASE_URL=postgresql://farm_ro:readonly_password@db.nfglatvveifkwliybppv.supabase.co:5432/postgres
```

### Optional for Admin Routes (Write Access)
```
DATABASE_WRITE_URL=postgresql://farm_rw:hR2r7M!v9QxZ@4eP@db.nfglatvveifkwliybppv.supabase.co:5432/postgres
ADMIN_TOKEN=your_secure_admin_token_here
```

## Step 3: Deploy

1. Click "Deploy" in Vercel
2. Wait for build to complete
3. Your app will be available at: `https://your-project-name.vercel.app`

## Step 4: Verify Data Flow

### Test API Endpoint
Visit: `https://your-project-name.vercel.app/api/farms`

Expected response:
```json
[
  {
    "id": "uuid-here",
    "name": "Old Hall Farm",
    "address": "Test Lane",
    "postcode": "B100AA",
    "lat": 52.4746,
    "lng": -1.8723,
    "produce_tags": ["veg", "dairy"],
    "verified_photo_url": null
  }
]
```

### Test Map Page
Visit: `https://your-project-name.vercel.app/map`

Expected:
- Page loads with farm listings
- Shows "1 verified listings load from the API"
- Lists farm coordinates

## Data Flow Verification

✅ **Database → API**: `/api/farms` returns data from database
✅ **API → UI**: `/map` displays data from API
✅ **Read-Only**: Frontend only reads verified data
✅ **Safe**: No write operations in public routes

## Troubleshooting

### No Data Showing
1. Check if pipeline has run: `npm run seed` in farms-pipeline
2. Verify `DATABASE_URL` is set correctly in Vercel
3. Check Vercel function logs for database connection errors

### Database Connection Error
1. Ensure database is accessible
2. Verify read-only user credentials
3. Check network connectivity from Vercel to database
