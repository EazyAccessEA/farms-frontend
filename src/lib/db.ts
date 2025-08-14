import { Pool } from "pg";

// Frontend uses read-only database connection
const connectionString = process.env.DATABASE_URL!;
export const pool = new Pool({ connectionString, max: 3 });
