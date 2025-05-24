// File: /js/dbInit.js
import { PGlite } from "https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js";

export const db = new PGlite("idb://patient-db");

export async function initDatabase() {
  await db.query(`
   CREATE TABLE IF NOT EXISTS patients (
     id SERIAL PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        date_of_birth DATE NOT NULL,
        gender TEXT NOT NULL,
        email TEXT,
        phone TEXT,
        address TEXT,
        image TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

  
}
