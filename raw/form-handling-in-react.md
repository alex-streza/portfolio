---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Jan 30th 2022
description: Every Frontend Developer will at some point in their journey write an ungodly sized form and often question their existence for countless hours. Serializing fields, error handling, validation, field…
title: Form Handling in React
readTime: 3 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/0*hDpM-JD1QbJ_u-JU)

# Handle Forms Like A Pro in React

## React Hook Form Guide — Intro

![](https://miro.medium.com/max/1154/0*VLNo4knW1GOmcr8s.png)

Every Frontend Developer will at some point in their journey write an ungodly sized form and often question their existence for countless hours. Serializing fields, error handling, validation, field interactions and show/hide toggles are the bane of every web developer’s career but it doesn’t have to be like that.

In this post, I’ll showcase the advantages of react-hook-form over a no library approach and in a future article will touch on more advanced topics such as Nested Forms, Wizard Forms, and integrating with 3rd party libraries.

Let’s write a Vanilla (classic) [React](https://reactjs.org/) form for a PetShop website where you can get a nanny for your furry 🐶 friend while you are away.

![](https://miro.medium.com/max/1400/1*5IKA4AzxO37WT588Tw-_tA.png)

This works fine for smaller forms but having to add field validation and handling errors manually becomes a huge hassle as forms expand.

## Drumrolls please 🥁…

# Introducing [React Hook Form](https://react-hook-form.com/)

I’m aware of the presence of many other form managing libraries but I for one enjoy working with react-hook-form more than others like [Formik](https://formik.org/), [redux-form](https://redux-form.com/) or [react-final-form](https://final-form.org/react) due to its simple hooks API.

Hooks are great for reusability and asking for no more than the amount of functionality you desire in a certain component and react-hook-form hooks do exactly that.

Let’s convert the latter using react-hook-form (Version 7) hooks and remain awed by their effectiveness:

![](https://miro.medium.com/max/1400/1*28n5KI6hb0X6kU6TGpwJng.png)

We achieve the same thing in a much easier to understand manner for any newcomer getting to our project by allowing react-hook-form to manage state and validate fields.

To learn more about useForm hook and many more features check the amazing [react-hook-form documentation](https://react-hook-form.com/api/useform/).

I’ll be writing another part in the future taking on advanced react-hook-form tactics for **nested forms**, **wizard forms,** and using with **3rd party components** so stay tuned 🚀.

If you want to check the code in this article here is the [CodeSandbox](https://codesandbox.io/s/react-hook-form-hjb5w?file=/src/App.js).

> I hope you enjoyed this short guide for modern forms in React and would love if you give it a 🦄!

![](https://miro.medium.com/max/1400/0*O349aOSfdcLrrqyt.jpg)

If you want to support my endeavours in the development world, you could help [buy me a furry](https://www.buymeacoffee.com/snappy.guy) 🐶.

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)
