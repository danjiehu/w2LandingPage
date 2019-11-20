



# Wechat Payment

Your goal is to add payment and shopping cart to the eCommerce app built for last weekend's challenge (Waimai app)



For payment, you'll need:

## WeChat Merchant Account

### Opening a [WeChat merchant account](https://pay.weixin.qq.com/) requires

- A verified WeChat official account
- A company business license
- A corporate bank account

and takes 2-3 days for WeChat to approve.



Once approved, setup as follows:

In "My Products" select "JSAPI." 

![image-20191013005917501](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191013005917501.png)



Then in "Developer Settings," add your WeChat MP `AppID` 



![image-20191013005931025](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191013005931025.png)






### WeChat Payment: API Key and certificates

For taking money from user - the API  secret and the `pem` certificate files are required by Minapp Baas. 



To get the API certificate:

进入「账户中心」->「 API 安全」，申请 API 证书(不是 APIv3)。



![image-20191013005853841](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191013005853841.png)



Then under Account Settings -> "API安全" -> "API证书", click on "下载证书"



![merchants_api](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/merchants_api-9d74a6c47e0c4018b2b0502e637ab5039b85b306f0a83667da6c6b53be806bf7.png)



![download_api_certificate](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/download_api_certificate-d66eb70b34a8b257e4fd31f76d80d202d7590a4d7b5f46618f68247bb38ffcf8.png)

Follow the steps to download the certificate. 



Also under "API密钥" click "设置密钥". WeChat calls this Merchant or API secret. It is 32 digits with number and letters (32位组合密码). 



### Merchants ID

Merchant Id (微信支付商业号) is the last thing you need. It's a ten digit number that will identify your WeChat payment account.

![merchants_info](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/merchants_info-1828b571a922ee64b9a2271f9c9ed2322426a718a7a9099006a29f4aa68216f0.png)





## Optional: Additional settings (and check if payment not working)


### Developer settings  

All backend endpoints are whitelisted in developer settings:

![image-20191116145007595](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191116145007595.png)

Check that minapp.com or myminapp.com are listed in the "request合法域名." This is ordinarily done automatically by the Minapp configuration. 



### WeChat Development Platform

For taking payments in WeChat Official Accounts, and other WeChat payment channels.

Verification process needed (2-3 days).  An Official Account backend payment endpoint is needed.



![payment_setting](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/payment_setting-63ccd06644ad01f637d219f6c27ef74d5886a7deda29cbb4278be42b42b8532b.png)




### Merchant Certificate  

Not the API certificte, this merchant certification file must be installed on **the operator's** computer before moving money out of the WeChat Pay account (e.g. to your bank). This is for accounting, not always required for development. 



![payment_certificate](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/payment_certificate-bfb5855758a7f0f2a0ba9121cdd5d4b0cc189354fb719b9c6e2c827f01477ab6.png)



### 



## How does WeChat Pay work? 

### Payment Flow:

The three-party dance: User, BaaS (backend server), Tencent.



![小程序支付模式图-来自微信官方](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/wxa-7-2.png)



Looks complicated? No worries, the **BaaS SDK** will take care of both the BaaS and Tencent part, so you just need to set it up and use its payment functions for the user's frontend. 



## Setup WeChat Payment on BaaS



### Payment with BaaS

In addition to your WeChat AppID, the [BaaS setup](https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml) needs these payment merchant info:

1. WeChat Merchant number (`MCHID`)

2. WeChat Merchant key

3. WeChat Merchant API certificate



Enable "Pay" from the left menu bar: Dev > Settings, then 功能配置:

![image-20191114002320183](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191114002320183.png)



Now You're ready to setup payment. 



Go to Dev -> Pay on the side menu, and then "Certificate" on the top tab. 

On the "Associate WeChat business account" top right, click on "Add an account":

![image-20191007193443651](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191007193443651.png)



Fill out the merchant id, api secret, and certificates that you gathered following steps in the section above:

![image-20191007193525891](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191007193525891.png?token=AALUKUAI6SNYJUMX7QUN4725ZFNIG)

Under "Associate WeChat business account," you should see your new account.  Click `authorize verfication` and wait for `Status` to say "Authorization successful" as in below.



![image-20191104205750735](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191104205750735.png)



Now you're ready to take payment in your Mini Program with Minapp SDK!

### Pay with Minapp SDK 

Type the following into your console:

