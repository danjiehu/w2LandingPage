## Background & Objectives

We're building a new **Dior eCommerce** app. We'll be introducing the idea of **shopping carts**! The user journey comprises choosing a gift card, and then add gifts on each card. The value of the card is the sum of all the gifts. The customer buys the card at a price equal to the total value. Then he can see the card with the gifts in his orders! 

### Customer Journey

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 1.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/dsYacJcS7YuJdCTBVMHkUkp5" />
    </p>
</figure>

## Specs

We'll need two new things:

1) A gift card show page, since a gift card can have many items. Which brings to item 2.

2) Shopping carts. If you think about it, a gift card is just a shopping cart, comprising of many items for purchase. Why do eCommerce have carts instead of asking users to buy each item separately? 

> It's the same reasons that real stores have shopping carts: higher conversions and amount per order. Carts incentivize users to consider more items for purchase than they would otherwise. Also when customers don't want to make up their minds yet, they can save the cart and allow ordering later.

So we'll even call our gift card table `carts` and this record groups multiple quantities and products together for an order:

### Data

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 2.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/SGgdGSkZq1F1bz7BFjgHprRZ" />
    </p>
</figure>

- From the previous membership app schema, add a new table to hold **cart items** called `carts`. How do we determine the fields on this table? Use relationships:

An actual cart can have many products. But each record in the cart table represents one cart item. But a product can belong to many carts. So *`carts` has a 1:n relationship with `products`*. 

Similarly, *`carts` has a 1:n relationship with `orders`*.

> Dive Deeper: This means the product has an n:n relationship with order (through cart). In other words, a product can have many orders and can belong to many orders. This is called a "has and belongs to many" relationship or **HABTM**.

Also, *`carts` has a 1:n relationship with `customers`* 

Since for 1:n relationships, the table with the "1" gets to add the field, these relationships all should be added as fields in the BaaS `carts` table. What type is the field? 

**Solution**: they point to other tables, so are all are `pointers` type fields 

The other fields to add to the `carts` table are `amount` and `price`.

On the `show` page:

 - `amount` shows the number of each gift to be ordered and is adjustable

- `price` is the total price of all the gifts

- Order button makes an `order` record when clicked, then sets the order `id` as the pointer in all the `cart` items. Should the `order` pointer in `cart` be `required`?

 **Answer**: No because `order` pointer of cart is blank when a product is added to the `cart` item. It's only set when an order is made from the item. So *only the `product` field is required* because it's created with `cart`. We'll see why the `customer` is also not required in the next challenge when we send gift cards to friends.

- Create the `cart` table with the fields above! 
> Hint: Work in the BaaS dashboard and add a new table and columns. Follow instructions from adding previous tables and columns (`orders`, `products`, `users`). 

**Solution**:

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 3.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/kAQJn8xgCBYyb9qNxYzTUkq7" />
    </p>
</figure>

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 4.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/mPXFhdvam2SNyXTQH6PbMtEu" />
    </p>
</figure>

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 5.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/dYS9TcN7xmXhZF71hfgDSx2e" />
    </p>
</figure>
</p>

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 6.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/qUUoSeAvEF8Rd7rxPkmU4iEQ" />
    </p>
</figure>

- Don't forget to add the `amount` and `price` fields. What type are they? Hint: See the explanation for `rating` and `price` from previous classes. Use sensible settings for `default` and `required`. 
> Hint: Can a record exist without it? Is there a value that makes sense if none is set by the user?

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 7.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/pupZKJiufdvZbBvwbH6uJCEM" />
    </p>
</figure>

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 8.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/Lzpq2UAnhT719Buv4LHVU2yv" />
    </p>
</figure>

- According to the schema, last we need to add a `name` field (`String` type) to the `orders` table. This is for the name on the gift card and will be explained more in the next section. Delete any existing orders to have a clean start on the rest of the steps.

We're done with the tables! Now let's get to the views! We'll work first on the "index" page to show gift cards, and then add the show page to allow adding gifts!

### Gift Card Index

