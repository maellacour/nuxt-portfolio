# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.0] - 2025-10-16

### Major Refactoring - Nuxt 4 Migration

Complete modernization of the portfolio using Nuxt 4 best practices and modern UI patterns.

### Added

- **Modern Navigation System**
  - Floating navigation menu with backdrop blur effect
  - Smooth theme toggle with circular transition animation using View Transitions API
  - Centralized navigation configuration in `utils/links.ts`
  - ColorModeButton component with hardware-accelerated animations

- **Landing Page Components**
  - Hero section with horizontal layout and large profile image
  - Projects section with interactive hover effects and "View Project" CTA
  - About section with motion animations
  - Contact section with social media links
  - All components use motion-v for smooth entry animations

- **Enhanced Project Cards**
  - Hover effects with scale and shadow transitions
  - Image zoom animation on hover
  - Gradient overlay for better visual depth
  - Clear "View Project" button with animated arrow
  - Fallback UI for projects without images

- **New Dependencies**
  - `motion-v@1.7.2` - Smooth animations and transitions
  - `@vueuse/nuxt@13.9.0` - Vue composition utilities
  - `nuxt-og-image@5.1.11` - Enhanced social media preview images

### Changed

- **Architecture Improvements**
  - Upgraded to Nuxt 4.1.3 with proper compatibility settings
  - Migrated from UHeader to UNavigationMenu for modern navigation
  - Restructured app.vue to use UApp wrapper pattern
  - Created default layout with UContainer and border styling
  - Improved Nitro prerender configuration with crawlLinks enabled

- **Component Refactoring**
  - AppHeader: Now uses UNavigationMenu with floating design
  - AppFooter: Simplified using centralized app config
  - Hero: Changed to horizontal orientation with large profile photo (600x600px)
  - Projects: Enhanced with interactive hover effects and better UX
  - All landing components now modular and reusable

- **Configuration Updates**
  - Centralized global configuration in `app.config.ts`
  - Added profile picture, email, and availability settings
  - Footer configuration with social media links
  - Updated package manager to pnpm@10.18.3
  - Removed deprecated Cloudflare Analytics integration

- **Content Structure**
  - Restructured `content/index.yml` with better organization
  - Added content configuration for collections and schema validation
  - Enhanced project metadata structure
  - Improved project card data fetching

- **SEO Enhancements**
  - Better meta tags throughout the application
  - OG image component integration
  - Improved title templates and descriptions

### Fixed

- Fixed project image paths and gallery indices
- Improved image handling with proper Cloudinary integration
- Fixed project card structure for better consistency

### Removed

- ULanding components (replaced with UPage components)
- Deprecated Cloudflare Analytics calls

## [1.2.0] - 2025-01-14

### Added

- New project showcase: Studova - A comprehensive SaaS platform for researchers
  - Visual flow designer for study workflows
  - Flexible data collection with dynamic schema validation
  - Multi-tenant architecture with role-based permissions
  - Participant tracking and analytics
  - Live demo link integration
- Project Metrics section displaying technical accomplishments
- Enhanced project structure with separated challenge sections

## [1.1.0] - 2025-01-01

### Added

- New project showcase: HarMoNie - Multilingual educational application for musicians
  - Mobile application built with Flutter
  - Partnership with Haute École de Musique and Haute École de Santé de Genève
  - Multilingual content management system
  - Interactive learning features with quizzes and exercises

## [1.0.0] - 2024-01-01

### Added

- Initial portfolio release
- Project showcase: TikTik - 2D multiplayer puzzle game
  - Unity-based cooperative gameplay
  - Local multiplayer with controller support
  - Custom level design tools
- Project showcase: NeuroTrainer - VR tool for medical imaging
  - Virtual reality MRI/CT data visualization
  - Custom HLSL shaders for 3D texture rendering
  - Optimized data handling for large medical datasets
- Project showcase: EcoRescue - Action video game for anxiety research
  - Fast-paced action gameplay
  - Research collaboration with University of Geneva
  - Statistics and collection systems
- Core portfolio features:
  - Responsive design with Nuxt UI Pro
  - Dark mode support
  - Content management with Nuxt Content
  - Cloudinary integration for media optimization
  - SEO enhancements
  - Project gallery and navigation
  - Contact section
  - About Me section

[1.3.0]: https://github.com/Eyap53/nuxt-portfolio/compare/v1.2.0...v1.3.0
[1.2.0]: https://github.com/Eyap53/nuxt-portfolio/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/Eyap53/nuxt-portfolio/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/Eyap53/nuxt-portfolio/releases/tag/v1.0.0
