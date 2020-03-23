## Background & Objectives

The goal of this exercise is to build a more functional mini-program with the CREATE function, where:
- As a logged-in user, I can now place orders

## Specs

### Add Tables and Data
- Create a `meals` and `orders` table

Meals should have the following fields:
- `name` as a `string`
- `price` as an `integer`
- `photo` as a `string`, or `file` if you're uploading an image to the BaaS 
- `restaurant_id` as a `pointer`

Add the necessary fields for Orders
- An order is unique to the current `user` as well as to the `meal` he/she is ordering. So which foreign keys should orders include?

Now add some meals! No need to manually input data for orders, we'll be creating them (as users) with our mini-program!
 
### List Meals for One Restaurant
Sounds familiar? Users should be able to view all `meals` under a restaurant before selecting and placing an `order`. 
> Hint: The code for your meals and reviews index should be very similar 

- As you did with reviews, set a **query** to filter the meals of the respective restaurant in `show.js`

- Then display all meals in `show.wxml`. Your code template should look almost identical to review's. Change the data attributes to fit your meals description
Note: If you've uploaded the meal photo to the BaaS, you will need to add a `.path` to your image source. Like so:

```xml
<image src="{{ meal.photo.path }}"></image>
```

### Create Orders

- Add a `button` to each meal item for users to place an order

```xml
<button bindtap="submitOrder">Order</button>
```

- Get the meal id selected by the current user
> Hint: Remember the `data-id` attribute?

```js
// show.js
submitOrder: function(event) {
    console.log(event)
},
```

- Now `.create()` > `.set(data)` > `.save()` to store the order to the backend, similar to what you did when submitting a review. Except what should `data`  be in this case?

```js
// show.js
submitOrder: function(event) {
    // ...
    let Order = new wx.BaaS.TableObject('orders')
    let order = Order.create()
    let data = {
        // meal_id and current user_id
    }
     order.set(data).save().then(dosomething)
},
```

- What should `dosomething` be? Ask yourself, what does the user want to see after an order? Probably the order itself so he/she can check the order! `reLaunch`  so they cannot go back in history after ordering - a standard practice

```js
order.set(data).save().then(function(res) {
  // relaunch user profile
})
```

### Display Orders 
Today, we will show user's ordered items under his/her profile page
- Use the `expand` function of the [SDK](https://doc.minapp.com/js-sdk/schema/query.html#pointer-%E6%9F%A5%E8%AF%A2) to expand the meals table so we can display the meals' `name`, `price` and `photo` ordered by the current user

```js
// user.js
// define table object and query
Order.setQuery(query).expand(['meal_id']).find().then(dosomething)
```

Remember: We only create the order if the` currentUser` request comes back **successfully**. This is again because **async** processes like requesting for currentUser needs waiting

### Bonus or Homework: Delete Order
A user should be able to remove an order they don't want anymore. 
- Create a 🗑 button that allows users to delete an order in `user.wxml`.
- To delete, simply implement the `delete` function of the [SDK](https://doc.minapp.com/js-sdk/schema/delete-record.html) like so:

```js
// user.js in deleteOrder()
let Order = new wx.BaaS.TableObject('orders')
let orderID = event. currentTarget.dataset.id
// remember to pass the order id from your wxml
Order.delete(recordID).then(function(res) {
  wx.reLaunch({
    url: '/pages/user/user',
  })
})
```
