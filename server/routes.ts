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

  // Helper function to calculate age from birthday
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

  // Helper function to get current timestamp
  const getCurrentTimestamp = () => new Date().toISOString();

  // Root route
  app.get("/", (req, res) => {
    res.send("hi");
  });

  // API Routes
  app.get("/profile", (req, res) => {
    try {
      const profile = {
        name: "Sergei",
        age: calculateAge(),
        location: "San Francisco, CA",
        bio: "Full-stack developer passionate about creating innovative web applications",
        title: "Senior Software Engineer",
        company: "Tech Innovations Inc.",
        website: "https://sergei.com",
        lastUpdated: getCurrentTimestamp(),
      };
      res.json(profile);
    } catch (error) {
      res.status(500).json({
        error: "Failed to fetch profile",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  app.get("/contact", (req, res) => {
    try {
      const contact = {
        email: "hello@sergei.com",
        linkedin: "https://linkedin.com/in/sergei",
        github: "https://github.com/sergei",
        timezone: "America/Los_Angeles",
        preferredContact: "email",
        availability: "Monday-Friday, 9 AM - 6 PM PST",
      };
      res.json(contact);
    } catch (error) {
      res.status(500).json({
        error: "Failed to fetch contact information",
        details: error instanceof Error ? error.message : "Unknown error"
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
