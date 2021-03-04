---
marp: true
---

## Intro

### The Client-side Programming Language

---

### What's with the name?

JavaScript != Java

---

## Today's Goals

- Familiarise with the **Syntax**
- Practise the **basics** in JavaScript


Today we'll work in the **browser**

---

### JavaScript Version

We are going to use **ES6**:

- Short for ECMAScript Edition 6
- Released in 2015 (ECMAScript 2015 Language)
- Supported by [~90% browsers](https://caniuse.com/#search=ES6)


---

## Run code on your browser


```js
// in-browser dev tools
console.log("Hello Le Wagon");
➜ 
Hello Le Wagon
```
> Browser console is a [REPL](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) for JavaScript


---

## Basic Types

---

```js
"Hello Le Wagon"            // string

42                          // number
3.14                        // number

true                        // boolean
```

---

### Checking types

```js
typeof("Boris");
// => 'string'

typeof(42);
// => 'number'
```

---

### Casting types

```js
Number.parseInt('42', 10);
// => 42

(42).toString();
// => '42'
```

---

### Data structures

```
[ 'Hello', 'Le', 'Wagon', 42 ]    // Array

{ name: 'bob', age: 42 }          // Object
{ 'name': 'bob', 'age': 42 }      // Object (the exact same)
```

---

### Null & Undefined

```js
let age; // undefined
let name = null;
```

---

## Variables

---

Old JS uses `var`.

ES6 uses two new keywords in replacement.

---

### `let`

For a variable you **will re-assign**

```js
let counter = 1;
console.log(counter);

counter = counter + 1;
console.log(counter);
```

---

### `const`

For a variable you **won't** re-assign

```js
const firstName = "John";
console.log(firstName);

firstName = "Paul"; // TypeError: Assignment to constant variable.
```

---

### Naming convention

```js
const firstName = "Ringo";
// lowerCamelCase
```


---

## Strings

Let's dive deeper into this type.

Reference: [String on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

---

### Length

```js
const firstName = "Paul";
firstName.length;
// => 4
```

---

### Character access

```js
const firstName = "John";
firstName[0];
// => "J"

// Print all characters starting at index 1
firstName.substring(1);
```

---

### Case manipulation

```js
const firstName = "Paul";
firstName.toUpperCase();
// => "PAUL"

firstName.toLowerCase();
// => "paul"
```

---

### Split

```js
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const months = monthString.split(",");
// => [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
months.length;
// => 12
```

---

### Interpolation

```js
const firstName = "Ringo";
const lastName = "Starr";

const message = `${firstName} ${lastName} is a drummer`;
// => "Ringo Starr is a drummer";
```

[**Template literals** on MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)

---

## Arrays

Reference: [Array on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

---

### CRUD

```js
const fruits = [];
fruits.push("Apple"); // Create
fruits[0];            // Read
fruits[0] = "Banana"; // Update
fruits.splice(0, 1);  // Delete (1 item at index 0)
```

---

### `forEach`

```js
const beatles = ["paul", "john", "ringo", "george"];
beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
});
```

[Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)


---

## Control Flow

---

### `if` / `else`

```js
const age = 14;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}
```

---

### Falsy values

```js
false
undefined
null
0
NaN
""
```

---

### Ternary Operator

```js
const raining = true;
const accessory = (raining ? "umbrella" : "sunglasses");
// => "umbrella"
```

---

```js
if (digit === 0) {
  console.log('Zero');
} else if (digit === 1) {
  console.log('One');
} else {
  console.log("I don't know this digit, sorry!");
}
```

Read more about [sameness in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) and the difference between `==` and `===`.

---

## Objects

Guide: [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) on MDN

---

### Simple Object

```js
const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(typeof student);
// => "object"

console.log(student);
```

---

### Reading/Setting a property

You can use dot-notation.

```js
console.log(student.firstName);
// => "Boris"
console.log(student['firstName']); // Another way
// => "Boris"
student.firstName = "Romain";
console.log(student.firstName);
// => "Romain"
```

---

## Functions

Read the [Function Guide on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

---

### Defining

JavaScript (**old way**)

```js
function square(x) {
  return x * x;
}
```

Note the **explicit `return`**

---

### Calling


```js
square(10);
// => 100
```

---

### Arrow Function

```js
const square = (x) => {
  return x * x;
};

// Or even shorter, with **implicit** return.
const square = x => x * x;
// Calling the function: same as before
square(10);
```

---

### What should I use?

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are a new way to write functions since ES6 and they are our preferred way of writing functions. When working with web JavaScript, always use arrow functions instead of ES5 `function` statements.

---

### Capitalize example

Let's livecode an arrow function and store it into `capitalize`.

```zsh 
touch lib/capitalize.js
```
```js
const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfTheWord = word.substring(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
};
```

---

### Note the `return` on the last line

Inside multi-line functions, you must add the `return` keyword before the value you want to function to **output**. 

```js
const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfTheWord = word.substring(1).toLowerCase();
  firstLetter + restOfTheWord
};
```
```js
// calling and loggin the function result
console.log(capitalize("hacker")) // => undefined
```

---

# 👍 

```js
const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfTheWord = word.substring(1).toLowerCase();
  return firstLetter + restOfTheWord
};
```

```js
// calling and loggin the function result
console.log(capitalize("hacker")) // => Hacker
```
---

## To sum up 🎯 

---

### JavaScript has built in `types` to help us work with different values

* `string` for any text - sentences, emails, even phone numbers!
* `number` for any numericals - whole numbers, numbers with decimals
* `array` (also `object` in JS) - for indexed lists of *any* values
* `object` - for collections of values *with labels*

---

We use `variables` to store values:

```js
// 'let' variables can be changed
let name = "Alexander"
name = "Alex"

// 'const' variables are constant
const water = "H2O"
water = "CO2" // error: Assignment to constant variable.
```

---

We use `functions` to store blocks of code that perform an action, to avoid repetition

```js
// ES5
function isEven(num) {
  return num % 2 === 0
}

// ES6
// for single-line functions
const isEven = (num) => num % 2 === 0

// for multi-line functions
const isEven = (num) => {
  return num % 2 === 0
}
```
---

After **defining/declaring** a function, we can **call it** (run it)

```js
isEven(2) // function is called, but the result is not displayed
console.log(isEven(3)) // function is called and the result is displayed
```

---

## Happy (Back-end) JavaScripting!