## Background and Objectives

This morning your main mission is to finalize READ function of CRUD to your Dianping mini-program.

You will need to implement the READ functions for restaurants, reviews and user reviews by **1:00 PM**! Do not spend too much time on WXSS just yet, design can be a never-ending task 😋

<hr>

## Recap

### Adding Data
By now, you should already have the BaaS set up and connected to your Dianping mini-program
- Make sure to have some data in your `restaurants` and `reviews` tables 

### Listing All Restaurants (Index page)
Request all restaurants' data from your BaaS.
- In your `index` directory, implement the  `find` function of the [SDK](https://doc.minapp.com/js-sdk/schema/query.html),  displaying each restaurant's `photo`, `name` and `description`

```js
  Restaurant.find().then(res => {
    // do something with the response data
  })
```

> Consult the previous lecture or exercises if you need to!

To save time, you can beautify your pages by using code from the Toutiao challenge
- You can make a card background with the restaurant photo by updating this line of code:

```xml
<!-- index.wxml -->
<view class="card-product" style="background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.9)), url('{{restaurant.photo}}'); background-size: cover;"
 ```

### Showing One Restaurant (Show page)
Once a user taps on a restaurant, he/she should navigate to the `show` page of that specific restaurant, displaying the restaurant's: `photo`, `name`, `description` and `reviews`

- Create a `show` directory in `app.json` and implement the `get` function of the [SDK](https://doc.minapp.com/js-sdk/schema/get-record-detail.html)

```js
// show.js, in onLoad function
Restaurant.get(restaurant_id).then(res => {
  // do something with the response data
})
```

> Remember to get the `restaurant_id` from the `options` parameter of the `onLoad` function

For some quick UI, you can refer to below:

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

### Listing Reviews
Reviews should be displayed in your `show` page under the restaurant's information 
- Use a filter to find reviews for just one restaurant by implementing a **query** and using the `find()` method again.

The query for comparing restaurant_id:

```js
let query = new wx.BaaS.Query()
query.compare('restaurant_id', '=', this.data.restaurant_id)
Review.setQuery(query).find().then(res => {
  // do something with the response data
})
```

And finally the **user reviews** on the profile page - how could you adapt the `query` code above? 🤔 

#### Once complete, you can continue beautifying your mini-program 🌈

Lunch break! Remember, lecture starts at **1:00 PM** sharp.