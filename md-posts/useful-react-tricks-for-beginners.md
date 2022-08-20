---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: Jul 30 2021
description: 99% of the time it’s better, lighter and easier to use hooks, although classes provide some useful functionalities. A project may have both class & function components defined so you can mix and…
title: Useful React Tricks for Beginners
readTime: 4 min read
name: Alex Streza
---

# Useful React Tricks for Beginners

3 Important Topics every React Developer should understand

![](https://miro.medium.com/max/700/1*Yd3W9pxHirUOqB9gVMh1QA.png)

# For a beginner React may seem like a minefield filled with weird behaviours, uncanny interactions between hooks and whether to use classes or hooks. I hope this small article will aid you in your Frontend Journey as I explain some simple yet effective modern React techniques.

# 1\. Class or Function (Hooks) Components

99% of the time it’s better, lighter and easier to use **hooks**, although classes provide some useful functionalities. A project may have both class & function components defined so you can mix and match if required.

Let’s write a simple component which generates a different random value every time we click a button and updates the interface with the new value.

First using a Class Component we will get something like this:

![](https://miro.medium.com/max/700/1*ISL3YmXazUIlc_daZlIf0A.png)

Whereas with hooks our component would look like this:

![](https://miro.medium.com/max/700/1*eNtE27gWJokrz9zgH4146g.png)

In the end it’s up to you which variant you choose although nowadays hooks are pretty globally accepted as the way to go.

Hooks are:  
\- smaller in size (lines) and more verbose  
\- easier to understand for someone with no Object Oriented knowledge  
\- less complex as they don’t use lifecycle methods such as componentDidMount, componentDidUnmount and many others

There are many hooks available but I’ll discuss 2 which I consider the most important to understand.  
\- **useState**  
\- **useEffect**

# 2\. How useState works

**useState** is one of the most important hooks and provides state to our components. State is what makes a component interactive and dynamic but it can also reduce performances in case of frequent state updates if not used properly.

It receives as argument an initial value for the state and returns an array of a **current state** variable and a **setter function** to mutate(update) the state.

In our example earlier we saw how the useState hook works for a number variable but what about an object or array?

Let’s imagine we have a sign in form and need to store some public information regarding the user details such as email or name.

![](https://miro.medium.com/max/700/1*Kca1OKdWSaJ3TFljWxYCgg.png)

It’s the same thing as our previous example but with an object instead of a number.

Let’s say we have an array of users which liked a post how do we add a new user to the array?

![](https://miro.medium.com/max/700/1*RwXC8ZWWQ1m6uJVaYTofsw.png)

It’s not that complicated to update the state in the end isn’t it 🤓?

# 3\. How useEffect works

**useEffect** is another essential hook which allows us to add a callback function to listen to changes in a certain variable.

It provides 2 arguments  
\- callback function to execute on dependency change  
\- dependecy array

The dependency array sounds pretty weird and dangerous and it actually is if you forget about it. Not adding the \`\[\]\` argument to useEffect will cause it to trigger on every rerender which can lead to very undesirable situations (such as ‘ddos-ing’ your own API and losing credit)

Let’s say we wanted to make and API call to return a random animal name whenever the component first appears (mounts) on the screen.

We can write something like this

![](https://miro.medium.com/max/700/1*gY0lwxok-0BAtnRy7RZZDg.png)

Another use-case would be if we wanted to make the fetch request only when a modal opens.

![](https://miro.medium.com/max/700/1*YrRSf0s77d84IfY5zwZXYQ.png)

There are many other hooks and techniques in React but that’s for another day as this is already an undesirably lengthy and complex post as is.

> I hope you enjoyed this guide and would love if you put a 💜 on it!
