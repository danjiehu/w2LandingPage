---
marp: true
---

## Advanced Backend as a Service (BaaS)

---

## Agenda

You will continue building your **Dianping** mini-program. Enter the user 🙋‍♀️

---

Consider `reviews`

---
<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 60%;">
  <img alt="advanced 1.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/7729HZxFBWHeu3LzHMNHM8XW" />
</figure>
<div>

<br>

Users can post reviews on restaurants. So relationship-wise:

- Each restaurant can be reviewed by many users, and 
- Each user can review many restaurants

This is called a **many-to-many relationship**.
</div>

</div>




---

## Many to Many Relationships

---

## Excel++

Let's go further

---

<figure style="width: 100%">
  <img alt="advanced 2.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/PuPX2YmNHwF3XsesbWVMDd2o" />
</figure>

---

<figure style="width: 100%">
  <img alt="advanced 3.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/Ec3umLYt2bc54EMR4b26sooP" />
</figure>

---

- **One** doctor can have **many** patients
- **One** patient can see **many** doctors

---

## How do we manage this relationship? 🤔 

---

## Consultations!

---

<figure style="width: 100%">
  <img alt="advanced 4.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/oARE3utZT1svdz6FmihK3usZ" />
</figure>

---

## Another problem - what if we have two doctors named Mary?...
## ...and two patients named George?

---

<figure style="width: 100%">
  <img alt="advanced 5.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/RrxBgApU4grpJDVzWSYMsbSb" />
</figure>

---

<figure style="width: 100%">
  <img alt="advanced 6.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/S7odK8MTUBmepXHq5qRmVKQr" />
</figure>

---

<figure style="width: 100%">
  <img alt="advanced 7.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/hNdFYyLjqqQBepFdGN1nCKwX" />
</figure>

---

<figure style="width: 100%">
  <img alt="advanced 8.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/EcGHNA5UfeJDbzqBJxbHGJCw" />
</figure>

---

<figure style="width: 100%">
  <img alt="advanced 9.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/dnvwNsRVEkJQBxqr6nP5bAcE" />
</figure>

---

George Abitbol (**id = 1**) has seen Doctor John Doe (**id = 3**)
<figure style="width: 80%">
  <img alt="advanced 10.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/F36sq7zpkv2dCJ89Up1pz6q6" />
</figure>

---

## n:n relation (many to many)

A patient **has many** doctors and a doctor **has many** patients.