The previous app shows gift cards for redeeming with points alongside other products. Now ordering is a two-step process, where do these gift cards go now? Another table?  

> Pro Tip: Remember as a rule - simpler is better. Not adding another table reduces tech footprint - which means less upkeep and overhead to development in the future. We call growth in any tech infrastructure "tech debt," and just as managing financial debt is key to sustainable businesses, managing "tech debt" is key to "sustainable" development of tech. 

Let's think about what info we need from the gift cards. 

When the user makes an order, it's the *value* and *name* of the gift card that it needs. The items selected are stored in `carts`. So the gift card itself doesn't have any function. So we'll simply treat cards as a way to *name our order*. 

In this way, *cards index* is just a fancier *selection box* for the gift card name! We can even put the selections in the page data:

```js
Page({
  data: { 
    //Page data JSON goes here
  },
```

- This is where we can put any data we need that shows on just this page! Make a JSON array with our gift card names. 
> Hint: Use the names from the screenshot of the Dior app above.

**Solution**:

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

- Now let's show this data on our index page. How do we get these cards’ data? 
> Hint: How do we show the product data? That was set in the same page data object by:

```js
page.setData({
  products: res.data.objects // products data from BaaS query
});
```

- Looking at page data in the console, they are in the same place!

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 9.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/nqGJC2kKazZnZ1N3eGNPGbZ3" />
    </p>
</figure>
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191119211624090.png" style="border: 1px solid rgb(240, 240, 240)" width="400"/>

**Solution**:

We simply use the card object in our view with mustache syntax. We iterate over the cards array:

```xml
<block wx:for="{{cards}}" wx:for-item="card">
	<!-- card details -->
</block>
```

How do we show the card details? 
> Hint: Follow previous instructions showing products. Remember instead of an array of objects in products, `cards` is just an array of strings.

**Solution**:

```xml
<view class="card-product" style="background-image: url('/images/gift.jpg'); background-width: cover;">
  <view class="card-product-infos">
    <view class="h2">{{card}}</view>
  </view>
</view>
```

Apply your design to make it look good! Perhaps like this:

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 10 .png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/15PMB1TZoPZBXjEg3cgt2Eb1" />
    </p>
</figure>
</p>

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

For the user to select a card, they just click on the card. What data do we bind to the click? 
> Hint: It's the only data a card has:

```xml
<view class="card-product-infos" data-name="{{card}}" class="order" bindtap="selectCard">
  <view class="h2">{{card}}</view>
</view>
```

Of course you can name the `bindtap` to any handler function you like! We use `selectCard`. Then create this function in `index.js`. 

Now we need to navigate to the `show` page and pass in the name of the card. 

> Tip: Use console to log the `event` if you need to know how to get the `name`. Follow instructions from before (e.g. editing restaurants in the *review app* exercise, or editing meals in the *waimai app* challenge...)

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 11.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/BEadWALGQ2eDZZ2wGNZp19UM" />
    </p>
</figure>

**Solution**:

```js
selectCard(event) {
  console.log(event)
  let data = event.currentTarget.dataset;
  let name = data.name;

  wx.navigateTo({
    url: `/pages/show/show?name=${name}` //sends name to the show page
  });
}
```

Now we move onto the show page to add products to the selected gift card.

### Gift Card Show

Before showing the show page, don't forget to ask the user to log in on the "User" tab if they haven't yet. 

> Hint: Following previous examples, e.g. in `order.js` from the Waimai challenge.

**Solution**:

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

Now set the page's data `name` object to the name of the gift card passed in through the previous page. How do we get the data from another page? 
> Hint: Console log the `onLoad()` function argument (i.e. the variable in the `() ` signs)

<figure style="width: 100%">
  <p align="center">
  <img alt="gift12.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/UHLWuCbCMGEdDdkApiSh6QLb" />
    </p>
</figure>

**Solution**:

```js
// in onLoad() if logged in
page.setData({
  name: options.name
})
```

How do we see this name data in the view? 
> Hint: Follow steps that showed the name on the index page. 

**Solution**:

