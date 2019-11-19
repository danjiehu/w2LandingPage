# WeChat Login

Your goal is to add login and membership to the eCommerce app built for last weekend's challenge (Waimai app)



## Step 1 - Setup the BaaS

**1. Configure your BaaS** on Minapp.com. 

An account might have to be verified with a real WeChat entity (personal or business) to allow WeChat Login to work.



![image-20191114000350417](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/baas-setup1.png)



![image-20191114000435320](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/baas-setup2.png)



From left menu: Dev > Settings, scroll down to "Login method" and enable "微信小程序登陆" 



## Step 2 - Update your Mini Program

Use the BaaS [SDK login](https://doc.minapp.com/js-sdk/wechat/signin-signout.html):

Add a login button to your `user.wxml` page. You decide where to put it so it looks appropriate:

```html
<button open-type="getUserInfo" bindgetuserinfo="userInfoHandler">微信 Login</button>
```

**Note:** do not forget `open-type="getUserInfo"`. This magically tells WeChat to ask users for their info. 



Now add the binded user data handling function `userInfoHandler` in `user.js`:

```js
//user.js, after onLoad()
userInfoHandler(data) {
  wx.BaaS.auth.loginWithWechat(data).then(user => {
    console.log(user);
    // user 包含用户完整信息，详见下方描述
  }, err => {
    // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
  })
},
```



You can add a relaunch at the users page when successful, and log the error if failed. Consult previous login code if you need.

Before you click the login button, log in as a user with password (without WeChat login). Go to the Network tab of the console - you'll find the request that your page made. It looks something like this. Note it doesn't have much data.

![image-20191114030239322](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191114030239322.png)

After you click login, a POST request is made to the BaaS authentication endpoint.

![image-20191114030924334](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191114030924334.png)

![image-20191114030721000](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191114030721000.png)



And it returns user data from your WeChat account mixed in with your existing user data  (and any customized form info like `photo`). Your accounts are combined.

The POST is called every time the button is clicked as WeChat info is retrieved and saved to the BaaS. 

But if you want to retrieve user info from the BaaS after the login, then just a GET request to the BaaS is ok. You've done this with: `wx.BaaS.auth.getCurrentUser()`:



![image-20191114030457334](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191114030457334.png)



Remember this is saved to the `page.data.currentUser` through your login code ` page.setData({ currentUser: user })`. 

See if you can show the WeChat avatar, if the user-defined photo isn't present. Hint: you can use conditions like `||` , `&&`, or even the ternary `condition ? true : false`  in the view logic:

Solution:

```xml
<image class="avatar" src="{{currentUser.photo || currentUser.avatar}}" />
```



You might remember we don't popup the login page when the user first opens the app. This is why:

⚠️From 2019, WeChat MP's are not allowed to have a `open-type="getUserInfo"` button **on the landing page**. 

> **Solution:** The `getUserInfo` button should not be on the landing page of the app. The philosophy of Tencent is, that a user should be able to enter the app without giving you their WeChat profile info. This allows users to see value before deciding whether to allow you access to their info. 



## Step 3 - Test it

Refresh your app and login out and login again (you can clear previous login permission, and user data storage in Data Settings) and look at the OpenID in the `console`:

![image-20191115165234833](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191115165234833.png)



![image-20191115165349407](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191115165349407.png)



Make sure the login form with the password and customized fields works still. 

And you're done implementing WeChat Login! Try logging out and then in again, with and without WeChat. Everything should work the same as before. 





# Dior Membership Center

## User Journey



![7431570471627_.pic](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/dior-journey.png)

![7481570471630_.pic](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/dior-redeem.png)



Dior's membership center allows customers to keep track of points they've accrued from buying products. They can select gifts to exchange points for, and see the points and exchange history. 



For our app, we'll recreate this core membership journey in the previous eCommerce App (Waimai).

We start again with the data:



## Schema


![image-20191116172347795](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191116172347795.png)


The new field to add is  `points`. We'll add that as a new column to the three tables from the previous app (User, Order, and Meal). Use the BaaS dashboard to add.

What type is `points`? Hint: you've used it before for `ratings`. Where do you find the `user` table? Hint: Remember we've added `role` to this table for the previous app.

Set a `default value` of 0 and make it `required`. We will be adding points from orders so they must have a value!



Now we're ready for to show points on the membership (user) page.



## Membership Page

On the existing user page (`/pages/user/user`), show the user's points. Hint: Look at the `AppData` in the console that shows the `user` object obtained from the query on the edited table. How do you show a field on `user` object?

You can take out the customized login inputs (use WeChat login only), and don't forget to style to look nice, or with your unique design:

![image-20191116234929651](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191116234929651.png)



## Products

Since we're moving beyond food, let's change our "meal" table name to "product"! 

You can edit the table right next to the table name:

![image-20191116235644997](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191116235644997.png)

Why doesn't it let you do that? Remember the "Order" table still has a pointer column to the meal! You have to delete it first.

![image-20191116235619623](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191116235619623.png)

Now you can change "meal" to "product" table. Check that the read and write permissions (ACL) are what you expect. Who should be able to create and write to this? (Hint:  how did you set meal permissions?)

Now your table schema should look at like this:

![image-20191118233654031](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191118233654031.png)

Don't forget to add a pointer column back in the "order" table to the "product table." (Should it be required? Hint: can you create an order without products?)



## Gifts

Let's add some gifts now to "product" table. These are to be redeemed with the points, so they have no price, and **negative** points. Any other field is up to you - make the gifts interesting!

> Challenge yourself: Why is this better than adding a new "gift" table?

> Hint: Are any other fields differenet between them? Think about the associations as well - how much work is saved when we don't have to create another table to order from? 
>
> Solution: This way we could use the order table to redeem gifts too! Clever way to keep app simple - keeping tech footprint small is key to "sustainable" development and highly prized in senior developers.



Replace all `meal` with `product` where you show them (hint: the landing page: `index.wxml` and `index.js`, and the order page too). Don't forget both capital and lower cases. 

Tip: `shift-command(ctrl)-r` is a shortcut for find and replace! That'll save you loads of time, and you won't miss any. 

Also change the `Meals` in the tab bar to `Products`

Now your gifts should load alongside your products for sale in the "Products" tab!

-----



Let's hide the price for gifts, and show the points they need instead! There are difference between gifts and for-purchase products that you can use to change the labeling.

Hint: you can use conditionals in view logic. Don't forget **points are negative** for gifts, and are labeled "Points" and not "Kuai."

Solution:

```xml
<view class="p">{{ product.price > 0 ? product.price / 100.0 : -product.points}} {{ product.price > 0 ? "Kuai" : "Points"}}  </view>
```

 



![image-20191117010221153](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191117010221153.png)



## Getting Points

Now we're ready to get some points so we can redeem the gifts!

Let's make the products for sale have some positive points! 

How much to give depends on your conversion of points to gifts. For example if buying 10 products worth 100 points total gives a gift, then each product would be 10 points. You decide what makes sense. 

Where do you add this value? Hint: how did you add the points to gifts?

After your products all have points, ordering them should add points to your membership!

To do this, when an order is created, pay any positive price (for purchase products), and add points (positive or minus) to the user's `points` column. 

How do you set the order's points? Hint: same way as any other field from products. But first you need the product from the `id` in the order click event. Then you can find the product from the page's products data.

Solution (find the right place in your code):

```js
// In order click handler
let product_id = data.id
let product = this.data.products.find(product => product.id == product_id)
```



How do you set user's columns? Hint: follow steps updating user info from the user page.

How do you get the user's current points? Hint: follow steps getting the "role" from the user on orders page

Solution (find the right place in your code):

```js
// In order click handler
let currentUser = this.data.currentUser;

order.set(newOrder).save().then(res => {
  const points = res.data.points
  currentUser.set("points", currentUser.get("points") + points).update().then(res => {
    wx.reLaunch({
      url: '/pages/orders/orders' // show list of orders in user dashboard
    });
  })
})
```



Now order products and see the points add up! Redeem for gifts when enough has accrued, and see the points deducted. 

How do we make sure a user can only redeem gifts when having enough points? 

Hint: use `wx.showModal` to popup a dialog before order is sent if his points are less than the gift's!

Solution (find the right place in your code):

```js
// In order click handler
let currentPoints = currentUser.get("points");

if (product.points + currentPoints < 0) {
  wx.showModal({
    title: 'Uh oh',
    content: 'Order products to get more points!',
  })

} else {
  this.sendOrder(product); //rest of the order code refactored into this function on Page
}
```



Better still, show only gifts that the user has enough points for redeeming! 

How do you write the condition? Hint: It's another filter while the querying for products! But gift points are negative, so according to algebra, you can write the condition as if gift points were positive, and then flip it:

```js
query.compare('points', ">=", -currentPoints);
```



To get the user's `currentPoints` before you load the the products, you must wait for the `wx.BaaS.auth.getCurrentUser()` to return the `user`. 

Where do you move the querying code? 

Hint: Where else are you waiting for `user`? Follow the code that sets the page data with `user`

Solution (find the right place in your code):

```js
// In loading order
let tableName = 'product';
let Product = new wx.BaaS.TableObject(tableName);

wx.BaaS.auth.getCurrentUser().then(user => {
  // user 为 currentUser 对象

  console.log(user)
  page.setData({
    currentUser: user
  })

  let currentPoints = user.get("points");

  var query = new wx.BaaS.Query();
  query.compare('points', ">=", -currentPoints);

  Product.setQuery(query);
  Product.find().then(page.getRequestData);


}, error => {
  console.log(error)
  page.setData({
    currentUser: null
  })

  Product.find().then(page.getRequestData);
})
```

Test the points by buying and redeeming! Your points total should now reflect your purchases and gifts.

Tip: If in the course of testing your points become `null` - just set it to a number again in the BaaS dashboard for managing users!



Almost there. All that remains are showing the orders and points history!



## Histories

After ordering a few gifts, you'll see them appear in the orders tab alongside products ordered! Let's hide the price for any gifts. Hint: follow the steps for hiding and showing different order state buttons.

Solution:

```xml
<view wx:if="{{order.product.price > 0}}" class="p">{{order.product.price / 100}} Kuai</view>
```



![image-20191117041042389](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191117041042389.png)



The order page is then complete!



For the points history:

We want a page to show the points for each of these orders too. So we create a new page `/pages/points/points` that shares a lot of code with orders. 

In fact, you can copy all the files over from orders and rename the `points.wx**` to start. Remove all the functions changing order `state` from `points.js` (from clicking state buttons), as this page will show info only. 

On the users page when the "history" is clicked, we navigate to the points page. You have to create the functions for the click handling and the navigation:

Solution (find the right place in your code):

```js
//in handler for clicking "history" on user page
wx.navigateTo({
  url: '/pages/points/points',
})
```



Now when you click the page, you'll see the same order form as before. Let's clean it up and show points!

Solution:

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



![image-20191117044807401](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191117044807401.png)



And that's all for the point history page, and the membership app. Congratulations! You know now how to add functions for customer loyalty. This is the beginnings of social eCommerce. 👩🏻‍💻👨‍👧‍👦💸

-----


## Optional: Storing user login

Calling the BaaS with the SDK for `currentUser` on every page could be slow! Also restarting the app can clear your logged in user. Sometimes we want the user to stay logged in. 

**Solution**: Store the `currentUser` in [the phone storage](https://developers.weixin.qq.com/miniprogram/dev/api/storage/wx.setStorageSync.html), and check for this user in all the pages!

```js
// after logging in and getting currentUser from the Baas
wx.setStorage({
  key:"currentUser",
  data: currentUser
})
```

Getting the data is similar to getting the `currentUser` from the SDK

```js
wx.getStorage({
  key: 'currentUser',
  success (res) {
    console.log(res.data)
    //set PageData to res.data
  }
})
```



## Optional: Login with phone number

Add a Login with [Log In with phone button](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html):

```html
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">Phone Login </button>
```



And then in the handler `getPhoneNumber` function, put the phone number into the login/singup form. Then when the user submits, [login with phone](https://doc.minapp.com/js-sdk/auth.html#通过手机号注册):

```js
wx.BaaS.auth.register({phone: phone, password: password}).then(user => {
  console.log(user)
  //store user data
})
```



You can also combine with [SMS phone verification](https://doc.minapp.com/js-sdk/sms.html):

```js
wx.BaaS.verifySmsCode({phone: '132888888', code: 123456}).then(res => {
    // success
    console.log(res.data) // { "status": "ok" }
}).catch(e => {
    // err
    console.log(e.code) // 错误状态码
})
```



## Optional: Combine User Logins

Sometimes the user can deny request to give his WeChat info. You can still merge the user who logged in with password to his WeChat account, but **not** get his Wechat user info like nickname or avatar. Then you can still  use WeChat to log him in and ask him from your app to provide more user info. You can also track who he is across WeChat products like official accounts for analytics. 

Use the [SDK combined login](https://doc.minapp.com/js-sdk/wechat/signin-signout.html#关联微信小程序):

1. The same form submit `button` is used to send customized user info. But adding a `user.linkWechat()` allows these info to be merged.

```js
// in bindLogin, in wx.BaaS.auth.register().catch(err => {
wx.BaaS.auth.login({ username: username, password: password }).then(user => {
  // user 为 currentUser 对象
  console.log(user)
  page.setData({ currentUser: user })

  return user.linkWechat()
}).then(res => {
  // success
  // 用户可以通过微信授权登录同一个账户了
})
```

This and other ways to combine logins from other mini program ecosystems and web and native apps can be done with the SDK in the documentation above. 



## Optional:  Use UI Kit

[ColorUI](https://github.com/weilanwl/ColorUI) has a user dashboard that looks nice and easy to adapt for our membership center. Follow this [template](https://github.com/weilanwl/ColorUI/blob/master/demo/pages/about/home/home.wxml) to get elements you prefer to show user data. The style sheets can also be imported directly into the MiniApp!



![image-20191119173013084](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119173013084.png)