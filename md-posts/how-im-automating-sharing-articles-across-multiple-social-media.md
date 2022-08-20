---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: Mar 10 2022
description: With this guide, you can now share your articles automatically across different social media platforms without having to do it manually every time.
title: How I’m Automating Sharing Articles Across Multiple Social Media
readTime: 5 min read
name: Alex Streza
---

# Automating Sharing Articles Across Multiple Social Media In Minutes

## Automation > Manual Labour

Writing is fun and extremely **rewarding** but sharing your articles across all of your social media accounts is exactly the opposite, so I went on a journey to fix it through automation, oh and what a journey it was.

![](https://miro.medium.com/max/1400/0*uRdLs_iwULpjr4uE.jpg)

Developers Being Developers

# The Mission

_Beep Bop. Initiating Share Automation._

I’m far from a writing machine or a full-fledged publication turning in dozens of articles a week so my desire for an automated workflow is no more than a **kink**.

But I’m a developer and that means I will always prefer writing code for 5 hours to solve a task I could have easily, manually done in 5 minutes.

![](https://miro.medium.com/max/1280/1*WJdBxn_D-JSbk0p0icIwrA.png)

Robot Revolution Generated With AI

I publish only 2–3 times a week and on a pretty tight schedule every Monday & Friday (sometimes Wednesday too) so the script should check the Medium API for a new article on those days.

A couple of days ago I decided to build some kind of automated pipeline that listened to Medium article posts in order to share them across my Twitter (brand new) and LinkedIn.

It should perform the following:

- run on a schedule
- extract title, description, URL & tags from post meta
- format data to resemble a tweet/post
- post to Twitter
- post to LinkedIn

# **Medium API**

Great but not enough.

Like most platforms out there Medium provides a simple but efficient [API](https://github.com/Medium/medium-api-docs#31-users) that can be accessed through third-party services via the Developer: Manage Applications setting.

![](https://miro.medium.com/max/1400/1*u0_WIZGSPWHBNwD4NTgwFQ.png)

Add OAuth Application Form

You can consume the API through a simple NodeJS server by sending HTTP requests to the endpoints documented here.

That’s all nice & dandy so let’s not read the documented endpoints and go straight to writing code. (Obvious **mistake**)

A bit later I discovered there’s no way to get the post of a certain user through the official API as it allowed only the following:

- Authentication
- Current Users Data
- Get Publications
- **Create** Posts
- Upload Images

No endpoint for requesting the latest post of a user… so a lot of work for nothing, being honest automating a task like this with traffic this low is similarly obsolete.

Seeing the Medium API didn’t present something like this made me lose hope and I almost gave up.

Luckily I came across this marvelous repository [Medium Posts API](https://github.com/david-fernando/medium-posts-api) which returns JSON formatted data with the exact fields I was looking for (except tags)

It doesn’t even require authentication, you simply make a GET request and get the post data:

[https://mediumpostapi.herokuapp.com/?usermedium=username](https://mediumpostapi.herokuapp.com/?usermedium=yourmediumusername)

Unfortunately, I couldn’t make it work for my username for some reason 😢, so I had to **move on** to a different, forgotten approach.

# RSS to the rescue

Not an anagram of the USSR.

## Isn’t that boomer tech?

RSS stands for “rich site summary” or “straightforward syndication,” depending on who you ask. RSS, at its core, refers to simple text files containing necessary, up-to-date information — news stories, articles, and the like.

This pared-down content is sent into a feed reader, an interface that translates RSS text files into a stream of the newest news from around the web.

As internet content became more complex, so did RSS files, quickly adopting images, video, and more, but still in a stripped-down format for more effortless loading and compatibility across all feed readers.

![](https://miro.medium.com/max/1400/1*l53PrNBUkyN2B54EiAqVBQ.png)

Medium RSS Feed API Sample

## Why RSS?

Since RSS in a **nutshell** is a way to access site information in XML format and Medium provides a [**feed API**](https://help.medium.com/hc/en-us/articles/214874118-Using-RSS-feeds-of-profiles-publications-and-topics) for profiles we can parse the data and select the latest post of a user.

[https://medium.com/feed/@alex.streza](https://medium.com/feed/@alex.streza)

All we need to do now is write some code to get the first post in the array and select title, description, URL, and categories (tags). Hmmm what if we write **No Code.**

# No Code Automation

What a twist.

Hear me out before going all \`choosing no code instead of code is an act of blasphemy and should be punished\`.

I love coding and creating software but trying out different tools to **boost** productivity and decrease complexity is something I support.

A few days ago [Integromat](https://www.integromat.com/en) rebranded to [Make](https://www.make.com/en). If you haven’t heard of it, it’s popular for making it extremely simple to link apps and automate workflows. as can easily move data between apps so you can focus on building your business.

That’s a mouthful and a lot of bragging but they are actually right, I have never seen a tool with so many third-party integrations (**~1095**) and a node-based editor for workflows so performant while web-based.

![](https://miro.medium.com/max/1400/1*xLlVMXlazCyFPS4NqlZreA.png)

Social Media Auto Share Flow

## **Guide**

Go to [Make](https://www.make.com/en/register) and create a free account, keep in mind some nodes are available only for paid plans such as the Twitter integration.

Log in and jump to Scenarios and create a new one, you can follow the tutorial modal or play around for a bit.

![](https://miro.medium.com/max/1400/1*c3edUnJHPisVA5PtXPf_hw.png)

Now in the Scenario Editor, you can click anywhere to add a module (for integration or processing). Search for the RSS feed and choose Watch RSS feed items and add the Medium feed URL that matches your username.

To format the text for the posts you can use a Tool Transformer node and use the UI to select fields and format them as you wish.

![](https://miro.medium.com/max/1400/1*_ZhMZtOndUIg7bEejseT2g.png)

Split the output with a Router node and send it towards a LinkedIn & Twitter or any other Social Media you desire. You’ll have to create a connection for each account and pass the text in status (for Twitter) and content (for LinkedIn).

I’m not certain how to debug a workflow without triggering the APIs to see whether the text is formatted correctly so be wary to not multi-post while playing around.

Hope you liked this ‘Automation’ story following the steps to creating a **No Code Automated Scenario** with Make. Don’t forget to **follow** and **clap** for more marvelous software-related stories coming twice a week 🚀.

_More content at_ [**_PlainEnglish.io_**](https://plainenglish.io/)_. Sign up for our_ [**_free weekly newsletter_**](http://newsletter.plainenglish.io/)_. Follow us on_ [**_Twitter_**](https://twitter.com/inPlainEngHQ) _and_ [**_LinkedIn_**](https://www.linkedin.com/company/inplainenglish/)_. Join our_ [**_community Discord_**](https://discord.gg/GtDtUAvyhW)_._
