---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Mar 21st
description: We all know those countless, mandatory, post-pandemic Zoom calls where time seems to halt and all that is marvelous about a developer’s daily life turns to dust. Luckily some of us have more…
title: I Deep Faked Myself In Every Meeting For A Whole Week
readTime: 6 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/1*kYZIAxCrKFHZAUgL71vvzw.png)

# I Deep Faked Myself In Every Meeting For A Whole Week

## Not even one person noticed.

We all know those countless, mandatory, post-pandemic Zoom calls where time seems to halt and all that is **marvelous** about a developer’s daily life turns to **dust**. Luckily some of us have more enjoyable experiences. Although I usually have a decent time during meetings I decided to spice things up with **AI**.

How could I make a meeting more fun I wondered? How can something so dull and mundane be converted to a rainbow of laughter and joy. I found inspiration in a place that is not often roamed by developers like myself.

![](https://miro.medium.com/max/1280/1*AQKbr1L_wucmIX0R9ll8rw.png)

World War III Depiction by AI

That is the astonishing niche (more like a full on industry) of VFX & CGI focused YouTube channels, more precisely one of [Corridor Crew’s VFX videos](https://www.youtube.com/watch?v=qXLugdeogQU) which showcased an open-source project called [**DeepFaceLive**](https://github.com/iperov/DeepFaceLive)**.**

Funnily enough as I’m finishing up this article they’ve posted another great video covering [voice deep faking](https://www.youtube.com/watch?v=0fO7CBDMGNA) with a really hilarious back story that I won’t spoil for you.

# What are Deep Fakes

> Fake faces that seem **real**

They can be anything ranging from Barack Obama calling Donald Trump a “complete dipshit” or Mark Zuckerberg boasting about having absolute control over billions of people’s stolen data, both being fake videos.

![](https://miro.medium.com/max/1016/1*XR5lKbosFxmS0YSGN6ZAEg.png)

Deep Fake Of Tom Cruise

Deep Fakes are computer-generated videos where an AI replaces the face of a person with another while matching the tiny face gestures from talking to frowning.

They are often used in spreading **misinformation** even in the ongoing war in Ukraine or even creating adult content with popular celebrities' faces although it’s not always the mischief behind it and in my use-case, it’s all for fine laughter.

It’s also utilized by large-scale studios to recreate or expand on old movie scenes by **de-aging** actors (although this is done through other means as well).

> “In the twenty-first century, the robot will take the place which slave labor occupied in ancient civilization.” (Nikola Tesla)

Imagine gigantic corporations developing & selling Deep Fake services to allow automated newscast or even decrease the involvement of actors and replacing them with stuntmen with modified faces but there are still ways to go till then.

Researchers at universities and special effects businesses have long pushed the limits of video and picture manipulation.

A face-swap video can be made in a few steps. To begin, you must run millions of photos of the two persons through an encoder, which is an AI system. The encoder looks for and learns similarities between the two faces, then reduces them to their shared features, compressing the images.

The faces are then recovered from the compressed photos using a second AI system called a decoder. You train one decoder to recover the first person’s face and another decoder to recover the second person’s face since the faces are different.

You simply send encoded photos into the “wrong” decoder to achieve the face swap. A compressed image of person A’s face, for example, is supplied into a decoder that has been trained on person B. After that, the decoder reconstructs person B’s face using the expressions and orientation of face A. This must be done on every frame for a believable video.

![](https://miro.medium.com/max/1276/1*9EwVow8nuGmgr2NKaPBoOQ.png)

Deep Fakes in a nutshell

That entire process could take hours counting both training the model for face A & B and the merging of the faces in the videos but nowadays can be done almost in **real time.**

One thing to note is that deep-fake technology exists for audio streams and images as well and some states have even **banned** deep fakes used with evil purposes and without consent.

# How To Deep Fake Live

> Press run and be stupefied

AI **evolves** faster than the speed at which metaverse scams reach sold-out status and that can be scary at times. We went from AI being able to sort of accurately tell apart pictures of dogs & cats to it soon being able to read into our souls and lead societies.

![](https://miro.medium.com/max/1400/0*DGzOG0S6KTF96qwK)

AI can be friendly

Let’s forget about AI conquering the world for a bit and see how to use it in a fun, light-headed way that could make your colleagues smile or gasp when they find out you are not actually a discounted version of a movie star or imaginary political figure.

I’m saying all those fictitious sounding words because using deep-fakes of real persons can be deemed illegal without consent even in laughable situations, but that is easily solved since the repository provides a set of non-existent persons that may have some similarities with real people which are undoubtedly **accidental**.

![](https://miro.medium.com/max/1400/1*-cIv76PLu8FALk2S_x9yJQ.png)

Public Face Models

There’s also an example of a TikTok live stream with an ‘Arnold Schwarzenegger’ deep fake speaking Russian which is just gorgeous.

![](https://miro.medium.com/max/1000/1*IkpBfcoeh3NZQLUoMEjJ9A.png)

TikTok Livestream Deep Fake

If you are already **sold** and want to try it yourself, check out the [official repository](https://github.com/iperov/DeepFaceLive) and star it since it’s incredible to have something so powerful for free. If you want to skip reading the code and compiling it yourself you can download the .exe file from the external links listed in the Readme.

Extract the zip and run the .bat file and get ready to be deep faked. 😎

![](https://miro.medium.com/max/1400/1*eDZZVepRR_ayo6luqCQxYA.png)

Make sure to choose GPU everywhere since it’s typically much more competent at running AI-intensive tasks than CPU.

You can customize the software to run on videos & live streams, keep in mind that using the live feature may cause lag and delays if your PC isn’t **beefy** enough.

My first attempt was underwhelming since I was testing it on my laptop and it just couldn’t keep up with the live running at less than 5 frames per second which was truly unusable during calls.

The video output also went black due to the resource demand and it all fell apart quickly but I didn’t give up and managed to Kim Jarrey myself using a GTX 1070 while on a call with a couple of friends and it lead to an **unforgettable** reaction.

Hope you liked this short “AI/Deep Fake” story, don’t forget to clap **👏** and follow for more software-related content 🚀.
