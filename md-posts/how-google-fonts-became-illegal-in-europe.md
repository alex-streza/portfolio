---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: Feb 17 2022
description: GDPR & EPR restrictions aren’t well known to developers outside of the EU or small websites with no legal team and this can affect many applications out there. Recently an article surfaced on…
title: How Google Fonts Became Illegal in Europe
readTime: 5 min read
name: Alex Streza
---

# How Google Fonts Became ‘Illegal’ in Europe

## Cookies are everywhere

![](https://miro.medium.com/max/1400/1*q9RQfMwULW7MW3drQkaH2A.png)

GDPR & EPR restrictions aren’t well known to developers outside of the EU or small websites with no legal team and this can affect many applications out there.

![](https://miro.medium.com/max/1400/0*45n09jQjl04A5vLw.png)

Cookies are the Definition of Annoying

# Google Fonts Illegal?

**_Yes & No_**

Recently an article surfaced on [HackerNews](https://thehackernews.com/2022/01/german-court-rules-websites-embedding.html?fbclid=IwAR3toxj3Ipm9c4NaSf46iU2bvqeeiC9Aiw2R5-8sBW9WpnA50Lg5cuUWfeM) stating how a German court ordered a website operator to pay up to €100 for unknowingly sending the user's IP to Google via embedding a [Google Fonts](https://fonts.google.com/) script.

![](https://miro.medium.com/max/1400/1*jJX7jcUdaVXzgQAwo-J-uA.png)

That sounds like a very improbable thing to happen to you because you may be hosting the fonts on your own server so you’re saved. Unfortunately, this doesn’t apply only to [Google Fonts](https://fonts.google.com/), most Google APIs are infamous for recording user data in some shape or form.

The puny penalty isn’t that scary for large businesses but it should raise the question if it’s worth ignoring it further and risk higher penalties since solving it isn’t really that much of a hassle.

# What are GDPR & EPR

**_Overly complicated legal stuff no developer likes._**

The [General Data Protection Regulation](https://gdpr.eu/what-is-gdpr/) (GDPR) is the world’s most stringent privacy and security regulation. Despite the fact that it was designed and enacted by the European Union (EU), it imposes duties on enterprises everywhere that target or collects data about EU citizens. On May 25, 2018, the regulation went into force.

Those that break the GDPR’s privacy and security regulations will face severe fines, with penalties ranging in the tens of millions of euros.

Let’s give a more serious example that could actually cause real allegations for user tracking. I recently launched [GenIdea](https://www.genidea.app/) an OpenAI powered App Idea Generator and wanted to try the brand new [Google Analytics 4](https://analytics.google.com/) API out of pure curiosity.

GA4 is probably the single most intrusive tracking software you could implement in a website and luckily I remembered just in time to comply with GDPR policies and added consent to the cookies feature.

![](https://miro.medium.com/max/1400/1*R5jiu-u-ehVhl6GbUKBR5w.png)

Google Analytics 4 | Dashboard

A few weeks before the Google Fonts legal claim the Austrian Data Protection Authority (DSB) ruled that the use of Google Analytics by [NetDoktor](https://www.netdoktor.de/), a health-focused website, violates the GDPR regulation by exporting visitors’ data to Google servers in the United States, potentially opening the door to US intelligence surveillance.

This confirms the importance of giving users a way to decide which cookies they consent to even if it downgrades the user experience through annoying popups.

# How to comply with EU laws

**_Dreaded consent to cookies popup everywhere_**

There are 2 ways to do this and neither is really perfect, the most obvious one is simply not using any tracking APIs but this is debatable since even cookies are also considered as PII (personal identifiable information).

You may be lucky and your website is truly free of all possible GDPR violation-inducing features and you are good to go but if that’s not the case it’s cookies time.

Cookies have existed forever (since 94') and they are a standard for passing useful session information, authentication, or even tracking data back and forth between client and server.

How come cookies are the solution when they are also one of the main causes for personal data collection?

The [Cookie Law of 2011](https://www.cookielaw.org/the-cookie-law/) was the first to force website operators to be more careful in managing user data through cookies by requiring them to provide users with the choice of allowing or refusing the use of cookies.

![](https://miro.medium.com/max/1336/0*keevEOYN5V2-479K.jpg)

The solution is to give users a way to consent to cookies, this is most often implemented via an overlay/modal/popup that annoyingly covers most of the screen the second you enter the website. Obviously, this increases development time but I guess there’s always a balance between UX vs. DX (user experience vs. developer experience).

I found this situation utterly similar to the ‘[Calendar Apps Need All Permissions Fiasco](https://www.extremetech.com/extreme/124803-how-to-spot-android-scam-and-malware-apps)’ back in the day on Android devices.

That story deserves an article on itself but a few years ago App Permissions in Android were approved only once on installation and were ‘hidden’ within the settings menu. This caused the emergence of simple applications that requested all possible permissions in order to steal data or scam users.

Enough chitty chat and let’s try to implement a cookie consent feature. I will be using [CookieHub](https://www.cookiehub.com/) as it is speedy to integrate, has high customizability, and smooth developer experience.

First add your website's domain, select the Free plan or Premium if you have more than 25k monthly sessions, and follow the steps shown.

![](https://miro.medium.com/max/1400/1*KI-8TwYZsGLNoUgoSoAOog.png)

Next up I always love to customize and add the branding before embedding the scripts so extract your brand colors and make the cookie consent popup feel at home on your website.

![](https://miro.medium.com/max/1400/1*oepjeCeC0CrBeenIymxkzA.png)

In order to integrate the cookie consent feature, we have 2 options (or 3 if using WordPress). If you are using Google Analytics the best way would be to move the GA4 config to [Google Tag Manager](https://tagmanager.google.com/) and follow the steps shown in the tutorial.

![](https://miro.medium.com/max/1400/1*LoDtu_ylphIpbPZU4p3Pjw.png)

Google Tag Manager may be overwhelming at first with all the extra menus but following step by step the example and you will be ready to launch GDPR compliant in minutes.

If you are integrating with [Next.js](https://nextjs.org/) you can easily append the scripts to the document by creating a custom \_document.jsx file.

![](https://miro.medium.com/max/1400/1*SIlNef87Ve-uCpNkmKKFsg.png)

Hope you liked this short “legal” story, don’t forget to clap and follow for more software-related content 🚀.

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)_. Sign up for our_ [**_free weekly newsletter_**](http://newsletter.plainenglish.io/)_. Get exclusive access to writing opportunities and advice in our_ [**_community Discord_**](https://discord.gg/GtDtUAvyhW)_._