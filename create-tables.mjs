import pkg from 'pg';
const { Client } = pkg;

const client = new Client({
  connectionString: 'postgresql://postgres:Taisanhyper0!@db.bwmmpjxtlntknnlefcmq.supabase.co:5432/postgres',
});

async function createTables() {
  try {
    await client.connect();

    // Create users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id TEXT PRIMARY KEY,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `);

    // Create rsvps table
    await client.query(`
      CREATE TABLE IF NOT EXISTS rsvps (
        id TEXT PRIMARY KEY,
        first_name TEXT NOT NULL,
        last_name TEXT NOT NULL,
        email TEXT NOT NULL,
        guests INTEGER NOT NULL,
        attendance TEXT NOT NULL,
        events TEXT NOT NULL,
        message TEXT DEFAULT ''
      );
    `);

    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    await client.end();
  }
}

createTables();
