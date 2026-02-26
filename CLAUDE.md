# CLAUDE.md - Portfolio Project Guide

## Project Overview and Objectives

This project is a **personal portfolio** for Mael Lacour, designed to showcase projects, skills, and allow visitors to learn more about his professional and artistic profile. The goal is to create a showcase that blends creativity and professionalism.

### Main Objectives

- **Project presentation**: Display a gallery of varied projects (SaaS, mobile apps, VR games, etc.)
- **Professional image**: Offer a polished experience with modern design and optimal performance
- **Contact and collaboration**: Facilitate contact for collaboration opportunities
- **Optimized SEO**: Ensure good visibility on search engines with dynamic OG images

### Tech Stack

| Category | Technologies |
|----------|-------------|
| Framework | Nuxt 3, Vue 3, TypeScript |
| UI | Nuxt UI Pro, Tailwind CSS |
| Content | @nuxt/content (Markdown/YAML) |
| Images | Cloudinary, @nuxt/image |
| SEO | @nuxtjs/seo, Dynamic OG Images |
| Analytics | Cloudflare Analytics |
| Icons | Heroicons, Simple Icons |

---

## Architecture Description

### Global Architecture

The project follows the standard **Nuxt 3** architecture with a **content-driven** approach:

```
┌─────────────────────────────────────────────────────────┐
│                       Browser                           │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   Nuxt 3 (SSG/SSR)                      │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐  │
│  │   Pages     │  │ Components  │  │   Nuxt UI Pro   │  │
│  │  (Vue SFC)  │  │   (Vue)     │  │   (UI Theme)    │  │
│  └─────────────┘  └─────────────┘  └─────────────────┘  │
│                           │                             │
│                           ▼                             │
│  ┌─────────────────────────────────────────────────┐    │
│  │              @nuxt/content                       │    │
│  │    (Markdown/YAML → Vue Components)             │    │
│  └─────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                    Cloudinary CDN                       │
│              (Optimized images and videos)              │
└─────────────────────────────────────────────────────────┘
```

### Data Flow Pattern

- **Homepage**: Fetches structured data from `content/index.yml` via `queryContent()`
- **Project pages**: Uses dynamic slug to load the corresponding Markdown file
- **Rendering**: Markdown files are transformed into Vue components through custom components

### Rendering and Deployment

- **SSG (Static Site Generation)** enabled via `nitro: { static: true }`
- **Pre-rendering** of the homepage configured in `routeRules`
- OG images dynamically generated for each page

---

## Important Directories and Their Purposes

```
nuxt-portfolio/
│
├── app/                          # Main application source code
│   ├── app.vue                   # Root Vue component
│   ├── app.config.ts             # UI configuration (colors, component styles)
│   │
│   ├── pages/                    # Pages = Routes (file-based routing)
│   │   ├── index.vue             # Homepage (/, hero, projects, about, contact)
│   │   └── projects/
│   │       └── [...slug].vue     # Dynamic project pages (/projects/*)
│   │
│   └── components/               # Reusable Vue components
│       ├── AppHeader.vue         # Header with navigation and scrollspy
│       ├── AppFooter.vue         # Footer
│       ├── ImagePlaceholder.vue  # Animated SVG placeholder
│       │
│       ├── OgImages/             # Open Graph image components
│       │   ├── Home.vue          # OG image for homepage
│       │   └── Project.vue       # OG image for project pages
│       │
│       └── content/              # Components used in Markdown
│           ├── cloudinary/
│           │   └── CloudinaryVideo.vue    # Cloudinary video player
│           └── projects/                  # Project display components
│               ├── ProjectsHeader.vue     # Project header (title, date, tags)
│               ├── ProjectsGallery.vue    # Image grid
│               ├── ProjectsGalleryImage.vue
│               ├── ProjectsSections.vue   # Left/right sections wrapper
│               ├── ProjectsLeftSection.vue
│               ├── ProjectsLeftBlock.vue
│               ├── ProjectsRightSection.vue
│               └── ProjectsPartnerItem.vue
│
├── content/                      # Content files (file-based CMS)
│   ├── index.yml                 # Homepage data
│   └── projects/                 # Project Markdown files
│       ├── studova.md
│       ├── harmonie.md
│       ├── neurotrainer.md
│       ├── ecorescue.md
│       ├── tiktik.md
│       └── portfolio.md
│
├── public/                       # Static assets (served at root)
│   ├── favicon.ico
│   ├── logo.png
│   └── LACOUR.Mael.Resume.No-Tel.pdf
│
├── server/                       # Nitro server configuration
│   └── tsconfig.json
│
└── Configuration files
    ├── nuxt.config.ts            # Main Nuxt configuration
    ├── tailwind.config.ts        # Tailwind CSS configuration
    ├── tsconfig.json             # TypeScript configuration
    ├── eslint.config.mjs         # ESLint rules
    ├── package.json              # Dependencies and scripts
    └── .env.example              # Environment variables template
```

### Key Configuration Files

| File | Purpose |
|------|---------|
| `nuxt.config.ts` | Modules, SEO, analytics, routeRules, color mode |
| `app.config.ts` | UI theme (primary color: indigo, gray: zinc), component styles |
| `tailwind.config.ts` | Custom font (DM Sans) |
| `.env.example` | Required variables (site URL, Cloudinary, Analytics) |

---

## Coding Standards and Conventions

### Vue Component Structure

