# Livecode

## Challenge 1: Create a new Page

1. Create a new `test` page in app.json
2. Add this new `test` page to the navbar

## Challenge 2: Data Bind a Title

1. Add a title to `test.wxml`
2. Render that title using local data in your `test.js`

## Challenge 3: Build a Counter Function

1. Create a function in `test.js` that increments a local data variable by 1
2. Render the local data variable in your `test.wxml`
3. Add a `<button>` to `test.wxml` that increases the data variable by one each time you press it

## Challenge 4: Looping with wx:for

1. Add an array to our `test.js` local data
2. In `test.wxml` use `wx:for` to iterate through that array and render the data on your WXML

## Challenge 5: Conditional Rendering with wx:if

1. Add a new key with a value of a boolean in your `test.js` local data
2. In your `test.wxml`, add a purple square that only renders when the boolean is true, using `wx:if`
3. In your `test.wxml`, create a button that when you click it, it changes the state of your boolean in `test.js`.