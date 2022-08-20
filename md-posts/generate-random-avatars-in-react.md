---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: Jan 11 2022
description: Who doesn’t love mock data generators? Tools like Mockapi or the all-time favourite Faker open-source library which recently gave birth to FakerCloud. Those platforms provide ways to generate many…
title: Generate Random Avatars in React
readTime: 4 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/0*iTxosbEPkS134kwv)

# Generate Random Avatars in React

## Funky and Sophisticated Random Avatar Generation APIs

Who doesn’t love mock data generators? Tools like [Mockapi](https://mockapi.io/) or the all-time favourite Faker open-source library which recently gave birth to [FakerCloud](https://fakercloud.com/).

Those platforms provide ways to generate many API properties from simple things like e-mail or username to complex passwords and geocoordinates.

![](https://miro.medium.com/max/1048/0*xu4MGJR60V5GsZFk)

Today I’m gonna showcase some popular APIs/libraries to generate avatar images for your next React project.

# 1\. [FakerJS](https://github.com/marak/Faker.js/) (GONE)

> Recently **Marak** the author/main contributor of **Faker** & **FakerCloud** has gone rogue and **REMOVED** the repositories altogether. I cover this story more in depth in [**this article**](https://medium.com/@astre999/open-source-a-horror-story-c14caba386a8)**.**

Probably the greatest mock data generation library out there supporting many languages from PHP to JS and Python, its API covers every possible use-case including images for animals or avatars.

Let’s install the faker JS package:

![](https://miro.medium.com/max/1256/1*RGlVYeXCllbZwvbEfkoY6Q.png)

It’s pretty straightforward to generate an avatar image like this:

![](https://miro.medium.com/max/1400/1*QHLmZAC-82s4cMTcLANANw.png)

# 2\. [Unsplash](https://unsplash.com/)

![](https://miro.medium.com/max/1400/0*rU5Ozv93jOtDY3sa)

Unsplash is an amazing platform showcasing beautiful, freely usable images which we can use in design mockups or even final products depending on the given license of course.

We can also use the [Unsplash Source API](https://source.unsplash.com/) for basic tasks like fetching images of a certain user or by a certain query which suits our simple example.

![](https://miro.medium.com/max/1400/1*D2Ljq1i0wLWdrLsZ9FvHfA.png)

If you are interested in the official Unsplash API which gives full control over more of the data managed by the platform you can register as a developer [here](https://unsplash.com/developers).

# 3\. [Big Heads](https://bigheads.io/)

![](https://miro.medium.com/max/1400/0*ikgl22kKfUV2yGI7)

The previous 2 examples bring real-world avatar images but what if we want a cartoonish style to the avatars?

![](https://miro.medium.com/proxy/0*j54SdkN7qFQWNLND)

Here comes big heads with a stylized cartoon look and many variants for generating funky heads, the only downside is the lack of a direct random API (or at least I couldn’t find one).

We install the library as usual

![](https://miro.medium.com/max/1400/1*5Cs_BjMlLfe9jf25TgZdiQ.png)

In order to generate random avatars, we need to be able to mix random properties accepted by the BigHead component, thankfully after searching a tad bit through the official docs I managed to find [this method](https://codesandbox.io/s/react-random-avatar-3o1t9?file=/src/utils/bighead.js):

![](https://miro.medium.com/max/1400/1*gKbqy0tn-kKrwOPpYG1MnA.png)

With it, we can spread the props like this `<BigHead {...getRandomOptions()} />`.

![](https://miro.medium.com/max/528/0*knUJcO8dDm6Lvfhw)

# 4\. [DiceBear Avatars](https://avatars.dicebear.com/)

If BigHeads wasn’t enough then here comes the party crasher — DiceBear. This amazing library allows us to generate random avatars in 10 different styles: pixelated, cartoonish, initials only, or even generative art-like.

![](https://miro.medium.com/max/1400/0*A_ZBYGq4Kz4PlQKJ)

You may already recognize Avataaars which is another library on itself but is accessible through DiceBear random generation API.

Fortunately, they also provide a URL:

![](https://miro.medium.com/max/1400/1*SnrWv926BjrXJlsH87T_6Q.png)

![](https://miro.medium.com/max/556/0*-4CJAIheMZdXFBbG)

The final code:

![](https://miro.medium.com/max/1400/1*zfm2W-EVXr5xc1q0_k9Rfg.png)

If you want to check out the code here is the [CodeSandbox](https://codesandbox.io/s/react-random-avatar-3o1t9?file=/src/App.js).

> Check more of my work at [alexstreza.dev](https://www.alexstreza.dev/).
>
> I hope you enjoyed this short showcase of Avatar Generators and would love if you give this article a 👏!

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)
