---
layout: '../../layouts/BlogPost.astro'
pubDate: Aug 17 2021
description: There are many libraries that provide ways to make HTTP requests for the frontend but one remained the de facto leader for many years and that is Axios. It’s a neat library which allows for more…
title: Data Fetching with React Query & Axios
readTime: 4 min read
name: Alex Streza
---

# Data Fetching with React Query & Axios

## Implementing Hooks for Furry HTTP Requests in react-query

![](https://miro.medium.com/max/1400/0*jVo04AyJ_pyVt0Go)

There are many libraries that provide ways to make HTTP requests for the frontend but one remained the de facto leader for many years and that is [Axios](https://axios-http.com/docs/intro). It’s a neat library which allows for more structured and faster development but there’s a library which recently surfaced called [react-query](https://react-query.tanstack.com/). It’s made for React and uses hooks and providers which are a more native approach in a React application and it’s **great**.

# 1\. Why not use only Axios?

Axios is a solid library don’t get me wrong but react-query brings a caching mechanism under the hood and its API is incredibly friendly for React users. This doesn’t mean you can’t use both at the same time if you want instead of using the browser-based fetch API.

![](https://miro.medium.com/max/1200/0*nygrYwJO-2SP1vE_)

# **2\. Axios Base Service**

We will use the great [Dog CEO API](https://dog.ceo/dog-api/) to show a random furry friend and a list of 🐶. We want to make the request when the component mounts and destructure the response data (messsage) using a custom request function using Axios.

![](https://miro.medium.com/max/1400/1*fzvGzrq2VD2ZwxRFO4xsdQ.png)

Then we can define a DogService class which will use static methods to make the requests using the Axios API.

![](https://miro.medium.com/max/1400/1*6N_6DJAA9maUPUhfCWshRg.png)

We can use the requests in the App component and showcase our newly found furry friend as follows:

![](https://miro.medium.com/max/1400/1*4ZnOnEcrAqhMqSN2cPFmdg.png)

What if we wanted to show a loading indicator until the \`getAllDogs()\` request is completed?

We would need to add an isLoading state variable and manually update it when request starts and completes.

![](https://miro.medium.com/max/1400/1*xD1P1SmWuhZzyvFjnZl0Kw.png)

Also if we require to show an error message we have to define another error state variable and those pieces of state have to be handled for multiple requests in an application and it can get rather messy.

# 3\. React Query Implementation

This works great but we can improve on it by caching the \`getAllDogs()\` request using react-query, which will also remove the need of useEffect to make request on mount and include error, isLoading values and many other useful stateful variables.

Update the index.js file at the root of our application to add the \`QueryClientProvider\` react-query uses to make the hooks globally available with some default settings. Also, we’ll add ReactQueryDevtools to debug the cached state with ease.

![](https://miro.medium.com/max/1400/1*cC9po8aj1JNfoZjVlV2uXA.png)

After that let’s modify the App component with useQuery hook:

![](https://miro.medium.com/max/1400/1*yNVUub29IqQRoa9_hN3G8w.png)

This approach is much cleaner and our furry friend is back more optimized than ever.

![](https://miro.medium.com/max/1026/0*U2Z2NznYsMLJAKE8)

Furthermore, we can add options to customize and increase our performance even more.

![](https://miro.medium.com/max/1400/1*8FrGn-hilvxnN-IacAvDDg.png)

You can find more details in the official documentation of react-query [here](https://react-query.tanstack.com/overview) or if you want to check this example check this [CodeSandbox](https://codesandbox.io/s/axios-react-query-pj9nl?file=/src/index.js:495-546).

> I hope you enjoyed this short guide and would love if you put a 💜 on it!

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)
