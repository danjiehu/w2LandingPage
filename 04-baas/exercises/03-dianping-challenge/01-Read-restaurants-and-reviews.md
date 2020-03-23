## Background and Objectives

You will spend the morning: 
1. Completing your login and sign-up system (if you haven't already)
2. Applying the READ function of CRUD to your Dianping mini-program, similar to what you did on Tuesday:
- As a user, I can view all restaurants
- As a user, I can view one restaurant
- As a user, I can view a restaurant's reviews
3. Applying the UPDATE action to your Dianping mini-program:
- As a logged-in user, I can upload my profile picture

You will need to complete the above user actions by **1:00 PM**! Do not spend too much time on WXSS, design can be a never-ending task 😋

<hr>

## Specs

Before implementing the READ function, make sure to complete your login and sign-up system

### Add Data
By now, you should already have the BaaS set up and connected to your Dianping mini-program
- Add some data to your `restaurants` and `reviews` tables 

### List All Restaurants (Index)
Request all restaurants' data from your BaaS the same way as for Toutiao stories index
- In your `index` directory, implement the  `find` function of the (SDK)[https://doc.minapp.com/js-sdk/schema/query.html],  displaying each restaurant's `photo`, `name` and `description`

```js
  Restaurant.find().then(dosomething)
```

> Consult the previous lecture or exercises if you need to!

To save time, you can beautify your pages by using code from the Toutiao challenge
- You can make a card background with the restaurant photo by updating this line of code:

```xml
<!-- index.wxml -->
<view class="card-product" style="background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.9)), url('{{restaurant.photo}}'); background-size: cover;"
 ```

### Show One Restaurant (Show)
Once a user taps on a restaurant, he/she should navigate to the `show` page of that specific restaurant, displaying the restaurant's: `photo`, `name`, `description` and `reviews`

- Create a `show` directory in `app.json` and implement the `get` function of the [SDK](https://doc.minapp.com/js-sdk/schema/query.html)

```js
// show.js, in onLoad function
Restaurant.get(recordID).then(dosomething)
```

> Remember to set the `id`  from the `options` param, and replace the `dosomething` with your show page data handling code.

For the UI, you can refer to below:

`show.wxml`
```xml
<view class="card-product" style="background-image: url('{{restaurant.photo}}'); background-size: cover;" />
  <view class="card-product-infos">
  <view class="h2">{{restaurant.name}}</view>
  <view class="p">{{restaurant.description}}</view>
</view>
```

`show.wxss`
```css
.card-product {
  overflow: hidden;
  height: 200px;
  background: white;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.h2 {
  font-size: 30px;
  font-weight: bold;
  margin: 0;
}

.p {
  font-size: 20px;
  line-height: 1.4;
  opacity: 0.7;
  margin-bottom: 0;
  margin-top: 8px;
}

.card-product-infos {
  padding: 5px;
  margin-bottom: 20px;
  width: 100%;
}
```

### Reviews Index
Reviews should be displayed in your `show` page under the restaurant's information 
- Use a filter to find reviews for just one restaurant by implementing a **query**

The query for comparing restaurant_id:

```js
 query.compare('restaurant_id', '=', id)
```

### Bonus or Homework: Upload Profile Picture
- Create a simple form in your `user.wxml` allowing logged-in users to input a **photo url** to upload their profile picture. You will learn to upload images and files from an album in the next couple of weeks!

- Simply implement the `update` function of the [SDK](https://doc.minapp.com/js-sdk/schema/update-record.html), like so:

```js
// user.js in bindEditProfile()
let page = this
let photo = event.detail.value.photo
let user = page.data.currentUser

user.set("photo", photo).update().then(function(res) {
  wx.reLaunch({
    url: '/pages/user/user',
  })
})
```

#### Once complete, you can continue beautifying your mini-program 🌈

Lunch break! Remember, lecture starts at **1:00 PM** sharp.
