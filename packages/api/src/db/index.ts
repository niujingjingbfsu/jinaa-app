import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema/index.js";

function getDatabaseUrl(): string {
  const url = process.env["DATABASE_URL"];
  if (!url) {
    throw new Error("DATABASE_URL environment variable is required");
  }
  return url;
}

const pool = new Pool({ connectionString: getDatabaseUrl() });

export const db = drizzle(pool, { schema });

export type Database = typeof db;
