---
title: 'NeuroTrainer'
description: 'VR tool for neurosurgeons and radiologists at HUG to explore MRI and CT volumes in real time. Custom HLSL shader for 3D texture rendering; streaming architecture to handle 100 GB+ datasets without VR latency.'
image: neurotrainer.1_ozaifn.png
date: 2022
---

<!-- Project heading and meta info (date, type) -->
::projects-header
---

title: NeuroTrainer
publishDate: 2022
tag: VR · Unity · Medical Imaging
---

::

<!-- Project gallery -->
::projects-gallery
    :::projects-gallery-image
    ---
    name: neurotrainer.1_ozaifn.png
    index: 0
    alt: NeuroTrainer 1
    ---
    :::
    :::projects-gallery-image
    ---
    name: neurotrainer.2_csyefm.png
    index: 1
    alt: NeuroTrainer 2
    ---
    :::
    :::projects-gallery-image
    ---
    name: neurotrainer.3_rlyxbc.png
    index: 2
    alt: NeuroTrainer 3
    ---
    :::
::

::projects-sections
<!-- Single project left section details -->
    :::projects-left-section
<!-- . Partner -->
        ::::projects-left-block
        #title
        Clinical partner

        #details
        Researcher: Daniel Kiss
        Affiliation: HUG — Hôpitaux Universitaires de Genève
        ::::

<!-- . Objective -->
        ::::projects-left-block
        #title
        Objectives

        #details
        {{ $doc.description }}

        The clinical workflow before this tool required radiologists to interpret flat 2D slices on standard monitors. In VR, the same data becomes navigable in three dimensions — changing both how anatomy is taught and how surgical approaches are planned.
        ::::

<!-- . Tools & Technologies  -->
        ::::projects-left-block
        #title
        Tools & Technologies

        #details
        Unity, C#, Shaders, HLSL
        ::::
    :::

<!-- . Challenge -->
    :::projects-right-section
    #title
    Challenge

    #details
    Two problems defined this project.

    **Rendering MRI volumes in VR.** MRI and CT data isn't a stack of images — it's a 3D texture that needs to be sampled along arbitrary ray paths in real time. No standard Unity shader handles this. I wrote a custom HLSL shader that performs direct volume rendering: ray-casting through the 3D texture, compositing density values into colour, and mapping transfer functions for contrast. Getting it to run at 90 fps in VR, on hardware a hospital could actually buy, required careful optimisation of the sampling step and early-exit conditions.

    **Streaming datasets without lag.** A single MRI scan can exceed 100 GB. Loading it into memory isn't an option in VR — a frame drop at the wrong moment causes immediate nausea. I built a streaming architecture that loads volumetric slabs on demand, pre-fetching the next region by spatial proximity before it's needed. The result: continuous navigation through the full dataset with no perceptible load stutter.

    Building for VR in a clinical context taught me something about constraints: the hardware ceiling is low, the tolerance for error is zero, and the people using it have no patience for UX that gets in the way of their work.
    :::
::

## Watch the video

::cloudinary-video
---

videoId: NeuroTrainer-resized_ui8ak9.mp4
---

::
<!-- Related projects -->
