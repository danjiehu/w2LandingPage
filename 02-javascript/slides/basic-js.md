## Intro

### The Client-side Programming Language

### What's with the name?

JavaScript != Java

## Today's Goals

- Familiarise with the **Syntax**
- Practise the **basics** in JavaScript



Back to the browser tomorrow, today we'll work in the **terminal**

### Setup

To install [Node.js](https://nodejs.org/en/) on OSX:

```
brew update
brew install node
```

On Ubuntu:

```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash -
sudo apt-get install -y nodejs
```

### JavaScript Version

We are going to use **ES6**:

- Short for ECMAScript Edition 6
- Released in 2015 (ECMAScript 2015 Language)
- Supported by [~90% browsers](https://caniuse.com/#search=ES6)

------

## Lecture Setup

We are using [lewagon/webpack-boilerplate](https://github.com/lewagon/webpack-boilerplate/tree/master#usage)

------

## Run code on your computer

### REPL

Ruby

```
➜ ~ irb
[1] pry(main)>
```

JavaScript

```
➜ ~ node
>
# Ctrl-C twice to exit
```

### From a file

Ruby

```
# hello.rb
puts "Hello Le Wagon"
➜ ~ ruby hello.rb
Hello Le Wagon
```

JavaScript

```
// hello.js
console.log("Hello Le Wagon");
➜ ~ node hello.js
Hello Le Wagon
```

------

## Basic Types

Ruby

```
"Hello Le Wagon"            # String

42                          # Integer
3.14                        # Float

true                        # TrueClass
```

JavaScript

```
"Hello Le Wagon"            // string

42                          // number
3.14                        // number

true                        // boolean
```

### Checking types

Ruby

```
"Boris".class
# => String

42.class
# => Integer
```

JavaScript

```
typeof("Boris");
// => 'string'

typeof(42);
// => 'number'
```

### Casting types

Ruby

```
"42".to_i
# => 42

42.to_s
# => "42"
```

JavaScript

```
Number.parseInt('42', 10);
// => 42

(42).toString();
// => '42'
```

### Data structures

Ruby

```
[ "Hello", "Le", "Wagon", 42 ]    # Array

{ name: "bob", age: 42 }          # Hash with symbol as keys
{ "name" => "bob", "age" => 42 }  # Hash with string as keys
```

JavaScript

```
[ 'Hello', 'Le', 'Wagon', 42 ]    // Array

{ name: 'bob', age: 42 }          // Object
{ 'name': 'bob', 'age': 42 }      // Object (the exact same)
```

### Null & Undefined

```
let age; // undefined
let name = null;
```

------

## Variables

### Ruby

```
count = 12          # Assignment
count = count + 1   # Re-assignment
```

### JavaScript

Old JS uses `var`.

ES6 uses two new keywords in replacement.

### `let`

For a variable you **will re-assign**

```
let counter = 1;
console.log(counter);

counter = counter + 1;
console.log(counter);
```

### `const`

For a variable you **won't** re-assign



```
const firstName = "John";
console.log(firstName);

firstName = "Paul"; // TypeError: Assignment to constant variable.
```

### Naming convention

Ruby

```
first_name = "Ringo"
# lower_snake_case
```

JavaScript

```
const firstName = "Ringo";
// lowerCamelCase
```

------

## Strings

Let's dive deeper into this type.

Reference: [String on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### Length

```
const firstName = "Paul";
firstName.length;
// => 4
```

### Character access

```
const firstName = "John";
firstName[0];
// => "J"

// Print all characters starting at index 1
firstName.substring(1);
```

### Case manipulation

```
const firstName = "Paul";
firstName.toUpperCase();
// => "PAUL"

firstName.toLowerCase();
// => "paul"
```

### Split

```
const monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const months = monthString.split(",");
// => [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
months.length;
// => 12
```

### Interpolation

Ruby

```
first_name = "Ringo"
last_name = "Starr"

message = "#{first_name} #{last_name} is a drummer"
# => "Ringo Starr is a drummer";
```

JavaScript

```
const firstName = "Ringo";
const lastName = "Starr";

const message = `${firstName} ${lastName} is a drummer`;
// => "Ringo Starr is a drummer";
```

[**Template literals** on MDN](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Template_literals)

------

## Arrays

Reference: [Array on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### CRUD

Ruby - How do you CRUD an Array?

```
fruits = []
fruits << "Apple"     # Create (fruits.push("Apple") works as well)
fruits[0]             # Read
fruits[0] = "Banana"  # Update
fruits.delete_at(0)   # Delete
```

JavaScript

```
const fruits = [];
fruits.push("Apple"); // Create
fruits[0];            // Read
fruits[0] = "Banana"; // Update
fruits.splice(0, 1);  // Delete (1 item at index 0)
```

### `forEach`

Ruby

```
beatles = ["paul", "john", "ringo", "george"]
beatles.each do |beatle|
  puts beatle.upcase
end
```

JavaScript

```
const beatles = ["paul", "john", "ringo", "george"];
beatles.forEach((beatle) => {
  console.log(beatle.toUpperCase());
});
```

[Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

------

## Control Flow

### `if` / `else`

Ruby

```
age = 14

if age >= 18
  puts "You can vote"
else
  puts "You can't vote"
end
```

JavaScript

```
const age = 14;

if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You can't vote");
}
```

### Falsy values

Ruby

```
# Ruby is **truthy**, only 2 "falsy" values:
nil
false
```

JavaScript

```
false
undefined
null
0
NaN
""
```

### Ternary Operator

Ruby

```
raining = true
accessory = (raining ? "umbrella" : "sunglasses")
# => "umbrella"
```

JavaScript

```
const raining = true;
const accessory = (raining ? "umbrella" : "sunglasses");
// => "umbrella"
```

Ruby

```
if digit == 0
  puts "Zero"
elsif digit == 1
  puts "One"
else
  puts "I don't know this digit, sorry!"
end
```

JavaScript

```
if (digit === 0) {
  console.log('Zero');
} else if (digit === 1) {
  console.log('One');
} else {
  console.log("I don't know this digit, sorry!");
}
```

Read more about [sameness in JS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) and the difference between `==` and `===`.

------

## Objects

Guide: [Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects) on MDN

### Simple Object

```
const student = {
  firstName: "Boris",
  lastName: "Paillard"
};

console.log(typeof student);
// => "object"

console.log(student);
```

### Reading/Setting a property

You can use the dot-notation.

```
console.log(student.firstName);
// => "Boris"
console.log(student['firstName']); // Another way
// => "Boris"
student.firstName = "Romain";
console.log(student.firstName);
// => "Romain"
```

------

## Functions

Read the [Function Guide on MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

### Defining

Ruby

```
def square(x)
  x * x
end
```

JavaScript (**old way**)

```
function square(x) {
  return x * x;
}
```

Note the **explicit `return`**

### Calling

Ruby

```
square(10)
# => 100
```

JavaScript

```
square(10);
// => 100
```

### Arrow Function

```
const square = (x) => {
  return x * x;
};

// Or even shorter, with **implicit** return.
const square = x => x * x;
// Calling the function: same as before
square(10);
```

### What should I use?

[Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions) are a new way to write functions since ES6 and they are our preferred way of writing functions. During your batch, always use arrow functions instead of ES5 `function` statements.

### Capitalize example

Let's livecode an arrow function and store it into `capitalize`.

```
touch lib/capitalize.js
const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  const restOfTheWord = word.substring(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
};
```

------

## Debugging

### Poor man's debugger: `console.log()`

The equivalent of `puts` in Ruby:

```
const capitalize = (word) => {
  const firstLetter = word[0].toUpperCase();
  console.log(firstLetter);
  const restOfTheWord = word.substring(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
};

capitalize("wagon");
```

### Attaching to Chrome (1)

Open up a webpage in chrome 

```
node --inspect-brk lib/capitalize.js
```

It will start the code and **break** before your code starts.

### Attaching to Chrome (2)

- Open a new tab and go to [`chrome://inspect`](chrome://inspect/)
- Click on "Inspect" for the file you are debugging

![img](https://kitt.lewagon.com/karr/assets/javascript/chrome-inspect-d6880823534458f14153fd088a24f365f321eebf0a0466792a29d3595b8f2860.png)

### Attaching to Chrome (3)

- Underneath the **Sources / Filesystem** tabs, click on **+ Add folder to workspace**
- Find and select your project in your filesystem
- Click on the "Allow" blue button to give Chrome access to your filesystem

### Attaching to Chrome (4)

You are **ready**! You can now **click in the gutter** to add **breakpoints** to your code.

![img](https://kitt.lewagon.com/karr/assets/javascript/chrome-inspect-debug-640b7e725d69a48127b6ae4e46e36ec75e8e1cb08e231440fa79c1c84dff2641.png)

------

## One more thing

[![img](https://kitt.lewagon.com/karr/assets/javascript/codetogo-44c75768b4063c14ee576566e8e468fea57fe74612043e5872ea87c90e0f37dc.png)](https://codetogo.io/)

By [Jad](https://kitt.lewagon.com/alumni/jadjoubran) & [Nicole](https://kitt.lewagon.com/alumni/nicolesaidy) 💪

------

## Happy (Back-end) JavaScripting!