```js
// 支付示例代码
let params = {
  totalCost: 0.1,
  merchandiseDescription: '深蓝色秋裤'
}

wx.BaaS.pay(params).then(res => {
  // success. 支付请求成功响应，可以在 res 中拿到 transaction_no 和支付结果信息
}, err => {
  // 未完成用户授权或发生网络异常等
  console.log(err)
})
```



Be careful to log in first with WeChat, or you'll see an error:

![image-20191008151611379](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191008151611379.png)



You should see a payment QR when successful:

![image-20191114035014673](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191114035014673.png)

and the following data returned from the request (**支付成功返回示例**)

```json
{
  errMsg: "requestPayment:ok",
  transaction_no: "MDUhtNmacdYBKokJbCXhvYuoJnHXzpeN",
  trade_no: '4DySOWgNssfu5XsiTH9Ek2f5m9jWTwTw'
}
```



### Payment data

In the BaaS dashboard, under "Pay" in the Dev menu, you can find all the payments in the "Payment record" tab:

![image-20191116161354313](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191116161354313.png)

You can also issue refunds on this table!



The payment transaction data can also be queried by the SDK with the `order()` function with `transactionID`

```js
let transactionID = "MDUhtNmacdYBKokJbCXhvYuoJnHXzpeN"
let params = { transactionID }

wx.BaaS.order(params).then(res => console.log(res)) // shows all the payment data
```

This is all we need to get going on our eCommerce App. 



## Your turn! Dior Gift Cards

We're building a new **Dior eCommerce** app. Today's we'll introduce the idea of **shopping carts**! Adapt existing code from previous membership app to save time:



# Dior Gift Cards

## Customer Journey

![image-20190327204251870](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/dior-gift-journey.png)

The user journey comprise of chosing a gift card, and then add gifts on each card. The value of the card is the sum of the all the gifts. The customer buys the card at price equal to the total value. Then he can see the card with the gifts in his orders!



We'll need two new things:

1) A gift card show page, since a gift card can have many items. Which brings to item 2:

2) Shopping carts. If you think about it, a gift card is just a shopping cart, comprising of many items for purchase. Why do eCommerce have carts instead of asking users to buy each item separately? 

It's the same reasons that real stores have shopping carts: higher conversions and amount per order. Carts incentive users to consider more items for purchase than they would otherwise. Also when customer don't want to make up their mind yet, they can save the cart and allow ordering later.

So we'll even call our gift card table `carts` and this record groups multiple quantities and products together for an order:



## Data

![image-20191119200340455](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119200340455.png)



From the previous membership app schema, we add a new table to hold **cart items** called `Cart`. How do we determine the fields on this table? Use relationships:

A actual cart can have many products. But each record in the cart table represents one cart item. But a product can belong to many carts. So *`cart` has a 1:n relationship with `product`*. 

Similarly, *`cart` has a 1:n relationship with `order`*.

> Dive Deeper: This means product has a n:n relationship with order (through cart). In other words, a product can have many orders, and can belong to many orders. This is called a "has and belongs to many" relationship or **HABTM**.

Also, *`cart` has a 1:n relationship with `customer`* 

Since for 1:n relationships, the table with the "1" gets to add the field, these relationships all should be added as fields in the BaaS `cart` table. What type is the field? 

Solution: they point to other tables, so are all are `pointers` type fields 

The other fields to add to the `cart` table are `amount` and `price`.

On the show page:

 - `amount` shows the number of each gift to be ordered and is adjustable

- `price` is total price from all the gifts

- order button makes an `order` record when clicked, then sets the order `id` as the pointer in all the `cart` items. Should the `order` pointer in `cart` be `required`?

  Answer: No because `order` pointer of cart is blank when a product is added to the `cart` item. It's only set when an order is made from the item. So *only the `product` field is required* because it's created with `cart`. We'll see why the `customer` is also not required in the next challenge when we send gift cards to friends.

Create the `cart` table with the fields above! Hint: Work in the BaaS dashboard and add a new table and columns. Follow instructions from adding previous tables and columns (`order`, `product` `user`). 

Solution:

![image-20191119192000241](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119192000241.png)



![image-20191119194443007](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119194443007.png)

![image-20191119194524059](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119194524059.png)

![image-20191119194548973](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119194548973.png)

Don't forget to add the `amount` and `price` fields. What type are they? Hint: see explanation for `rating` and `price` from previous classes. Use sensible settings for `default` and `required`. Hint: Can a record exist without it? Is there a value that makes sense if none is set by the user?



