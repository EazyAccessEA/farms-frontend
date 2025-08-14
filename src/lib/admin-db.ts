import { Pool } from "pg";

// Admin uses write-enabled connection for moderation
// This is separate from the read-only connection used by public API
// Only create pool if DATABASE_WRITE_URL is available
let adminPool: Pool | null = null;

if (process.env.DATABASE_WRITE_URL) {
  try {
    adminPool = new Pool({ connectionString: process.env.DATABASE_WRITE_URL, max: 2 });
  } catch (error) {
    console.warn("Admin database connection not available:", error);
  }
}

export { adminPool };
