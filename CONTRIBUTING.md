# Contributing to GIGECONOMY OS

We are building the future of work. Every commit matters. Every feature impacts real lives.

## Our Mission

GIGECONOMY OS is infrastructure for economic survival in the post-employment era. We're building a platform that will serve 60-80 million workers who are currently trapped in digital feudalism.

This isn't just code—it's a survival mechanism.

## Code of Conduct

### Core Principles

1. **Worker-First**: Every decision prioritizes worker welfare over convenience
2. **Transparency**: No hidden algorithms, no opaque systems
3. **Collective Good**: We build for collective empowerment, not individual profit
4. **Urgency**: Millions of workers need this NOW

### Standards

- Be respectful and inclusive
- Focus on constructive criticism
- Prioritize security and privacy
- Write code that scales
- Document thoroughly

## How to Contribute

### 1. Understand the Architecture

GIGECONOMY OS is built on 3 integrated layers:

- **LAYER 1: Universal Gig Marketplace** - The Engine
- **LAYER 2: Support System** - The Safety Net
- **LAYER 3: Collective Power** - The Voice

Every contribution must fit into one of these layers.

### 2. Development Setup

```bash
# Clone the repository
git clone https://github.com/gigeconomy-os/platform.git
cd platform

# Install dependencies
npm install

# Copy environment template
cp .env.example .env

# Start development
npm run dev
```

### 3. Making Changes

#### Branch Naming
- `feature/layer-1-scheduler` - New features
- `fix/payment-bug` - Bug fixes
- `docs/api-documentation` - Documentation
- `refactor/auth-service` - Code refactoring

#### Commit Messages
Use clear, descriptive commit messages:

```
feat(marketplace): add AI scheduling optimization
fix(instant-pay): resolve payment gateway timeout
docs(readme): update installation instructions
```

### 4. Code Standards

#### TypeScript
- Use strict type checking
- No `any` types unless absolutely necessary
- Document complex functions

#### React
- Use functional components with hooks
- Keep components small and focused
- Extract reusable logic into custom hooks

#### Backend Services
- Each microservice must be independently deployable
- Use environment variables for configuration
- Implement proper error handling
- Add logging for debugging

### 5. Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

All new features must include tests.

### 6. Pull Request Process

1. **Create a PR** with a clear title and description
2. **Link to an issue** if applicable
3. **Explain the impact** - How does this help workers?
4. **Include screenshots** for UI changes
5. **Request review** from at least one maintainer

#### PR Template

```markdown
## Description
Brief description of the changes

## Layer
- [ ] Layer 1: Marketplace
- [ ] Layer 2: Support
- [ ] Layer 3: Collective
- [ ] Shared/Infrastructure

## Impact
How does this help workers?

## Testing
How was this tested?

## Screenshots (if applicable)

## Checklist
- [ ] Code follows style guidelines
- [ ] Tests added/updated
- [ ] Documentation updated
- [ ] No breaking changes (or documented)
```

### 7. Review Process

Maintainers will review PRs based on:
- **Worker Impact**: Does this genuinely help workers?
- **Code Quality**: Is it maintainable and scalable?
- **Security**: Are there vulnerabilities?
- **Performance**: Will this scale to millions of users?

## Priority Areas

We need help with:

### Layer 1: Marketplace
- [ ] Platform API integrations (Gojek, Grab, etc.)
- [ ] AI scheduling algorithm
- [ ] Blockchain reputation system

### Layer 2: Support
- [ ] Insurance provider integrations
- [ ] Payment gateway implementation
- [ ] Financial planning tools

### Layer 3: Collective
- [ ] Rate tracking & scraping
- [ ] Voting system
- [ ] Legal case management

### Infrastructure
- [ ] Kubernetes deployment configs
- [ ] CI/CD pipeline
- [ ] Monitoring & logging
- [ ] Load testing

## Questions?

- **Technical**: Open a GitHub issue
- **General**: Email tech@gigeconomy-os.com
- **Vision**: Email vision@gigeconomy-os.com

## License

By contributing, you agree that your contributions will be licensed under the project's license.

---

**Remember**: We're not just building software. We're building infrastructure that will define how tens of millions of people survive in the post-employment era.

Code with purpose. Code with urgency. Code for survival.
