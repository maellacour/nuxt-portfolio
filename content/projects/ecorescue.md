---
title: 'EcoRescue'
description: 'Action game for adolescents, built for a University of Geneva anxiety study funded by the SNSF and the European Research Council. Players depollute planets across galaxies — the gameplay data feeds longitudinal research on anxiety and attention.'
image: EcoRescue.Hero.png
date: 2022
---

<!-- Project heading and meta info (date, type) -->
::projects-header
---

title: EcoRescue
publishDate: 2022
tag: Unity · Research · UNIGE
---

::

<!-- Project gallery -->
::projects-gallery
    :::projects-gallery-image
    ---
    name: Galaxie2_ywtmek.png
    index: 0
    alt: EcoRescue Galaxy
    ---
    :::
    :::projects-gallery-image
    ---
    name: Collection_fpox3r.png
    index: 1
    alt: EcoRescue Collection Stickers
    ---
    :::
    :::projects-gallery-image
    ---
    name: Desert_vw4zm7.png
    index: 2
    alt: EcoRescue Desert
    ---
    :::
    :::projects-gallery-image
    ---
    name: Statistics.EcoRescue_ufg8mb.png
    index: 3
    alt: EcoRescue Statistics
    ---
    :::
    :::projects-gallery-image
    ---
    name: AllCleanPlanets_aa1zkz.png
    index: 4
    alt: EcoRescue all clean planets
    ---
    :::
    :::projects-gallery-image
    ---
    name: EcoRescue.Partners_t5x93h.png
    index: 5
    alt: EcoRescue partners
    ---
    :::
::

::projects-sections
<!-- Single project left section details -->
    :::projects-left-section
<!-- . Partner -->
        ::::projects-left-block
        #title
        Research partner

        #details
        Researcher: Naima Gradi
        Position: PhD Fellow

        Professor: Daphne Bavelier
        Affiliation: University of Geneva — Professor of Brain & Cognitive Sciences · ERC Synergy grant holder

        Professor: Swann Pichon
        Affiliation: HES-SO
        ::::

<!-- . Objective -->
        ::::projects-left-block
        #title
        Objectives

        #details
        {{ $doc.description }}

        The research hypothesis: fast-paced, positive-valence gameplay could measurably reduce anxiety and improve attention in adolescents over a multi-week intervention. My team at FCBG built the game and the data collection layer — the researchers designed the protocol and interpreted the results.
        ::::

<!-- . Tools & Technologies  -->
        ::::projects-left-block
        #title
        Tools & Technologies

        #details
        Unity, C#, Shaders, HLSL
        ::::

<!-- . Funding -->
        ::::projects-left-block
        #title
        Funding

        #details
        Swiss National Science Foundation grant (10001C_212812)
        European Research Council Synergy grant — The Self-Teaching Brain (810580)
        ::::
    :::

<!-- . Challenge -->
    :::projects-right-section
    #title
    Challenge

    #details
    The core tension: the game had to be genuinely fun for teenagers — or the intervention data would be meaningless. But every session also had to produce clean, structured behavioural records for a longitudinal study. Fun and measurement pull in opposite directions. Solving that meant designing gameplay loops where the data collection was invisible: timed events, accuracy tracking, and session metadata logged continuously without interrupting the experience.

    Technically, this required a statistics and event system that captured task performance at the moment of action — not reconstructed from replay — and serialised it cleanly to formats the research team could ingest directly. Session integrity was non-negotiable: a crashed session with partial data is worse than no session at all.

    The collaboration model with UNIGE and HES-SO shaped how we iterated. Researchers defined the measurement targets; my team at FCBG translated those into game mechanics and instrumentation. Every design decision had both a player rationale and a scientific one.
    :::
::

## Watch the video

::cloudinary-video
---

videoId: EcoRescue.Video.mov
---

::
<!-- Related projects -->
