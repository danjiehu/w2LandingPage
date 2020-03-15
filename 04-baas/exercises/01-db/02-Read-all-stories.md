## Background & Objectives

The goal of this exercise is to practice implementing the READ feature of CRUD with the SDK, where:
- As a user, I can view all stories 

## Specs

- Implement the  `find` function in the [SDK](https://doc.minapp.com/js-sdk/schema/query.html)

Remember this from the Toutiao challenge? 

```js
// index.js, in onLoad function
wx.request({
  //...
  success: dosomething
  });
})
```

You can use that here too:

```js
  //index.js, in onLoad function
  //...
  Story.find().then(dosomething)
  });
```

The `dosomething` is the function that handles the **request response**. 

***N.B.** Requests are processed by another service and is not always up to you, so waiting is normal! It's called asynchronous code.
**Deeper explanation:** The `.then(dosomething)` is called a **promise**. You just have to know that `dosomething` will wait for the server to respond, just like in the Toutiao exercise with the api requests. So the promise takes care of the waiting. Plus it's A LOT cleaner to look at!*

- Now that we've received the `res`ponse, we'll need to handle the data by replacing the `dosomething`. Same as the Toutiao challenge 😉

❗ Remember to delete or comment out previous code as you go through the exercises!

