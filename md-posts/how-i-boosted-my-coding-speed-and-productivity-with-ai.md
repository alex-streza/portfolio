---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Feb 27 2022
description: Last year was a marvelous time to be coding as AI got a major upgrade with the reveal of GPT-3 & GitHub Copilot which some considered to be the beginning of the end for programmers. But it’s really…
title: How I Boosted My Coding Speed and Productivity with AI
readTime: 4 min read
name: Alex Streza
---

# How I Boosted My Coding Speed and Productivity with AI

## AI Will Replace Coding Or Will It?

Last year was a **marvelous** time to be coding as AI got a major upgrade with the reveal of [GPT-3](https://openai.com/api/) & [GitHub Copilot](https://copilot.github.com/) which some considered to be the beginning of the end for programmers.

But it’s really not, AI is **far** from being able to code scalable applications and design complex systems as the current implementation is simply an assisting tool to write code faster.

![](https://miro.medium.com/max/1000/0*TQ1yHsl5OpYuGD1v.jpg)

Developers Against AI

If you got past the intro it’s likely you already have formed an opinion beforehand regarding this tool, whether positive or negative. I know there were hundreds of articles covering this topic when it was first showcased but this blog post is to present the experience of using GitHub Copilot for more than 6 months consistently.

# How I Use It

> Overly qualified autocomplete tool

Most of the time I’m coding in **JavaScript** ([React](https://reactjs.org/)) which is a big advantage for the autocomplete options since the AI was trained on GitHub repositories and JS is the second most common occurring language ([14% of GitHub is JS](https://madnight.github.io/githut/#/pull_requests/2021/4)).

This means that suggestions are more likely to be spot on and fewer syntax errors slip through the AI.

![](https://miro.medium.com/max/1400/1*vYCWqAGwRpLGzPl_lsAr6A.png)

The uncanny case I find extremely common where Copilot truly shines is finishing lines of code and closing brackets.

This may seem very mundane but it saves a lot of time since writing JSX can lead to some very annoying bracket spaghetti and this is solved instantly.

![](https://miro.medium.com/max/1400/0*QKzhlnIOHSWJOu9g.png)

Close Brackets Automatically

When I first adopted [Typescript](https://github.com/typescript-cheatsheets/react) in my projects I found it difficult to memorize all the types for event handlers and HTML components like buttons and inputs. Look at this gorgeous suggestion, Copilot just handles everything on its own and it’s magnificent.

![](https://miro.medium.com/max/1400/0*v5efVvKBZm8rtECj.png)

Autocomplete Types

Another task Copilot accomplishes with style is generating mock data. Most projects I’ve worked on had a clear disparity between frontend and backend development speeds and that creates bottlenecks.

Often the UI is implemented before the API is ready and Mock APIs are rarely spin up soon enough so we manually write example values to test components and it’s an awful, repetitive mess. With one comment we can generate close to unlimited data and this is beautiful. 😍

![](https://miro.medium.com/max/1400/0*sy1X-y7NUpiEUvvy.png)

Generate Mock Data

Those are some of the main ways GitHub Copilot helps me code faster and even if it seems like not much it does add up over time.

# How Much Time I Saved (roughly)

> Ain’t much but honest (repetitive) work

I estimate that a third of my code is completed through GitHub Copilot which is a very rough number but that could mean a **33% speed boost**.

I’m planning to do more in-depth research on this using [Code Time](https://www.software.com/code-editors/visual-studio-code) another great **productivity** extension that helps reduce outside noise and focus on coding. Something like seeing hours spent coding in a week of using Copilot vs. another without it, this is albeit far from accurate but closer to the truth.

![](https://miro.medium.com/max/1400/1*GARm5kZKXjcF75exvcBfaA.png)

[Code Time Extension](https://www.software.com/product/code-time)

# How To Get It

> Get your own copilot right now for $ 0.00 (free)

To get the extension you need to first register for the [beta ‘testing’ waitlist](https://github.com/features/copilot/signup), but you’ll get in fast, it took me less than a week and I registered all the way back in June when it first came out and everyone was trying it out.

Install the [VSCode extension](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) and you can get started with zero configs and already enjoy a better coding experience.

> Unfortunately I recently came across a [GitHub thread](https://github.com/github/feedback/discussions/9342) explaining the technical preview stage is **full** and access is limited to new users so getting in may take longer

Now you’re ready to **boost** your coding and get those tasks done in no time, I hope you liked this AI for productivity article. Don’t forget to 👏 and follow for more software & programming-related content 💜 or [even **building** & **launching** an AI app from the ground up](https://medium.com/r?url=https%3A%2F%2Fjavascript.plainenglish.io%2Fhow-i-launched-a-saas-in-60-days-with-an-empty-pocket-313aa59c3e78).
