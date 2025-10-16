---
title: 'Studova'
description: 'A comprehensive SaaS platform for researchers to design, deploy, and manage cognitive and behavioral studies with flexible data collection, participant tracking, and team collaboration capabilities.'
image: Studova-hero_p7swln.png
date: 2024
---

<!-- Project heading and meta info (date, type) -->
::projects-header
---

title: Studova
publishDate: 2025
tag: Full-Stack, SaaS, Research Platform
---

::

<!-- Project gallery -->
::projects-gallery
    :::projects-gallery-image
    ---
    name: 2025-10-14.Tasks_kpbiru.png
    index: 0
    alt: Tasks Overview
    ---
    :::
    :::projects-gallery-image
    ---
    name: 2025-10-14.Flow_mmzflv.png
    index: 1
    alt: Flow Designer
    ---
    :::
    :::projects-gallery-image
    ---
    name: 2025-10-14.Participants_qoydjc.png
    index: 2
    alt: Participants Overview
    ---
    :::
    :::projects-gallery-image
    ---
    name: 2025-10-14.Progressions_wnijmr.png
    index: 3
    alt: Progressions Overview
    ---
    :::
    :::projects-gallery-image
    ---
    name: 2025-10-14.Results_bq5tsc.png
    index: 4
    alt: Results Overview
    ---
    :::
    :::projects-gallery-image
    ---
    name: 2025-10-14.Participant_Dashboard_hdqlki.png
    index: 5
    alt: Participant Dashboard
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

        The platform serves as a complete solution for research teams to collaborate on studies, manage participants, collect diverse data types, and analyze results—all while maintaining data integrity and supporting complex study workflows.
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
    Building a comprehensive SaaS platform for research studies required solving complex technical challenges while maintaining usability for non-technical researchers.

    **Key Features Implemented:**
    - **Visual Flow Designer**: Drag-and-drop interface for creating study workflows with branching logic and randomization
    - **Flexible Data Collection**: Dynamic schema validation supporting diverse task types (surveys, cognitive tests, behavioral assessments)
    - **Multi-tenant Architecture**: Team-based isolation with role-based permissions
    - **Participant Tracking**: Real-time progression monitoring with visual status indicators
    - **Advanced Analytics**: JSON-indexed queries for efficient result aggregation

    **Core Technical Solutions:**

    **1. Graph-Based Flow Architecture**  
    Implemented a directed graph structure using FlowElements and FlowLinks to enable researchers to create complex study workflows. Developed a graph traversal algorithm to determine execution order and validate flow integrity, ensuring participants always have a valid path from START to END.

    **2. Dynamic Schema Validation**  
    Designed a hybrid approach combining ResultVariable models (defining data structure with metadata) and JSON storage with PostgreSQL GIN indexing. This achieved schema flexibility without migration overhead while maintaining type safety and query performance through runtime Zod schema generation.

    **3. Results Visualization**  
    Created an intuitive color-coded system for displaying participant progress—colored cells for completed tasks, grey + hatched pattern for pending ones. Ordered task columns by flow sequence and designed visual legends with accessibility considerations (pattern + color).

    :::
::
