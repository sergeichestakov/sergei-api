import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
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

  // Helper function to create consistent API responses
  const createResponse = (success: boolean, data?: any, error?: any) => {
    if (success) {
      return { success: true, data };
    } else {
      return { 
        success: false, 
        error: {
          code: error.code || 500,
          message: error.message || 'Internal Server Error',
          details: error.details || 'An unexpected error occurred'
        }
      };
    }
  };

  // API Routes
  app.get("/profile", async (req, res) => {
    try {
      const profile = await storage.getProfile();
      res.json(createResponse(true, profile));
    } catch (error) {
      res.status(500).json(createResponse(false, null, {
        code: 500,
        message: "Failed to fetch profile",
        details: error instanceof Error ? error.message : "Unknown error"
      }));
    }
  });

  app.get("/contact", async (req, res) => {
    try {
      const contact = await storage.getContact();
      res.json(createResponse(true, contact));
    } catch (error) {
      res.status(500).json(createResponse(false, null, {
        code: 500,
        message: "Failed to fetch contact information",
        details: error instanceof Error ? error.message : "Unknown error"
      }));
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
