import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Personal information schemas
export const ProfileSchema = z.object({
  name: z.string(),
  age: z.number(),
  location: z.string(),
  bio: z.string(),
  title: z.string(),
  company: z.string(),
  website: z.string(),
  lastUpdated: z.string(),
});

export const ContactSchema = z.object({
  email: z.string().email(),
  linkedin: z.string().url(),
  github: z.string().url(),
  timezone: z.string(),
  preferredContact: z.string(),
  availability: z.string(),
});

export const SkillSchema = z.object({
  name: z.string(),
  level: z.enum(["beginner", "intermediate", "advanced", "expert"]),
  years: z.number(),
});

export const SkillsSchema = z.object({
  programming: z.array(SkillSchema),
  frameworks: z.array(SkillSchema),
  databases: z.array(SkillSchema),
  tools: z.array(z.string()),
});

export const ProjectSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  status: z.enum(["completed", "in-progress", "planned"]),
  year: z.number(),
  url: z.string().url(),
  featured: z.boolean(),
});

export const SocialSchema = z.object({
  github: z.string().url(),
  linkedin: z.string().url(),
  twitter: z.string().url(),
  portfolio: z.string().url(),
  blog: z.string().url(),
  resume: z.string().url(),
});

export const ApiResponseSchema = z.object({
  success: z.boolean(),
  data: z.any(),
  error: z.object({
    code: z.number(),
    message: z.string(),
    details: z.string(),
  }).optional(),
});

export type Profile = z.infer<typeof ProfileSchema>;
export type Contact = z.infer<typeof ContactSchema>;
export type Skills = z.infer<typeof SkillsSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Social = z.infer<typeof SocialSchema>;
export type ApiResponse = z.infer<typeof ApiResponseSchema>;

// Keep existing user schema for compatibility
export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
