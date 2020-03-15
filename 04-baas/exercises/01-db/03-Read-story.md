## Background & Objectives

The goal of this exercise is to practice implementing the READ feature of CRUD with the SDK, where:
- As a user, I can select and view one story

## Specs 

- Implement your show pages using the `get` function from the [SDK](https://doc.minapp.com/js-sdk/schema/query.html)
- Remember to set the `id` from the `options` param, and replace the `dosomething` with your show page data handling code.

```js
// show.js, in onLoad function
Story.get(recordID).then(dosomething)
```