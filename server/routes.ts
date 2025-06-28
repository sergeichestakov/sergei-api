import type { Express } from "express";
import { createServer, type Server } from "http";
import cors from "cors";

export async function registerRoutes(app: Express): Promise<Server> {
  // Enable CORS for all routes
  app.use(cors({
    origin: true,
    credentials: true
  }));

  // Rate limiting headers middleware
  app.use((req, res, next) => {
    res.set({
      'X-RateLimit-Limit': '1000',
      'X-RateLimit-Remaining': '999',
      'X-RateLimit-Reset': Math.floor(Date.now() / 1000) + 3600
    });
    next();
  });

  const calculateAge = () => {
    const birthday = new Date('1998-05-10T14:00:00Z'); // May 10th, 1998 2pm UTC
    const today = new Date();
    let age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
      age--;
    }
    
    return age;
  };

  // Root route
  app.get("/", (req, res) => {
    res.send("hi");
  });

  const contact = {
    email: "me@sergei.com",
    linkedin: "https://linkedin.com/in/sergeichestakov",
    github: "https://github.com/sergeichestakov",
    x: "https://x.com/sergeichestakov",
  };

  // API Routes
  app.get("/about", (req, res) => {
    const profile = {
      name: "Sergei Chestakov",
      age: calculateAge(),
      location: "Brooklyn, NY",
      bio: "Software Engineer & Creator",
      company: "Sergei Dot Com, LLC",
      website: "https://sergei.com",
      contact,
    };
    res.json(profile);
  });

  const httpServer = createServer(app);
  return httpServer;
}
