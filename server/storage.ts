import { users, type User, type InsertUser, type Profile, type Contact } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProfile(): Promise<Profile>;
  getContact(): Promise<Contact>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private profile: Profile;
  private contact: Contact;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
    
    // Initialize personal data
    this.profile = {
      name: "Sergei",
      age: 28,
      location: "San Francisco, CA",
      bio: "Full-stack developer passionate about creating innovative web applications",
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      website: "https://sergei.com",
      lastUpdated: new Date().toISOString(),
    };

    this.contact = {
      email: "hello@sergei.com",
      linkedin: "https://linkedin.com/in/sergei",
      github: "https://github.com/sergei",
      timezone: "America/Los_Angeles",
      preferredContact: "email",
      availability: "Monday-Friday, 9 AM - 6 PM PST",
    };
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProfile(): Promise<Profile> {
    return this.profile;
  }

  async getContact(): Promise<Contact> {
    return this.contact;
  }
}

export const storage = new MemStorage();
