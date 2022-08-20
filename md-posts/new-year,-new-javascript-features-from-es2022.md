---
setup: |
  import Layout from '../../layouts/BlogPost.astro'
publishDate: Jan 21 2022
description: Every year, the ES team gets many proposals to improve on the glorious JavaScript ecosystem and some of them eventually are implemented officially. In order to get accepted, a feature needs to go…
title: New Year, New JavaScript Features from ES2022
readTime: 7 min read
name: Alex Streza
---

![](https://miro.medium.com/max/1400/1*tfkSTd2EWWzFgGELNJuNwQ.png)

# New Year, New JavaScript Features from ES2022

## Top-level await. Private #. At() & more. What’s coming in ES2022.

Every year, the ES team gets many proposals to improve on the glorious JavaScript ecosystem and some of them eventually are implemented officially. In order to get accepted, a feature needs to go through 4 stages as mentioned in [TC39](https://tc39.es/process-document/) (also check out the [TC39 repo](https://github.com/tc39)).

The following sections are getting additions in the upcoming update:

- For the awesome **async/await** fans we have**: Module loading**
- For the savvy **OOP** lovers we have: **Classes**
- For the marvelous **functional** programmers we have: **Built-in Objects**

![](https://miro.medium.com/max/1400/1*c8F9XnDVOXuC6i3jXjpaxw.png)

ES2022 > ES2021

# 1\. Module Loading

> Tired of errors when awaiting at the root of a file? Upgrade incoming.

Everyone loves **_async_** functions and the **_await_** keyword as it saved us from the hell of nested promises but it limited the use of await to only async functions and not at the root of a file and as programmers we hate (or love) writing workarounds🤓.

In ES2022, we can use top-level await to import resources dynamically, this can prove useful in CLI scripts.

We can use it like this:

```
// load-resources.mjs
// with top-level await
const data = await (await fetch("https://resources")).text();
export const resource = JSON.parse(data).resource;
```

It’s supported by [81% of devices](https://caniuse.com/mdn-javascript_operators_await_top_level) and Node.js 14.8+ as of January 2022.

# 2\. Classes

## Private everything

> As the saying goes keep your variables private but your relationship public.

Most OOP-oriented languages use private and public to limit or extend the visibility of fields, methods, or accessors. But JavaScript had no limits (or limitations) in this regard. Now, they are included in JavaScript by prefixing with #.

```
class LikeCounter {
#likes;constructor(likes) {
this.#likes = likes;
} #increment () {
return this.#likes + 1;
}#decrement () {
return this.#likes - 1;
}doSomethingWithIt() {
this.#decrement()
}
}const obj = new LikeCounter(123);
console.log(object.#doSomethingWithIt()); // SyntaxError
console.log(object.#likes); // SyntaxError
object.doSomethingWithIt();
```

[Most browsers](https://caniuse.com/mdn-javascript_classes_private_class_fields) (January 2022 usage around 88%) and Node.js 12+ support private instance fields.

Regarding [private methods and accessors](https://caniuse.com/mdn-javascript_classes_private_class_methods) support is around 82% for most browsers and Node.js supports this feature since version 14.6.

## Public Static Class Fields

> Wanna make your class more trendy? Add the brand new static fields.

[**Static class fields**](https://github.com/tc39/proposal-static-class-features#static-public-fields) are a convenient new notation for appending properties to a class object.

```
// no static class fields:
class Product {
// ...
}
Product.id = 1;// now static class fields:
class Product {
static id = 1;
// ...
}
```

[Most browsers](https://caniuse.com/mdn-javascript_classes_static_class_fields) (January 2022 usage: ~89%) and Node.js 12+ support public class fields.

## Existence Checks For Private Fields

> To be or not be or better said to exist or not exist a goddamn property.

Since trying to access a non-existing private field on an object throws an unfortunate exception, there needs to **exist** a method to check if an object has a given private field. Here comes the [**in operator**](https://github.com/tc39/proposal-private-fields-in-in).

```
class Dog {
#namestatic isDogInstance(object) {
return #name in object;
}
}
```

The [browser support for using the](https://caniuse.com/mdn-javascript_classes_private_class_fields_in) `[in](https://caniuse.com/mdn-javascript_classes_private_class_fields_in)` [operator on private fields](https://caniuse.com/mdn-javascript_classes_private_class_fields_in) is limited (January 2022 usage is around 70%). Node.js supports the feature since version 16.4.

## Private Static Class Fields and Methods

> Static variables are always public? Just **privatize** them (bad soviet joke).

As private fields and methods, encapsulation limitations are useful on the class level. [**The private static methods and fields feature**](https://github.com/tc39/proposal-static-class-features) adds hard visibility limitations for class-level fields and methods using the `#` prefix.

```
class Customer {
static #idCounter = 1; // static privatestatic #getNextId() { // static private
return Customer.#idCounter++;
}#id; // instance privateconstructor() {
this.#id = Customer.#getNextId();
}toString() {
return \`c${this.#id}\`;
}
}const customers = \[new Customer(), new Customer()\];
console.log(customers.join(' ')); // c1 c2
```

The support percentages are similar to the private instance fields and methods described before.

## Static Class Initialization Blocks

> Wanna complicate static variables? Well here we go…

Sometimes it is necessary or convenient to do more complex initialization work for static class fields. With the private static fields feature from before, this initialization must occur inside the class because the private fields are not accessible otherwise.

The [**static initializer blocks feature**](https://github.com/tc39/proposal-class-static-block) provides a mechanism to execute code during the class definition evaluation.

Just create a code block prefixed with the `static` keyword and it will be executed when the class is initialized:

```
class Example {
static propertyA;
static #propertyB; // privatestatic { // static initializer block
try {
const json = JSON.parse(fs.readFileSync('example.json', 'utf8'));
this.propertyA = json.someProperty;
this.#propertyB = json.anotherProperty;
} catch (error) {
this.propertyA = 'default1';
this.#propertyB = 'default2';
}
}static print() {
console.log(Example.propertyA);
console.log(Example.#propertyB);
}
}Example.print();
```

The [browser support for static class initialization blocks](https://caniuse.com/mdn-javascript_classes_static_initialization_blocks) is limited (January 2022 exactly **69.69%)**. Node.js supports the feature since version 16.4.

# 3\. Built-in Objects

## Error: .cause

> Meaningful messages not meaningful enough? Add cause to your errors.

Errors are often wrapped to attach meaningful messages and record the error context. However, this means that the original error can get lost. Appending the original error to the wrapping error is desirable for logging and debugging purposes.

The [**error cause feature**](https://github.com/tc39/proposal-error-cause) provides a standardized way to attach the original error to a wrapping error. It adds the `cause` option to the `Error` constructor and a `cause` field for retrieving the original error.

```
const getProduct = async (productId) => {
try {
return await fetch(\`https://server/api/products/${productId}\`);
} catch (error) {
throw new Error(
\`Loading product data with id ${productId} failed\`,
{ cause: error }
);
}
}try {
const productData = await load(69420);
// do something
} catch (error) {
console.log(error); // Error: Loading data for product with id 69420 failed
console.log(error.cause); // TypeError: Failed to fetch
}
```

The [current browser support for the error clause feature](https://caniuse.com/mdn-javascript_builtins_error_cause) is limited (January 2022 usage: ~75%). Node.js supports the feature since version 16.9.

## Array, String, and TypedArray: .at()

> Pythonify your JavaScript code with at(-1)

Getting elements from the end of an array or string was a hassle and often resulted in lengthy repetitive code, like `let last = arr[arr.length - 1]`. This requires that the array is stored in a temporary variable and prevents seamless chaining.

[.at() feature](https://github.com/tc39/proposal-relative-indexing-method) provides a shorter, more elegant way to get an element from the beginning or the end of a string or array without the need for a temporary variable.

```
const someString = "JSiscool";console.log(someString.at(3)); // i
console.log(someString\[3\]); // iconst temp = someString;
console.log(temp\[temp.length - 1\]); // l
console.log(temp.at(-1)); // l - no temporary variable required
```

[The browser support for the .at feature](https://caniuse.com/mdn-javascript_builtins_array_at) is currently limited (January 2022 usage is around 70%), and is only available in Node.js 16.6+.

## Object: .hasOwn()

> If hasOwn was IRL parenting tests would be obsolete

The [**Object.hasOwn feature**](https://github.com/tc39/proposal-accessible-object-hasownproperty) is a powerful and robust way of checking if a property is directly present on an object. It is a preferred alternative to using `hasOwnProperty`:

```
const dog = {
name: "Olaf" // who would name his dog Olaf
};console.log(Object.prototype.hasOwnProperty.call(dog, 'name'));
console.log(Object.hasOwn(dog, 'name')); // better

The [browser support is currently limited](https://caniuse.com/mdn-javascript_builtins_object_hasown) (January 2022 usage is around 70%), and you need Node 16.9+ to use `hasOwn` directly.
```

## RegExp: Match Indices (‘d’ Flag)

> If you speak RegEx this is for you crazy person

By default, regular expression matches record the start index of the matched text, but not its end index and not the start and end indices of its capture groups.

In use cases covering text editor syntax or search result highlighting, having capture group match indices as part of a regular expression match can be gratifyingly helpful.

With the [**regexp match indices feature (‘d’ flag)**](https://github.com/tc39/proposal-regexp-match-indices), the match and capture group indices are available within the `indices` array property of the expression result. The matched text position and the match indices position are the same, e.g., the full matched text is the first value in the match array and the indices array.

The indices of the named captured groups are recorded in `indices.groups`.

I really am no RegExer or guru so don’t mutilate my syntax.

```
const regexpr = /match\\s(?<word>\\w+):(?<digit>\\d)/gd;
const someString = "Game three:3.";for (const match of someString.matchAll(regexpr)) {
console.log(match);
}©

The above example code has the following output:

\[
'Game three one:3',
'three',
'3',
index: 5,
input: "Game three one:3.",
groups: { word: 'three', digit: '3' },
indices: {
0: \[6,17\],
1: \[12,15\],
2: \[16,17\],
groups: {
digit: \[16, 17\],
word: \[12, 15\]
}
}
\]
```

The [browser support for the RegExp match indices feature is currently limited](https://caniuse.com/mdn-javascript_builtins_regexp_hasindices) (January 2021 usage around 79%). In Node.js, you can enable the feature with the `--harmony-regexp-match-indices` flag, but it is disabled by default.

# Overall

A new year of marvelous features is being added to the already glorious JavaScript ecosystem thanks to the TC39 team.

Hope you liked this walkthrough of the new things coming in 2022 for JavaScript and **clap** on and follow for more programming articles 🦄.

_More content at_ [**_plainenglish.io_**](http://plainenglish.io/)_. Sign up for our_ [**_free weekly newsletter_**](http://newsletter.plainenglish.io/)_. Get exclusive access to writing opportunities and advice in our_ [**_community Discord_**](https://discord.gg/GtDtUAvyhW)_._