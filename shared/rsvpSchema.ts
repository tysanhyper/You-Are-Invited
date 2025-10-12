import { sql } from "drizzle-orm";
import { pgTable, text, integer } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const rsvps = pgTable("rsvps", {
  id: text("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  guests: integer("guests").notNull(),
  attendance: text("attendance").notNull(),
  events: text("events").notNull(), // store array of strings as JSON
  message: text("message").default(""),
});

export const insertRsvpSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string(),
  guests: z.number(),
  attendance: z.string(),
  events: z.array(z.string()).transform((val) => JSON.stringify(val)),
  message: z.string().optional(),
}).refine((data) => data.firstName && data.lastName && data.email && typeof data.guests === 'number' && data.attendance, {
  message: "All required fields must be provided",
});

export type InsertRsvp = z.infer<typeof insertRsvpSchema>;
export type Rsvp = typeof rsvps.$inferSelect;
