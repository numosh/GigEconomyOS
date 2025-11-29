# GIGECONOMY OS - Quick Start Guide

Get up and running with GIGECONOMY OS in under 5 minutes.

## Prerequisites

Make sure you have these installed:
- **Node.js 20+** - [Download](https://nodejs.org/)
- **npm 10+** - Comes with Node.js
- **Git** - [Download](https://git-scm.com/)

Optional (for full stack development):
- Docker & Docker Compose
- PostgreSQL 15+
- Redis 7+

## Step 1: Clone & Install

```bash
# Clone the repository
git clone https://github.com/gigeconomy-os/platform.git
cd platform

# Install all dependencies
npm install
```

This will install dependencies for:
- Web application
- All backend services
- Shared packages

## Step 2: Environment Setup

```bash
# Copy environment template
cp .env.example .env

# Edit .env with your settings (optional for now)
# nano .env
```

For local development, the default values in `.env.example` work fine.

## Step 3: Start Development

```bash
# Start the web application
cd apps/web
npm run dev
```

The web app will be available at: **http://localhost:3000**

## What You'll See

When you open http://localhost:3000, you'll see:

1. **Dashboard** - Overview of the 3-layer system
2. **Marketplace** - Layer 1 placeholder
3. **Support** - Layer 2 placeholder
4. **Collective** - Layer 3 placeholder

All features are currently in "Coming Soon" mode as we're in the infrastructure setup phase.

## Project Structure Quick Tour

```
gigeconomy-os/
├── apps/web/              ← React web app (START HERE)
├── services/              ← Backend microservices
│   ├── marketplace/       ← Layer 1 services
│   ├── support/           ← Layer 2 services
│   └── collective/        ← Layer 3 services
├── packages/              ← Shared code
│   ├── types/             ← TypeScript types
│   ├── utils/             ← Utility functions
│   └── config/            ← Configuration
└── docs/                  ← Documentation
```

## Next Steps

### For Frontend Developers
```bash
cd apps/web
npm run dev
```

Key files:
- `src/App.tsx` - Main application
- `src/modules/marketplace/` - Layer 1 UI
- `src/modules/support/` - Layer 2 UI
- `src/modules/collective/` - Layer 3 UI

### For Backend Developers
```bash
cd services/marketplace/aggregator
npm run dev
```

Each service has its own README explaining its purpose.

### For Full-Stack Developers
Start both frontend and backend:

```bash
# Terminal 1: Web app
cd apps/web && npm run dev

# Terminal 2: Backend service
cd services/marketplace/aggregator && npm run dev
```

## Development Workflow

### Making Changes

1. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Edit code
   - Test locally
   - Commit frequently

3. **Run type checking**
   ```bash
   npm run type-check
   ```

4. **Commit with clear messages**
   ```bash
   git add .
   git commit -m "feat(marketplace): add gig aggregation"
   ```

5. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Common Commands

```bash
# Install dependencies
npm install

# Start development (web)
cd apps/web && npm run dev

# Build for production
npm run build

# Run type checking
npm run type-check

# Run linting
npm run lint

# Clean everything
npm run clean
```

## Troubleshooting

### Port 3000 already in use
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9
```

### Dependencies not installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check for type errors
npm run type-check
```

## Getting Help

- **Documentation**: Check `/docs` folder
- **Issues**: [GitHub Issues](https://github.com/gigeconomy-os/platform/issues)
- **Questions**: tech@gigeconomy-os.com

## Contributing

Read [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed guidelines.

Quick checklist:
- [ ] Code follows style guidelines
- [ ] Types are properly defined
- [ ] No console.log statements (use proper logging)
- [ ] Components are small and focused
- [ ] Code is documented

## What to Build Next?

Check our priority areas in [CONTRIBUTING.md](./CONTRIBUTING.md#priority-areas):

**High Priority**:
- Platform API integrations (Gojek, Grab)
- Payment gateway implementation
- Rate tracking system

**Medium Priority**:
- AI scheduling algorithm
- Insurance provider integrations
- Voting system

**Infrastructure**:
- Kubernetes configs
- CI/CD pipeline
- Monitoring setup

---

**Welcome to GIGECONOMY OS!** You're now part of building infrastructure for economic survival in the post-employment era.

Let's build something that matters. 🚀