```vue
<script setup lang="ts">
// 1. Imports
// 2. Props/Emits with defineProps/defineEmits
// 3. Composables (useRoute, useAsyncData, etc.)
// 4. Reactive logic
</script>

<template>
  <!-- Template with Tailwind classes -->
</template>

<style scoped>
/* Scoped styles if necessary */
</style>
```

### Naming Conventions

- **Components**: PascalCase (`ProjectsHeader.vue`, `AppFooter.vue`)
- **Pages**: kebab-case with brackets for dynamic routes (`[...slug].vue`)
- **Content files**: kebab-case (`studova.md`, `index.yml`)
- **CSS classes**: Tailwind utilities, no custom CSS unless necessary

### Markdown Content Pattern

Projects use a standardized structure with custom components:

```markdown
---
title: Project Name
description: Short description
image: hero-image.png
date: YYYY
---

::projects-header
---
title: Project Title
publishDate: YYYY
tag: Technologies used
---
::

::projects-gallery
:::projects-gallery-image
---
name: image.png
index: 0
alt: Image description
---
:::
::

::projects-sections
:::projects-left-section
::::projects-left-block
#title
Block Title

#details
Detailed content...
::::
:::

:::projects-right-section
#title
Challenge

#details
Challenge description...
:::
::
```

### ESLint Rules

- No trailing commas
- Brace style: `1tbs`
- TypeScript `any` allowed (rule disabled)

### Tailwind Conventions

- **Mobile-first**: Base classes for mobile, `sm:`, `lg:` prefixes for responsive
- **Dark mode**: Native support with `dark:` classes
- **Prose**: Use `prose prose-gray dark:prose-invert` for Markdown content

### Icons

- Heroicons: `i-heroicons-[name]` (general UI)
- Simple Icons: `i-simple-icons-[name]` (brand logos)

---

## Development Workflow

### NPM Scripts

```bash
# Local development with hot-reload
pnpm dev

# Production build
pnpm build

# Static generation (SSG)
pnpm generate

# Preview build
pnpm preview

# Code linting
pnpm lint

# TypeScript checking
pnpm typecheck
```

### Required Environment Variables

Copy `.env.example` to `.env` and fill in:

```env
NUXT_PUBLIC_SITE_URL=xxx         # Site URL (for SEO)
CLOUDINARY_CLOUD_NAME=xxx        # Cloudinary cloud name
CLOUDFLARE_ANALYTICS_TOKEN=xxx   # Analytics token (optional)
```

### Adding a New Project

1. Create a file `content/projects/project-name.md`
2. Follow the Markdown structure documented above
3. Upload images to Cloudinary
4. The project will automatically appear on the homepage

### Image Management

- **Hosting**: All images on Cloudinary (`dyvpecjfg`)
- **Optimization**: Automatic via `@nuxt/image` and Cloudinary
- **Format**: Automatic WebP conversion
- **Component**: Use `CldImage` for Cloudinary images

### Dependency Management

- **Package manager**: pnpm (v9.2.0+)
- **Updates**: Automated via Renovate
- **Lock file**: `pnpm-lock.yaml` (do not modify manually)

---

## Git Workflow

This project uses **Git** with the **Git Flow** branching model. Regular commits are encouraged to maintain a clear history and make collaboration easier.

### Branch Structure

| Branch | Purpose |
|--------|---------|
| `main` | Production-ready code, always stable |
| `develop` | Integration branch for features |
| `feature/*` | New features (`feature/add-dark-mode`) |
| `release/*` | Release preparation (`release/1.3.0`) |
| `hotfix/*` | Urgent production fixes (`hotfix/fix-typo`) |

### Git Flow Workflow

1. **Start a feature**: Branch from `develop` → `feature/feature-name`
2. **Complete feature**: Merge back into `develop`
3. **Prepare release**: Branch from `develop` → `release/x.x.x`
4. **Finalize release**: Merge into `main` AND `develop`, tag version
5. **Hotfix**: Branch from `main` → `hotfix/fix-name`, merge into `main` AND `develop`

### Commit Best Practices

**Commit early, commit often!** Small, frequent commits are highly encouraged:

- Commit after each logical change or completed task
- Don't wait until a feature is "perfect" to commit
- Small commits make code review easier and bugs simpler to track down
- Write clear, descriptive commit messages
- Use conventional commit format:
  - `feat:` new feature
  - `fix:` bug fix
  - `docs:` documentation changes
  - `style:` formatting, no code change
  - `refactor:` code restructuring
  - `test:` adding tests
  - `chore:` maintenance tasks

Example commit messages:

```
feat: add dark mode toggle to header
fix: resolve image loading issue on mobile
docs: update README with setup instructions
refactor: extract gallery logic into composable
```

### Why Commit Regularly?

- **Safety net**: Each commit is a checkpoint you can return to
- **Clear history**: Easier to understand what changed and why
- **Collaboration**: Team members can see progress and provide feedback
- **Debugging**: `git bisect` works better with granular commits
- **Code review**: Smaller commits are easier to review

### Pre-commit Checklist

Before committing, ensure:

- [ ] Code passes linting: `pnpm lint`
- [ ] TypeScript types are valid: `pnpm typecheck`
- [ ] Changes are tested locally with `pnpm dev`

### Versioning

The project follows **Semantic Versioning**:

- Current version: `1.2.0`
- Changelog maintained in `CHANGELOG.md`

---

## Useful Resources

- [Nuxt 3 Documentation](https://nuxt.com/docs)
- [Nuxt Content Documentation](https://content.nuxt.com)
- [Nuxt UI Pro Documentation](https://ui.nuxt.com/pro)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Cloudinary Documentation](https://cloudinary.com/documentation)
- [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
