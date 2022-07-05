---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: Feb 19 2022
description: If you are a programmer and have a CS degree than you understand how some subjects are awfully difficult for no reason and not worth the struggle. This article isn’t about one of those, rather about…
title: I Tried OpenCV Face Recognition in C++
readTime: 5 min read
name: Alex Streza
---

![](https://miro.medium.com/max/700/1*BnfS5mpV0sfZbms6Qk_zZg.png)

# I Tried OpenCV Face Recognition in C++

# It was a horrible & creepy mistake

If you are a programmer and have a CS degree than you understand how some subjects are awfully difficult for no reason and not worth the struggle. This article isn’t about one of those, rather about those who’s titles and description sound fascinating using more buzzwords than Crypto DAO projects looking for funding.

![](https://miro.medium.com/max/524/0*Il_uKSxqriEjUTN8.jpg)

Is a college degree required in tech?

It’s 8:30 AM on a Sunday and you’re excited about a class covering biometrics and means of secure authentication, so innocent to believe it cannot go **wrong**. The class begins and you start seeing a few red flags, the most obvious is that the main programming language is C++ and not Python.

Wait what? Yeah you heard me right, I get C++ is light years faster than Python and better for low level & embedded systems but it’s developer experience is terrible, even more when using external libraries and deciphering antiquated documentation (will get a lot of hate for this).

You weep a bit and quickly check you were still on mute, damnit Zoom calls, but go on and pay attention as the coding example of the day unveils. **Face recognition**. Your eyes spark with interest and your tears go dry, you are ready to write some glorious code and conquer the world of AI & ML.

# Face Detection vs. Face Recognition

> I don’t like nouns, aren’t those the exact same thing? Nope.

Face Detection (or feature) is when a trained model detects the bounding boxes (often annotated as a geometric shape) that contain the desired feature.

Face Recognition is verifying whether a face matches the person the model was trained on. This is more complex as it requires multiple steps including detecting the face bounding boxes to more accurately determine. An advanced version of this technology is also used by [Apple in Face ID](https://www.pocket-lint.com/phones/news/apple/142207-what-is-apple-face-id-and-how-does-it-work) and many other devices for secure authentication.

![](https://miro.medium.com/max/700/1*5V9nnK-VvKCKR83o-L60rQ.png)

Face recognition can work with masks and it’s scary

Well that really sounds interesting so how come it ends up being a disappointing experience? Simply put **presentation** is key and code left unexplained is nothing more than irritating.

# Machine Learning In a Nutshell

> Buzzwords everywhere

Most of Machine Learning implies using a ‘**shady**’ [Black Box](https://engineering.dynatrace.com/blog/understanding-black-box-ml-models-with-explainable-ai/) algorithm on an immense enough well structured and representative pool of a data (**training** set) to find correlations and then apply it’s discoveries to a new set of data called **testing** set to tweak and configure it for a high enough good prediction rate. (this is my very abstract understanding at least)

# The Code

> An overly simplified explanation

In a field as complex as Biometrics you would expect a lot more coverage and articles explaining and solving potential errors, surely not as many as JS related questions on Stack Overflow since it’s C++ we’re talking about.

Unfortunately most blogs and tutorial websites showcase the same ‘unoptimized’ implementation. I’m nothing but a mere visitor in this field so I don’t know if this may be due to other methods being more efficient and well documented.

The only AI experience I’ve had was [**launching GenIdea**](https://javascript.plainenglish.io/how-i-launched-a-saas-in-60-days-with-an-empty-pocket-313aa59c3e78) an [OpenAI](https://openai.com/) powered app idea generating tool which is still in demo phase so have an understanding but not particularly well versed in the topic.

Hopefully someone with more expertise will come out and give a better answer in the comments but now let’s get on with the code and what I think it does. The more advanced explanation and code can be found in the [official OpenCV Docs](https://docs.opencv.org/3.4/da/d60/tutorial_face_main.html).

![](https://miro.medium.com/max/700/1*50pN0KM-iW9ExnBPGYsOTA.png)

OpenCV Imports & Normalize Function

This is still pretty straightforward, importing the opencv2 header files and defining a function that normalizes images by increasing the contrast between pixels I guess.

![](https://miro.medium.com/max/700/1*OSDYPf32YSXcQjnq-TyIEw.png)

Read CSV Function

Again a simple function that uses C’s file system API to read & parse line by line the CSV containing each the folder/file structure for train/test images.

![](https://miro.medium.com/max/700/1*JRF3prvDoumnpmmpVQsh-Q.png)

Training & Predicting using Eigen Model

I was expecting a **mammoth** of a main function and ended righteous so, the most tiresome part is reading and prepping the data for training the recognizer but more so understanding it’s inner workings.

We are loading the images into arrays to pass them to the marvelous recognizer that does all the heavy lifting by itself. After the training step we can check the accuracy of the model by attempting a prediction onto a test sample to further optimize it.

That’s the part I can’t wrap my head around, how exactly do you optimize a [cascade classifier](https://docs.opencv.org/3.4/db/d28/tutorial_cascade_classifier.html), I heard about testing different threshold values or cropping images to include only significant features but no working example in C++.

One thing I have to note is that the partial results you can get through some of the methods (namely [Fisherfaces](http://www.scholarpedia.org/article/Fisherfaces)) can be simply **terrifying** without understanding the reasoning behind them.

![](https://miro.medium.com/max/500/0*Xk4qft8ciWBfr0hv.png)

Example Fisherfaces output

Why are they so **eerie** looking? What do they mean and how do they help face recognition? I’ve yet to answer this questions but one day I’ll put in the hours and do the proper research.

> Hope you liked this first time biometrics encounter, don’t forget to **clap** and **follow** for more software-related content bi-weekly🚀.