![image-20191119195200311](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119195200311.png)



![image-20191119195239680](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119195239680.png)



According to the schema, last we need to add a `name` field (`String` type) to `order` table. This is for the name on the gift card, and will be explained more in the next section. Delete any existing orders to have a clean start on the rest of the steps.



We're done with the tables! Now let's get to the views! We'll work first on the "index" page to show gift cards, and then add the show page to allow adding gifts!



## Gift Card Index

The previous app shows gift cards for redeeming with points along side other products. Now ordering is a two step process, where do these gift cards go now? Another table?  

> Pro Tip: Remember as a rule - simpler is better. Not adding another another table reduces tech footprint - which means less upkeep and overhead to development in the future. We call growth in any tech infrastructure "tech debt," and just as managing financial debt is key to sustainable businesses, managing "tech debt" is key to "sustainable" development of tech. 

Let's think about what info we need from the gift cards. 

When the user makes an order, it's the *value* and *name* of the gift card that it needs. The items selected are stored in `cart.` So the gift card itself doesn't have any function. So we'll simply treat cards as a way to *name our order*. 

In this way *cards index* is just a fancier *selection box* for the gift card name! We can even put the selections in the page data. You might've seen this at the beginning of your `index.js`:

```js
Page({
  data: { 
    //Page data JSON goes here
  },
```

This is where we can put any data we need that shows on just this page! Make a JSON array with our gift card names. Hint: use the names from the screenshot of the Dior app above.

Solution:

```js
Page({
  data: {
    cards: [ 
      "我爱你",
      "谢谢你",
      "祝贺你",
      "生日快乐"
    ]
  }, 
  // Rest of page js
```

Now let's show this data on our index page. How do we get this cards data? 

Hint: How do we show the products data?  That was set in the same page data object by:

```js
page.setData({
  products: res.data.objects // products data from BaaS query
});
```
Looking at page data in the console, they are in the same place!

![image-20191119211624090](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119211624090.png)

Solution:

We simply use the card object in our view with mustache syntax. We iterate over the cards array:

```xml
<block wx:for="{{cards}}" wx:for-item="card">
	<!-- card details -->
</block>
```

How do we show the card details? Hint: follow previous instructions showing products. Remember instead of an array of objects in products, `cards` is just an array of strings.

Solution:

```xml
<view class="card-product" style="background-image: url('/images/gift.jpg'); background-size: cover;">
  <view class="card-product-infos">
    <view class="h2">{{card}}</view>
  </view>
</view>
```

Apply your design to make it look good! Perhaps like this:

![image-20191119225118318](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119225118318.png)



Here we added a multi-row flex layout with a `cards` container and  `flex-wrap: wrap;`

```css
.cards { /* contains card-products */
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
```

Then each item of the flexbox gets a `flex-basis` less than half the total width to have two columns and the space taken by margins:

```css
.card-product {
  flex-basis: 45%;
  /* existing style */
}
```



For the user to select a card, they just clicks on the card.  What data do we bind to the click? Hint: It's the only data a card has:

```xml
<view class="card-product-infos" data-name="{{card}}" class="order" bindtap="selectCard">
  <view class="h2">{{card}}</view>
</view>
```

Of course you can name the `bindtap` to any handler function you like! We use `selectCard`. Then create this function in `index.js`. 

Now we need to navigate to the show page, and pass in the name of the card. 

Tip: use console to log the `event` if you need to know how to get the `name`. Follow instructions from before (e.g. editing restaurants in the *review app* exercise, or editing meals in the *waimai app* challenge...)

![image-20191119232344456](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191119232344456.png)



Solution:

```js
selectCard(event) {
  console.log(event)
  const data = event.currentTarget.dataset;
  const name = data.name;

  wx.navigateTo({
    url: `/pages/show/show?name=${name}` //sends name to the show page
  });
}
```



Now we move onto the show page to add products to the selected gift card.

## Gift Card Show

Before showing the show page, don't forget to ask the user to log in on the "User" tab if they haven't yet. 

Hint: following previous examples, e.g. in `order.js` from the Waimai challenge.

Solution:

```js
// Get current user logged in
wx.BaaS.auth.getCurrentUser().then(user => {
  // user 为 currentUser 对象

  console.log(user)
  page.setData({ currentUser: user })

}, error => {
  console.log(error)
  page.setData({ currentUser: null })
  wx.switchTab({
    url: '/pages/user/user' // log in
  });
})
```



