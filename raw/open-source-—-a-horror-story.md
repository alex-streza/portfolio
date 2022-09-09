---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Jan 21st
description: Things have been running wild in the Open Source community lately and this is a story of minds gone rogue. One bright and beautiful morning you wake up and decide to build something. The what, who…
title: Open Source — A Horror Story
readTime: 6 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/1*MuKzDwX6gFMou3h4FTfYqg.png)

# Open Source — A Horror Story

## What happened to Faker.js and its creator?

Things have been running wild in the Open Source community lately and this is a story of minds gone rogue.

# A dream of freedom

One bright and beautiful morning you wake up and decide to build something. The what, who, how’s are flooding your brain but your heart sees a greater purpose and that’s to make it free to use for all souls on this developer inhabited, floating, space rock.

That’s how it started for [Marak](https://github.com/Marak) 8 years ago with the all-time favorite random JS data generation library [Faker](https://www.npmjs.com/package/faker). It was a sincere and honest endeavour to freely push out such a handy tool both for huge corporations and small teams that took advantage of a faster & smoother seeding generator for test data.

Faker provided a service for many that may not have been deemed essential, hard or costly to replicate with a couple of unpaid interns at work as many Redditers suggested but it was nevertheless popular, having over 2.4 million downloads/week.

# A desperate shout

In October 2020 Marak added a commit to the Faker repository confirming the most dreaded situation in open source. Lack of funding. When you create a piece of software and people use it you expect to make money of it but that’s not valid with open source libraries that are entirely based on donations. The countless added features to the Faker codebase over the years increased the maintenance cost and time invested into the project.

It’s a known fact in the industry that no matter how great your open source library may be, if a big tech firm doesn’t sponsor it, you are pretty much broke. Marak knew this and made this point very clearly in his post that he will stop maintaining until he will receive a full salary offer since he had no income.

> After digging more, I found an even more unsettling information. The rough years Marak had may have been his own fault as his [house burned down after he allegedly built **bombs**](https://abc7ny.com/suspicious-package-queens-astoria-fire/6425363/) with the intent of harming others. **Such actions shouldn’t be supported.**

A while later things were looking better, a brand new service was launched using Faker at it’s core meant to monetize the existent feature in a cloud environment for large scale use but that wouldn’t last long.

Here we are now, almost a year later from the [FakerCloud](http://fakercloud.com/) launch and the situation is reaching a mysterious finale. The epic of one of the most beloved open source JS libraries took a quick turn to the dark side.

On the 5th of January 2022, a new version of Faker was released by Marak, versioned intentionally 6.6.6. This marked the unforeseen extinction of the library which was essentially completely deleted from NPM and Github.

The ‘Endgame’ commit includes the deletion of all the source files except for some config and Readme.md files.

![](https://miro.medium.com/max/1400/1*_iZpSTfzBrbvZJNUqqPzmw.png)

Endgame of faker

Now, this is where it gets interesting, this final commit added to the reader file the cryptic line that still haunts me as I’m writing this article.

> What really happened with Aaron Swartz?

# A glimpse of hope

Why would Marak write this and who is Aaron?

[Aaron Swartz](https://www.internethalloffame.org/inductees/aaron-swartz) was one of the OG programmers of the Open Source having written the very thing that makes blogging possible, the RSS format. He also worked on Reddit a while after it was started and conducted activist work regarding freedom of information. He believed all data should be accessible and that may have led to his final demise.

![](https://miro.medium.com/max/1400/0*Y0BThjtCoSmboug5)

In 2011, he hacked into the MIT through a computer within the network and attempted to make public several academic articles. He was caught and charged for multiple felonies including breaking and entering, wired fraud (publishing obtained through fraudulent information) and several Computer-related frauds. The large number of accusations was due to a prolonged pursuit after his long career of activism and attempts to freedom of information.

The higher-ups may have wanted to make him an example for others by sentencing him to 35 years in prison or making an admission to his crimes which he later denied.

Freedom of information is what we should all strive for and Aaron may have wanted to remind us that sometimes standing up against industry giants is worthwhile if you believe in your cause.

What Marak did to make his story viral by pointing to the Aaron Schwartz conspiracies was uncalled for as it could hurt his remaining relatives, we should not compare Marak’s ‘activist’ work to others before him.

# A shady commit

A few days after the erasure of Faker & FakerCloud off the face of the internet, Marak pushed a controversial update to another of his maintained libraries colors.js.

![](https://miro.medium.com/max/1250/1*gIyxPj1_LnU4eplWFZQ6iQ.png)

A significantly more popular library with over 4.5k stars on Github and therefore it was a surprise for many that the new version contained an infinite loop.

![](https://miro.medium.com/max/1400/0*USBcn4LQXrnyVtms.png)

In the [Github thread](https://github.com/Marak/colors.js/issues/285) covering this issue, it’s seen as if the ASCII Art (liberty) bug was published by mistake according to Marak and it even appeared he was fixing it. The time went on and people started suggesting it was purposefully put and demanded its fix immediately and he was nowhere to be found.

The masked destruction of colors.js was obvious and could be classified as an activist act against the greedy, ungrateful corporations that use software without supporting its creators. Although it was far from that, it was the result of the destructive desire to harm. This undoubtedly caused collateral damage across all users of colors.js, and the scale is yet to be determined.

As of now, Github suspended Marak’s account denying him access to hundreds of repositories.

![](https://miro.medium.com/max/1400/1*0v-JoTaESijjEzXlcg5wRw.png)

This may be reverted as of now so we need to be wary when using any of his remaining packages.

You can search for such packages using this [one-liner](https://twitter.com/bitandbang/status/1480621529335533570):

npm access ls-packages | jq keys

# A spooky finale

His latest acts shouldn’t be considered anything but abuse, and mustn’t be looked up to, as his desire to hurt the Open Source community is despicable.

It’s scary to think how one day, one of our dependencies would be hijacked through an activist propaganda commit and all our code would crash or even worse, the commit would contain a major security issue that could go unnoticed for days.

Many thanks to [**keystonelemur**](https://twitter.com/keystonelemur?s=20) for bringing light to this situation.

Hope you liked this “horror” story, don’t forget to clap and follow for more software-related content🚀.

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)_. Sign up for our_ [**_free weekly newsletter_**](http://newsletter.plainenglish.io/)_. Get exclusive access to writing opportunities and advice in our_ [**_community Discord_**](https://discord.gg/GtDtUAvyhW)_._
