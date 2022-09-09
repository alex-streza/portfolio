---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Aug 16th 2021
description: React is the most popular Frontend Framework (library) for obvious reasons, it has a great community with many ready made packages to solve every task and allows for fast component driven development…
title: Consuming GraphQL APIs in React
readTime: 4 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/0*AC96783_VV6QI-da)

# Consuming GraphQL APIs in React

## Urql Hooks & Hasura Instant Cloud GraphQL API

![](https://miro.medium.com/max/942/0*KHUAHJ0_B_E33iSf)

[React](https://reactjs.org/) is the most popular Frontend Framework (library) for obvious reasons, it has a great community with many ready made packages to solve every task and allows for fast component driven development without the hassle of copy-pasting code.

React doesn’t provide an in-house solution for API requests nor a certain guideline to follow other than to use the common component lifecycle methods which are now covered through hooks. This means it’s up to developers to decide what ‘s the best way to consume an API whether it be [REST](https://restfulapi.net/), [GraphQL](https://graphql.org/) or some shady [FIX API](https://www.fxcm.com/markets/insights/fix-api/).

We are going to build a fast & reliant GraphQL API with [Hasura](https://hasura.io/), consume it in the most popular frontend library React and showcase the cutest animals out there **dogs**.

# 1\. Why GraphQL

![](https://miro.medium.com/max/760/0*dHAQ5hrd3TtGnJmY)

Basically it’s fast. Extremely fast development, out of the box API documentation and option to request exactly the amount of resources you need or to batch multiple requests into one. It’s been initially developed by Facebook and then continued as a community project therefore it’s perfect to use in another Facebook developed tech such as React.

# 2\. What is Hasura

Cloud service to host GraphQL API, provides speed, increases API development and has built-in Auth & Caching. It has a very friendly GUI and also a free plan to test it’s capabilities.

Like other cloud providers it asks us to select a pricing plan, server location and project name and then we can launch the console.

![](https://miro.medium.com/max/906/0*q3rZjhBhXOksNKmW)

To be extremely fast we’ll configure our database through [Heroku](https://dashboard.heroku.com/), just follow the steps and we have a free playground to build our API.

![](https://miro.medium.com/max/1400/0*iRGnGdCFB4FdEx80)

Select the created database and add an Animal table with 3 columns (id, name, image).

![](https://miro.medium.com/max/1400/0*TGDOjOfD4fcUxz-w)

We insert a row through the GUI to then test in our project and we are ready to write some code 🤓.

![](https://miro.medium.com/max/1400/0*wRveRBfOZPb9ggNI)

If we want to play around with queries or mutations we can always use the [GraphiQL Interface](https://hasura.io/learn/graphql/hasura/data-modelling/2-try-user-queries/) which gives instant documentation for queries or mutations we could make.

# 3\. [Urql](https://formidable.com/open-source/urql/)

A [Formidable](https://formidable.com/) (excuse the pun) open source lightweight library created for consuming GraphQL APIs in React, Svelte, Vue, or even vanilla JavaScript projects. Although no one stops us from using something like [axios](https://github.com/axios/axios), [react-query](https://react-query.tanstack.com/) or even the browser based fetch API (or other GraphQL solutions like [Apollo](https://www.apollographql.com/) or [Relay](https://relay.dev/) but check [here for more info](https://formidable.com/open-source/urql/docs/comparison/)), I believe urql will boost development speed and hide the complexity of parsing, making queries & mutations.

To get started with urql & graphql we run on a previously created [NextJS project](https://nextjs.org/):

![](https://miro.medium.com/max/1400/1*K0vEbF1kBlTThDh52iG-XA.png)

Wrap the App root component in the urql Provider and set the options as required.

![](https://miro.medium.com/max/1400/1*VenLdZXiEzTEwlsanKpoqw.png)

We can now use the useQuery and useMutations hooks from urql to quickly access the GraphQL Hasura hosted API like this:

![](https://miro.medium.com/max/1400/1*UNlqB8Ggp_P751XAV_VJ7g.png)

After adding some TailwindCSS classes for minimal styling we get

![](https://miro.medium.com/max/1400/1*Fp4fHf5EVPeL95ybjpn0tg.png)

Happy Furry Fiesta 🐶!

![](https://miro.medium.com/max/690/0*ix60Hl4wGTbSt9ut)

A simple, fully working example on making GraphQL queries and mutations with Urql in React.

There are many more options such as persistence, SSR, debugging, Auth and testing that can be configured for urql but that’s not the purpose of this simple example on how to quickly consume an API in React.

If you want to check this demo project (replace api_url & secret in \_app.jsx) here is the [CodeSandbox](https://codesandbox.io/s/react-graphql-urql-33u2f?file=/tailwind.config.js).

I hope you enjoyed this short tutorial for consuming GraphQL in React and would love if you leave a comment!