Now set the page's data `name` object to the name of the gift card passed in through the previous page. How do we get the data from another page? Hint: console log the `onLoad()` function argument (i.e. the variable in the `() ` signs )

![image-20191120003519539](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191120003519539.png)

Solution:

```js
// in onLoad() if logged in
page.setData({
  name: options.name
})
```

How do we see this name data in the view? Hint: follow steps that showed the name on the index page. 

Solution:

```xml
<view class="card" style="background-image: url('/images/gift.jpg'); background-size: 136%; background-position: -38px -39px;">
    <view class="card-name">{{name}}</view>
</view>
```

Tip: This particular background image example is off center and scaled manually instead of using size `cover`. This technique precisely customizes banners. 

You decide how to make your gift card image look like a nice gift card with the name:

![image-20191120032557975](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191120032557975.png)



Now we see a big gift card, next show the products under the gift card. 

Hint: follow the same steps to show products on the index page from the previous membership app. 

Solution:

```js
// in onLoad() after setting "name" in page data
let Product = new wx.BaaS.TableObject('product')

Product.find().then(res => {
  page.setData({
    products: res.data.objects
  })
})
```

```xml
<!-- in show.wxml after the gift card -->
<view class="cards">
  <block wx:for="{{products}}" wx:for-item="product">
    <view class="card-product" style="background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.9)), url('{{product.photo}}'); background-size: cover;">
      <view class="card-product-infos">
        <view class="h2">{{product.name}}</view>
        <view class="p">{{ product.price / 100.0 }} Kuai</view>
      </view>
    </view>
  </block>
</view>
```

How do we show the products in two rows (like on the screenshot of the Dior app)? 

Hint: We can use the same multi-row flex layout as on the index page.

Solution:

```css
.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 18px;
}

.card-product {
  flex-basis: 45%;
  /* other styling for each product */
}
```

Now we see the products we can add to the cart:

![image-20191120034059078](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191120034059078.png)



Next step is to add products to the gift card as cart items.

## Adding Cart Items

We need to show "plus" and "minus" to add or remove one item. Total amount is shown on card. 

Hint: Follow the steps to show the "edit" button for manager to edit a meal in the waimai app. Use `position: relative;` and `position: absolute;` in the right places. You can use icons or just text for "plus" and "minus" buttons. Don't forget binding the buttons to click handler functions with their needed data.

Solution:

```css
/** show.wxss **/

.card-product {
  /** other styling for each product **/
  position: relative;
}

.plus {
  bottom: 20px;
  right: 45px;
  position: absolute;
  font-size: 25px;
}

.minus {
  bottom: 20px;
  left: 45px;
  position: absolute;
  font-size: 25px;
}
```

```xml
<!-- show.wxml in a product card -->
<view data-id="{{product.id}}" class="plus" bindtap="addProduct"> + </view>
<view data-id="{{product.id}}" class="minus" bindtap="minusProduct"> - </view>
```



Now we can handle the button clicks with the binded functions. 

We create a new `cart` record when "plus" is first clicked. It needs `price`, `amount`, `customer` and `product`. How do you get this data and create the record?

Hint: Similar to creating an order while setting points in `index.js` from the previous membership app, follow those steps. Replace `order` with `cart` and `points` with `amount`, then keep going  (following the trail of data) until you complete the logic.

Solution:

```js
// show.js
	addProduct(event) {
    const page = this;
    const data = event.currentTarget.dataset;
    const product_id = data.id;

    const product = page.data.products.find(product => product.id == product_id)
    page.createCart(product);
  },
  createCart(product) {
    const page = this;

    let newCart = {
      price: product.price,
      amount: 1,
      customer: page.data.currentUser.id.toString(),
      product: product.id
    };

    let Cart = new wx.BaaS.TableObject('cart')
    let cart = Cart.create()

    cart.set(newCart).save().then(res => {
      console.log(res.data.amount) // so we can show the new amount
    })
  }
```

Now we can show the amount of this product the user selected:

```xml
<!-- show.wxml in a product card -->
<view class="amount">{{product.amount}}</view>
```

This means the amount from the `cart` item has to be added to the `products` object in the page data. 

To combine data from two objects, find the product in `products` that matches the product in `cart`. Hint: get the data from the page and use a function to "find."

Solution:

