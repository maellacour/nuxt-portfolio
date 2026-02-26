---
title: 'TikTik'
description: 'Cooperative 2D puzzle game for a cognitive science study at the University of Geneva. Built in Unity with local multiplayer, controller support, a replay system for researchers, and a custom level editor.'
image: tiktik.hero.png
date: 2023
---

<!-- Project heading and meta info (date, type) -->
::projects-header
---

title: TikTik
publishDate: 2023
tag: Unity · Multiplayer · Cognitive Research
---

::

<!-- Project gallery -->
::projects-gallery
    :::projects-gallery-image
    ---
    name: tiktik.cooperate
    index: 0
    alt: Coop Multiplayer
    ---
    :::
    :::projects-gallery-image
    ---
    name: tiktik.controller-support
    index: 1
    alt: Controller support
    ---
    :::
    :::projects-gallery-image
    ---
    name: tiktik.design
    index: 2
    alt: Design your own levels
    ---
    :::
::

::projects-sections
<!-- Single project left section details -->
    :::projects-left-section
<!-- . Partner -->
        ::::projects-left-block
        #title
        Research context

        #details
        Researcher: Cvetomir Dimov
        Affiliation: University of Geneva

        The study examines cooperative decision-making — how pairs of players communicate, adapt, and solve problems together under time pressure.
        ::::

<!-- . Objective -->
        ::::projects-left-block
        #title
        Objectives

        #details
        {{ $doc.description }}

        For the researcher, it had to capture precise event data on cooperative decision-making. For the players, it had to feel like a real game — not a test. Those two requirements drove every design decision.
        ::::

<!-- . Tools & Technologies  -->
        ::::projects-left-block
        #title
        Tools & Technologies

        #details
        Unity, C#, Server, Azure
        ::::
    :::

<!-- . Challenge -->
    :::projects-right-section
    #title
    Challenge

    #details
    I led a team of three on this project. We divided scope clearly: one colleague handled visual effects and UI; another built the particle system and a replay system that gave researchers a visual timeline of each session. I handled core gameplay systems.

    Local multiplayer in Unity requires careful input routing — each controller needs its own player instance with no shared state. I built the input layer from scratch, handling controller assignment, disconnection recovery, and split-screen coordination. Level data is serialised to JSON and loaded at runtime, which meant building a level editor that non-programmers on the research team could use to create new puzzle configurations without touching code.

    The replay system was the subtlest challenge. It needed to be accurate enough for a researcher to reconstruct exactly what each player did and when — frame-level event logging, not a video. Getting the data model right so it was both faithful and compact took several iterations.

    The project demonstrated what it means to build for a dual audience: players who need to be engaged, and researchers who need the data to be clean.
    :::
::

## Watch the video

::cloudinary-video
---

videoId: tiktik.com.video-com_zl3hir.mp4
---

::
<!-- Related projects -->
