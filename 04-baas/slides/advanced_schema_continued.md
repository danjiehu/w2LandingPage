## Advanced Schema (continued)

---

### Let's Recap

---

Many-to-many relationship
<figure style="width: 100%">
  <img alt="dianping 1.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/YdcXiPHcW1FDY69qj99eN6i7" />
</figure>

---

On Tuesday, we learnt the most common operation in C**R**UD - **READ**

- As a public user, I can view all restaurants
- As a public user, I can view one restaurant
- As a public user, I can view all reviews for one restaurant

---

On Thursday, we created a fully-functioning WeChat **login** system

- As a user, I can log in

---

This afternoon, we will add **more features** to our mini program

---

As a logged-in user, I can now post reviews

<figure style="width: 25%">
  <img alt="dianping 2.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/Lm9KM9vcUA5msKeS5mtxfNSB" />
</figure>

---

As a logged-in user, I can now place an order

<figure style="width: 25%">
  <img alt="dianping 3.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/1Bzh1gYPuyjwcQuu3CAoCyNm" />
</figure>

---

**C**RUD - **CREATE**

---
### A 3-step process with the [SDK](https://ifanr.gitbook.io/baas-js-sdk/js-sdk/wechat/how-to)


1. Create an empty record

```js
// define table object
let Review = new wx.BaaS.TableObject('reviews')
// create a new record in that table
let review = Review.create()
```

2. Give the record some data

```js
review.set(data)
// for example review.set({'rating': 5})
```

3. Store data to the backend

```js
review.save() //.then(dosomething) if needed
```

---

We can implement the CREATE function for different use cases

---

## Live Code 1: Posting Reviews 👩‍💻

---

Reviews form
```xml
<!-- at bottom of show.wxml -->
<form  wx:if="{{currentUser}}" bindsubmit="createReview">
  <view class="section">
    <input name="content" placeholder="put down your thoughts"/>
  </view>
  <button formType="submit" class="footer-btn">Submit</button>
</form>

<button wx:else bindtap="showUserPage" class="section">
  Please Log In to Review
</button>
```
---

### Bonus: Using [WeChat Components](https://developers.weixin.qq.com/miniprogram/en/dev/component/)

---
Scroll `picker`

```xml
<!-- in review form of show.wxml -->
<picker mode="selector" range="{{ [1, 2, 3, 4, 5] }}" bindchange="onRate">Rating</picker>
```

`bindchange` event handler

```js
// show.js
onRate: function(event) {
  console.log(event) // find where is the value we need
}
```

---

Create review
```js
// show.js
createReview: function(event) {
    // ...
    let Review = new wx.BaaS.TableObject('reviews')

    let review = Review.create()

    let data = {
        // review's content and rating
    }

    review.set(data).save().then(res => {
      // do something with the response
    })
},
```
---

Your turn!
### EXERCISE 1: POST REVIEWS 💪

---

## Live Code 2: Placing Orders 👩‍💻

---

Two additional tables: `meals` and `orders`.

Which of the two is the **joint** table? 🤔

---

A user can view all `meals` for a restaurant

Sounds familiar? Similar to listing a restaurant's reviews!

---

Except now, a user can place an order for a meal

```xml
<!-- in wx:for meals loop of show.wxml -->
<button data-id="{{meal.id}}" bindtap="submitOrder">Order</button>
```

---

Create order
```js
// show.js
submitOrder: function(event) {
    // ...
    let Order = new wx.BaaS.TableObject('orders')

    let data = {
        // meal_id and current user_id
    }

    Order.create().set(data).save().then(dosomething)
    // relaunch and swtich to user profile to display orders
},
```

---

Display meals ordered

---

For that, we need to [expand](https://doc.minapp.com/js-sdk/schema/query.html#pointer-%E6%9F%A5%E8%AF%A2) the meals table so we can include the meal's `name`, `price` and `photo` in the order!

---

```js
// user.js
onLoad: function (options) {
    let page = this
    wx.BaaS.auth.getCurrentUser().then(function(res) {
      page.setData({
        currentUser: res
      })
      // ⚠
      let Order = new wx.BaaS.TableObject('orders')
      let query = new wx.BaaS.Query()
      let currentUser = page.data.currentUser.id.toString()
      query.compare('user_id', '=', currentUser)
      Order.setQuery(query).expand(['meal_id']).find().then(function(res) {
        console.log('response ->', res) // if we want to see what's in the response
        page.setData({
          orders: res.data.objects
        })
      })
    })
  },
  ```
  ⚠ Subtle but important: we save the `order` after the currentUser responds **success**, in its handler function

---

Your turn!
### EXERCISE 2: PLACE ORDERS 💪

---

## Happy Weekend!