```js
const page = this;

let products = page.data.products;
let product = products.find(product => product.id == product_id)
```

Then we can update page data with the new amount. Hint: set the product `amount`, and then update the page data with `products`.

Solution:

```js
product.amount = amount;
page.setData({products: products})
```

Now put it all together. Hint: make create a new function with the two solutions snippets above, and call it with the right arguments with the cart creation response data.

Solution:

```js
// show.js
updateAmount(product_id, amount) {
  const page = this;

  let products = page.data.products;
  let product = products.find(product => product.id == product_id)
  product.amount = amount;
  page.setData({products: products})
}
```

```js
// show.js in createCart() 
cart.set(newCart).save().then(res => {
  const amount = res.data.amount;
  page.updateAmount(product.id, amount);
})
```

The amount should show for products that have been added. Hint: use view logic!

Solution: 

```xml
<!-- show.wxml in a product card -->
<view wx:if="{{product.amount > 0}}" class="amount">{{product.amount}}</view>
```

Style the amount to fit your design:

```css
/** show.wxss **/
.amount {
  position: absolute;
  top: 9px;
  right: 5px;
  border-radius: 50%;
  border: 1px solid black;
  width: 20px;
  height: 20px;
  font-size: 14px;
}
```

![image-20191120064453183](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191120064453183.png)



Now we need to increment the amount when the "plus" button is clicked for the same product. Similarly the "minus" button decreases the amount.

User can click "minus" until amount is at 0, which will remove the item all together.

Does this sound familiar? Where have you already done this? In making the comments voting function on for the Toutiao app! Follow the instructions for that if you need. Keep working on the logic in 'show.js' until the amount can change similar to votes. 

Hint: Adding the cart `id` to `products` object will make finding the `cart` a lot easier! Change `updateAmount()` to:

```js
updateProduct(product_id, cart) {
  const page = this;

  let products = page.data.products;
  let product = products.find(product => product.id == product_id)

  product.amount = cart.amount;
  product.cart_id = cart.id;

  page.setData({
    products: products
  })
},
```

And update code where this function is called to reflect the changes. Check the page data after adding an item:

![image-20191120072747728](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191120072747728.png)



Now ` product.cart_id` can be used to find the `cart` record. Update the record in a new function called `updateCart` perhaps?

Solution:

```js
updateCart(product, amount) {
  const page = this

  let Cart = new wx.BaaS.TableObject('cart')
  let cart = Cart.getWithoutData(product.cart_id)

  cart.set('amount', amount)
  cart.update().then(res => {
    const cart = res.data;
    page.updateProduct(product.id, cart);
  })
}
```

Then checking if we're updating or creating a cart, and call the corresponding functions.

Solution:

```js
addProduct(event) {
  const page = this;
  const data = event.currentTarget.dataset;
  const product_id = data.id;

  const product = page.data.products.find(product => product.id == product_id)
  const currentAmount = product.amount

  if (currentAmount > 0) {
    page.updateCart(product, currentAmount + 1);
  } else {
    page.createCart(product);
  }
},
```

`minusProduct` is almost identical to `addProduct` except for +/- 1. So lets simply by updating our view:

```xml
<!-- show.wxml in a product card -->
<view data-id="{{product.id}}" data-add="{{1}}" class="plus" bindtap="updateAmount"> + </view>
<view data-id="{{product.id}}" data-add="{{-1}}" class="minus" bindtap="updateAmount"> - </view>
```

