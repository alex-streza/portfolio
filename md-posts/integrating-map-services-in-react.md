---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: Aug 18 2021
description: For years there’s been a never-ending debate in the development industry on which is the best map provider, let’s see who wins the Game of Map Providers. Google Maps SDK remained king for a long time…
title: Integrating Map Services in React
readTime: 4 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/0*bcucYGcemS9QQ7qp)

# Integrating Map Services in React

# React Mapbox Guide

For years there’s been a never-ending debate in the development industry on which is the best map provider, let’s see who wins the Game of Map Providers.

Google Maps SDK remained king for a long time due to its reliability but this started to shift as the price point was way higher than competitors and didn’t come with the same level of customizability such as Mapbox or the free Leaflet.

When you decide on a mapping service you have to consider multiple factors:

- price point ($/map load or API request)
- reliability (how accurate and robust the service is)
- customizability (the level of personalisation available, color palette or markers)
- developer experience (how easy to integrate and develop in an application)
- other services such as Search (also known as Geocoding), Navigation and others

![](https://miro.medium.com/max/1000/0*YCsDSMz_cLWDA-h5)

# 1\. Why [Mapbox](https://www.mapbox.com/)?

Earlier this year I developed a full-stack application to increase bicycle theft awareness using Mapbox and React and loved how easy to use and customize it is. Check it out over at [bike-theft-map.bikmo.com](https://bike-theft-map.bikmo.com/).

![](https://miro.medium.com/max/1400/0*ufznDnQ2BCn9Z0Kx)

In a sea of apps that use mostly Google Maps, you can easily stand out by taking advantage of the numerous customizable features of Mapbox through its entire slate of services.

Using Mapbox Studio you can create the dark mode map of your dreams and even integrate the color palette of a certain branding up to the leaf color in trees (kinda).

Even more, the free plan allows for up to 100k/month map loads which is extremely good for development and even small-sized applications.

# 2\. What are we building?

![](https://miro.medium.com/max/1400/0*XapYfE2iyzxw_FUr)

We’ll make a [NextJS](https://nextjs.org/) app for a Pet Veterinary with multiple clinics in New York, using it people can view markers for each location on the map and by clicking on it can complete a form regarding their pet details before taking it there.

# 3\. Creating a custom Map Style

After we create an account we can visit [Mapbox Studio](https://studio.mapbox.com/) and create a new style by pressing the New style button.

Choose a base style which we can then customize with our Pet Vet Clinic branding colors.

Let’s select the Monochrome style as it takes the least time to customize.

![](https://miro.medium.com/max/1400/0*syjqGBcWD6GA7hjm)

In the left sidebar menu under colors we can customize the color (#00A896).

![](https://miro.medium.com/max/1400/0*SKVMeLcQ6GqUM-oy)

In order to publish the changes we have to press the tiny Publish button in the top right corner. Now all we need is the style url to use in our website which we can find in the upper right corner.

![](https://miro.medium.com/max/1400/0*kpS4tRwhMPUSB7Wp)

# 4\. Mapbox in React

Since we are building this App in NextJS we can either use the official Vanilla JS [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/example/) library or the great React Wrapper [react-map-gl](https://visgl.github.io/react-map-gl/). I’ll use the latter as it works great in our use case.

Let’s create a brand new NextJS project and install the dependencies:

![](https://miro.medium.com/max/1400/1*2LMrBK0aJXCMe4bpjn6uCQ.png)

Let’s first extend the map-related components from react-map-gl and create some custom ones in the components/ folder.

In components/pin/index.js we add the custom map pin icon within the marker (check this [CodeSandbox](https://codesandbox.io/s/react-mapbox-example-t7xv0?file=/pages/index.js)):

![](https://miro.medium.com/max/1400/1*R3ERu6Ss42qm5OzvMm_XXw.png)

In components/marker/index.js we extend the marker component:

![](https://miro.medium.com/max/1400/1*LoTCYIClalhxt1gyJkcWvA.png)

And finally in components/popup/index.js for the form popup

![](https://miro.medium.com/max/1400/1*Ls1WOC55SOpjETPrCeySZA.png)

Now we can proceed by adding the map and business logic for showing markers and popups. This will include the minimal styling and the map viewport state so it can be easily updated to use an API for markers or form submission.

![](https://miro.medium.com/max/1400/1*HElcQN1WmU2NKt-wxtrFqw.png)

And that’s all we need to develop a map-based React application with MapBox, there are many more things that can be done using this amazing tool like heatmaps, map transitions, GeoJSON animation and others.

If you want to check this demo project (replace mapboxApiAccessToken & mapStyle in index.js) here is the [CodeSandbox](https://codesandbox.io/s/react-mapbox-example-t7xv0?file=/pages/index.js).

Check the official website [examples](https://visgl.github.io/react-map-gl/examples) or check this great Mapbox based tool to [increase bicycle theft awareness](https://bike-theft-map.bikmo.com/).

> I hope you enjoyed this short tutorial on integrating map services with Mapbox and NextJS and would love if you give it a 🦄!
>
> Check more of my **work** at [alexstreza.dev](http://alexstreza.dev/).

_More content at_ [_plainenglish.io_](http://plainenglish.io/)