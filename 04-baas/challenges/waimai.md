# Elema (or Meituan) Waimai

## Core User Journey

### Restaurant Index



![7271570232709_.pic](images/7271570232709_.png)



### Meals Index



 ![7261570232707_.pic](images/7261570232707_.png)



### Orders

![7061570232704_.pic](images/7061570232704_.png)

For our challenge, we'll skip restaurants and use meals index as the landing page. You can add the restaurant index later on anytime by following the previous Dianping exercise.



### Delivery Management



![delivery management platform](images/tasks.jpg)



Deliverer and Manager share the order index view. The manager can **assign** an order **opened** by the customer to a deliverer, who can mark it **delivered**. So the order states are "Opened," "Assigned," and "Delivered." 

Other states like "Cancelled," "Started" can be added too this way but for our exercise, we'll keep it simple to just three states mentioned above.





Time to build a Food Delivery program for a restaurant.

The software is designed for **one restaurant only**, so no need to cater (no pun intended 😉) for a multi-restaurant one (e.g. you don't need a `restaurants` table).

The main components are:

- **Employees** (managers, delivery guys)
- **Customers** of the Restaurant
- **Meals** that can be ordered
- **Orders** made by customers, and assigned to a given delivery guy.

## 1 - We need Backend (as a Service) !

Before diving into our app code . We first need a set of API endpoints made by our BaaS.  Review Restful APIs principles from the first DB lecture for inspiration.



Based on the user journey above, we design the schema to model the data and the relationships.

### Data schema:

![image-20191009054417496](/Users/dounanhu/Code/wg/china-product/04-baas/challenges/images/image-20191009054417496.png)



The key to the design is that a `user` can have many `meals` through `orders`, and that a `meal` can be ordered by many `users`. This many-to-many relationship is like the `review` joint table from the previous exercise (Dianping). 

In this case `order` is our joint table and the central part of the app that ties all the other data (and functions) together. 





Once your tables are implemented, test them with the BaaS SDK! Make sure your 4 user actions work before moving on to the next feature. Follow this strategy of:

1. working on the BaaS tables

2. getting data in JS with the SDK

3. showing data in the views

4. add user interactions in views with data associated

5. handle interactions with JS - either or all of:

   - get user input 
   - send data to BaaS
   - change page data to update view or show new interactions
   - navigate to another pace

   

Remember when at a good spot, always `commit` and `push`!

## 2 - (`Meal`)

Your restaurant sells food, so you need a way to store the meals that can be ordered. Each meal has a name and a price. Using the diagram (schema) above that model this,  create a BaaS that will read/write the meals from a table.



Let's add a table called `meal` in the BaaS. Then add `name`, `price`, and `photo` columns. Consult instructions on BaaS operations at beginning of previous exercises if you need a refresher.



Then let's move to the app. Here are the **user actions** we want to implement:

- `List` all meals available in the restaurant
- `Add` a new meal











Done? Good! Time to `commit` and `push`.



## 3 - (`Customer`)

We need to keep a list of all our customers. When a new customer calls to order, the first thing we need to do is add them to our list. Each customer has a name and an address. 

We already have a `user` table in the BaaS ( stored as `_userprofile` and accessed with `User` object from the SDK). We can add an `address` column. 





After finishing work on the tables,  move onto the app to implement the following user actions:

- `List` all customers available in the restaurant
- `Add` a new customer













Done? Boom! Don't forget to `commit` and `push`.

## 4 - (`Employee`)

The restaurant has two types of employees, **managers** and **delivery guys**. We don't need to create them in the app. The BaaS SDK can add these directly. Then we can manage them in the built in CRM in the BaaS dashboard.

Remember how you registered a user with JS? 

```js
// in the WeChat IDE JS console
wx.BaaS.auth.register({ username: username, password: password }).then(user => { console.log(user)})
```

Manually add some employees:

```bash
id,username,password,role
1,paul,secret,manager
2,john,secret,delivery_guy
```



The role column is to be added to the `_userprofile` table. Then the roles can be set on the BaaS dashboard or through the SDK - remember how we set user's photo previous exercise? 



With that information, we can implement a **login** logic in our app to have two dashboards depending on the user role: one dashboard for the manager, and another dashboard for the delivery guy (with fewer user actions available).

To handle that, we'll have different login **sessions** for different users. You've already seen that used when loggin and and out of the previous exericse app. We'll need those login forms still. 

Now when you run the food delivery app, you can see all the meals. But to order a meal, or see your dashboard (`orders index`), you need to **sign in**. The dashboard that you then see should be **dependent on your role**:



Finished? Great work :) Remember to `commit` and `push`.

## 6 - (`Order`) Time to link all the tables!

An order is taken for a **customer**, containing a **meal** (to simplify things, let's say that an order can only contain **one meal**) and is then assigned to a given **delivery guy**. Finally, the `order` table needs to record whether or not the meal has been delivered.

Here's where our tables link up. First, write the `order` table on the BaaS.

Make sure that the following **user stories** for customers are implemented in your app:

- As a customer, I can log in
- As a customer, I can view all the meals
- As a manager, I can order a meal
- As a manager, I can view all my orders (opened or delivered)

Then, make sure that the following **user stories** for employees are implemented in your app:

- As an employee, I can log in
- As a manager, I can add a meal
- As a manager, I can view all the meals
- As a manager, I can view all the orders (opened or delivered)
- As a manager, I can add an order for a customer and assign it to a delivery guy
- As a delivery guy, I can view my upcoming orders (opened, but not delivered)
- As a delivery guy, I can mark an opened order as delivered



When an order is created, we need to give it an address. We ask for the user's address:



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



What if they want to chose another address? There's a WeChat function for that too you can use - to be covered in a later course.



## 7 - (Optional) - `Destroy` actions

We haven't done any **deleting** yet. How would you implement these additional user stories?

- As a manager, I can delete a meal 
- As a manager, I can delete a customer



Can't delete for real - data is precious, also relationships demands on them. What happens to old orders for example? How do you do accounting if order is lost?

So instead, we hide them! There's a flag you set to true for delete - let's call it `hidden` . Now you have a bit more insight into the world of big data and its complexities!  