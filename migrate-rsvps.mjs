import Database from 'better-sqlite3';
import { neon } from '@netlify/neon';
import { config } from 'dotenv';

// Load environment variables
config();

const localDb = new Database('./database.db');
const remoteSql = neon(process.env.DATABASE_URL);

console.log('Starting migration...');

// Get all RSVPs from local database
const localRsvps = localDb.prepare('SELECT * FROM rsvps').all();
console.log(`Found ${localRsvps.length} RSVPs in local database`);

// Insert into remote database
for (const rsvp of localRsvps) {
  try {
    await remoteSql`
      INSERT INTO rsvps (id, first_name, last_name, email, guests, attendance, events, message)
      VALUES (${rsvp.id}, ${rsvp.first_name}, ${rsvp.last_name}, ${rsvp.email}, ${rsvp.guests}, ${rsvp.attendance}, ${rsvp.events}, ${rsvp.message})
      ON CONFLICT (id) DO NOTHING
    `;
    console.log(`Migrated RSVP: ${rsvp.first_name} ${rsvp.last_name}`);
  } catch (error) {
    console.error(`Error migrating RSVP ${rsvp.id}:`, error);
  }
}

localDb.close();
console.log('Migration complete!');
