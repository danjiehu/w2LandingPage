---
marp: true
---

## Serverless Backend as a Service (BaaS)

---

## ALLOWS YOU TO:

- Provide data for client (e.g. an app: web, native, Wechat Mini Program)

- Provide service to customers (e.g. sms, payment)

---

## BaaS (Backend as a Service)
BaaS is a cloud service model that comes with:
- Server
- Database
- APIs

BaaS + Frontend = SaaS, aka App

---

Do we still need a **backend developer**?🤔

---

|              | Backend Developer   | BaaS  |
| -----------  | ------------------|-------|
| APIs | Develops functional APIs | Offers commonly-used APIs
| Database | Manages the database they built themselves | Developers can create/update tables w/o building the backend themselves 
| Read/Write Data | Builds a read/write API | Tables come with a built-in read/write API
| User Log-in | Builds a log-in API (usually takes 2-3 weeks) | Comes with a log-in support API
| WeChat/SNS Notifications | Works with WeChat/SNS platforms to build the API | Comes with a notification support API

---

## Data and Schema

How is data stored?

---

## Excel

Let's start with something we all know

---

### Example

Let's store **cities** and their **inhabitants** using Excel. How would you do it?

---

<figure style="width: 100%">
  <p align="center">
  <img alt="schema design.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/vUds1zyMNsPFkZXfAn5MNipu" />
    </p>
</figure>

---

<figure style="width: 100%">
  <p align="center">
  <img alt="schema design 2.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/QVPujfWu3W5WszvHGu99KCdY" />
    </p>
</figure>

---

<figure style="width: 100%">
  <p align="center">
  <img alt="schema design 3.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/UeMspWpbUowxhLgffSJTknLD" />
    </p>
</figure>

---

<figure style="width: 100%">
  <p align="center">
  <img alt="schema design 4.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/AM8LLbAeBKJMqacoEMAK8nZ7" />
    </p>
</figure>

---

## 1:n relation (one to many)

An inhabitant **belongs to one** city
A city **has many** inhabitants

---

## Dianping Data Schema
<figure style="width: 100%">
  <img alt="restaurants_and_reviews.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/KMQQmauLVyMkMR3JauEyiEcn" />
</figure>

---

## Relationship
<figure style="width: 100%">
  <img alt="restaurants_reviews_relationship.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/jQdvVrExNzzThNqWDaE2fqFZ" />
</figure>

---

## IDs → Foreign Key
<figure style="width: 100%">
  <img alt="restaurants_reviews_foreignkey.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/sfNAxdA2BV4XzktDgEaVUdVU" />
</figure>

--- 

## Agenda

This week you'll be building a Dianping clone.

Many things will be the same as last weeks mini program. 

But we are replacing APIs with an SDK! 🤩

> An SDK (software development kit) is a collection of objects and methods that come in an installable package

---

## Let's set up the backend!

---

##### We’ll use [**ifanr**](https://cloud.minapp.com) moving forward
<figure style="width: 100%">
  <p align="center">
  <img alt="schema design 8.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/26ENN18H4ZBREJpQfta6a8ty" />
    </p>
</figure>

---