```xml
<view class="card" style="background-image: url('/images/gift.jpg'); background-width: 136%; background-position: -38px -39px;">
    <view class="card-name">{{name}}</view>
</view>
```

> Tip: This particular background image example is off-center and scaled manually instead of using width `cover`. This technique precisely customizes banners. 

You decide how to make your gift card image look like a nice gift card with the name:

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 13.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/ciaUmHVL9NsqPnPQRAn2NsYp" />
    </p>
</figure>

Now we see a big gift card, next show the products under the gift card. 

> Hint: Follow the same steps to show products on the index page from the previous membership app. 

**Solution**:

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
    <view class="card-product" style="background-image: linear-gradient(rgba(255,255,255,0.3), rgba(255,255,255,0.9)), url('{{product.photo}}'); background-width: cover;">
      <view class="card-product-infos">
        <view class="h2">{{product.name}}</view>
        <view class="p">{{ product.price / 100.0 }} Kuai</view>
      </view>
    </view>
  </block>
</view>
```

How do we show the products in two rows (like on the screenshot of the Dior app)? 
> Hint: We can use the same multi-row flex layout as on the index page.

**Solution**:

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

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 14.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/nMfA7613yaow1zV6PruCEr9F" />
    </p>
</figure>

Next step is to add products to the gift card as cart items!

### Adding Cart Items

We need to show "plus" and "minus" to add or remove one item. The total amount is shown on the card. 

> Hint: Follow the steps to show the "edit" button for a manager to edit a meal in the waimai app. Use `position: relative;` and `position: absolute;` in the right places. You can use icons or just text for "plus" and "minus" buttons. Don't forget to bind the buttons to click handler functions with their needed data.

**Solution**:

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
  font-width: 25px;
}

.minus {
  bottom: 20px;
  left: 45px;
  position: absolute;
  font-width: 25px;
}
```

```xml
<!-- show.wxml in a product card -->
<view data-id="{{product.id}}" class="plus" bindtap="addProduct"> + </view>
<view data-id="{{product.id}}" class="minus" bindtap="minusProduct"> - </view>
```

Now we can handle the button clicks with the binded functions!

We create a new `cart` record when "plus" is first clicked. It needs `price`, `amount`, `customer` and `product`. How do you get this data and create the record?

> Hint: Similar to creating an order while setting points in `index.js` from the previous membership app, follow those steps. Replace `order` with `cart` and `points` with `amount`, then keep going  (following the trail of data) until you complete the logic.

**Solution**:

```js
// show.js
	addProduct(event) {
    let page = this;
    let data = event.currentTarget.dataset;
    let product_id = data.id;

    let product = page.data.products.find(product => product.id == product_id)
    page.createCart(product);
  },
  createCart(product) {
    let page = this;

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

To combine data from two objects, find the product in `products` that matches the product in `cart`. 
> Hint: Get the data from the page and use a function to "find."

**Solution**:

```js
let page = this;

let products = page.data.products;
let product = products.find(product => product.id == product_id)
```

Then we can update page data with the new amount. 
> Hint: Set the product `amount`, and then update the page data with `products`.

**Solution**:

```js
product.amount = amount;
page.setData({products: products})
```

Now put it all together! 
> Hint: Make create a new function with the two solutions snippets above, and call it with the right arguments with the cart creation response data.

**Solution**:

```js
// show.js
updateAmount(product_id, amount) {
  let page = this;

  let products = page.data.products;
  let product = products.find(product => product.id == product_id)
  product.amount = amount;
  page.setData({products: products})
}
```

```js
// show.js in createCart() 
cart.set(newCart).save().then(res => {
  let amount = res.data.amount;
  page.updateAmount(product.id, amount);
})
```

The amount should show for products that have been added. 
> Hint: Use view logic!

**Solution**: 

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
  font-width: 14px;
}
```

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 15.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/uSZkmPoxzF7zx2gUKBHQqdUj" />
    </p>
</figure>

Now we need to increment the amount when the "plus" button is clicked for the same product. Similarly, the "minus" button decreases the amount.

