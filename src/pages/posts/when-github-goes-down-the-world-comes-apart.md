---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: Apr 7 2022
description: Does the world truly come apart when GitHub goes down?
title: When GitHub Goes Down the World Comes Apart
readTime: 6 min read
name: Alex Streza
---

# When GitHub Goes Down the World Comes Apart

## Or Does It Truly?

![](https://miro.medium.com/max/1400/1*SK5xbdHbO0L2T_KX390bew.png)

Developers often argue about their preferred tech or whether some programming language or framework is superior to another but one matter is certain that a majority can agree on: GitHub as the VCS of choice and that leads to a fascinating conundrum, what happens if GitHub **goes down**?

![](https://miro.medium.com/max/1280/0*33UpcOpaWdIDNjJ9.jpg)

Developers Trying To Deploy During Outage

# Why do we depend so much on GitHub?

_Comfort and yeah everyone uses it._

[GitHub](https://github.com/) was established in 2008. It was one of the earliest sites to host Git repositories. It was soon used by the open-source community for code exchange and an overnight sensation as a result of this.

The platform has begun to attract a large number of users. GitHub has about 73 million users and hosts approximately 100 million repositories. [Microsoft has purchased GitHub](https://news.microsoft.com/2018/06/04/microsoft-to-acquire-github-for-7-5-billion/) for a whopping 7.5 billion dollars.

In the open-source community, the acquisition has sparked conflicts. Many people are concerned that GitHub will **lose** its open-source roots, and as a result, they are exploring alternatives such as Gitlab.

It provides a great user experience and integration with many third-party services with its CI/CD pipeline manager (GitHub Actions), albeit at a rather steep price when scaling.

Its popularity is also due to the huge number of extremely loved [open source projects](/top-10-most-popular-github-repos-leaderboard-f7c5b6ab3908) with more than hundreds of thousands of stars and fans all across the globe.

GitHub has become the de-facto standard for hosting and managing code repositories but it’s not without its drawbacks.

The platform is a distributed system with **multiple points of failure**. In the event of an outage, developers are left unable to work on their projects or collaborate with others. This can be a big problem for companies that rely on GitHub for their workflow.

The good news is that there are some alternatives to GitHub that can be used in the event of an outage. These include [Bitbucket](https://bitbucket.org/), [GitLab](https://about.gitlab.com/), and [Azure DevOps](https://azure.microsoft.com/en-us/services/devops/repos/).

So, if GitHub goes down for a longer time, don’t **panic**! There are still ways to get your work done, unfortunately, they require moving the entire infrastructure to those other services and their respective learning curves.

# GitHub does down, chaos ensues

_No GitHub = No Work Today._

The most recent major service outage for GitHub was on 27th November 2021 and caused degraded performance in all of its features, from git operations to the web and mobile interfaces.

![](https://miro.medium.com/max/1400/0*j-ELHMM4jPihwzAc)

It lasted for around 3 hours where developers around the world were unable to work on their projects or even open GitHub in their browser, we all got to relive those times when snowstorms caused **schools to close** and we could enjoy a surprise break.

Jokes aside GitHub going down meant the following:

1.  **Issues & Pull Requests** couldn’t be made
2.  Teams using the **Project UI** were unable to check tickets
3.  Automated **CI/CD** Pipelines on [**GitHub Actions**](https://docs.github.com/en/actions) couldn’t run
4.  Packages couldn’t be downloaded from [**GitHub Package Registry**](https://github.com/features/packages)
5.  [**Gists**](https://gist.github.com/) couldn’t be created or edited

That’s a handful of problems and even if the 3 hours of downtime may seem meek it was enough for the 73 million users and over 100 million hosted repositories to be worried about a future longer outage.

This rather ‘short’ incident was immortalized well in a [HackerNews Thread](https://news.ycombinator.com/item?id=29363169) where developers debated the foolish widespread usage of a ‘**decentralized version control system on a centralized platform**’ and how they are either self-hosting or using a less corporate-owned software.

I was stunned when I saw one of the comments describing how [rust](https://www.rust-lang.org/), the programming language and [Cargo](https://crates.io/) (rust package manager) wouldn’t run as it is extremely reliant on the GitHub repo as its single source of truth, although later in the thread there’s a fix through an [**offline mode**](https://www.ncameron.org/blog/cargo-offline/) (`cargo --offline`) but to wake up one day having to search for.

I must acknowledge that [HackerNews](https://news.ycombinator.com/) threads can get so off-topic it becomes a conspiracy spaghetti, from GitHub outage to whether Microsoft is Big Brothering and watching over GitHub code or the Cargo team being also on the NPM board in a great conspiracy.

What happens to big organizations that require robust infrastructure and cannot risk any sort of outage? NASA is a great example as they actually have a [public account](https://github.com/nasa) with more than 400 repositories with true rocket science level code but all the sensitive or secret projects are hosted on-premises with [Mercurial or Subversion](https://gcn.com/2017/06/nasas-systems-for-sharing-code/304866/) depending on the team.

![](https://miro.medium.com/max/1400/1*Db_06db1tSVFoSZkBIVncw.png)

[NASA GitHub](https://github.com/nasa) Repositories

I for one took advantage of the outage to go out in the sunshine for the first time in many months, I was truly happy and free of all issues and the world was in awe at my splendid isolation beard.

No issues or PRs could be made, neither checking the issue info or documentation meant I was GitHub free for a good few hours.

And it felt **amazing**.

I’m not saying GitHub is bad, on the contrary, I think it’s a great service that has allowed for so many projects to be created, it’s just that we’ve become too reliant on it.

# What are some GitHub Alternatives?

_Self Hosted Raspberry PI’s Farm FTW._

# [GitLab](https://about.gitlab.com/)

Gitlab is a git-based repository hosting platform similar to Github. It was first released in 2011. Gitlab sought to set itself apart from Github from the start, so it designed a single product for the complete DevOps lifecycle. Issue trackers, continuous integration, and continuous delivery are all part of the Gitlab offering.

![](https://miro.medium.com/max/1400/1*mCNnkXFnhyUf8v30fTGSkA.png)

GitLab [About Page](https://about.gitlab.com/)

Gitlab offers a single interface for the entire DevOps process. Gitlab is now utilized by over 100,000 organizations. Gitlab is used by IBM, Sony, NASA, and Alibaba, among others.

# [BitBucket](https://bitbucket.org/)

Another online source code hosting service is BitBucket. In 2008, BitBucket was launched. During that time, it only used Mercurial (a free distributed version control system), but after being acquired by Atlassian in October 2011, it has also used Git.

![](https://miro.medium.com/max/1400/1*uu5bcN-qm6G-Wm9IEBvKxg.png)

Bitbucket [Home Page](https://bitbucket.org/)

Because Atlassian creates popular software like Jira, Trello, and Confluence, it had its own set of advantages. BitBucket has benefited greatly from its excellent integration with such technologies.

In case of an outage save this article for emergency solutions to a GitHub-less world, don’t forget to clap 👏 and follow for more software-related content 🚀 & AI articles coming sooner than you can say ‘Crypto is overhyped’.

Get your Medium subscription now to get your knowledge over 9000:

[

## Join Medium with my referral link - Alex Streza

### As a Medium member, a portion of your membership fee goes to writers you read, and you get full access to every story…

medium.com

](https://medium.com/@alex.streza/membership)
