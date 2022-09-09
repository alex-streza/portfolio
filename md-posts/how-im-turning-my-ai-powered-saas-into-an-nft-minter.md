---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Feb 28 2022
description: There are two things I hate, lack of sleep and crypto scams, and nope I’m not doing either this year. In 2022 everyone dreams to launch their own apps & products but not many end up building their…
title: How I’m Turning My AI-Powered SaaS Into An NFT Minter
readTime: 6 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/1*EkysbYZDDZuzs1i0wZ57pw.png)

# How I’m Turning My AI-Powered SaaS Into An **NFT** Minter

## And why I’m doing such blasphemy

There are two things I hate, **lack of sleep** and **crypto scams**, and nope I’m not doing either this year. In 2022 everyone dreams to launch their own apps & products but not many end up building their ideas and from those who do, too many quit prematurely instead of consistently including new features and developing a larger audience.

![](https://miro.medium.com/max/876/1*DDshktOxqi6_VYKGjMCgqg.png)

# Why does everyone advertise NFTs?

## Whelp money lolz

Due to the recent **hype** inserting buzzwords like crypto/blockchain/NFT in your products description leads to a huge increase in impressions and followers but there’s a small problem.

Let’s say you are building a game and that’s gonna take a lot of money & resources on development and infrastructure and you have nowhere near the amount of funds to even start.

You decide to **capitalize** on the booming crypto market and implement NFTs to garner attention and crowdfund the game via platforms like [Kickstarter](https://www.kickstarter.com/).

![](https://miro.medium.com/max/1400/1*ilNYZIoTHFe3dNVlxiOMww.png)

Players [Don’t Want NFTs](https://www.reddit.com/r/MMORPG/comments/p7k077/blockchain_mmorpgs/) in Games

This is all nice and dandy until you discover you’ve attracted a whole bunch of investors who aren’t interested in playing the game rather earning a profit from their initial investment.

> NFT games & applications attract **investors** not people who would truly enjoy the experience or utility you software provides.

Another reason people love promoting crypto-related projects is the money incentive, projects like [HapeBeast](https://opensea.io/collection/hapeprime) which minted for $600 each out of 8192 NFTs and peaked at 9.1 ETH floor price on [OpenSea](https://opensea.io/collection/hapeprime?tab=activity) are goldmines for marketing specialists.

At the time this meant the project was roughly valued at 9.1 \* 8192 \* $2600 (ETH price on Feb 3rd) = **$193.822.720**. I understand not many (or any) other NFT project had a marketing budget as high as Hape had but still, almost 200 million dollars for 3D apes is unfathomable.

Influencers can receive **thousands of dollars** for simple tweets and a while ago this image surfaced on [Reddit showcasing the fees](https://www.reddit.com/r/btc/comments/qukf1a/how_much_it_costs_to_buy_access_to_crypto/) some of the top crypto influencers on Twitter and YouTube charge.

![](https://miro.medium.com/max/1400/0*Wo7Y8KlapREqfKYr.jpg)

Crypto Influencers Promotion Fees

# Why I’m implementing NFTs?

## Marvelous educational experience

I’m not a huge fan of the **current** implementations of NFTs since most don’t bring any utility that can’t be accomplished with simple databases and is frequently utilised in scams as easy-to-do money grabs.

That said it may sound self-contradictory that I’m adding them to my SaaS in its infancy and some might consider I’m attempting to profit on the crypto craze without adding any real service to users.

I had an idea a few months back, it was exactly the lack of an idea, so I built an [AI App Idea Generation SaaS called GenIdea](https://medium.com/javascript-in-plain-english/how-i-launched-a-saas-in-60-days-with-an-empty-pocket-313aa59c3e78) and now I’m adding NFTs.

![](https://miro.medium.com/max/1400/0*w12fY5t1a9A09E69.png)

GenIdea | Generate Ideas For Your Tech Startup

The twist is I’m doing this to **learn** more about blockchain development and apply the knowledge accrued to write my Master’s Degree Paper. If I’m ever to launch on a public network with real money I have no intent in collecting tremendous amounts of wealth other than for covering network fees and website maintenance costs.

Hopefully, scams will cease with more regulations put in place and a real usage found to blockchain technology. Although I am invested in cryptocurrencies and this article is by no means financial advice I would take the fall if it means the crypto space becomes safer.

# How I’m planning an NFT feature?

## Ethereum. Solana. Elrond. So many choices…

## Concept

To understand the concept of adding NFTs to an application you need to understand the needs (likely non-existent) for such functionality and the present features.

[GenIdea](https://www.genidea.app/) is a platform where you can generate **app ideas** and suggest tech stacks for fields ranging from blockchain & AI to fitness and education. At the moment I’m yet to have released the full version with user authentication, subscriptions and new idea generation but that’ll come in due time.

Once a user is pleased with an idea they can save it and make it their own, I’m aware ideas can’t be [**patented and protected**](https://www.ipwatchdog.com/2018/11/17/protecting-idea-can-ideas-be-patented/id=103389/) and making it an NFT is not going to be effective unless the platform takes off.

Hypothetically the beta version could support up to 100k new ideas a month out of which I’d estimate 33% will be either amusingly stupid or plain nonsense since AI is far from flawless.

I am as well playing with an AI to generate blog images this one is entitled “blockchain apocalypse” and shows the several steps the AI took to get to the final image (bottom right) but I’ll cover this in a future article so **follow** to stay tuned 💌.

![](https://miro.medium.com/max/1400/1*NvfPfrDdA9GLPn7u0TW9cg.png)

Blockchain Apocalypse

## Implementation

The most popular blockchains for NFTs are Ethereum and Solana and in my patriotic opinion, [Elrond](https://elrond.com/) is a close competitor. I hate Ethereum’s high gas fees that can get larger than the mint price when the network is congested but I also don’t love Solana for its frequent downtimes and not entirely decentralised architecture.

Now you think I’m going with Elrond but I kept thinking what if I can find a bridge or even overcomplicate things by supporting multiple chains. Since I’ll be allowing authentication both via wallets like [MetaMask](https://metamask.io/) and normal OAuth with Google & GitHub how hard can it be to integrate Ethereum & Elrond in the same application?

![](https://miro.medium.com/max/1400/1*9wYgsXqVR1WiVvwVsa9F_w.png)

Authentication Screen Design

From a technical standpoint, I’m familiar with [Solidity](https://docs.soliditylang.org/en/v0.8.12/) the language developed for Ethereum Smart Contracts but I have no expertise in [Rust](https://www.rust-lang.org/) which is a C-like high performing language used commonly in Blockchain Development.

Therefore the main features I want to cover in subsequent updates are as follows:

1.  User Authentication ([GitHub](https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps) & [Google](https://developers.google.com/identity/protocols/oauth2) OAuth and Wallet Authentication)
2.  Save ideas you like in your account
3.  Mint the idea so no one can take it on the platform
4.  See other users' ideas (if shared)
5.  Ranking system & badges

If things go well and I manage to grasp the secrets of Ethereum & Elrond I will make sure to bring more tech-oriented tutorials and hands-on code since they are much more useful than me ranting about what I wanna do 🥴.

Hope you liked this ‘**Dev Log**’ following the steps to adding NFTs to a SaaS, I’ll make sure to keep more frequent updates as I code 🚀. Don’t forget to follow and clap for more marvelous articles and even [subscribe to Medium](https://medium.com/@alex.streza/membership) for endless reads💜.