Register an [account](https://cloud.minapp.com) now

---

## Live Code 1: Setting Up BaaS 👩‍💻
- Install the SDK
- Create tables
- Add data

---

<figure style="width: 100%">
  <p align="center">
  <img alt="schema design 9.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/K91SM1s46vdHYR7mFGBnJR75" />
    </p>
</figure>

To link the BaaS to our mini-program

---

<figure style="width: 100%">
  <p align="center">
  <img alt="schema design 10.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/E9Q4pDuwijrMvBKA9XLMdJtc" />
    </p>
</figure>

To access the plugin SDK

---

<figure style="width: 100%">
  <p align="center">
  <img alt="schema design 11.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/ZxkzwVdDFZZkAvFRu3sPJLp6" />
    </p>
</figure>

---

### Installing the SDK

As simple as following a set of instructions

---

##### 1. Applying AppID
<figure style="width: 60%">
  <p align="center">
  <img alt="schema design 12.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/E2TXKDpL54tao5rYCJC69ECB" />
    </p>
</figure>
*Tip: If you're already using a Test or Tourist AppID, you can modify the AppID in your mini-program's 'Details' tab*

---

##### 2. Referencing the plugin [SDK](https://doc.minapp.com/js-sdk/wechat/)

```js
// app.json
//... other configurations
"plugins": {
  "sdkPlugin": {
    "version": "2.3.0",
    "provider": "wxc6b86e382a1e3294" //This BaaS id doesn't change
  }
}
```
---

##### 3. Configuring the [SDK](https://doc.minapp.com/js-sdk/wechat/)

```js
// app.js
App({
  onLaunch: function() {
    wx.BaaS = requirePlugin('sdkPlugin')
    // enables login, payment, and other features
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    const clientID = 'c1e7a280f6d8c8646756' // The ClientID received by the backend
    wx.BaaS.init(clientID)


    // Login as anonymous user (we will create real users on Thursday!)
    wx.BaaS.auth.anonymousLogin().then(user => {
      console.log(user)
    }).catch(err => {
      // Error handling
    })
  },
})
```

---

### Creating Tables

---

Creating a **table**
<figure style="height: 100%; width: 80%;">
<p align="center">
  <img alt="create_table.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/3onLykBNd2BQKprGc5bmHeB4" />
  </p>
</figure>

---

Adding fields or **columns** to a table while setting their **data type** and **properties*
<figure style="height: 100%; width: 80%;">
<p align="center">
  <img alt="add_column.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/avqSViS6urzLqEdN33nPgyvv" />
  </p>
</figure>

---

Adding a  **foreign key** (called **pointer** in minapp) field to the **child table**
*e.g. A restaurant can have multiple reviews
<figure style="height: 100%; width: 80%;">
<p align="center">
  <img alt="add_pointer.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/QyxFkmm3ovcMynuyULNriwiB" />
  </p>
</figure>

---

### Adding Data

---

Adding **rows**

<figure style="width: 70%; height: 100%;">
  <p align="center">
  <img alt="add_record.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/WTpZSc7K4YdiLEXXPQTLqVuA" />
    </p>
</figure>

---

Adding data to a **child row**
<figure style="width: 100%">
  <p align="center">
  <img alt="schema design 17.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/EEficEBkbE3FtYGEekY32dem" />
    </p>
</figure>

---

Your turn!
### EXERCISE 1: CREATE THE BACKEND 💪

---

## Applying the backend!

---

## Reading Data
Implementing the **Read** feature of CRUD with the BaaS **SDK** instead of an API

---

## Live Code 2: Read (all) 👩‍💻

---

With the `find` function in the [SDK](https://doc.minapp.com/js-sdk/schema/query.html), fetching data is just these few lines:

```js
// index.js, in onLoad function
let tableName = 'restaurants'

let Restaurant = new wx.BaaS.TableObject(tableName)

Restaurant.find().then(dosomething)
```

`dosomething` should be replaced by the function that handles the **request response**

---

Your turn!
### EXERCISE 2: READ ALL RESTAURANTS 💪

---

## Live Code 3: Read (one) 👩‍💻

---

Use the `get` function in the [SDK](https://doc.minapp.com/js-sdk/schema/get-record-detail.html)

```js
// show.js, in onLoad function
onLoad: function (options) {

  let tableName = 'restaurants'

  let Restaurant = new wx.BaaS.TableObject(tableName)

  let recordID = options.id // e.g. '59897882ff650c0477f00485'

  Restaurant.get(recordID).then(dosomething)
},
```

---

Your turn!
### EXERCISE 3: READ ONE RESTAURANT 💪

---

Not challenging enough?

---

## Live Code 4: Read (all for one) 👩‍💻

---

Define the **child table**

```js
// show.js, in onLoad function
let tableName = 'reviews'
let Review = new wx.BaaS.TableObject(tableName)
```

How do we get specific data? This brings us to **queries** 

---

### Querying

What is a query? Think of it as a search function in your table

You can search text, numbers, booleans... any type with exact matching or operations like >, <=, != ...

Chances are you've been using that without knowing. Anytime you use a search bar! You are querying ;-)

---

Define a `query`


```js
//... Define Review in onLoad function as above

// Instantiate the query object
let query = new wx.BaaS.Query()

// Get the restaurant you retrieved earlier from page's data
let restaurant = this.data.restaurant

// Set conditions to a query...
query.compare('restaurant_id', "=", restaurant.id)

// Run the query
Review.setQuery(query).find().then(dosomething)

```
Lots of queries are possible, including [chaining](https://doc.minapp.com/js-sdk/schema/query.html) them!

---

Your turn!
### EXERCISE 4: READ REVIEWS FOR ONE RESTAURANT 💪

---

## Happy 1st day of BaaS!