Users can click "minus" until the amount is at 0, which will remove the item all together.

Does this sound familiar? Where have you already done this? In making the comments voting function on for the Toutiao app! Follow the instructions for that if you need to. Keep working on the logic in 'show.js' until the amount can change similar to votes. 

> Hint: Adding the cart `id` to `products` object will make finding the `cart` a lot easier! Change `updateAmount()` to:

```js
updateProduct(product_id, cart) {
  let page = this;

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

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 16.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/HJzKoJUKHs2cfGVmyhqkDcJV" />
    </p>
</figure>

Now `product.cart_id` can be used to find the `cart` record. Update the record in a new function called `updateCart` perhaps?

**Solution**:

```js
updateCart(product, amount) {
  let page = this

  let Cart = new wx.BaaS.TableObject('cart')
  let cart = Cart.getWithoutData(product.cart_id)

  cart.set('amount', amount)
  cart.update().then(res => {
    let cart = res.data;
    page.updateProduct(product.id, cart);
  })
}
```

Then checking if we're updating or creating a cart, and call the corresponding functions.

**Solution**:

```js
addProduct(event) {
  let page = this;
  let data = event.currentTarget.dataset;
  let product_id = data.id;

  let product = page.data.products.find(product => product.id == product_id)
  let currentAmount = product.amount

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

`updateAmount` is `addProduct` that uses this new `data-add` to update the amount.

**Solution**:

```js
updateAmount(event) { // renamed from "addProduct"
  let page = this;
  let data = event.currentTarget.dataset;
  let product_id = data.id;
  let add = data.add;

  let product = page.data.products.find(product => product.id == product_id)
  let currentAmount = product.amount

  if (currentAmount > 0) {
    page.updateCart(product, currentAmount + add);
  } else {
    page.createCart(product);
  }
},
```

The user now can update the amount on any product!

When the "minus' button makes the amount 0, we should delete the cart item. How to write the conditional? 
> Hint: There are two cases when`(currentAmount > 0)`. 

**Solution**:

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

Now you can delete the `cart` ordered with `cart_id` from `product`. 
> Hint: Follow the destroy comments steps from Toutiao app. 

**Solution**:

```js
deleteCart(product){
  let page = this;
  
  let Cart = new wx.BaaS.TableObject('cart')
  Cart.delete(product.cart_id).then(() => {
    page.updateProduct(product.id, null)
  });
},
```

Don't forget in `updateProduct` to remove the `cart_id` and the `amount` from `product` since they're deleted! 
> Hint: Use `delete object.key` to remove a key

**Solution**:

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

Now when the show page loads, we need to also load the `carts` data to combine with the page data `products` object following the strategy used above. Which `carts` records do we need? 

> Hint: Do we need `carts` items that have already checked out? How do we tell and use it to query `carts`? 

**Solution**:

We only need items still active in the `cart` [without order `pointer`](https://doc.minapp.com/js-sdk/schema/query.html#空或非空查询). 

```js
let Cart = new wx.BaaS.TableObject('cart')

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
let User = new wx.BaaS.User()
let query = new wx.BaaS.Query()
let customer = User.getWithoutData(user.id.toString())
query.compare('customer', '=', customer)
```

We can combine the two queries above to filter by `customer` and `order`! Where do we add this code? 

> Hint: Follow the same steps filtering products by user's points in `index.js` `onLoad`  of the membership app.

**Solution**:

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
  let page = this
  let Cart = new wx.BaaS.TableObject('cart')
  let User = new wx.BaaS.User()

  let query = new wx.BaaS.Query()
  let customer = User.getWithoutData(user.id.toString())

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

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 17.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/q1YQTxSeSAYLd6npuWCTetrf" />
    </p>
</figure>

The `carts` data includes `products` because of the `expand('product')` in the query. We just take this `product` data instead, and combine it with `cart.id` and `cart.amount`. 

Then just like the strategy used above, we set this combined data as the `products` page data for the show page.

How do we combine data from an array to another array? 
> Hint: Methods like `map()` are very handy for this purpose.

**Solution**:

```js
// in loadCart(), after getting res from the cart query
let carts = res.data.objects
let products = carts.map( cart => { 

  let product = cart.product
  product.cart_id = cart.id 
  product.amount = cart.amount

  return product
})
```

Now reloading the show page will show the active cart items with the right amount! But we need to merge these cart items with all the products. 

Perfect job for the [spread operator](https://flaviocopes.com/how-to-merge-objects-javascript/) `{...a, ...b}`! It combines objects `a` and `b` while replacing any duplicates from `a` with `b`. Can you merge `allProducts` with `products`  to form `combinedProducts` ?

**Solution**:

```js
let combinedProducts = { ...allProducts, ...products }
```

Now just load `allProducts` from the `products` table on the BaaS after the `carts` are mapped into `products` in above. Then combine the products, and set it to page data.

**Solution**:

```js
// in loadCart(), after getting products from carts.map()

let Product = new wx.BaaS.TableObject('product')
Product.find().then(res => {
  let allProducts = res.data.objects

  let combinedProducts = { ...allProducts, ...products }

  page.setData({
    products: Object.values(combinedProducts)
  })
})
```

What is `Object.values()`? We need `products` to be an array for page data. If you inspect `combinedProducts`'s type, you'll see that it's an object that's the result of the spread operator. So this function converts `combinedProducts` into an array!

Now all the cart items and the products are loaded on the page and ready to be added to the cart! 

Finally, we're ready to check out the `cart` and create an order!

### Ordering Gift Card

Use a floating section to show the total price and order button (like in the Dior app screenshot above). 

> Hint: Follow the steps to show the "add" button for the manager to create a meal in the waimai app. Use `position fixed` and the right placements. 

**Solution**:

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

How do we show the price? It's binded to the page data object `price` - just need to set its value on load and for every cart changes. The value is the sum of all the cart items chosen for the gift card. How do you sum over all the cart items?

> Hint: Look at `reduce` function in [array operations](https://codeburst.io/javascript-arrays-finding-the-minimum-maximum-sum-average-values-f02f1b0ce332):

```js
products.reduce((sum, product) => sum + product.amount * product.price, 0)
```

Where to set the `price` value?

> Hint: Set this and the `products` object together with `setData`

**Solution**: 

```js
// in loadCart(), after getting products from carts.map()

let combinedPrice = products.reduce((sum, product) => sum + product.amount * product.price, 0)

let Product = new wx.BaaS.TableObject('product')
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

**Solution**:

```js
// in updateProduct()   
let combinedPrice = products.filter(product => product.amount > 0).reduce((sum, product) => sum + product.amount * product.price, 0)

page.setData({
  products: products,
  price: combinedPrice
})
```

The `filter()` removes products not in the cart so the sum can be accurate! 

The total price should show when the page loads, and when the cart changes.

<figure style="width: 100%">
  <p align="center">
  <img alt="gift 18.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/gyKweUb6wRGLWne95ftv4gTT" />
    </p>
</figure>

Now we're ready to send the order ✌️

When the order button is clicked:

1. Get the total price
2. Create the order
3. Set `order` pointer for all cart items (with order `id`). 

Create a handler function and bind to the order button for steps 1 and 2 above. Follow instructions placing an order in previous apps (e.g. `sendOrder` in `index.js` from the membership app) if needed. From the schema, `order` needs `name`, `address`, `price`, `customer` fields to create.

> Note: an `order` no longer needs a `product` as that is provided by the cart items following step 3. Remove that field from the `orders` table on the BaaS if you have not done so already. 

**Solution**:

```js
// show.js
createOrder(event) {
  let page = this;
  let price = page.data.price;
  let currentUser = this.data.currentUser
  let name = page.data.name;

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

To implement, gather all the cart `id`'s for this page and set the order pointer to the created order. Where do we get the created order? 

> Hint: Look in the response from the create request.

**Solution**:

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

-----

### Optional: Order History

Show all the gift card products in the order history! This involves another call to query the `carts` table and combining the data in the orders page to show in the orders view.
