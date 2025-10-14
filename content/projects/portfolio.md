---
title: 'Portfolio Website'
description: 'A modern, responsive portfolio website built with Nuxt 3, showcasing projects with optimized images, SEO, and dark mode support.'
image: profil-with-headset_kltqvr.jpg
date: 2024
---

<!-- Project heading and meta info (date, type) -->
::projects-header
---

title: Portfolio Website
publishDate: 2024
tag: Web, Nuxt 3
---

::

<!-- Project gallery -->
::projects-gallery
    :::projects-gallery-image
    ---
    name: profil-with-headset_kltqvr.jpg
    index: 0
    alt: Portfolio Hero
    ---
    :::
::

::projects-sections
<!-- Single project left section details -->
    :::projects-left-section
<!-- . Partner -->
        ::::projects-left-block
        #title
        Project Type

        #details
        Personal Project  
        Self-designed & developed
        ::::

<!-- . Objective -->
        ::::projects-left-block
        #title
        Objectives

        #details
        {{ $doc.description }}
        ::::

<!-- . Tools & Technologies  -->
        ::::projects-left-block
        #title
        Tools & Technologies

        #details
        Nuxt 3, Vue 3, TypeScript  
        Nuxt UI Pro, Tailwind CSS  
        Nuxt Content, Cloudinary  
        SEO Optimization, Cloudflare Analytics
        ::::
    :::

<!-- . Challenge -->
    :::projects-right-section
    #title
    Challenge

    #details
    This portfolio website serves as a comprehensive showcase of my development work, built entirely from scratch using modern web technologies. The primary challenge was to create a performant, visually appealing, and content-rich platform that demonstrates both technical expertise and design sensibility.

    The architecture leverages Nuxt 3's powerful features including server-side rendering and static site generation for optimal performance and SEO. Content management is handled elegantly through Nuxt Content, allowing projects and pages to be defined in Markdown and YAML files, making updates seamless and version-controlled.

    A key technical achievement was integrating Cloudinary for automatic image optimization and responsive delivery, ensuring fast loading times across all devices. The site features a fully responsive design built with Nuxt UI Pro components and customized with Tailwind CSS, supporting both light and dark modes for enhanced user experience.

    The project also implements comprehensive SEO optimization with dynamic OG images, structured metadata, and proper semantic HTML. Navigation is enhanced with smooth scrolling, active section highlighting using scrollspy, and an intuitive header that adapts to user interactions. The result is a polished, professional portfolio that not only showcases my work but also demonstrates proficiency in modern web development best practices.
    :::
::

<!-- Related projects -->
