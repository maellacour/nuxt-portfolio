---
title: 'TikTik'
description: 'Cooperative 2D puzzle game for a cognitive science study at the University of Geneva. Built in Unity with local/online multiplayer, voice chat, controller support, a replay system for researchers, and a custom level editor.'
image: tiktik.hero.png
date: 2023
---

<!-- Project heading and meta info (date, type) -->
::projects-header
---

title: TikTik
publishDate: 2023
tag: Unity · Local/Online Multiplayer · Cognitive Research
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
        Unity, C#, Unity Netcode, Unity Relay, Vivox, Parse (server), Azure
        ::::
    :::
<!-- . Challenge -->
    :::projects-right-section
    #title
    Challenge
    #details
    I led a team of three on this project, managing scope and architecture across three years of active development. One colleague handled visual effects and UI; another built the particle system and the initial replay system. I owned core gameplay, multiplayer infrastructure, and the research data pipeline.

    The project grew from a local multiplayer prototype into a fully online cooperative experience. Online multiplayer introduced a different class of problems: session management, relay-based connectivity, role assignment (Fire/Ice), and synchronising game state across unreliable connections. I integrated Unity Netcode and Unity Relay, then layered Vivox voice chat on top — with per-session channels and voice recording capture tied to the replay timeline.

    The replay system is the core research instrument. It records frame-level player positions, blocking states, and voice audio, all stamped in UTC and uploaded to a Parse backend with retry logic and conflict resolution. Researchers can reconstruct exactly what each player did, said, and when — down to the frame. Getting the data model right so it was both faithful and resilient took many iterations, particularly around edge cases in multiplayer session initialisation.

    The level editor was built so researchers could author new puzzle configurations without touching code — JSON-driven level maps, loaded at runtime, editable through a custom in-engine tool.

    The project has since attracted interest beyond the lab: it is currently being evaluated as an assessment task by an HR company, which introduced a new set of requirements around user management, database isolation, and deployment for non-research contexts.

    Throughout, the central tension was the same: players who need to be engaged, and researchers who need the data to be clean.
    :::
::

## Watch the video

::cloudinary-video
---

videoId: tiktik.com.video-com_zl3hir.mp4
---

::
<!-- Related projects -->
