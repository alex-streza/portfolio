---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Aug 20th
description: Manipulating dates is one of the most complex topics to be handled in any application. Timezones, localization and formatting dates are few of the tasks a date library should provide and now I’m…
title: JavaScript Date Libraries Showdown
readTime: 3 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/0*RMNiTVlxDJHhY584)

# JavaScript Date Libraries Showdown

## Moment vs. Luxon vs. Date-fns vs. DayJS

![](https://miro.medium.com/max/1000/0*BdED8jD9QZrjvJdz)

Manipulating dates is one of the most complex topics to be handled in any application. Timezones, localization and formatting dates are few of the tasks a date library should provide and now I’m gonna list a few packages which make date manipulation a piece of 🎂.

# 1\. [Luxon](https://github.com/moment/luxon)

Developed by some of the people maintaining Moment it’s a lighter, immutable library which doubled its popularity since the ‘deprecation’ of Moment as it’s little over 1.7M downloads/week on NPM.

![](https://miro.medium.com/max/1400/1*vadA2rg6RpMgfhuwM8qJxA.png)

It provides many ways of manipulating dates, intervals, and timezones but can be pretty heavy for smaller projects.

# 2\. [Date-FNS](https://date-fns.org/)

Basically lodash for dates, small bundle size, and easy-to-use functions for any possible scenario.

![](https://miro.medium.com/max/1400/1*SVDzL6TZ1-6MwzwGvr0x_w.png)

I really like date-fns both due to its API being similar to lodash utilitites but also that all manipulations are directly applied to a JS Date object.

![](https://miro.medium.com/max/1400/0*i3h1BRkkKpvIfoEE)

# 3.[DayJS](https://day.js.org/)

Extremely tiny at only 2Kb bundled and according to bundlephobia it’s 26 times smaller than moment which is mind-boggling and several counts smaller than the other 2 in this list.

![](https://miro.medium.com/max/1400/1*0vFByK_QXlTuhFlr1rHmqw.png)

# 4\. [MomentJS](https://momentjs.com/)

With over 15M downloads as of writing this article, Moment may still seem to be GOAT, but its API belongs to a different era of JS due to a mutable design.

![](https://miro.medium.com/max/806/0*j83rmkLuLyXrxn3G)

Still, so many older projects list Moment as a dependency, therefore, its status has been changed to **maintenance** and will not be receiving any more updates according to [Moment Project Status](https://momentjs.com/docs/#/-project-status/).

Let’s see how we can do some basic operations using the old lad moment:

![](https://miro.medium.com/max/1400/1*zxclrmE2R9ePw6HpKLTqBw.png)

If you want to check this demo project here is the [CodeSandbox](https://codesandbox.io/s/date-manipulation-libraries-sxxir?file=/src/index.js:561-1062).

> _Check more of my work at_ [_alexstreza.dev_](https://alexstreza.dev/)_._
>
> _I hope you enjoyed this short tutorial on top 4 JS date management libraries and would love if you give it a 🦄!_

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)
