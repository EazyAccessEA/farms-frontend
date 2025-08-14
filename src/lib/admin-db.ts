import { Pool } from "pg";

// Admin uses write-enabled connection for moderation
// This is separate from the read-only connection used by public API
const writeConnectionString = process.env.DATABASE_WRITE_URL!;
export const adminPool = new Pool({ connectionString: writeConnectionString, max: 2 });
