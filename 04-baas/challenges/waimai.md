# Elema (or Meituan) Waimai

## Core User Journey

### Restaurant Index



![7271570232709_.pic](https://github.com/dounan1/china-product/raw/master/04-baas/challenges/images/7271570232709.png)



### Meals Index



 ![7261570232707_.pic](https://github.com/dounan1/china-product/raw/master/04-baas/challenges/images/7261570232707.png)



### Orders

![7061570232704_.pic](https://github.com/dounan1/china-product/raw/master/04-baas/challenges/images/7061570232704.png)

Time to build a Food Delivery App.

The software is designed for **one restaurant only**, so no need to cater (no pun intended 😉) for a multi-restaurant one (e.g. you don't need a `restaurant` table).

So just for this challenge, we'll skip restaurants index and use meals as the landing page. You can add multiple restaurants functions yourself by following the previous Dianping exercise.



### Delivery Management


![delivery management platform](https://github.com/dounan1/china-product/raw/master/04-baas/challenges/images/tasks.jpg)



Deliverers and managers share the order index view. An order is **opened** by the customer.  The manager marks it **ready** for pickup. The deliverer brings it to the customer after the order is **picked up**. Finally the customer, marks it **delivered**. So the order states are "Opened," "Ready," "Picked Up," and "Delivered."

Other states like "Cancelled" and "Paid" can be added too this way but for our exercise, we'll keep it simple to just three states mentioned above.



The main components are:

- **Employees** (restaurant managers, delivery people)
- **Customers** of the restaurant
- **Meals** that can be ordered
- **Orders** made by customers, and assigned to a given delivery guy.

## 1 - We need Backend (as a Service) !

Before diving into our app code . We first need a set of API endpoints made by our BaaS.  Review Restful APIs principles from the first DB lecture for inspiration.

Based on the user journey above, we design the schema to model the data and the relationships.

### Data schema:

![image-20191009054417496](https://github.com/dounan1/china-product/raw/master/04-baas/challenges/images/image-20191009054417496.png)



The key to the design is that a `user` can have many `meals` through `orders`, and that a `meal` can be ordered by many `users`. This many-to-many relationship is like the `review` joint table from the previous exercise (Dianping).

In this case `order` is our joint table and the central part of the app that ties all the other data (and functions) together.



To make this app, follow this strategy of:

1. working on the BaaS tables

2. getting data in the JS file with the SDK

3. showing data in the view file

4. add user interactions in views

5. handle interactions with JS, such as:

   - get user input
   - send data to BaaS
   - change page data to update view or show new interactions
   - navigate to another page



Once your tables are implemented, test them with the BaaS SDK! Make sure your user actions work before moving on to the next feature.



Remember when at a good spot, always `commit` and `push`!


Then let's move to the app.



## 2 - (Meal)



### List all meals

Here are the **user actions** we want to implement:

- `List` all meals available in the restaurant
- `Add` a new meal


Starting with the index page in the previous exercise app (Dianping), substitute meals in place of restaurants.

When displaying price, remember to divide number cents by 100:
```xml
<view class="p">{{meal.price / 100}} Kuai</view>
```

Tweak the styling to make it look like a store!

Done? Good! Time to `commit` and `push` to your repo at every finished stage (e.g. code has to be fully working, though features are not fully completed). Good to get in the habit.



### Adding a new meal



Keeping on the strategy of following the template of the previous exercise, we use the new page to create a meal. Using the `meal` table for the data, modify the view, and js file correspondingly.



Forms take every input as string. So how do we get a number for the price? Use `parseInt` like so:

```js
// making meal data from form input in new.js
let data = {
  name: name,
  price: Number.parseInt(price),
  photo: photo,
}
```





## 3 - (`Customer`)

We need to keep a list of all our customers. Each customer has a name and an address.

We already have a `user` table in the BaaS ( stored as `_userprofile` and accessed with `User` object from the SDK). When a new customer signs up, the BaaS will create a user record for him.

We can add an `address` (string) column. Should it be required? (Hint: Does the customer have to add the address on signup, or only when he wants to order? What about other types of users, e.g. employees?)

TODO: check if still needs address

## 4 - (`Employee`)

The restaurant has two types of employees, **managers** and **delivery guys**. They're both still `User` objects. We don't need to create them using the app either. The BaaS can add these directly with SDK or on its dashboard. Then we can manage them in the built in CRM in the BaaS dashboard.

Manually add some employees:

```bash
id,username,password,role
1,paul,secret,manager
2,john,secret,deliverer
```

Remember how you registered a user with JS?

```js
// in the WeChat IDE JS console
wx.BaaS.auth.register({ username: username, password: password }).then(user => { console.log(user)})
```



The `role` (string) column is to be added to the `_userprofile` table. Then the roles can be set on the BaaS dashboard or through the SDK - remember how we set user's photo in the previous exercise? Later this `role` will be used to customize the app for each type of user!

For now, check that we can sign up, log in, and log out of the app using the `user` page from the previous app!



## 6 - (`Order`) Time to link all the tables!

An order is taken for a **customer**, containing a **meal** (to simplify things, let's say that an order can only contain **one meal**) and is then assigned to a given **delivery guy**. Finally, the `order` table needs to record whether or not the meal has been delivered.

Here's where our tables link up. First, create the `order` table on the BaaS.

According to the schema order has `address` (string), `state` (string), `customer` (pointer), `deliverer` (pointer), and `meal` (pointer).

`state` should have a `default value` of  `opened` - the initial state when an order is created.

The two pointers are foreign keys to the `_userprofile` table, and the second pointer to the `meal` table. You can see that it's ok to have two pointers to the same table because a user can have many roles.



### Creating an order

We can put a customized order button on the meal cards on the `index` page:

```xml
<!-- index.wxml -->
<view data-id="{{meal.id}}" class="order" bindtap="orderMeal">Order</view>
```

```css
<!-- index.wxss -->
.order {
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.4);
  text-align: center;
  padding: 10px;
  border-radius: 10%;
  margin-top: 30px;
  width: 62px;
  margin-left: auto;
  margin-right: auto;
}
```

Then following steps similar to creating a meal in the section above:

```js
//index.js in Page
orderMeal: function (event) {
  const data = event.currentTarget.dataset;
  let id = data.id

  let newOrder = {
    // To be figured out in the next step
  }

  let Order = new wx.BaaS.TableObject('order')
  let order = Order.create()
  order.set(newOrder).save().then(res => {
   // to be figured out in following steps
  })
}
```

Don't forget to remove `bindtap` on the `card-product` element from previous exercise if still there.

The customer is the currently logged in user.

In `onLoad` of `index.js`, check for `currentUser` with `wx.BaaS.auth.getCurrentUser()` like in previous exercise. Then `page.setData({ currentUser: user })` where user is either the returned logged in `user`, or `null`.

We can then check if `user` is `null` and redirect to the `user` page to log in.

```js
//index.js in orderMeal function
const data = event.currentTarget.dataset;
let meal_id = data.id
let currentUser = this.data.currentUser

if (!currentUser) {
  wx.switchTab({
    url: '/pages/user/user' // logged in
  });
} else {
  // create order
}


```

Do we need the `state`? Its `default value` configured in the BaaS will be set on creation, so we skip it!

For the address, we check WeChat for saved addresses. That's using WeChat's built-in API to leverage their data and app functions (more to come later in the course).



```js
wx.chooseAddress({
  success (res) {
    console.log(res.userName)
    console.log(res.postalCode)
    console.log(res.provinceName)
    console.log(res.cityName)
    console.log(res.countyName)
    console.log(res.detailInfo)
    console.log(res.nationalCode)
    console.log(res.telNumber)
  }
})
```

Gets for example

```
John Doe
510000
Guangdong Sheng
Guangzhou Shi
Haizhu Qu
397 Xingang Middle Rd, KeCun
510000
020-81167888
```



So we add what we need inside the `else` block under the "create order" above

```js
//index.js in orderMeal function
wx.chooseAddress({
  success(res) {

    let address =
      res.userName + " " + //receiver name, might be different than who's ordering
      res.provinceName + " " +
      res.cityName + " " +
      res.countyName + " " +
      res.detailInfo

    let newOrder = {
      meal: meal_id,
      customer: currentUser.id.toString(),
      address: address
    }

    let Order = new wx.BaaS.TableObject('order')
    let order = Order.create()
    order.set(newOrder).save().then(res => {
      // to be figured out in the next step
    })
  }
})
```
There's a subtle but important part of this code in that we save the `order` in the response handling for getting the address.

This is again because async processes like requesting for addresses needs waiting, and we only want to create the order if the request comes back successfully.

What does the user want to see after an order? Probably the order status so he can check the order! So we go to the orders page.  `reLaunch` is used here so they cannot go back in history after ordering - a standard practice.

```js
order.set(newOrder).save().then(res => {
  wx.reLaunch({
    url: '/pages/user/user' // show list of orders
  });
})
```



Now we show all the orders in the user dashboard.

### List all orders (user dashboard)

When you run the food delivery app, you can see all the meals. But to order a meal, or see your dashboard (`orders index`), you need to **sign in**.



The dashboard that you then see should be **dependent on your role**.

TODO: Screenshots of three types of dashboards



We can implement a **login** system that shows one of the three order ** dashboards** depending on the user role: one dashboard for the **manager**, another dashboard for the **delivery guy**, and for the **customer**.

This is possible because each login creates a different **session** for different users.

Let's go through the user journey for each of the roles to finish the app.

To help development, we use login forms created in the previous exercise.



### Customer journey



The following **user stories** for customers are to be implemented in the app:

- As a customer, I can log in
- As a customer, I can view all the meals
- As a customer, I can order a meal
- As a customer, I can view all my orders



All but the last one is already made according to instructions above. Now we create the customer dashboard that shows all his orders.


Define a new page

```js
//app.json defining pages
"pages": [
  "pages/index/index",
  "pages/new/new",
  "pages/orders/orders",
  "pages/user/user"
]
```

Create a tab bar order item

```js
//app.json in tab bar json
{
  "pagePath": "pages/orders/orders",
  "text": "Orders",
  "iconPath": "/images/orders.png",
  "selectedIconPath": "/images/orders.png"
},
```

Load data from the order table and show on its index page

```js
//order.js in onLoad
Order.expand(["meal"]).find().then(page.getRequestData)
```

```xml
<!-- order.wxml -->
<view class="h2">{{order.meal.name}}</view>
<view class="p">{{order.meal.price / 100.0}} Kuai</view>
```



Each order should show image of the meal and price, delivery address with receiver name, and the order status



Let's test it! Make an order and Do you see the order?

Now log out - do you still see the order? Only you should see your own order!

For this, we modify the ACL for the `order` table:





Users have to log in to see the right order dashboard. Remember how to check if there's a user logged in? 

Hint the same code is used in `index.js` 






Finished? Great work :) Remember to `commit` and `push`.



### Employee journey



Make sure that the following **user stories** for employees (managers and deliverers) are implemented in your app:

- As an employee, I can log in
- As a manager, I can view all the meals
- As a manager, I can add a meal
- As a manager, I can edit a meal
- As a manager, I can view all the orders
- As a manager, I can mark an "opened" order form a customer "ready" to pickup for a delivery guy
- As a delivery guy, I can view my "ready" orders for pickup
- As a delivery guy, I can mark a "ready" order as "picked up"
- As a customer, I can mark a "picked up" order as "delivered"



#### Orders

The manager sees all orders, with meal (image, name, and price), delivery address and receiver 

When the manager updates an order, set status to `ready`



The deliverer sees all the orders that are `ready`, with the above fields

Challenge you understanding: Think about an app with multiple restaurants, how would deliverer know where to go?

Solution: Pickup address is just another field on the order model! The manager would set the address for his restaurant, which then is added to the order.



When the deliverer updates an order, set status to `picked up`

Try to show only orders that are `ready` and `picked up` as these should be his focus!



Finally, the customer can mark an order `delivered`



Done? Don't forget to `commit` and `push`. Boom now you're finished with ordering!



#### Meals

Since only managers can add a meal, so remove its link in the tab bar and show an add meal button on the meals index ONLY for the manager. To do this we need to add logic in the view to show buttons depending on the user role.



To edit a meal, we add a button to the meal cards on the index page.

The same form for adding a meal can be used as well!





Congratulations! You're done. A big app to finish but you did it. No big deal, just many any small addition on what you've built and learned before. You have the power now to make many more apps this way!

####



## 7 - (Optional) - `Destroy` actions

We haven't done any **deleting** yet. How would you implement these additional user stories?

- As a manager, I can delete a meal
- As a manager, I can delete a customer



Can't delete for real - data is precious, also relationships demands on them. What happens to old orders for example? How do you do accounting if order is lost?

So instead, we hide them! There's a flag you set to true for delete - let's call it `hidden` . Now you have a bit more insight into the world of big data and its complexities!











### Permissions

User access control to filter

Customer sees only own orders: true

​	read orders for only creater

Employees

​	sees all orders

​	note for multi restaurant app, with multiple deliverers

​	Manager

​		sees only own restaurant orders

​	Deliverer

​		sees only own assigned orders

​	leave this for your own practice later



If no ACL, use query to filter