`updateAmount` is addProduct` that uses this new `data-add` to update the amount.

Solution:

```js
updateAmount(event) { //renamed from "addProduct"
  const page = this;
  const data = event.currentTarget.dataset;
  const product_id = data.id;
  const add = data.add;

  const product = page.data.products.find(product => product.id == product_id)
  const currentAmount = product.amount

  if (currentAmount > 0) {
    page.updateCart(product, currentAmount + add);
  } else {
    page.createCart(product);
  }
},
```

The user now can update the amount on any product!

When the "minus' button makes the amount 0, we should delete the cart item. How to write the conditional? Hint: there are two cases when`(currentAmount > 0)`. 

Solution:

```js
// in updateAmount()
if (currentAmount > 0) {
  if (currentAmount + add == 0) {
    page.deleteCart(product);
  } else {
    page.updateCart(product, currentAmount + add);
  }
} else {
  page.createCart(product);
}
```

Now you can delete the `cart` ordered with `cart_id` from `product`. Hint: follow the destroy comments steps from Toutiao app. 

Solution:

```js
deleteCart(product){
  const page = this;
  
  let Cart = new wx.BaaS.TableObject('cart')
  Cart.delete(product.cart_id).then(() => {
    page.updateProduct(product.id, null)
  });
},
```

Don't forget in `updateProduct` to remove the `cart_id` and the `amount` from `product` since they're deleted! Hint: use `delete object.key` to remove a key:

```js
// in updateProduct()
if (cart == null) {
  delete product.amount;
  delete product.cart_id;
} else {
  product.amount = cart.amount;
  product.cart_id = cart.id;
}
```



Now when the show page loads, we need to also load the `cart` data to combine with the page data `products` object following the strategy used above. Which `cart` records do we need? 

Hint: do we need `cart` items that have already checked out? How do we tell and use it to query `cart`? 

Solution:

We only need items still active in the `cart` [without order `pointer`](https://doc.minapp.com/js-sdk/schema/query.html#空或非空查询). 

```js
const Cart = new wx.BaaS.TableObject('cart')

let query = new wx.BaaS.Query()

query.notExists('order') // cart not checked out

