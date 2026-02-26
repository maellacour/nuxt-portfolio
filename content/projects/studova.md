---
title: 'Studova'
description: 'A SaaS platform I built from scratch for research teams to design, deploy, and analyse cognitive and behavioural studies. Visual flow editor, dynamic data schemas, multi-tenant architecture.'
image: Studova-hero_p7swln.png
date: 2024
---

<!-- Project heading and meta info (date, type) -->
::projects-header
---

title: Studova
publishDate: 2025
tag: SaaS · Full-Stack · Research Tooling
---

::

<!-- Project gallery -->
::projects-gallery
        :::projects-gallery-image
        ---
        name: 01-landing.png
        index: 0
        alt: Tasks Overview
        ---
        :::
        :::projects-gallery-image
        ---
        name: 02-login.png
        index: 1
        alt: Flow Designer
        ---
        :::
        :::projects-gallery-image
        ---
        name: 03-team-settings.png
        index: 2
        alt: Participants Overview
        ---
        :::
        :::projects-gallery-image
        ---
        name: 04-flow-editor.png
        index: 3
        alt: Progressions Overview
        ---
        :::
        :::projects-gallery-image
        ---
        name: 05-participants.png
        index: 4
        alt: Results Overview
        ---
        :::
        :::projects-gallery-image
        ---
        name: 06-results.png
        index: 5
        alt: Participant Dashboard
        ---
        :::
        :::projects-gallery-image
        ---
        name: 07-tasks.png
        index: 6
        alt: Tasks Overview
        ---
        :::
        :::projects-gallery-image
        ---
        name: 08-participant-dashboard-settings.png
        index: 7
        alt: Participant Dashboard Settings
        ---
        :::
        :::projects-gallery-image
        ---
        name: 09-progressions.png
        index: 8
        alt: Progressions Overview
        ---
        :::
::

::projects-sections
<!-- Single project left section details -->
    :::projects-left-section
<!-- . Type -->
        ::::projects-left-block
        #title
        Project Type

        #details
        Personal SaaS Platform
        Research & Development
        ::::

<!-- . Live Demo -->
        ::::projects-left-block
        #title
        Try it out

        #details
        [Launch Demo](https://studova.vercel.app) 🚀
        ::::

<!-- . Objective -->
        ::::projects-left-block
        #title
        Objectives

        #details
        {{ $doc.description }}

        It fills the gap between generic survey tools and bespoke lab software — a structured, collaborative environment researchers can configure without writing code.
        ::::

<!-- . Tools & Technologies  -->
        ::::projects-left-block
        #title
        Tools & Technologies

        #details
        **Frontend:** Next.js, React, TypeScript, Tailwind CSS, DaisyUI
        **Backend:** Next.js API Routes, Prisma ORM, PostgreSQL
        **Infrastructure:** Neon, Vercel, Docker
        ::::

<!-- . Key Metrics -->
        ::::projects-left-block
        #title
        Project Metrics

        #details
        - **Lines of Code**: ~15,000+ TypeScript/React
        - **Components**: 100+ reusable UI components
        - **API Endpoints**: 40+ RESTful endpoints
        - **Database Models**: 20+ Prisma models with relationships
        - **Translation Keys**: 200+ across 8 namespaces
        - **Documentation**: 15+ technical guides (10,000+ words)
        - **Performance**: < 500ms average API response time
        ::::
    :::

<!-- . Challenge -->
    :::projects-right-section
    #title
    Challenge

    #details
    The core problem: research studies have wildly different shapes. A cognitive test, a survey battery, and a longitudinal tracking protocol share almost no structure. The platform had to enforce reproducibility without constraining what a researcher could design.

    Three decisions defined the architecture.

    **Graph-based flow engine.** Study workflows aren't linear — they branch, randomise, and loop. I implemented a directed graph using FlowElements and FlowLinks, with a traversal algorithm that validates path integrity from START to END before a study can launch. Any broken flow is caught at design time, not mid-session.

    **Dynamic schema validation.** Each task type collects different data. A rigid relational model would require a migration for every new task. Instead, I combined typed ResultVariable models with PostgreSQL JSON columns and GIN indexing — type safety and query performance without the migration overhead. Zod schemas are generated at runtime from the stored metadata.

    **Results visualisation with accessibility.** Displaying participant progress across arbitrary task sequences required ordering columns by flow position, not insertion order. I built a colour-coded and pattern system (colour for completed, hatched for pending) so the view works for colour-blind researchers. Small detail — high stakes in a clinical context.

    It proved that a solo engineer can ship a production-grade research tool, if the architecture decisions are right from day one.
    :::
::
