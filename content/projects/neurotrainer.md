---
title: 'NeuroTrainer'
description: 'A virtual reality tool for viewing health data from MRI, CT, and similar scanners.'
image: neurotrainer.1_ozaifn.png
date: 2022
---

<!-- Project heading and meta info (date, type) -->
::projects-header
---

title: NeuroTrainer
publishDate: 2022
tag: Unity 3D, VR, MRI
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
        Research partner

        #details
        Researcher: Daniel Kiss  
        Affiliation: HUG
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
        Unity, C#, Shaders, HLSL  
        ::::
    :::

<!-- . Challenge -->
    :::projects-right-section
    #title
    Challenge

    #details
    This project presented two major challenges. The first is the display of IRM data, which is presented as a "3D Texture" of sorts. This required the creation of a specific HLSL shader for this data.

    The second challenge concerns the volume of data. An MRI scanner can very easily reach a hundred GB, so it's important to split up the data to avoid lags, which are very annoying in VR.
    :::
::

## Watch the video

::cloudinary-video
---

videoId: NeuroTrainer-resized_ui8ak9.mp4
---

::
<!-- Related projects -->
