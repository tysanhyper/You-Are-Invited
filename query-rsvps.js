const Database = require('better-sqlite3');
const db = new Database('./database.db');

const rsvps = db.prepare('SELECT * FROM rsvps').all();
console.log('RSVP Entries:', rsvps);

db.close();
