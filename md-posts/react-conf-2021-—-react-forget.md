---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Jan 24 2022
description: Everyone who loves React in its entirety has had the unlucky moment of hating its optimization process. Here, I’m not talking about code splitting or server rendering but about the component level…
title: React Conf 2021 — React Forget
readTime: 2 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/1*k9IbrpOjBd9paWzDwY7WRw.png)

# React Conf 2021 — React Forget

# A Christmas miracle — End of ‘memo all the things’

Everyone who loves React in its entirety has had the unlucky moment of hating its optimization process. Here, I’m not talking about code splitting or server rendering but about the component level usage of memoization and useCallback.

![](https://miro.medium.com/max/1006/0*KT3CeKIJ621Fljgu.jpg)

UX/DX Struggle

Those are great features but mandate much-unrequited attention to be implemented whenever a possible rerender may occur and we as developers really don’t like optimizing code ourselves.

During [React Conf. 2021](https://www.youtube.com/channel/UC1hOCRBN2mnXgN5reSoO3pQ) a couple of weeks ago, the React team unveiled a ‘forgettable‘ yet powerful feature/tool called React Forget (the name in itself is a pun). Short summed, it’s a compiler which further optimizes component rerendering through detecting the need of `React.useMemo`or `React.useCallback` and injecting code with similar behaviour to those structures.

According to Dan Abramov, **this could eliminate the need to use** `React.memo()` **as well**. This is because the compiler apparently memoizes not just the calculation of `useMemo()` results, but also the resulting _React element objects returned by the component_.

![](https://miro.medium.com/max/1400/1*SUiGsCY49mvtyJxlTdrJ5g.png)

Compiled code in React Forget sneak peek video

Often, to write an optimized UX app’s usage of memoization is mostly mandatory, increasing mental overhead for developers, therefore, creating a rather suboptimal DX.

Many worry this change will cause newer developers to know even less about runtime and the mechanisms behind React as hiding complexity through multiple layers of transpilation and compilation often results in unforeseen or hard to debug bugs but this will be seen better as it gains more traction.

The speaker in the [sneak peek video](https://www.youtube.com/watch?v=lGEMwh32soc&t=2s) said that they plan to try it out internally in 2022, and report on how well it works out, and open-source it if it succeeds.

I highly recommend watching the original video as it showcases a more in-depth and hands-on experience of using React Forget.

_I hope you enjoyed this short showcase of React Forget and don’t_ **_forget_** _to give this article a 👏!_

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)_. Sign up for our_ [**_free weekly newsletter_**](http://newsletter.plainenglish.io/)_. Get exclusive access to writing opportunities and advice in our_ [**_community Discord_**](https://discord.gg/GtDtUAvyhW)_._
