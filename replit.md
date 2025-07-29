# Overview

This is a personal static website for Kamil Ali Rextin (rext.in), built as a clean, minimalist site using React with TypeScript. The website displays Kamil's exact bio text and includes links to his various social media platforms. Features a beautiful gradient background image with semi-transparent overlay for optimal text readability.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

The application follows a modern full-stack architecture with clear separation between client and server code:

- **Frontend**: React 18 with TypeScript, built using Vite for fast development and optimized production builds
- **Backend**: Express.js server with TypeScript support, designed for API endpoints and static file serving
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, modern UI design
- **State Management**: TanStack Query (React Query) for server state management and caching

# Key Components

## Frontend Architecture
- **Build System**: Vite with React plugin for fast HMR and optimized builds
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers

## Backend Architecture
- **Server Framework**: Express.js with TypeScript
- **Database Layer**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server bundling

## Database Schema
- **Users Table**: Basic user management with id, username, and password fields
- **Migration System**: Drizzle Kit for database schema migrations
- **Type Safety**: Drizzle-zod integration for runtime validation

## Authentication & Storage
- **Storage Interface**: Abstracted storage layer with in-memory implementation for development
- **User Management**: CRUD operations for user data with username uniqueness
- **Session Handling**: PostgreSQL-backed session store ready for production

# Data Flow

1. **Development**: Vite dev server proxies API requests to Express backend
2. **Client Requests**: Frontend uses TanStack Query for API communication with automatic caching
3. **Server Processing**: Express routes handle API requests and interact with storage layer
4. **Database Operations**: Drizzle ORM provides type-safe database queries
5. **Response Handling**: Standardized JSON responses with proper error handling

# External Dependencies

## Frontend Dependencies
- **UI Components**: Comprehensive Radix UI component suite
- **State Management**: TanStack Query for server state
- **Styling**: Tailwind CSS with class-variance-authority for component variants
- **Utilities**: date-fns for date manipulation, clsx for className utilities

## Backend Dependencies  
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **ORM**: Drizzle ORM with Zod integration for type safety
- **Session Storage**: connect-pg-simple for PostgreSQL session management

## Development Tools
- **Build**: Vite with TypeScript support and React plugin
- **Database**: Drizzle Kit for migrations and schema management
- **Runtime**: tsx for TypeScript execution in development

# Deployment Strategy

## Development Environment
- **Frontend**: Vite dev server with HMR on port 5173
- **Backend**: Express server with tsx for TypeScript execution
- **Database**: PostgreSQL with environment-based connection string

## Production Build Process
1. **Frontend Build**: Vite builds optimized static assets to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Static Serving**: Express serves built frontend assets in production
4. **Database**: Production PostgreSQL instance via DATABASE_URL environment variable

## Environment Configuration
- **Development**: NODE_ENV=development with file watching
- **Production**: NODE_ENV=production with optimized builds
- **Database**: Configurable via DATABASE_URL environment variable
- **Replit Integration**: Special handling for Replit development environment

## Key Files Structure
```
├── client/          # React frontend application
├── server/          # Express backend application  
├── shared/          # Shared TypeScript types and schemas
├── migrations/      # Drizzle database migrations
└── dist/           # Production build output
```

The application is designed to be easily deployable to various platforms with environment-based configuration and supports both development and production workflows with appropriate tooling for each environment.