You can download this example: [consultations.xslx](https://github.com/lewagon/china-product/raw/master/04-baas/slides/assets/patients-doctors-56eaccffe9a741fbebec5b9c09922abdfd39055dcd1880eb5e0bbdc547e558b6.xlsx)

---

## Relational Database

---

### 1:n

<figure style="width: 100%">
  <img alt="advanced 11.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/o1vdoWTJ5xkFvEYwYBZFATs7" />
</figure>

---

### n:n ?

<figure style="width: 100%">
  <img alt="advanced 12.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/DHYN5gapUfGubhJNi4fj2j8i" />
</figure>

---

### n:n

<figure style="width: 100%">
  <img alt="advanced 13.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/4TRG9EDZnj4cv7ySXKxSC8B4" />
</figure>

---

## Vocabulary

- A schema is composed of **tables**.
- Each table has a set of **columns**.
- When inserting data in a table, you create a **record** in a new **row**.
- A table between two n:n tables (in this case `consultations`) is a **joint table**.

---

## DB Schema Composer

[db.lewagon.com](http://db.lewagon.com/)

---

##  Core User Journey 
Notice how service products - like Eleme, Tmall, Airbnb - have the same basic types of functionality

---

### Take **Dianping** for example!

---

### User Login

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 50%">
  <img alt="advanced 14.jpg" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/cY1x4ugCTauwuqmCxjZr42QE" />
</figure>

<div>
<br>

As a user, I can log in 

</div>

</div>



---

### Restaurant Index

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 50%">
  <img alt="advanced 15.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/1Wit3yeJwqYRhJQGZwfMseop" />
</figure>

<div>
<br>

As a user, I can view all restaurants

</div>

</div>

---

### Restaurant Page

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 50%">
  <img alt="advanced 16.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/DidyHoGE8BDbeSRg68BWQ38w" />
</figure>

<div>
<br>

As a user, I can view one restaurant

</div>

</div>

---

### Review Index

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 50%">
  <img alt="advanced 17.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/oYBvmt91joH2tACymkLMC8Ak" />
</figure>

<div>
<br>

As a user, I can read and write reviews for a restaurant 

</div>

</div>

---

### We will cover more advanced user actions later on

---

## Dianping Data Schema

---

Review relationship is **many-to-many**

<figure style="width: 100%">
  <img alt="advanced 18.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/SGA8HW5HF1hkzX2a94c2yzc2" />
</figure>

---

Therefore, review's relationship can be its own **(joint)** table

<figure style="width: 100%">
  <img alt="advanced 19.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/AboksfWVUimf7Wf6ci2yWxTt" />
</figure>

---

Schema

<figure style="width: 100%">
  <img alt="advanced 20.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/K9if6XRj6G1tHTLrsbKzj6Sh" />
</figure>

---

## Livecode! Let's update our database 👩‍💻

---

We only want logged in users to execute certain functions (like adding a new restaurant)

<figure style="width: 50%">
  <img alt="advanced 21.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/MQY3SPLPfRyqQsg3Cg8RFMbr" />
</figure>

---

Your turn!
### EXERCISE 1: UPDATE YOUR DATABASE 💪

---

## User login

The beauty of being in WeChat, is that we don't have to ask the user to register. We let them login using their WeChat profile!

---

How does **WeChat login** work?

1. In the mini program, we ask user to [authorize](https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/user-info/wx.getUserInfo.html) us to use their **public** WeChat user info 

2. We use the Minapp SDK to create a user in our BaaS with a **permanent unique** ID

---

To make the first step, we need to use a button which triggers the `getUserInfo` API. It looks something like this:

```xml
<button open-type="getUserInfo" bindgetuserinfo="userInfoHandler">微信 Login</button>
```
> If `bindtap` triggers a JS function on a tap, what does `bindgetuserinfo` do? 🤔 

---

> "Let's put this button right at the start! 😃" - new developer

⚠️ Not a good idea! Tencent is protective of it's users and might block your mini program!

<br>

### Instead, let's create a `user` page


---

## Time to implement our `userInfoHandler`!

The awesome folks at Minapp give us a [`wx.BaaS.auth.loginWithWechat()`](https://doc.minapp.com/js-sdk/wechat/signin-signout.html) function

---
```js
userInfoHandler: function(data) {
    wx.BaaS.auth.loginWithWechat(data).then(user => {
        // do something with the 'user' object
      }, err => {
        // might need to log the error message
    })
  }
```

---

User in the BaaS

<figure style="width: 100%">
  <img alt="advanced 22.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/WhuVQqQpNDoYZE9vAnYgc6jA" />
</figure>

---

## Live Code 3: WeChat Login 👩‍💻

---

## We can then start adding some view logic to the user page...

---

Bind data to display user's profile

```xml
<!-- user.wxml -->
<view wx:if="{{currentUser}}">
  <text>Welcome back {{currentUser.nickName}}!</text>
</view>

<view wx:else>
  <!-- login button -->
</view> 
```
> Note: Both blocks of code are written in `user.wxml`. Therefore, we need to set specific **conditions** for different views

---

## After the user logs in once, we want to "remember" them

---

1. We can use the `getCurrentUser()` function provided by the BaaS
```js
// user.js in onLoad function
wx.BaaS.auth.getCurrentUser().then(dosomething).catch(function(err) {
  wx.showModal({
    title: 'Error',
    content: err.message
  })
})
```
> BUT this is still an API call, so it relies on network
---

2. We can cache the `user` object on the users phone
```js
// inside the getCurrentUser or loginWithWechat callback
wx.setStorageSync('user', user);
```
> How (and when) do we retrieve the user object? 🤔 Have a look at [getStorageSync()](https://developers.weixin.qq.com/miniprogram/en/dev/api/storage/wx.getStorageSync.html)

---

Your turn!
### EXERCISE 3: USER LOGIN 💪

---

## Happy 2nd Day of BaaS 🤩