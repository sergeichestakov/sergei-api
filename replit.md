# Sergei's Personal API Server

## Overview

This is a pure REST API server that provides structured access to personal information. The application is built with Express.js and TypeScript, serving JSON endpoints for programmatic consumption. The root endpoint returns a simple "hi" greeting, while API endpoints provide structured personal data.

## System Architecture

### API Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL (optional)
- **Storage**: In-memory storage for personal data
- **CORS**: Enabled for cross-origin requests
- **Response Format**: Consistent JSON responses with success/error wrapping

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
- **Backend Only**: esbuild bundles Express server to `dist/index.js`
- **Build Script**: Custom build.js script handles the bundling process
- **Output**: Single minified JavaScript file with sourcemap

### Environment Configuration
- **Development**: Local development with hot reload via tsx
- **Production**: Node.js server serving API endpoints only
- **Dependencies**: Minimal - only Express, CORS, TypeScript, and build tools

### Hosting Requirements
- Node.js runtime environment
- No database required - uses in-memory constants
- No environment variables needed for basic operation

## Changelog

```
Changelog:
- June 28, 2025. Initial setup with 5 endpoints (/api/profile, /api/contact, /api/skills, /api/projects, /api/social)
- June 28, 2025. Simplified home page - removed verbose documentation sections
- June 28, 2025. Removed /api prefix from endpoints and reduced to 2 endpoints: /profile and /contact
- June 28, 2025. Removed React frontend entirely - now pure API server with root endpoint returning "hi"
- June 28, 2025. Removed storage.ts, moved data to constants in routes, age calculated from birthday (May 10, 1998 2pm UTC), flattened JSON responses (removed success wrapper)
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```