---
marp: true
---

## Let's open up the browser

---

### Your browser is not just a browser, it's an **IDE**

---

<figure style="width: 100%">
  <img alt="dom and events 1.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/Rw1DBJDMPhrvwvhd2wpjgzck" />
</figure>

---

### Using JavaScript with HTML

```html
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
    <!-- Your content -->

    <!-- Your script tags here -->
    <!-- <script src="first_file.js"></script> -->
    <!-- <script src="other_file.js"></script> -->
  </body>
</html>
```

Loading a JS file is **blocking** the page rendering => Put it at the end.

---

## DOM

Document Object Model

---

[wikipedia.org/Tree*(data*structure)](https://en.wikipedia.org/wiki/Tree_%28data_structure%29)

<figure style="width: 60%">
  <img alt="dom and events 2.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/wR1m5XpQrwgQ7benq6Pbb5Nv" />
</figure>
  
---

<figure style="width: 90%">
  <img alt="dom and events 3.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/KyDJRnjik2YHps5x3vgf6PV6" />
</figure>

---

<figure style="width: 80%">
  <img alt="dom and events 4.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/QKKAUH892eBorEVHA2Ys4Yfy" />
</figure>

---

<figure style="width: 100%">
  <img alt="dom and events 5.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/RpweSDtBa6CXUCeDH37bBz39" />
</figure>

---

The browser **parses** the HTML response and **creates** the DOM from it.

You can visualize the DOM in the Chrome Inspector, in **Elements** tab.

---

<figure style="width: 95%">
  <img alt="dom and events 6.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/WUwBhBi2WVVNc8XdoMiqZmpX" />
</figure>

---

### Reference

Please keep a tab open with the [DOM Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

---

## Interacting with the DOM

---

### The most important [method](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

```
document.querySelector(CSS_SELECTOR);
```

---

### Selecting an element with an `id`

```html
<ul id="players"></ul>
```
```js
const list = document.querySelector("#players"); // CSS id selector
```
```js
// or
const list = document.getElementById("players"); // just the ID name
```
----

🤔 What about elements with no `id`?

---

### Basic CSS selectors

Reminder

```css
p               /* Type selector  */
.red            /* Class selector */
#players        /* ID selector    */
```

---

### Advanced CSS selectors

Reminder

```css
ul.active      /* Combined selectors */
ul .active     /* Descending combinator */
ul > .active   /* Child combinator */
```

Combine them to get **specific** CSS selectors:
```js
let list = document.querySelector('ul#players > .active');`
```

---

We've just selected an element! 💪


What can we do now? 🤔

---

### Append content

We are using the [Element#insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) method.

```js
// element.insertAdjacentHTML("position", "HTML String")
list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");
```

You can also have a look at [ParentNode#append](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append).

---

### Selecting from a subset of the DOM

🎩 You can call `querySelector` on any element!

```html
<p class="red">A red paragraph</p>

<ul id="players">
  <li class="green">Luke</li>
  <li class="red">Anakin</li>
</ul>
```
```js
const list = document.querySelector("#players");
const element = list.querySelector(".red");
console.log(element.innerText);
// => ?
```
```text
Anakin
```

---

### Selecting several elements

We want to select **all** winners

```html
<ol id="fifa-wins">
  <li>Brazil (5 wins)</li>
  <li>Germany (4 wins)</li>
  <li>Italy (4 wins)</li>
  <li>Argentina (2 wins)</li>
  <li>Uruguay (2 wins)</li>
</ol>
```

---

We can with [`Element.querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)!


```js
const countries = document.querySelectorAll("#fifa-wins li");
countries.forEach((item) => {
  console.log(item.innerText);
});
```

`countries` is a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) variable.

---

### Use the right method

```js
const countries = document.querySelector("#fifa-wins li");
// => <li>Brazil (5 wins)</li>
```

`querySelector` returns **the first** element that matches selector!

```js
const countries = document.querySelectorAll("#fifa-wins li");
// => NodeList(5) [li, li, li, li, li]
```

`querySelectorAll` returns them all in a list!

---

Your turn! How would you append `"France (2 wins)"` to the list? 🤔

---

```js
const list = document.querySelector('#fifa-wins');
list.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');
```

---

## Advanced DOM Manipulations

---

### Show / Hide

Use [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style) to change any CSS property

```js
const element = document.querySelector(CSS_SELECTOR);

// Hide
element.style.display = "none";

// Show
element.style.display = "";

// Change font color
element.style.color = "red";
```

---

### Add / Remove a class

