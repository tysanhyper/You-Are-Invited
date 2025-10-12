import { type User, type InsertUser, users, rsvps } from "@shared/schema";
import { type Rsvp, type InsertRsvp } from "@shared/rsvpSchema";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { eq } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getRsvp(id: string): Promise<Rsvp | undefined>;
  getAllRsvps(): Promise<Rsvp[]>;
  createRsvp(rsvp: InsertRsvp): Promise<Rsvp>;
}

export class PostgresStorage implements IStorage {
  private db;

  constructor() {
    const sql = postgres(process.env.DATABASE_URL!);
    this.db = drizzle(sql, { schema: { users, rsvps } });
  }

  async getUser(id: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.id, id));
    return result[0];
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const result = await this.db.select().from(users).where(eq(users.username, username));
    return result[0];
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const userId = `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const data = { ...insertUser, id: userId };
    const result = await this.db.insert(users).values(data).returning();
    return result[0];
  }

  async getRsvp(id: string): Promise<Rsvp | undefined> {
    const result = await this.db.select().from(rsvps).where(eq(rsvps.id, id));
    if (result[0]) {
      result[0].events = JSON.parse(result[0].events as string);
    }
    return result[0];
  }

  async createRsvp(insertRsvp: InsertRsvp): Promise<Rsvp> {
    const rsvpId = `rsvp-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const data = { 
      ...insertRsvp, 
      id: rsvpId
    };
    const result = await this.db.insert(rsvps).values(data).returning();
    if (result[0]) {
      result[0].events = JSON.parse(result[0].events as string);
    }
    return result[0];
  }

  async getAllRsvps(): Promise<Rsvp[]> {
    const result = await this.db.select().from(rsvps);
    return result.map((rsvp) => ({
      ...rsvp,
      events: JSON.parse(rsvp.events as string),
    }));
  }
}

export const storage = new PostgresStorage();
