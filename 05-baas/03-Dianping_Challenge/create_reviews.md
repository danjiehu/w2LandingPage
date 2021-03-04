## Background & Objectives

The goal of this exercise to build user engagement by implementing the CREATE function of CRUD, where:
- As a logged-in user, I can now post reviews and ratings

## Specs

- Create a review **form** under the list of reviews, with one input field: `content`
Do we still need the username input? We can use the `currentUser`
Remember, only users who have logged-in can post reviews, therefore **conditions** need to be set

### Ratings
- To add a `rating` field to the reviews form, try using the `picker` element instead of input. You can read more in the [documentation](https://developers.weixin.qq.com/miniprogram/en/dev/component/picker.html)
Attributes include `mode` (with default value: `selector`) and `range` which accepts an **array** of items for users to select from. In this case, a rating from 1 to 5

- Use the `bindchange` event handler to store user's rating **locally**. Again, this requires a few steps:

**Step 1:** Get form data

```xml
<!-- show.wxml, under content input -->
<picker mode="selector" range="{{ [1,2,3,4,5] }}" bindchange="onChangeRating">Rating {{ rating }}</picker>
```

> Remember to give the data property `rating` a default value in `show.js`

What happens when a user selects a rating? 

```js
// show.js
onChangeRating: function(event) {
  console.log(event.detail.value)
}
```

The output value seems to be one less than what the rating should be 🤔 That's because the value being returned is the **index** of the array-item selected

Make some adjustments:
- Add a data property `ratingValues` in `show.js` with a value of `[1, 2, 3, 4, 5]`
- Now, in `show.wxml`, replace the array with the data property, like so:

```xml
<!-- show.wxml, under content input -->
<picker mode="selector" range=“{{ ratingValues }}” bindchange="onChangeRating">Rating {{ rating }}</picker>
```

You'll understand why in a second!

**Step 2:**  Store form data locally

```js
// show.js
onChangeRating: function(event) {
  let index = event.detail.value
  let rating = this.data.ratingValues[index]
  // dosomething
}
```

What should `dosomething` be?

- Don't forget about `content`! Content is binded by the event handler `bindSubmit`. Write some code in your `show.js` to get user's review content. `console.log` throughout the process!

Once you've successfully saved user's review content and rating locally, time to save it to the **backend**!

Apply the 3-step process for **CREATE** with the SDK:

**1.** Create an empty record

```js
// define table object
let review = Review.create()
```

**2.** Give the record some data
```js
review.set(data)
```

What should `data` be? 
> Hint: Data should include the same properties as the columns in your BaaS 

**3.** Store data to the backend and handle the response data
```js
review.save().then(dosomething)
```

What should `dosomething` be? Once the data has been stored, the user should be able to view the updated list of reviews!
