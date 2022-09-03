---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Aug 18th 2021
description: Nowadays every project has a ton of dependencies and a Frontend library like React is the perfect candidate for a black hole-sized node_modules folder. With NPM you can easily download libraries and…
title: Great NPM Libraries for React
readTime: 4 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/1*eZbP77ag0102PdQHW8GfmA.png)

# Great NPM Libraries for React

## 5 NPM libraries for every React project

Nowadays every project has a ton of dependencies and a Frontend library like [React](https://reactjs.org/) is the perfect candidate for a black hole-sized **node_modules** folder. With [NPM](https://www.npmjs.com/) you can easily download libraries and keep the versions up to date which is more or less a bit of a hassle.

Let’s jump straight to what I consider in no particular order, some of the coolest libraries that most React projects would benefit from immensely.

# [1\. Next.js](https://nextjs.org/docs/getting-started)

![](https://miro.medium.com/max/1400/0*yxUPzeyOQrgfR127.png)

An unfortunate downside of using SPAs is the lack of SEO they come with. Most SEO bots that crawl websites do not run JS therefore they are greeted with an empty page and this affects the ratings considerably. Next.js and other frameworks come to the rescue by providing SSR (Server Side Rendering) / SSG (Static Site Generation) out of the box for your React application.

To initialize a Next.js project with TypeScript, included let’s run:

![](https://miro.medium.com/max/1400/1*cudvTjhqAHLbDj0hGI_fZg.png)

We will be greeted with a different folder structure than CRA but it’s pretty straightforward. Routing is managed by Next.js by mapping the files inside the pages directory by default.

Let’s say we wanted to display a random dog image we update pages/index.ts  
as follows:

![](https://miro.medium.com/max/1400/1*SjesorPSLTHwqJyqfQg14Q.png)

Next.js has routing included so there’s no need for other 3rd party dependencies like react-router or others. If we want to use images we can use the Image component which comes with optimisations for SSR and payload size (to use hosts other than current domain you may need to configure [next.config.js](https://github.com/vercel/next.js/discussions/20953)).

# [2\. Redux](https://redux.js.org/)

![](https://miro.medium.com/max/1400/0*r5hoNQVJxQ89YYXR.png)

Whether you like it or not, Redux is a robust and extremely popular state management library that most medium-to-large-sized projects use. It’s largely considered complex and hard to learn as it has a large ecosystem composed of packages such as redux-saga, redux-thunk, and others.

To check Redux, out let’s use CRA with Redux template:

![](https://miro.medium.com/max/1400/1*RyGzpuFzqhxVAjzx1YWMfw.png)

I’ll not explain the basics of Redux as that deserves a whole separate article 😢.

# [3\. React Query](https://react-query.tanstack.com/)

![](https://miro.medium.com/max/1400/0*38tM065dHwpO3N3n.png)

The hardest task a developer has to implement on the frontend is likely caching, the triple w’s (when, where and what) and how to are rather complex to answer. Well, react-query comes with a set of tools (hooks) that provide a simple API for caching queries and executing mutations, no longer having to resort to a useEffect on mount with a fetch request, manually setting and handling error and loading state.

We need to first update the root App component with the ContextProvider from react-query

![](https://miro.medium.com/max/1400/1*0298ed5xaA6F1f0n3kiiMw.png)

In another component:

![](https://miro.medium.com/max/1400/1*emJxYtbplC44UsDvS_2Giw.png)

See a more in-depth tutorial about react-query in this [article](https://alexstreza.hashnode.dev/data-fetching-with-react-query-and-axios).

# [4\. Cypress](https://www.cypress.io/)

![](https://miro.medium.com/max/1400/0*TanDOa8eeeO2W_7s.png)

End-to-rnd testing at its finest, Cypress is a state-of-the-art framework for creating component, flow and event API endpoint testing in JavaScript, it has a similar syntax to other JavaScript testing libraries and can be easily integrated with CI-CD tools such as Circle CI.

We can write a test that checks if the dog image has been displayed like this

![](https://miro.medium.com/max/1400/1*vcm7FEExqXdRxWK49znRBw.png)

# [5\. React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)

![](https://miro.medium.com/max/1400/0*2g9ZmgDDulD8LL0E.png)

This one is a personal favourite of mine and just a recent venture in the world of 3D. It’s a React renderer for \[ThreeJS\]([https://threejs.org/](https://threejs.org/)) that allows using components and hooks to create an intricate 3D experience of your choosing. Setup scenes, load 3D Models, dynamically update meshes on frames and many more, it’s the go-to choice for any interactive experience in the amazing world of WebGL.

As an example let’s show 2 sphere-shaped meshes (3D objects slang) that change color on hover and scale on click.

![](https://miro.medium.com/max/1400/1*W9POhA42DZL6U1tDRJzhKg.png)

> I hope you enjoyed this short list of amazing NPM packages and would love if you put a 💜 on it!

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)