Use [`classList`](https://developer.mozilla.org/en/docs/Web/API/Element/classList)


```js
element.classList.add("red");
element.classList.remove("red");
element.classList.toggle("red");
```

---

### Read / Write inputs

```html
<!-- Some HTML -->
<input name="email" id="email" value="paul@gmail.com" />
```
```js
const emailInput = document.querySelector("#email");

// Read
console.log(emailInput.value);

// Write
emailInput.value = "john@gmail.com";
```

---

### Extract text / HTML

```html
<a href="https://www.lewagon.com" id="home">Le Wagon <em>rocks</em></a>
```
```js
const home = document.querySelector("#home");
console.log(home.innerText);
console.log(home.innerHTML);
console.log(home.attributes.href.value);

home.innerHTML = "Le Wagon <strong>rocks</strong>!"; // Update HTML
```

---

### Dataset

Use [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

```html
<div id="user" data-uid="2471555" data-github-nickname="Papillard">
  Boris Paillard
</div>
```
```js
const boris = document.querySelector('#user');
console.log(boris.dataset.uid);
console.log(boris.dataset.githubNickname); // note the lowerCamelCase
```

---

## Events

[Full Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

---

### HTML DOM Events

```js
DOMContentLoaded
blur
click
change
focus
keyup
mouseover
resize
scroll
submit
touchstart
```

---

### Events occur on specific objects

```text
DOMContentLoaded  # document
blur              # input / textarea
click             # any visible element
change            # selectors and checkboxes
input             # input / textarea
focus             # any visible element
keyup             # window / any focused element
mouseover         # any visible element
resize            # window
scroll            # window / any scrollable element
submit            # form
touchstart        # for mobile devices
```

---

## Event Listener 🎙 
There are two ways of adding an event listener to an `element`

---

1. Use [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on a [DOM Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

```js
// index.js
let element = document.querySelector('CSS SELECTOR')
element.addEventListener(eventType, (event) => {
  // Do_something (callback)
});
```

---

2. Use [inline event listeners](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)

```xml
<!-- index.html --> 
<button onclick="Do_something(event)">Click me!</button>
```

```js
const Do_something = (event) => // callback
```

---

We will mostly use... **inline event listeners**! 🎉 

1) Working with a JS framework - Vue, React, Angular - you will encounter these
2) They are also more similar to the mini program framework syntax

---

### What's a callback?

<figure style="width: 100%">
  <img alt="dom and events 7.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/XQCQMsoaaJDPzqzHK1qJuYiT" />
</figure>

---

### Listening to a click

```html
<img src="https://kitt.lewagon.com/placeholder/users/monsieurpaillard"
     id="romain" height="200" alt="Romain Paillard"
     onclick="logEvent(event)"
      />
```
```js
const logEvent = (event) => {
  console.log(event); // see the event details
  console.log(event.target); // see the element causing the event
}
});
```



You can read more about [Event.target](https://developer.mozilla.org/en-US/docs/Web/API/Event/target)

> UX tip: change the default cursor if the image is clickable.

---

### Live-code

Toggle the `img-circle` CSS class when clicking on these images.

```css
.img-circle {
  border-radius: 50%;
}
```

---

You might want to add an `onclick` on an image and then...
```js
const roundifyImage = (event) => {
  let element = event.target
  element.classList.toggle = "img-circle"
}
```

---

**BUT** you can instead pass the element itself using [`this`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) keyword!

```html
<img src="https://kitt.lewagon.com/placeholder/users/monsieurpaillard"
     id="romain" height="200" alt="Romain Paillard"
     onclick="roundifyImage(this)"
      />
```

```js
const roundifyImage = (element) => {
  element.classList.toggle = "img-circle"
}
```

---

### What if we have many elements that need to be interactive?


```html
<img src="https://kitt.lewagon.com/placeholder/users/monsieurpaillard"
  id="romain" height="200" alt="Romain Paillard" />

<img src="https://kitt.lewagon.com/placeholder/users/Papillard"
  id="boris" height="200" alt="Boris Paillard" />

<img src="https://kitt.lewagon.com/placeholder/users/tgenaitay"
  id="boris" height="200" alt="Thibault Genaitay" />

<img src="https://kitt.lewagon.com/placeholder/users/smithavt14"
  id="boris" height="200" alt="Alex Smith" />

<!-- and hundreds more... --->
```

---

In this case we should add the event handler to all the images using `querySelectorAll`

```js
document.querySelectorAll("img").forEach((img) => {
  img.setAttribute("onclick", "roundifyImage(this)");
});
```

> [`attributes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes) are *any* parameters that go inside HTML tags, like `id`, `src` or `onclick`

---

## Debugging

Add this to your JavaScript file and open your browser's **inspector**.

```
debugger
```

---

The `debugger` keyword will pause the runtime, giving you the chance to explore your code

<figure style="width: 80%">
  <img alt="debugger_paused.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/U3gzWcv2dXqLQZrLiGuqaZVe" />
</figure>

---

## Happy JavaScripting! 🚀