// import "dotenv/config";
// import { migrate } from "drizzle-orm/node-postgres/migrator";
// import db, { client } from "./db"

// async function migration() {
//     console.log("......Migrations Started......");
//     await migrate(db, { migrationsFolder: __dirname + "/migrations" });
//     await client.end();
//     console.log("......Migrations Completed......");
//     process.exit(0); // 0 means success
// }

// migration().catch((error) => {
//     console.error("Migration failed:", error);
//     process.exit(1); // 1 means an error occurred
// });






// src/Drizzle/migrate.ts
import "dotenv/config";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
  connectionString: process.env.Database_URL!,
  ssl: { rejectUnauthorized: false }, // Required for Neon
});

const db = drizzle(pool, { schema });

async function migration() {
  console.log("......Migrations Started......");
  await migrate(db, { migrationsFolder: __dirname + "/migrations" });
  await pool.end();
  console.log("......Migrations Completed......");
  process.exit(0);
}

migration().catch((error) => {
  console.error("Migration failed:", error);
  process.exit(1);
});
