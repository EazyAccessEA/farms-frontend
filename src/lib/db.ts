import { Pool } from "pg";

// Frontend uses read-only database connection
// Only create pool if DATABASE_URL is available
let pool: Pool | null = null;

if (process.env.DATABASE_URL) {
  try {
    pool = new Pool({ connectionString: process.env.DATABASE_URL, max: 3 });
  } catch (error) {
    console.warn("Database connection not available:", error);
  }
}

export { pool };
