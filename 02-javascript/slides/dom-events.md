## Lecture Setup

We are using [lewagon/webpack-boilerplate](https://github.com/lewagon/webpack-boilerplate/tree/master#usage)

## Webpack

[![img](https://kitt.lewagon.com/karr/assets/front/webpack_logo-e62cfbd89d455062d2285e150b496fc28db748a43931d783ac8bd0a969f289ba.png)](https://webpack.js.org/)

A module bundler for frontend assets

Let's run a local Webpack dev server

```
webpack-dev-server
```

Then let's open [`http://localhost:8080`](http://localhost:8080/)

------

## Let's open up the browser

### Your browser is not just a browser, it's an **IDE**

![img](https://kitt.lewagon.com/karr/assets/front/chrome_ide-f99e86a66147330bb4c3295725c3653b43ae11ee7a68c9d84945c972ed0f1270.png)

### Using JavaScript with HTML

```
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

------

## DOM

Document Object Model

[wikipedia.org/Tree*(data*structure)](https://en.wikipedia.org/wiki/Tree_%28data_structure%29)

![img](https://kitt.lewagon.com/karr/assets/jquery/tree-19f69a6b9530a0f903f8478c222212e9b4bf5b9b38cf102e0a11cf3c0a389fce.png)

![img](https://kitt.lewagon.com/karr/assets/jquery/dom_example-6f443f2807d9a07d37054c1e5eeba85241566eddae43a02d184d9e0469646417.png)

![img](https://kitt.lewagon.com/karr/assets/jquery/request_0-d70abe5e37c3906d418a4025df9862c3753f584703202e3dce78025481ec1323.png)

![img](https://kitt.lewagon.com/karr/assets/jquery/request_1-0d275df3528992ab362d1c17f63ba682e0566f217c89c2963f897bc726f977b2.png)

The browser **parses** the HTML response and **creates** the DOM from it.

You can visualize the DOM in the Chrome Inspector, in **Elements** tab.

![img](https://kitt.lewagon.com/karr/assets/jquery/inspect-ab4ecf094a00098dd06106681aad08df267b7350004636de1f35b86c670d4461.png)

### Reference

Please keep a tab open with the [DOM Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

------

## Interacting with the DOM

### The most important [method](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

```
document.querySelector(CSS_SELECTOR);
```

### Selecting an element with an `id`

```
<ul id="players"></ul>
const list = document.querySelector("#players"); // CSS id selector
// or
const list = document.getElementById("players");
```

🤔 What about elements with no `id`?

### Basic CSS selectors

Reminder

```
p               /* Type selector  */
.red            /* Class selector */
#players        /* ID selector    */
```

### Advanced CSS selectors

Reminder

```
ul .active     /* Descending combinator */
ul > .active   /* Child combinator */
```

Combine them to get **specific** CSS selectors:
`jsdocument.querySelector('ul#players > .active a.btn');`

We've just selected an element! 💪





What can we do now? 🤔

### Append content

We are using the [Element#insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML) method.

```
list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");
```

You can also have a look at [ParentNode#append](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append).

### Selecting from a subset of the DOM

🎩 You can call `querySelector` on any element!

```
<p class="red">A red paragraph</p>

<ul id="players">
  <li class="green">Luke</li>
  <li class="red">Anakin</li>
</ul>
const list = document.querySelector("#players");
const element = list.querySelector(".red");
console.log(element.innerText);
// => ?
Anakin
```

### Selecting several elements

We want to select **all** winners

```
<ol id="fifa-wins">
  <li>Brazil (5 wins)</li>
  <li>Germany (4 wins)</li>
  <li>Italy (4 wins)</li>
  <li>Argentina (2 wins)</li>
  <li>Uruguay (2 wins)</li>
</ol>
```

We can with [`Element.querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)!



```
const countries = document.querySelectorAll("#fifa-wins li");
countries.forEach((item) => {
  console.log(item.innerText);
});
```

`countries` is a [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) variable.

### Use the right method

```
const countries = document.querySelector("#fifa-wins li");
// => <li>Brazil (5 wins)</li>
```

`querySelector` returns **the first** element it finds!

```
const countries = document.querySelectorAll("#fifa-wins li");
// => NodeList(5) [li, li, li, li, li]
```

`querySelectorAll` returns them all in a list!

Your turn! How would you append `"France (2 wins)"` to the list? 🤔

```
const list = document.querySelector('#fifa-wins');
list.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');
```

------

## Advanced DOM Manipulations

### Show / Hide

Use [HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

```
const element = document.querySelector(CSS_SELECTOR);

// Hide
element.style.display = "none";

// Show
element.style.display = "";
```

### Add / Remove a class

Use [`classList`](https://developer.mozilla.org/en/docs/Web/API/Element/classList)



```
element.classList.add("red");
element.classList.remove("red");
element.classList.toggle("red");
```

### Read / Write inputs

```
<!-- Some HTML -->
<input name="email" id="email" value="paul@gmail.com" />
const emailInput = document.getElementById("email");

// Read
console.log(emailInput.value);

// Write
emailInput.value = "john@gmail.com";
```

### Extract text / HTML

```
<a href="https://www.lewagon.com" id="home">Le Wagon <em>rocks</em></a>
const home = document.getElementById("home");
console.log(home.innerText);
console.log(home.innerHTML);
console.log(home.attributes.href.value);

home.innerHTML = "Le Wagon <strong>rocks</strong>!"; // Update HTML
```

### Dataset

Use [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

```
<div id="user" data-uid="2471555" data-github-nickname="Papillard">
  Boris Paillard
</div>
const boris = document.getElementById('user');
console.log(boris.dataset.uid);
console.log(boris.dataset.githubNickname);
```

------

## Events

[Full Reference](https://developer.mozilla.org/en-US/docs/Web/Events)

### HTML DOM Events

```
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

### Events occur on specific objects

```
DOMContentLoaded  # document
blur              # input / textarea
click             # any visible element
change            # select
focus             # any visible element
keyup             # window / any focused element
mouseover         # any visible element
resize            # window
scroll            # window / any scrollable element
submit            # form
touchstart        # for mobile devices
```

### Event Listener

Use [`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) to react to an event.

```
element.addEventListener(eventType, (event) => {
  // Do something (callback)
});
```

### What's a callback?

![img](https://kitt.lewagon.com/karr/assets/jquery/hollywood_principle-b1f66847502a940420e4a275691f811652a60ea31a87f5fa4eb5cfaf96e22ce8.png)

### Listening to a click

```
<img src="https://kitt.lewagon.com/placeholder/users/monsieurpaillard"
     id="romain" height="200" alt="Romain Paillard" />
const romain = document.getElementById("romain");
romain.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
});
```



You can read more about [Event.currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

UX tip: change the default cursor if the image is clickable.

### Live-code

Toggle the `img-circle` CSS class when clicking on these images.

```
.img-circle {
  border-radius: 50%;
}
```

### What if we have several elements?

```
<img src="https://kitt.lewagon.com/placeholder/users/monsieurpaillard"
     id="romain" height="200" alt="Romain Paillard" />
<img src="https://kitt.lewagon.com/placeholder/users/Papillard"
     id="boris" height="200" alt="Boris Paillard" />
```



```
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-circle");
  });
});
```

------

## Debugging

Add this to your JavaScript file and open your browser's inspector. Enjoy

```
debugger
```

------

## Happy JavaScripting!