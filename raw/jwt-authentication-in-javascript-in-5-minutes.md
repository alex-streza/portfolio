---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
pubDate: Aug 31st
description: Authentication is a complex and mostly divided topic with some preferring Stateful Session Cookies approach and others choosing Stateless JWTs. I’m one of the latter as I like how quick and effective…
title: JWT Authentication in JavaScript in 5 Minutes
readTime: 4 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/0*j_2zq5YwOaRhey1m)

# JWT Authentication in JavaScript in 5 Minutes

## How to use JWTs to authenticate users — Express JWT Middleware, Node.js Crypto & React

Authentication is a complex and mostly divided topic with some preferring Stateful Session Cookies approach and others choosing Stateless JWTs. I’m one of the latter as I like how quick and effective implementing JWT Auth is.

![](https://miro.medium.com/max/1000/0*rGl7cBuJPAU1gBNK)

Whenever we create an application, we need to be aware of some important security aspects:

# 1\. Passwords

Passwords should never be stored in plain text in the database as it can prove to be a massive vulnerability.

Assume an attacker (hacker) gained access to our database which is already a huge security issue and our application has therefore been compromised. If we stored login information in plain text the attacker can reuse the email & password combos to access other common websites the user might use like Google or even Online Banking.

Yes, most of these platforms require [2FA](https://authy.com/what-is-2fa/) or other extra steps to authenticate but that’s not a reason to knowingly risk exposing client credentials.

![](https://miro.medium.com/max/1400/0*IPKYszQDkKIDn-sw)

Fortunately, the solution is rather simple and that is storing a hash in the database instead of the plain password.

A hash is the result of a cryptographic function that receives an input and always returns a unique fixed size (256 bits for SHA256) for that particular input.

# Generate [SHA256](https://qvault.io/cryptography/how-sha-2-works-step-by-step-sha-256/)

![](https://miro.medium.com/max/1400/1*jk1gagrQ8R-cUHyOZslaLQ.png)

# 2\. Authentication ([JWT](https://jwt.io/))

JWT (JSON Web Tokens) are a globally standardised way of storing user credentials and passing them between 2 parties (frontend client & backend server) in a secure manner.

Basically, a JWT is a string which should be generated on the backend and stored in the frontend to be sent with every request.

> But how do we generate this token and where do we store in on the client?

Let’s see how we can use JWTs to authenticate users in an Express application:

I’ll be using [express-jwt](https://www.npmjs.com/package/express-jwt) middleware library as it’s very simple and straightforward, to note there are other maybe more robust packages such as [passport](https://www.npmjs.com/package/passport).

# Generate JWT

We first have to create our sample project with the following commands:

![](https://miro.medium.com/max/1400/1*Z13KA7qzkJnuPheWaB5Fdg.png)

After that just create an `index.js` file and add a start script to package.json like this `"start": "node index"`

We need to expose 2 endpoints, one for users to register and another for login.

![](https://miro.medium.com/max/1400/1*IvW9Y9Tyq8bO7pUipx31qw.png)

# Register

Here we have to generate the hashed password and insert it in the database with the provided email.

![](https://miro.medium.com/max/1400/1*2QMrl93KS3XoEBgbunuUyQ.png)

# Login

Similar to register, we need the hash value of the password and use it to check if the email and hashedPassword pair exist in the database. Using the user object we sign the JWT token and return it in the exposed Authorization response header.

![](https://miro.medium.com/max/1400/1*D42eSniNoFC7l0pbpXMv2Q.png)

# Store JWT

There are 2 common ways to keep JWTs persisted in the client side:

- Cookies
- Local Storage

Both come with security issues like [XSS](https://owasp.org/www-community/attacks/xss/), [CSRF](https://owasp.org/www-community/attacks/csrf) or advanced [XST](https://owasp.org/www-community/attacks/Cross_Site_Tracing) therefore neither of those storage options is entirely secure.

I prefer storing JWTs in cookies as that may be just a slight bit more secure than Local Storage IMOP.

Let’s presume our client is a SPA and more precisely a React-powered application and the client often makes requests to the API using an Axios client.

Let’s create a custom Axios client class which we’ll call request.js.

We’ll be using [react-cookie](https://www.npmjs.com/package/react-cookie) as it provides a simple hook API to manipulate cookies.

![](https://miro.medium.com/max/1400/1*4Fq4IfXRg9Y1ie3hqLQE5g.png)

# Wrapping Up

Security is a tricky domain and authentication is often even trickier since protecting user data is the most important goal of an application.

If you want to check the code here is the [CodeSandbox](https://codesandbox.io/s/express-jwt-example-ln0og?file=/index.js) link.

_Check more of my work at_ [_alexstreza.dev_](https://www.alexstreza.dev/)_._

I hope you enjoyed this short showcase of JWT Authentication in JavaScript and would love it if you give it a 👏!

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)
