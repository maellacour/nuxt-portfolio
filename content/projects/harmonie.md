---
title: 'HarMoNie'
description: 'Mobile app for the Haute École de Musique de Genève — multilingual health education for musicians. Prereq-gated lessons, interactive quizzes, photo and video content across FR/EN/DE. Built with Flutter.'
image: harmonie-hero.png
date: 2025
---

<!-- Project heading and meta info (date, type) -->
::projects-header
---

title: HarMoNie
publishDate: 2025
tag: Mobile · Flutter · Education
---

::

<!-- Project gallery -->
::projects-gallery
    :::projects-gallery-image
    ---
    name: harmonie-hero.png
    index: 0
    alt: HarMoNie Logo
    ---
    :::
    :::projects-gallery-image
    ---
    name: harmonie-activities.png
    index: 1
    alt: HarMoNie Activities
    ---
    :::
::

::projects-sections
<!-- Single project left section details -->
    :::projects-left-section
<!-- . Partner -->
        ::::projects-left-block
        #title
        Partners

        #details
        Haute École de Santé de Genève
        Haute École de Musique de Genève
        ::::

<!-- . Objective -->
        ::::projects-left-block
        #title
        Objectives

        #details
        {{ $doc.description }}

        Musicians face specific occupational health risks — hearing damage, repetitive strain, performance anxiety — that general health resources don't address. HarMoNie gives students a structured, self-paced path through that content, commissioned directly by the HEM faculty.
        ::::

<!-- . Tools & Technologies  -->
        ::::projects-left-block
        #title
        Tools & Technologies

        #details
        Flutter, Dart, Markdown, Figma, GitHub
        ::::
    :::

<!-- . Challenge -->
    :::projects-right-section
    #title
    Challenge

    #details
    The content architecture was the first challenge. Health education for musicians spans multiple topics, each with prerequisites — you don't explain hearing protection before you've established how sound damages tissue. I built a prerequisite graph over the lesson structure so students are only unlocked the content they're ready for, in the right sequence, regardless of language.

    Localising across French, English, and German meant every piece of content — text, images, embedded video — had to be managed in parallel. I designed a Markdown-based content system that keeps translations co-located and makes it straightforward for non-developers at HEM to update material without touching code.

    The second challenge was engagement. Musicians aren't patients — they don't respond to clinical tone or passive reading. I built game-like features into the learning flow: "spot the 7 errors" exercises and quiz modules that give immediate feedback. The goal was to make the health content feel like part of their craft education, not a compliance requirement.
    :::
::

<!-- Related projects -->
