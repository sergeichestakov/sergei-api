import { users, type User, type InsertUser, type Profile, type Contact, type Skills, type Project, type Social } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getProfile(): Promise<Profile>;
  getContact(): Promise<Contact>;
  getSkills(): Promise<Skills>;
  getProjects(): Promise<Project[]>;
  getSocial(): Promise<Social>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private profile: Profile;
  private contact: Contact;
  private skills: Skills;
  private projects: Project[];
  private social: Social;
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

    this.skills = {
      programming: [
        { name: "TypeScript", level: "expert", years: 5 },
        { name: "JavaScript", level: "expert", years: 7 },
        { name: "Python", level: "intermediate", years: 3 },
        { name: "Node.js", level: "expert", years: 5 },
      ],
      frameworks: [
        { name: "React", level: "expert", years: 4 },
        { name: "Express.js", level: "expert", years: 5 },
        { name: "Next.js", level: "advanced", years: 3 },
      ],
      databases: [
        { name: "PostgreSQL", level: "advanced", years: 4 },
        { name: "MongoDB", level: "intermediate", years: 2 },
      ],
      tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
    };

    this.projects = [
      {
        id: 1,
        name: "E-commerce Platform",
        description: "Full-stack e-commerce solution built with React and Node.js",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
        status: "completed",
        year: 2023,
        url: "https://github.com/sergei/ecommerce",
        featured: true,
      },
      {
        id: 2,
        name: "Task Management App",
        description: "Collaborative task management tool with real-time updates",
        technologies: ["Next.js", "Socket.io", "MongoDB"],
        status: "in-progress",
        year: 2024,
        url: "https://github.com/sergei/task-manager",
        featured: true,
      },
    ];

    this.social = {
      github: "https://github.com/sergei",
      linkedin: "https://linkedin.com/in/sergei",
      twitter: "https://twitter.com/sergei",
      portfolio: "https://sergei.com",
      blog: "https://blog.sergei.com",
      resume: "https://sergei.com/resume.pdf",
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

  async getSkills(): Promise<Skills> {
    return this.skills;
  }

  async getProjects(): Promise<Project[]> {
    return this.projects;
  }

  async getSocial(): Promise<Social> {
    return this.social;
  }
}

export const storage = new MemStorage();
