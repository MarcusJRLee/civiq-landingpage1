# CivIQ Landing Page

## Overview

CivIQ is a landing page application designed to gauge interest in a civic engagement platform that aims to modernize democracy by increasing politician transparency and accountability. The application collects early access signups from potential users interested in features like daily accountability scorecards, bill proposals, budget transparency, and constructive political discourse.

The application is a React-based single-page website with a backend API for handling signup submissions. It includes PDF viewing capabilities to showcase "how it works" information and integrates with Vercel for analytics and performance monitoring.

**Platform:** Deployed on Replit (migrated from Vercel on November 6, 2025)

## Recent Changes

**November 6, 2025 - Vercel to Replit Migration:**
- Updated Vite configuration to use port 5000 (Replit standard for web applications)
- Configured backend Express server to bind to 0.0.0.0 for network accessibility
- Removed client-side API key exposure from vite.config.ts (security improvement)
- Switched from ts-node to tsx for proper ESM module TypeScript execution
- Set up unified workflow to run both frontend and backend concurrently
- Configured RESEND_API_KEY as Replit secret for email functionality

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **React 19.2.0** with TypeScript for type-safe component development
- **Vite** as the build tool and development server (port 5000)
- **Tailwind CSS** via CDN for styling with custom brand colors (purple theme)

**Component Structure:**
The application follows a component-based architecture with clear separation of concerns:
- `App.tsx` serves as the main container managing form state (email, zip, submission status, errors)
- Presentational components (`Header`, `Hero`, `Features`, `HowItWorks`, `Values`, `Footer`) handle UI rendering
- `CtaForm` is a reusable component that appears in both `Hero` and `Footer` sections
- `PDFViewer` component handles PDF document display using react-pdf library

**State Management:**
- Uses React's built-in `useState` hooks for local component state
- Form validation logic centralized in the main App component
- No external state management library (Redux, Zustand, etc.) - intentionally kept simple for a landing page

**Design Decisions:**
- Client-side form validation (email regex, 5-digit zip code) before API submission
- Responsive design with mobile-first approach using Tailwind breakpoints
- Sticky header for persistent branding
- Success/error states managed through conditional rendering

### Backend Architecture

**Technology Stack:**
- **Express.js 5.1.0** server running on port 3001
- **TypeScript** for type safety
- **tsx** for running TypeScript files directly in development

**API Structure:**
- Single endpoint: `POST /api/signup`
- Request validation mirrors frontend validation (email format, zip code format)
- Currently logs signup data to console (email sending commented out)

**Email Service Integration (Planned):**
- Resend library integrated but currently disabled
- When enabled, will send signup notifications to configured email address
- Environment variables: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`, `RESEND_TO_EMAIL`

**CORS Configuration:**
- CORS enabled to allow requests from Vite dev server
- Express JSON middleware for parsing request bodies

**Design Decisions:**
- Separation of concerns: signup logic extracted to `backend/signup/handler.ts`
- Server-side validation as defense-in-depth security measure
- Async/await pattern for handling email operations
- Error handling returns appropriate HTTP status codes (400 for validation errors, 500 for server errors)

### Development Workflow

**Proxy Setup:**
Vite development server proxies `/api` requests to the Express backend (port 3001), enabling seamless full-stack development without CORS issues in production-like setup.

**Running the Application:**
- Development: Single workflow runs both frontend and backend concurrently
- Frontend: `npm run dev` (Vite on port 5000, bound to 0.0.0.0)
- Backend: `npm run backend` (Express on port 3001, using tsx for TypeScript execution)
- Both servers start automatically via the configured Replit workflow

**Replit Workflow Configuration:**
- Command: `bash -c "npm run backend & npm run dev"`
- Output type: webview (displays frontend on port 5000)
- Automatically restarts when code changes are detected

**Docker Support:**
The repository includes `test-docker.sh` script for containerized testing, though specific Docker configuration files are not visible in the provided repository contents.

### Type System

**TypeScript Configuration:**
- ES2022 target with ESNext modules
- React JSX transform
- Strict mode enabled for type safety
- Path aliases configured (`@/*` maps to project root)
- Experimental decorators enabled

**Shared Types:**
- `SignUpData` interface defined in `types/sign_up_data.d.ts`
- Ensures type consistency between frontend and backend
- Contains: email (string), zip (string), timestamp (number)

## External Dependencies

### Third-Party Services

**Vercel Analytics & Speed Insights:**
- `@vercel/analytics` and `@vercel/speed-insights` packages integrated
- Provides real-time performance monitoring and user analytics
- Components imported in `App.tsx` for tracking

**Resend Email Service:**
- Email delivery service for signup notifications
- Requires `RESEND_API_KEY` environment variable
- Currently disabled in code (commented out) but infrastructure present

**PDF.js:**
- `pdfjs-dist` version 5.4.296 (must match `react-pdf` version)
- Worker loaded from CDN via import.meta.url
- Used for rendering "How it works" PDF document from Google Cloud Storage

### Cloud Storage

**Google Cloud Storage:**
- Static PDF assets hosted at `storage.googleapis.com/civiq_landingpage_staticassets/`
- Currently serves `how_it_works.pdf` document

### Build & Development Tools

**Core Dependencies:**
- `vite` for blazing-fast development and optimized production builds
- `tsx` for running TypeScript without compilation step
- `@vitejs/plugin-react` for React Fast Refresh support

**Optional Dependencies:**
- `@rollup/rollup-linux-x64-musl` for Linux-specific build optimization

### Styling

**Tailwind CSS:**
- Loaded via CDN in `index.html` (not npm package)
- Custom theme configuration with brand colors (purple: #6D28D9, light: #F3E8FF, dark: #3730A3)
- Rationale: CDN approach reduces build complexity for a simple landing page

### Environment Configuration

**Required Environment Variables:**
- `RESEND_API_KEY` - **Required** for email service (stored in Replit Secrets)
- `RESEND_FROM_EMAIL` - Sender email address (optional, email functionality currently commented out)
- `RESEND_TO_EMAIL` - Recipient for signup notifications (optional, email functionality currently commented out)
- `BACKEND_PORT` - Optional, defaults to 3001

**Configuration Files:**
- Replit Secrets for environment variables (replaces .env.local)
- `dotenv` package loads environment variables in backend
- No client-side environment variables exposed (security best practice)