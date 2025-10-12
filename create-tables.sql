-- Create users table
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  username TEXT NOT NULL UNIQUE,
  password TEXT NOT NULL
);

-- Create rsvps table
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
