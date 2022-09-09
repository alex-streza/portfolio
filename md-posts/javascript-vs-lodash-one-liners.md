---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Aug 15 2021
description: Lodash has been one of the most popular libraries on NPM for a long time with over 30M downloads per week as it brings great utility functions for every projects needs. It was regarded as a must have…
title: JavaScript vs Lodash One-Liners
readTime: 3 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/0*f5BDC920YkkwYRip)

# JavaScript vs Lodash One-Liners

## 5 Lodash Alternatives in Modern JavaScript

![](https://miro.medium.com/max/1142/0*OZ8LBrH-0zYmScST)

[Lodash](https://lodash.com/) has been one of the most popular libraries on NPM for a long time with over 30M downloads per week as it brings great utility functions for every projects needs. It was regarded as a must have dependency to every project although this is no longer the case with the introduction of ES6 & Array Methods.

![](https://miro.medium.com/max/866/0*7Ww6epHgMZo02lzB)

Adding another library to an already steaming node_modules can impact loading speeds and reduce performance that’s why I choose to no more include lodash in new projects.

I often use [bundlephobia](https://bundlephobia.com/) before adding a new package as it shows both the bundle size footprint and smaller bundled alternatives.

![](https://miro.medium.com/max/1400/0*jDayAguz1lOsL9E1)

We can see lodash doesn’t have a giant impact to download time of only ~61ms for 3G but still a better web is made of less JS payloads 🤓.

All following examples will be on this array:

![](https://miro.medium.com/max/1400/1*Lun-eASFJGO2v6R_NUV2RA.png)

## 1\. Remove Duplicates

In Lodash it’s pretty straightforward using `uniqWith` and `isEqual` as comparator, for ES6 we’ll need to check for duplicate objects on each filter iteration.

![](https://miro.medium.com/max/1400/1*5wEsZHQMxXdlurzWsAGUaA.png)

## 2\. Calculate Average

We need to calculate the average (or mean for Lodash) price of all pets.

![](https://miro.medium.com/max/1400/1*EH0poGjgYfEeLO1b_d2bcQ.png)

## 3\. Random Id

Add a random id to each pet in the array.

> I do not recommend using `Math.random` to generate keys or passwords as it’s not entirely random, see more about [random numbers](https://www.random.org/randomness/).

![](https://miro.medium.com/max/1400/1*ac5Ews1eQqSsamZYC-2UlQ.png)

## 4\. Capitalize String

For each pet we need to make the first letter upper cased.

![](https://miro.medium.com/max/1400/1*RLjk2s8TmH-EfEbhBulCHw.png)

## 5\. Remove Field

We’ll remove the price property as we all know 🐶 are priceless.

![](https://miro.medium.com/max/1400/1*d_fs9VP6UQhE89I7-qmkRA.png)

## Bonus Tip

If you are using Lodash or date-fns import utility functions like this:

![](https://miro.medium.com/max/1400/1*KlHQfXN3lfe43dx0YAJVsQ.png)

That way the import size is considerably reduced unlike importing the entire module:

![](https://miro.medium.com/max/1400/1*BtbKcb7e9_PejpOz-mXt6g.png)

If you want to check the code here is the [CodeSandbox](https://codesandbox.io/s/lodash-vs-es6-6g8h4?file=/src/index.js).

<!-- link -->

Liked the article? Consider maybe [buying me a ☕](https://buymeacoffee.com/snappy.guy) or [following me on Twitter](https://twitter.com/alex_streza).
