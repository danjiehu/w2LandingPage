## Background & Objectives

The goal of this exercise is to practice implementing the READ feature of CRUD with the SDK, where:
- As a user, I can select and view **one** restaurant

## Specs 

- Implement your show pages using the `get` function from the [SDK](https://doc.minapp.com/js-sdk/schema/get-record-detail.html)
- Remember to set the `id` from the `options` param, and replace the `dosomething` with your show page data handling code. It should look something like this:

```js
// show.js, in onLoad function
let recordID = options.recordID
Restaurant.get(recordID).then(dosomething)
```