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

![img](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/02-excel-cities-inhabitants-23a616d71372edd3bef4ff30c077000b2c7f71c6a8026716afb013a959c0c8e7.png)

---

![img](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/01-excel-cities-inhabitants-ec97772039adaef6ff12c322d526ffae40f15ed8bc0b0947dbfb958f3dc09500.png)

---

![img](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/03-excel-cities-inhabitants-aa0a85a4e73dc48eb9576ede6c05be76868c0467b1f7d9182fd98a880e322cdc.png)

---

![img](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/04-excel-cities-inhabitants-896e163a1038d16ef9c6c4333526c73d13377e962c4dd14ead58fbc7fd01d58f.png)

---

## 1:n relation (one to many)

An inhabitant **belongs to** one city (or has one city)


---

## Toutiao Data Schema



![drop-shadow](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20191005071945284.png)

---

## Relationships

![drop-shadow](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20191005071957338.png)


---

## IDs → Foreign Keys

![drop-shadow](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20191005072007321.png)

--- 
## Agenda

You will build the same backend for your Toutiao mini-program with an **SDK** (instead of an API)

---

## Let's set up the backend!

---
##### We’ll use [**ifanr**](https://cloud.minapp.com) moving forward
![drop-shadow width:950px](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/miniapp-landing-page.png)

---

Register an [account](https://cloud.minapp.com) now

---

## Setting Up BaaS

---

![drop-shadow](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/07-baas-setup-01.png)

To link the BaaS to our mini-program

---


![drop-shadow](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20190918005342925.png)

To access the plugin SDK

---

![drop-shadow width:900px](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20190918005356038.png)


---

## Installing the SDK

As simple as following a set of instructions

---

##### 1. Applying AppID

![drop-shadow width:700px](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/access-sdk-02.png)
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


    // Login as anonymous user
    wx.BaaS.auth.anonymousLogin().then(user => {
      console.log(user)
    }).catch(err => {
      // HError
    })
  },
})
```

---

## Creating Tables

---

Creating a **table**

![drop-shadow](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20190929011940227.png)

---

Adding fields or **columns** to a table while setting their **data type** and **properties**

![drop-shadow](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20190929012121745.png)

---

Adding a  **foreign key** field to the **child table**
*e.g. A story can have multiple comments*

![drop-shadow](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20191005064402018.png)

---


## Adding Data

---

Adding **rows**

![drop-shadow width:600](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20191003201208914.png)

---

Adding data to a **child row**

![drop-shadow](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20191005064757458.png)

---

### EXERCISE 1: CREATE THE BACKEND 💪

---

## Let's refresh your backend knowledge

Your code from Saturday:
```js
let url = 'https://cloud.minapp.com/oserve/v1/table/84988/record/'

wx.request({
  url: url,
  method: 'GET',
  success: function(res) {
    console.log(res.data);
  }
})
```
---


## Applying the backend!

---


## Reading Data
Implementing the **Read** feature of CRUD with the BaaS **SDK** instead of an API



---
### Read (all)
With the `find` function in the [SDK](https://doc.minapp.com/js-sdk/schema/query.html), fetching data is just these few lines:


```js
// index.js, in onLoad function
let tableName = 'stories'

let Story = new wx.BaaS.TableObject(tableName)

Story.find().then(dosomething)
```

`dosomething` is the function that handles the **request response**

---


## EXERCISE 2: READ ALL STORIES 💪

---

### Read (one)
Use the `get` function in the [SDK](https://doc.minapp.com/js-sdk/schema/query.html)

```js
// show.js, in onLoad function
onLoad: function (options) {

  let tableName = 'stories'

  let Story = new wx.BaaS.TableObject(tableName)

  let recordID = options.id // e.g. '59897882ff650c0477f00485'

  Story.get(recordID).then(dosomething)
},
```

---

## EXERCISE 3: READ ONE STORY 💪

---

Not challenging enough?

---

### Read (all for one)

---

Define the **child table**

```js
// show.js, in onLoad function
let tableComments = 'comments'
let Comment = new wx.BaaS.TableObject(tableComments)
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
//... Define Comment in onLoad function as above

// Instantiate the query object
let query = new wx.BaaS.Query()

// Run the query
Comment.setQuery(query).find().then(dosomething)

```

---

We can run queries by using conditions like below:


```js
//... in onLoad

// Instantiate the query object
let query = new wx.BaaS.Query()

// Apply criteria to the query
query.contains('name', 'jack')

// Run the query
Comment.setQuery(query).find().then(dosomething)
```


Lots of queries are possible, including [chaining](https://doc.minapp.com/js-sdk/schema/query.html) them!

---

## EXERCISE 4: READ COMMENTS FOR ONE STORY 💪

---

## Happy 1st day of BaaS!