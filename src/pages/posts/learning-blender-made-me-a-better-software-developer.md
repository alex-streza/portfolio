---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: Jan 31 2022
description: That was me in 2017 when I first heard of it, as I wanted to create a game using Unity and I wanted to create custom 3D models. Blender was the most popular free 3D software, or at least that was the…
title: Learning Blender Made Me A Better Software Developer
readTime: 5 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/1*KTM29ODeFrmr050nQe5SjA.png)

# Learning Blender Made Me A Better Software Developer

## Blender’s interface is scary at first sight but it shouldn’t be

# Intro

That was me in 2017 when I first heard of it, as I wanted to create a game using [Unity](https://unity.com/) and I wanted to create custom 3D models. Blender was the most popular free 3D software, or at least that was the first result Google gave me.

I was still in college and my overall programming language wasn’t that extensive so I gave up on that project and went on with my life like Blender never existed.

I ended up working as a front-end developer mainly with [React](https://reactjs.org/) & [Next.js](https://nextjs.org/) and I fell completely in love with the beauty of UI design and the importance of UX. I wanted to build products from the ground up through all the stages, from wireframing and design to coding, launching, and marketing.

At the end of 2020, I discovered the marvellous world of 3D Web-based animations which introduced me to a whole new space. On that day, I found [Awwwards](https://www.awwwards.com/), and at that moment, **I knew that I knew nothing.**

![](https://miro.medium.com/max/1400/1*Vr74XND0WAK9eD_uJFO7ug.png)

Awwwards Homepage

Smooth, stunning animations, 3D models, tiny interactions were some of the things that vexed me. As software developers, we often get too caught up in the functionality and forget the presentation, but when creating a product, both are essential.

I sincerely had no idea how most of the websites were built so I researched it, and boy what a research that was! I’m proud I can finally say I have at least some idea 😅.

# How to 3D in Web?

Some extremely smart people created WebGL which is a low-level 3D API native to the browser that uses the HTML Canvas and provides access through JS. Unfortunately, it’s hard as it requires learning GLSL a language similar to C that executes directly on the GPU, on top of that you need to know **math.**

Yeah, you heard me right, to get that Awwwards-worthy animation, you kinda need math.

Here comes **Three.js** to the rescue. Web developers love their NPM packages since there’s a package for anything and everything and this applies to 3D as well.

Three.js is a wrapper over the existing WebGL API and provides a simpler, more JS-oriented approach to creating 3D scenes with less math needed.

Let me give some example websites and discuss the possible tooling involved on the development side of things.

## 1\. [Github](https://github.com/)

![](https://miro.medium.com/max/1400/1*O6MXfVZ5Xw6BYmGCtylGnA.png)

Github Landing Page

You likely had no idea Github used ThreeJS in their landing page, it’s insane how they are presenting commits/issues/PRs opened in real-time.

Tooling: React & [GSAP](https://greensock.com/gsap/) & Three.js (only for this landing page)

## **2\.** [**Swell Gallery**](https://gallery.swell.ripple.com/)

![](https://miro.medium.com/max/1400/1*C8qQtkLOwGGWaUiKBZGasA.png)

Swell Gallery Homepage

Looks like a 3D Gallery to showcase Ripple curated NFTs, combines smooth transitions with rendering 3D models and animations.

Minimalistic interface with a lot of emphasis on the showcased art, uses background music to create a soothing atmosphere.

Tooling: Next.js & [GSAP](https://greensock.com/gsap/) & Three.js (or [react-three-fiber](https://github.com/pmndrs/react-three-fiber))

## 3\. [Three.js Journey](https://threejs-journey.com/)

![](https://miro.medium.com/max/1400/1*BpJBITO4vLk6J3-SX5VoTw.png)

ThreeJS Journey Presentation Page

A great course about Three.js and 3D in general made by Bruno Simon, the storytelling and presentation are simply creatively stunning and gorgeous.

Uses custom 3D models to showcase its chapter of the course in a very interactive way from lasers to drones and conveyor belts.

Tooling: Vanilla JS & [GSAP](https://greensock.com/gsap/) & Three.js

> Since we are more familiar with the 3D Web Dev landscape where does Blender come into in all this inner 3D awakening?

Other than the smooth experience, what makes these websites so unique is the content which consists of 3D models most of the time. Content is **king**. Blender is extremely powerful for anything 3D-related from sculpting to animation and composition and the best thing is it’s **free.**

# How to Blender?

2 words. Tutorials and Patience.

If you don’t know where to start, I highly recommend watching [Blender Guru](https://www.youtube.com/c/BlenderGuruOfficial)’s Donut Tutorial for beginners which he recently update for the latest Blender version. It’s in-depth and **easy to follow** and it should teach you the basics in most of Blender’s features.

It’s very important to make your own projects after finishing tutorials as following tutorials may produce great renders but the creative process is also very important.

![](https://miro.medium.com/max/1400/1*wKcggeN0zQGfB6MXk4FEeQ.png)

Blender Guru’s Donut 3.0 Tutorial

I’ve been learning 3D for about 5 months balancing with my other side-hustles and a full-time frontend developer job but there’s so much more work to put in to get to where I want to.

Learning Blender by itself didn’t make me a better programmer but understanding and seeing similarities in its features to other software.

**Versatility** is an important trait to a developer, being able to adapt swiftly to new software whether it’s a library, API, or full-blown application.

What’s amazing about Blender is that not only is it free but also [open-source](https://github.com/blender/blender), it also provides an API to interact with the software through [**Python** scripts](https://docs.blender.org/api/current/index.html)!

Funnily enough one of my first projects with Blender involved a Python script that automated the generations of NFTs by mixing 3d models, lights, materials and background HDRIs. Yeah, that’s a mouthful and also NFTs yuck.

![](https://miro.medium.com/max/1144/1*bWIzLDU4EJ6T9F6mH1JEqw.png)

Sample Outputs of the Generator

Keep in mind that the Python API has updates with every new version of Blender — I was using 2.9 at the time. Check the code [here](https://github.com/alex-streza/generative_art/blob/master/nfts/memphrane/generate.py), it’s far from perfect or optimized but it worked its purpose.

The script also required setting up the scene ahead of runtime, I just couldn’t find ways to do it with Python only. Things like prepping materials adding models to mix and match as showcased in code.

If anyone wants to give it a try let me know and I’ll append the .blend file to the repo. Hope you liked this Web Dev and Blender showcase article, give a 👏 and follow for more tech content 💜.

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)_. Sign up for our_ [**_free weekly newsletter_**](http://newsletter.plainenglish.io/)_. Get exclusive access to writing opportunities and advice in our_ [**_community Discord_**](https://discord.gg/GtDtUAvyhW)_._
