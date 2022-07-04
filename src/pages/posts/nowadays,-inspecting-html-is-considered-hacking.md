---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: Feb 28th
description: Yeah, the title is ridiculous and so is this story that really deserves more coverage. Inspecting website HTML is an extremely common feature most normal people are aware of, having learned in school…
title: Nowadays, Inspecting HTML Is Considered Hacking
readTime: 4 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/1*unzpkt9zgl3TG4L3oUsC8Q.png)

# Nowadays, Inspecting HTML Is Considered Hacking

## Browser DevTools = Hacking?

Yeah, the title is **ridiculous** and so is this story that really deserves more coverage. Inspecting website HTML is an extremely common feature most normal people are aware of, having learned in school to modify their grades in online gradebooks for their parents to see or by watching Indian [scammer payback](https://www.youtube.com/watch?v=B20Ul9sKb1E) videos on YouTube.

![](https://miro.medium.com/max/1134/0*NGQLn8dG7rchkEl7.png)

F12 = Hacker Tool

# The Story

## Keep Sensitive Information On The Server

Imagine one day you wake up to check a local school’s website and see a simple-looking table with educators’ and teachers’ information. You decide to dabble a bit with the website and discover a major via the **Inspect Element** tool which you immediately report and be classified as a hacker and threatened to **take charges** by the governor of the state.

That actually happened in Missouri last October when a journalist was going through the state’s Department of Elementary and Secondary Education application and found out it was **leaking** teachers’ private information.

The vulnerability consisted of a search functionality that took the last 4 digits of the Social Security number to ease filtering through teachers with identical names.

The leak was due to the payload returned through the request that also contained the full Social Security number in **Base64** encoding instead of only the last 4 digits alongside the rest of the data shown in the table.

![](https://miro.medium.com/max/1400/1*5vPKMDEk33UkDVMexnMjJg.png)

Sample Network Requests

Even though the SSN were not in plaintext and encoding is nothing but a way to turn data in a format that’s better suited for transmission or conversion for further encryption.

This means it can be easily decoded manually via [websites](https://www.base64decode.org/) or [programmatically](https://developer.mozilla.org/en-US/docs/Glossary/Base64) with one line of code such as this:

```
const decodedSSN = atob(encodedSSN);
```

The developer thought it a good idea to splice the SSN to show only the last 4 digits on the client instead of the server so anyone could have gone to the Network Tab and check the payload.

That’s a really big flaw for a system that could have leaked around **100.000** social security numbers to the public. Even though the front-facing app was meant to be accessed by local schools, anyone could have easily come across this leak.

# The Outcome

## A Meme Worthy One

Now you wonder whether the journalist got a sizable bounty for his ethical deeds, well I’m sorry to say but he actually got reprimanded by the governor of Missouri who in a tweet **prosecuted** his actions.

A Meme Worthy Tweet

Gov. Mike Parson even went the distance to threaten to sue the journalist and call him a ‘hacker’ and his actions as fuel to a “political vendetta”.

The lack of minimal technical prowess in such a case and quick judgement led to a very fiery Twitter thread and the birth of some [**gold memes**](https://www.reddit.com/r/missouri/comments/q9eqka/can_we_do_memes_because_this_is_a_very_memeable/) that deserve a subreddit of their own.

![](https://miro.medium.com/max/1400/0*RjlllGChAo8IAkKN.jpg)

Inspect HTML Memes Are Glorious

You may consider this story outdated since it’s been ages since October but in actuality only a week ago the legal case [was fully **resolved**](https://www.theregister.com/2022/02/15/missouri_html_hacking/) and the journalist is free of charges. Trying to cover up a higher-up mistake by persecuting an innocent for non-existent crimes is **unacceptable**.

Some websites have been attempting to circumvent users for years from accessing page source to prevent manually removing paywalls or downloading files hosted on the website but there is no real way of disabling inspect element in all browsers (at least none I know of).

# An Uncalled-For Solution

A solution that works for less experienced users is listening to keypresses related to shortcuts for Inspect Element or right-click menu via the onkeydown method and removing the normal behaviour by returning false as follows.

```
document.onkeydown = function(e) {
 if(e.keyCode == 123) {
 return false;
 }
 if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
 return false;
 }
 if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
 return false;
 }
 if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
 return false;
 }

    if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
     return false;
    }

}
```

This is a partial fix only as anyone can still access the [DevTools](https://developer.chrome.com/docs/devtools/) via the options menu in the browser and select More Tools -> Developer Tools. It’s by no means a solution to allowing the passing of sensitive data to the client.

![](https://miro.medium.com/max/1400/1*KwftsE2HkXkM1hjFfVqllw.png)

Access DevTools Via UI In Brave

There are still other ways to hide the page source but usually are overly complicated like using headers & CSS to inject HTML with this [fancy method](https://www.youtube.com/watch?v=msdymgkhePo).

I hope you liked this uncanny ‘**hacking-related** article. Don’t forget to 👏 and follow for more software & programming-related content 💜 or [even building & launching an AI app from the ground up](https://medium.com/r?url=https%3A%2F%2Fjavascript.plainenglish.io%2Fhow-i-launched-a-saas-in-60-days-with-an-empty-pocket-313aa59c3e78).