Cart.setQuery(query).expand('product').find().then(res => {
  page.setData({
    products: res.data.objects
  })
})
```

To be secure, we should check if the cart belongs to the current user logged in. [Filtering by user](https://doc.minapp.com/js-sdk/schema/query.html#pointer-查询) is also done with query:

```js
const User = new wx.BaaS.User()
let query = new wx.BaaS.Query()
const customer = User.getWithoutData(user.id.toString())
query.compare('customer', '=', customer)
```



We can combine the two queries above to filter by `customer` and `order`! Where do we add this code? 

Hint: follow the same steps filtering products by user's points in `index.js` `onLoad`  of the membership app.

Solution:

```js
//show.js in onLoad()
wx.BaaS.auth.getCurrentUser().then(user => {

  console.log(user)
  page.setData({
    currentUser: user
  })

  page.loadCart(user)

}
```



```js
//show.js
loadCart(user) {
  const page = this
  const Cart = new wx.BaaS.TableObject('cart')
  const User = new wx.BaaS.User()

  let query = new wx.BaaS.Query()
  const customer = User.getWithoutData(user.id.toString())

  query.compare('customer', '=', customer)
  query.notExists('order') // cart not checked out

  Cart.setQuery(query).expand('product').find().then(res => {
    page.setData({
      products: res.data.objects
    })
  })
}
```



Now we see the page data has `products` set to `cart` data. 



![image-20191120083957333](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191120083957333.png)



The `cart` data includes `product` because of the `expand('product')` in the query. We just take this `product` data instead, and combine it with `cart.id` and `cart.amount`. 

Then just like the strategy used above, we set this combined data as the `products` page data for the show page.

How do we combine data from an array to another array? Hint: methods like `map()` are very handy for this purpose.

Solution:

```js
// in loadCart(), after getting res from the cart query
const carts = res.data.objects
const products = carts.map( cart => { 

  let product = cart.product
  product.cart_id = cart.id 
  product.amount = cart.amount

  return product
})
```

Now reloading the show page will show the active cart items with the right amount! But we need to merge these cart items with all the products. 

Perfect job for the [spread operator](https://flaviocopes.com/how-to-merge-objects-javascript/) `{...a, ...b}`! It combines objects `a` and `b`, while replacing any duplicates from `a` with `b`. Can you merge `allProducts` with `products`  to form `combinedProducts` ?

Solution:

```js
let combinedProducts = { ...allProducts, ...products }
```

Now just load `allProducts` from the `products` table on the BaaS after the `carts` are mapped into `products` in above. Then combine the products, and set it to page data.

Solution:

```js
// in loadCart(), after getting products from carts.map()

const Product = new wx.BaaS.TableObject('product')
Product.find().then(res => {
  let allProducts = res.data.objects

  let combinedProducts = { ...allProducts, ...products }

  page.setData({
    products: Object.values(combinedProducts)
  })
})
```

What is `Object.values()`? We need `products` to be an array for page data. If you inspect `combinedProducts`'s type, you'll see that it's an object that's the result of the spread operator. So this function  converts `combinedProducts` into to an array!

Now all the cart items and the products are loaded on the page and ready to be added to the cart! 



Finally we're ready to checkout the `cart` and create an order!



## Ordering Gift Card

Use a floating section to show the total price and order button (like in the Dior app screenshot above). 

Hint: Follow the steps to show the "add" button for manager to create a meal in the waimai app. Use `position fixed` and the right placements. 

Solution:

```xml
<!-- show.wxml at the bottom -->
<view class="footer">
  <text>¥ {{price/100}}</text>
  <button type='primary'>Order</button>
</view>
```



```css
/** show.wxss **/
.footer {
  position: fixed;
  bottom: 0px;
  width: 100vw;
  height: 42px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  padding: 10px;
}

.footer button {
  position: absolute;
  right: 41px;
}
```



How do we show the price? It's binded to the page data object `price` - just need to set its value on load and for every cart changes. The value is the sum of all the cart items chosen for the gift card. How do you sum over all the cart items? Hint: look at `reduce` function in [array operations](https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332):

```js
products.reduce((sum, product) => sum + product.amount * product.price, 0)
```



Where to set the `price` value?

Hint: Set this and the `products` object together with `setData`

Solution: 

```js
// in loadCart(), after getting products from carts.map()

const combinedPrice = products.reduce((sum, product) => sum + product.amount * product.price, 0)

const Product = new wx.BaaS.TableObject('product')
Product.find().then(res => {
  let allProducts = res.data.objects

  let combinedProducts = { ...allProducts, ...products }

  page.setData({
    products: Object.values(combinedProducts),
    price: combinedPrice
  })
})
```

Don't forget when a product is added or removed.

Solution:

```js
// in updateProduct()   
const combinedPrice = products.filter(product => product.amount > 0).reduce((sum, product) => sum + product.amount * product.price, 0)

page.setData({
  products: products,
  price: combinedPrice
})
```

The `filter()` removes products not in the cart so the cart so the sum can be accurate! 

The total price should show when the page loads, and when the cart changes.

![image-20191120110115749](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191120110115749.png)



Now we're ready to send the order ✌️



When the order button is clicked:

1. get the total price
2. create the order
3. set `order` pointer for all cart items (with order `id`). 

Create a handler function and bind to the order button for steps 1 and 2 above. Follow instructions creating an order in previous apps (e.g. `sendOrder` in `index.js` from the membership app) if needed. From the schema, `order` needs `name`, `address`, `price`, `customer` fields to create.

 

Note `order` no longer needs a `product` as that is provided by the cart items following step 3. Remove that field from `order` table on the BaaS if you have not done so already. 

Solution:

```js
// show.js
createOrder(event) {
  const page = this;
  const price = page.data.price;
  let currentUser = this.data.currentUser
  const name = page.data.name;

  wx.chooseAddress({
    success(res) {
      let address =
          res.userName + " " +
          res.provinceName + " " +
          res.cityName + " " +
          res.countyName + " " +
          res.detailInfo;

      let newOrder = {
        price: price,
        customer: currentUser.id.toString(),
        address: address,
        name: name,
      };

      let Order = new wx.BaaS.TableObject('order')
      let order = Order.create()
      order.set(newOrder).save().then(res => {
        // Step 3. set all cart items
        wx.reLaunch({
          url: '/pages/orders/orders' // show list of orders in user dashboard
        });
      })
    }
  })
}
```



Step 3 allows the app to clear the cart, and track the order with the cart items in the history (an optional in the following section). It occurs after the response from the successful order creation. 

To implement, gather all the cart `id`'s for this page and set the order pointer to the created order. Where do we get the created order? Hint:  look in the response from the create request.

Solution:

```js
// show.js - at comment marked Step 3  
let order = res.data

let carts = page.data.products.filter(product => product.cart_id)

carts.forEach( product => {
  let Cart = new wx.BaaS.TableObject('cart')
  let cart = Cart.getWithoutData(product.cart_id)

  cart.set('order', order.id)
  cart.update()
})
```



And you're done! Another complete app under your belt! You've learned all you need to prepare for the next app challenge - a social eCommerce app that a business is built around! 



## Optional: Order History

Show all the gift cards products in the order history! This involves another call to query `cart`table and combining the data in the orders page to show in the orders view.

## Optional: Payment

If you have the payment account set up, you can add WeChat payment to the App!

Then following the demo and instructions at the beginning of the class, you can ask the user to use WeChat Pay to pay the amount for the order before creating it!


> Tip: Test it on a small purchase (edit the price in the BaaS if you need). 