## Background & Objectives

Dior's membership center allows customers to keep track of points they've accrued from buying products. They can select gifts to exchange points for and see the points and exchange history. The goal of this exercise is to add a membership center to your eCommerce app.

#### User Journey

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/dior-journey.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/dior-redeem.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="300"/>
</p>

## Specs 

For our app, we'll recreate this core membership journey in the previous eCommerce App (Waimai).

We start again with the data:

### Schema

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191116172347795.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

- The new field to add is  `points`. We'll add that as a new column to the three tables from the previous app (`users`, `orders`, and `meals`). Use the BaaS dashboard to add.

- What type is `points`? 
> Hint: You've used it before for `ratings`.

- Set a `default value` of 0 and make it `required`. We will be adding points from orders so they must have a value!

Now we're ready to show points on the membership (user) page.

### Membership Page

On the existing user page (`/pages/user/user`), show the user's points. 
> Hint: Look at the `AppData` in the console that shows the `user` object obtained from the query on the edited table. How do you show a field on the `user` object?

You can take out the customized login inputs (use WeChat login only), and don't forget to style to look nice, or with your unique design:

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191116234929651.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="300"/>
</p>

### Products

- You can edit the table right next to the table name:

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191116235644997.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="200"/>
</p>

- Why doesn't it let you do that? Remember the `orders` table still has a pointer column to the meal! You have to delete it first.

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191116235619623.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

- Now you can change the `meals` to a `products` table. Check that the read and write permissions (ACL) are what you expect. Who should be able to create and write to this? Hint: How did you set meal permissions?

Now your table schema should look like this:

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191118233654031.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

> Don't forget to add a pointer column back in the "order" table to the "product table." Should it be required? Hint: Can you create an order without products?

### Gifts

Let's add some gifts now to the `products` table. These are to be redeemed with the points, so they have no price and **negative** points. Any other field is up to you - make the gifts interesting!

🤔 Challenge yourself: Why is this better than adding a new "gift" table?

> Hint: Are any other fields different between them? Think about the associations as well - how much work is saved when we don't have to create another table to order from? 

🤯 **Solution**: This way we could use the `orders` table to redeem gifts too! A clever way to keep the app simple - keeping tech footprint small is key to "sustainable" development and highly prized in senior developers.

- Replace all `meals` with `products` where you show them. Hint: The landing page: `index.wxml` and `index.js`, and the order page too). Don't forget both capital and lower cases. 

> Tip: `shift-command(ctrl)-r` is a shortcut for find and replace! That'll save you loads of time, and you won't miss any. 

-----

Let's hide the price for gifts, and show the points they need instead! There are differences between gifts and for-purchase products that you can use to change the labeling.

> Hint: You can use conditionals in view logic. Don't forget **points are negative** for gifts, and are labeled "Points" and not "Kuai."

**Solution:**

```xml
<view class="p">{{ product.price > 0 ? product.price : -product.points }} {{ product.price > 0 ? "Kuai" : "Points" }}  </view>
```

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191117010221153.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="300"/>
</p>

### Getting Points

Now we're ready to get some points so we can redeem the gifts! Let's make the products for sale have some positive points.

> How much to give depends on your conversion of points to gifts. For example, if buying 10 products worth 100 points total gives a gift, then each product would be 10 points. You decide what makes sense. 

- Where do you add this value? Hint: How did you add the points to gifts? 

After your products all have points, ordering them should add points to your membership!

- When an **order** is created, pay any positive price (for purchase products), AND add points (postive or negative) to the user's `points` column. Don’t forget to pass the product's points once an order has been placed. 

How do you get the user's current points?

**Solution** (find the right place in your code):

```js
// In order click handler
let currentUser = this.data.currentUser;

order.set(newOrder).save().then(function(res) {
  let points = res.data.points
  currentUser.set("points", currentUser.get("points") + points).update().then(function(res) {
    wx.reLaunch({
      url: '/pages/user/user' // show list of orders in user dashboard
    });
  })
})
```

-----

Now order products and see the points add up! Redeem for gifts when enough has accrued, and see the points deducted. How do we make sure a user can only redeem gifts when having enough points? 

> Hint: Use `wx.showModal` to popup a dialog before an order is sent if his points are less than the gift's!

**Solution** (find the right place in your code):

```js
// In order click handler
let currentPoints = currentUser.get("points");

if (product.points + currentPoints < 0) {
  wx.showModal({
    title: 'Uh oh',
    content: 'Order products to get more points!',
  })

} else {
  this.sendOrder(product); // rest of the order code refactored into this function on Page
}
```

Better still, show only gifts that the user has enough points for redeeming! 

> Hint: It's another filter while the querying for products! But gift points are negative, so according to algebra, you can write the condition as if gift points were positive, and then flip it:

```js
query.compare('points', '>=', -currentPoints);
```

To get the user's `currentPoints` before you load the products, you must wait for the `wx.BaaS.auth.getCurrentUser()` to return the `user`. Where do you move the querying code? 

> Hint: Where else are you waiting for `user`? Follow the code that sets the page data with `user`

**Solution** (find the right place in your code):

```js
// In loading order
let tableName = 'products';
let Products = new wx.BaaS.TableObject(tableName);

wx.BaaS.auth.getCurrentUser().then(user => {
  // user 为 currentUser 对象

  console.log(user)
  page.setData({
    currentUser: user
  })

  let currentPoints = user.get("points");

  let query = new wx.BaaS.Query();
  query.compare('points', ">=", -currentPoints);

  Products.setQuery(query);
  Products.find().then(dosomething);

}, error => {
  console.log(error)
  page.setData({
    currentUser: null
  })

  Products.find().then(dosomething);
})
```

- Test the points by buying and redeeming! Your points total should now reflect your purchases and gifts.

> Tip: If in the course of testing your points become `null` - just set it to a number again in the BaaS dashboard for managing users!

Congratulations! You know now how to add functions for customer loyalty. This is the beginning of social eCommerce. 👩🏻‍💻👨‍👧‍👦💸

<hr>

## Optional

### 1) Histories

After ordering a few gifts, you should see them appear alongside products ordered! Let's hide the price for any gifts. 
> Hint: Follow the steps for hiding and showing different order state buttons.

**Solution**:

```xml
<view wx:if="{{order.product.price > 0}}" class="p">{{order.product.price} Kuai</view>
```

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191117041042389.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="300"/>
</p>

For the points history:

- We want a page to show the points for each of these orders too. So we create a new page `/pages/points/points` that shares a lot of code with orders. 

On the user’s page when the "history" is clicked, we navigate to the points page. You have to create the functions for the click handling and the navigation:

**Solution** (find the right place in your code):

```js
//in handler for clicking "history" on user page
wx.navigateTo({
  url: '/pages/points/points',
})
```

Now when you click the page, you'll see the same form as before. Let's clean it up and show points!

**Solution**:

```xml
<view class="h2">{{order.product.name}}</view>
<view wx:if="{{order.product.price > 0}}" class="p">{{order.product.price / 100}} Kuai</view>
</view>
<view class="address">
  {{order.address}}
</view>
<view class="action">
  <view class="p">{{order.product.points}} Points</view>
</view>
```

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191117044807401.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="300"/>
</p>

And that's all for the point history page!

### 2) Use UI Kit

[ColorUI](https://github.com/weilanwl/ColorUI) has a user dashboard that looks nice and easy to adapt to our membership center. Follow this [template](https://github.com/weilanwl/ColorUI/blob/master/demo/pages/about/home/home.wxml) to get elements you prefer to show user data. The style sheets can also be imported directly into the BaaS!

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191119173013084.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="300"/>
</p>
