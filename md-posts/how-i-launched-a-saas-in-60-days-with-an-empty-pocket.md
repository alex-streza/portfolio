---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Feb 9 2022
description: You have an idea and want to turn it into a full-fledged product but are afraid of costs and don’t have the business acumen or knowledge to get funds for others to help you build it. That sounds a…
title: How I Launched a SaaS in 60 Days with an Empty Pocket
readTime: 6 min read
name: Alex Streza
---

# How I Launched a SaaS in 60 Days with an Empty Pocket

## Building a SaaS is expensive unless you are a developer.

![](https://miro.medium.com/max/1400/1*VNjd_sg9sYsaaburpPm6PA.png)

SaaS — From Idea to Launch

You have an idea and want to turn it into a full-fledged product but are afraid of costs and don’t have the business acumen or knowledge to get funds for others to help you build it.

That sounds a tad bit depressing but don’t falter yet because if you are a **developer** you may be able to cut costs immensely in exchange for time and drive to learn new things. If you aren’t no worries, creating a no-code landing page is **eerily simple**.

I’ve been gathering the drive and motivation to build a digital product for a few years and last December I started building my first SaaS. I know not everyone is a developer but if you have even limited skills in tech you can create a no-code landing page to validate your idea.

Let’s see what are the main steps in building a SaaS and doing it efficiently.

# 1\. Having an Idea

_Where can I get a great idea?_

You may already have numerous ideas and any of them may be the next unicorn SaaS to be showcased on [ProductHunt](https://www.producthunt.com/) but you never know which will take off. My idea was exactly the lack of an idea, so I built an [AI App Idea Generation SaaS called GenIdea](https://www.genidea.app/).

![](https://miro.medium.com/max/1400/1*GV4WMrPti4atzOfpoQPxGA.png)

GenIdea Preview

Your idea can even not be entirely digital, platforms for your city/country for certain real services like food & transport if the local market isn’t already oversaturated with such apps.

# 2\. Validating the Idea

_Why do I care what others care about?_

Ideas are great but they need to solve a particular problem even if for a small niche if people don’t see it as a solution for their problems they won’t even look at it let alone buy it.

![](https://miro.medium.com/max/1400/0*mUovTsHOP7OYFR9a.png)

Apps count usage across age categories

If we are talking about mobile apps we can see that users access daily [a limited number of apps](https://www.simform.com/blog/the-state-of-mobile-app-usage/) and getting a spot in this exclusive category is hard especially competing with tech giants and apps like [TikTok](https://www.tiktok.com/@psyche.art) or [Instagram](https://www.instagram.com/psyche__art/).

Therefore **idea validation** is essential but how can you do it and do it mostly free.

First, you need to build a simple yet convincing landing page to present your product, and you can do that with the popular no-code tool [Webflow](https://webflow.com/).

Secondly, a feedback/email recollection from somewhere on the website so you can gather opinions regarding the need for an app/platform like yours.

I’ve gone for a more complex approach and built the MVP without this step and also skipped the Building an Audience one due to laziness and a do it later mentality which were mistakes.

# 3\. Building an Audience

_What is an audience and why do I care?_

I know you just want to see your idea take form and admire it but if you want to have a chance at getting it monetized so others can cherish it this step is essential.

Having a great product and no one knowing about it is the most common cause for failure in launching a successful SaaS. Not having a social media account with thousands of followers isn’t an excuse, and the best way to fix that is to make one now.

![](https://miro.medium.com/max/1400/1*sqiUwIelsxjf5Wanhq-u8g.png)

Sample Medium stats

A great platform for logging and connecting with potentials users is none other than Medium since many developers use it and can provide feedback or even advice.

Creating a series of weekly Dev Log articles or even a YouTube channel covering your progress is a great idea. (I wish I did that already)

Another way of reaching potential users is by creating an email list with a service like [MailChimp](https://mailchimp.com/). I used it for the subscription form and it had a nice developer experience and it’s also free for up to 2000 contacts.

# 4\. Creating the MVP

_How can I do that for free?_

Creating a software product is a complex and rather expensive endeavour and doing it quickly is even more difficult. I narrowed down what I consider the fastest techs to use to develop a SaaS.

![](https://miro.medium.com/max/1400/1*mI3Y1o7c48QaWXlJuqgbZQ.png)

GenIdea MVP Landing Page

1.  Design — [Figma](https://www.figma.com/)
2.  Front-End Framework — [React](https://reactjs.org/)/[NextJS](https://nextjs.org/)
3.  CSS — [TailwindCSS](https://tailwindcss.com/) (speedy dev experience)
4.  Back-End Framework — [NextJS API Routes](https://nextjs.org/docs/api-routes/introduction) (& [Express](https://expressjs.com/) if needed)
5.  Database — [Supabase](https://supabase.com/) or [Firebase](https://firebase.google.com/)
6.  Payments — [Stripe](https://stripe.com/)
7.  Authentication — [Google](https://developers.google.com/identity/protocols/oauth2)/[Github OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) (both have out of the box integration with Supabase)
8.  Hosting — [Vercel](https://vercel.com/)

What’s great about all those tools and platforms is that they are free for all the development cycle and rather cheap with subscription-based payment plans.

I understand being able to handle all those different technologies and integration on your own may be a handful for a singular developer but it’s still doable.

It took me **less than 30 days** to implement the basic functionality but got lost tweaking and removing features from the beta launch so it bumped up to 60 days.

# 5\. Launching and Promoting

_Where and what to do?_

The final hour approaches, after many days spent designing, coding, and configuring the necessary services and features it’s time to launch. But what does a launch really consist of?

It’s important to announce the launch via Social Media like [Twitter](https://twitter.com/astre9) or [LinkedIn](https://www.linkedin.com/in/alexandru-streza-7a4254155/) and even writing a Medium article showcasing its primary features can be worthwhile.

Supposed you already have an audience on any of those platforms you can proceed into the more technical part of things. Getting ranked high up on Google Searches can boost your reach immensely but how do you get there?

SEO dictates whether your website's content is high quality and matches the search query of a user, luckily if you chose NextJS SEO should be easy to achieve.

![](https://miro.medium.com/max/1400/1*ZMZLoB-5E3vqxy_r5K3pfw.png)

Sample Usage of custom Meta component for SEO

The most important meta tags you must make sure to add to your pages are:

- Title
- Description
- Image ([OG format](https://ogp.me/) for Social Media)

Check this [gist for a simple Meta component](https://gist.github.com/alex-streza/17165b146e9807fa8c4ae707f3c1bed8) implementation for NextJS.

Make sure to get a domain that fits your SaaS branding, the most modern & popular end with .app, .io, .com but may be more expensive (>20$).

Configuring a domain for a [Vercel](https://vercel.com/) project is insanely simple, just select the domain name and branch you want to deploy from.

One thing to note is that Vercel adds a special header to all branches except **Production ones** so they don’t get indexed for SEO.

Also make sure to follow the instructions and configure on the domain provider side as well, I used GoDaddy and got a bit lost in the interface finding the DNS management page.

The final step to make sure your website gets indexed by Google is adding it to the [Google Search Console](https://search.google.com/u/3/search-console/welcome). Adding a property (domain) allows you to view analytics and configure the SEO visibility of your website.

Almost forgot about the sitemap (an XML file that shows all indexable files for SEO). Learn more about generating one in [this article](https://cheatcode.co/tutorials/how-to-generate-a-dynamic-sitemap-with-next-js).

I’ll write another blog post going more in-depth regarding SEO optimization with NextJS so stay tuned 🐼.

![](https://miro.medium.com/max/1400/1*_4JPmiV8OGhNZHUmp757Uw.png)

Google Analytics 4 UI

If you want to get extra crafty with extremely detailed analytics you can integrate [Google Analytics 4](https://analytics.google.com/) and log user behaviour once on your app to better understand how others use your app.

Don’t forget to list your app on [ProductHunt](https://www.producthunt.com/) for more reach and you never know whether you’ll get the top or not.

Also, it would be **marvelous** if you upvoted [GenIdea on ProductHunt](https://www.producthunt.com/posts/genidea) 💜.

Hope you liked this ‘**Dev Log**’ following the steps to creating a **SaaS** and following for more, I’ll make sure to blog more often regarding new features and maybe some Blockchain integration after a real product takes shape 🚀.

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)_. Sign up for our_ [**_free weekly newsletter_**](http://newsletter.plainenglish.io/)_. Get exclusive access to writing opportunities and advice in our_ [**_community Discord_**](https://discord.gg/GtDtUAvyhW)_._
