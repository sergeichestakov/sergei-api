# Sergei's Personal API Documentation

## Overview

This is a full-stack web application that serves as both a personal API documentation site and a REST API providing structured access to personal information. The application is built with a modern React frontend showcasing API documentation and an Express.js backend serving personal data endpoints.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for development and build processes
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **State Management**: TanStack Query (React Query) for server state management
- **Routing**: Wouter for lightweight client-side routing

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

## Key Components

### Data Layer
- **Database Schema**: Defined in `shared/schema.ts` using Drizzle ORM with Zod validation
- **Storage Interface**: Abstract storage interface with in-memory implementation for development
- **Personal Data Models**: Profile, Contact, Skills, Projects, and Social media information

### API Layer
- **RESTful Endpoints**: Structured endpoints for personal information retrieval
- **Response Format**: Consistent JSON responses with success/error wrapping
- **CORS Support**: Enabled for cross-origin requests
- **Rate Limiting**: Basic rate limiting headers implemented

### Frontend Components
- **Documentation Site**: Clean, professional API documentation interface
- **Component Library**: Comprehensive UI components from shadcn/ui
- **Responsive Design**: Mobile-first responsive layout
- **Interactive Elements**: Smooth scrolling navigation and section linking

## Data Flow

1. **Client Request**: Frontend makes API requests through TanStack Query
2. **Express Middleware**: CORS, JSON parsing, and logging middleware process requests
3. **Route Handlers**: Express routes delegate to storage layer for data retrieval
4. **Storage Layer**: In-memory storage serves pre-populated personal data
5. **Response**: Structured JSON responses sent back to client
6. **UI Update**: React components re-render with fetched data

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe ORM for database operations
- **@tanstack/react-query**: Server state management
- **@radix-ui/react-***: Headless UI components
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **tsx**: TypeScript execution for Node.js
- **vite**: Fast build tool and development server
- **@replit/vite-plugin-***: Replit-specific development plugins

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds React app to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Single Artifact**: Combined build output for unified deployment

### Environment Configuration
- **Development**: Local development with hot reload via Vite
- **Production**: Node.js server serving both API and static files
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database access
- Environment variables for database connection

## Changelog

```
Changelog:
- June 28, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```