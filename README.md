# Mael Lacour - Portfolio

This is the repository for my personal portfolio: **Mael Lacour | Lead Engineer / Full Stack Developer**. It showcases my work on Web and Unity development.
Built with [Nuxt.js](https://nuxt.com/), [Nuxt UI Pro](https://ui.nuxt.com/pro), and [Nuxt Content](https://content.nuxt.com/).

## Features

- Responsive design built with [Nuxt UI Pro](https://ui.nuxt.com/pro) and [Tailwind CSS](https://tailwindcss.com/).
- Project and page content managed using [Nuxt Content](https://content.nuxt.com/) (see [content/](content/)).
- Image optimization and delivery via [@nuxtjs/cloudinary](https://cloudinary.nuxtjs.org/).
- SEO enhancements with [@nuxtjs/seo](https://nuxt.com/modules/seo).
- Dark mode support.
- Site configuration managed in [nuxt.config.ts](nuxt.config.ts) and [app/app.config.ts](app/app.config.ts).

## Tech Stack

- [Nuxt 3](https://nuxt.com/)
- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Nuxt UI Pro](https://ui.nuxt.com/pro)
- [Nuxt Content](https://content.nuxt.com/)
- [@nuxtjs/cloudinary](https://cloudinary.nuxtjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Setup

Make sure to install the dependencies using pnpm (as indicated by `pnpm-lock.yaml`):

```bash
pnpm install
```

If you prefer other package managers:

```bash
# npm
npm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm run dev
```

## Production

Build the application for production:

```bash
# pnpm
pnpm run build
```

Locally preview production build:

```bash
# pnpm
pnpm run preview
```

Check out the [Nuxt deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Project Structure Highlights

- `app/`: Contains the core application Vue components, layouts, and pages.
  - [`app/app.vue`](app/app.vue): Main application component.
  - [`app/pages/index.vue`](app/pages/index.vue): Homepage.
  - [`app/pages/projects/[...slug].vue`](app/pages/projects/[...slug].vue): Project detail pages.
  - [`app/components/`](app/components/): Global and reusable Vue components.
- `content/`: Markdown files for project details and site content.
  - [`content/index.yml`](content/index.yml): Main content for the homepage.
  - [`content/projects/`](content/projects/): Individual project markdown files.
- `public/`: Static assets.
- [`nuxt.config.ts`](nuxt.config.ts): Nuxt configuration file.
- [`package.json`](package.json): Project dependencies and scripts.

## Cloudinary

This portfolio utilizes [Cloudinary](https://cloudinary.com/) for hosting all project images. The [@nuxtjs/cloudinary](https://cloudinary.nuxtjs.org/) module is integrated to handle image optimization and delivery, ensuring fast loading times and responsive images across different devices.
