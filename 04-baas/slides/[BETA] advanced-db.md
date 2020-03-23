## Advanced Backend as a Service (BaaS)

---

## Agenda

You will start building your **Dianping** mini-program

---

Consider `reviews`

---


![drop-shadow bg left:40% width:350](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/7311570232716.png)
Users can post reviews on restaurants. So relationship-wise:
- Each restaurant can be reviewed by many users, and 
- Each user can review many restaurants

This is called a **many-to-many relationship**.

---

## Many to Many Relationships

---

## Excel++

Let's go further

---

![width:950](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/01-excel-patients-c4e1fb0b83e8969be3df02feef1ad117b5adcaac032d0bd05105dd81720e2ad2.png)

---

![width:950](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/02-excel-doctors-f1a80607fedc28798277a87517bd549c79e9404ce03372d25cec62259f9fbc20.png)

---

## Consultations?

---

- **One** doctor can have **many** patients
- **One** patient can see **many** doctors

---

![width:950](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/03-excel-consultations-01-e5bb821b109b36128c9730674f760a4c4120e56d451bd77df9213eb53c214f3d.png)

---

![width:950](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/03-excel-consultations-02-4c795baa7ae137674c441e0171142c96ae04b78112c330d1fba140c9c9929ff0.png)

---

![width:950](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/04-excel-patients-with-id-01-45eaacad823344bab38b9c2cd52a9689a32de5242ff091c728ae3c7a4604944f.png)

---

![width:950](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/04-excel-patients-with-id-02-57560b06f2932beda21e7240b13a1911941388842b97be41a787f31edaff0d8a.png)

---

![width:950](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/05-excel-doctors-380a8bf386286ee409f854ab4015ad30a41cbb5ed45121629d297b5efee831ef.png)

---

![width:950](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/03-excel-consultations-02-4c795baa7ae137674c441e0171142c96ae04b78112c330d1fba140c9c9929ff0.png)

---

George Abitbol (**id = 1**) has seen Doctor John Doe (**id = 3**)
![width:950](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/06-excel-first-scenario-5319df9f04608e950c494ae8b413c9e3662563c4486d380c7208a87347bf8e2d.png)

---

## n:n relation (many to many)

A patient **has many** doctors and a doctor **has many** patients.

---

You can download this example: [consultations.xslx](https://github.com/lewagon/china-product/raw/master/04-baas/slides/assets/patients-doctors-56eaccffe9a741fbebec5b9c09922abdfd39055dcd1880eb5e0bbdc547e558b6.xlsx)

---

## Relational Database

---

### 1:n

![drop-shadow width:900](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/cities-inhabitants-bc284f89232fc38d4fae055a64be4fdb18aeeca7e2c127c073ff516bb837d8db.png)

---

### n:n ?

![drop-shadow width:900](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/01-db-consultations-5cde6e3d404cce34134d0d4b97f476fc7bb99e70c9e247e1e5fd56a218bde9ed.png)

---

### n:n

![drop-shadow width:900](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/02-db-consultations-full-6bb7c262be8c6cbc3e55fd0cdb0334c60d7dd4241f244df932efef69a88fa44a.png)

---

## Vocabulary

- A schema is composed of **tables**.
- Each table has a set of **columns**.
- When inserting data in a table, you create a **record** in a new **row**.

---

## DB Schema Composer

[db.lewagon.com](http://db.lewagon.com/)

---

## Core User Journey

Notice how service products - like Eleme, Tmall, Airbnb - have the same basic types of functionality

---

### Take **Dianping** for example!

---

### User Login

As a user, I can sign up and log in

![drop-shadow bg right:40% width:300](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/user-journey-01.jpg)

---

### Restaurant Index

As a user, I can view all restaurants

![drop-shadow bg right:40% width:300](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/7301570232715.png)

---

### Restaurant Page

As a user, I can view one restaurant

![drop-shadow bg right:40% width:300](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/7291570232714.png)

---

### Review Index

As a user, I can read and write reviews for a restaurant 

![drop-shadow bg right:40% width:300](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/7281570232711.png)

---

### We will cover more advanced user actions later on

---

## Dianping Data Schema

---

Review relationship is **many-to-many**

![drop-shadow width:900](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20191005084037398.png)

---

Therefore, review's relationship can be its own **(joint)** table

![drop-shadow width:900](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20191005084145536.png)

---

Schema

![drop-shadow width:900](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20191008235014597.png)

---

## Live Code 1: Set up a unified front- and back-end 👩‍💻

---

Your turn!
### EXERCISE 1: SET UP YOUR FRONT AND BACKEND 💪

---

## Live Code 2: All set? Let's build our database 👩‍💻

---

We only want users who have signed up and logged in to execute certain functions

![drop-shadow width:600](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/build-database-01.png)

---

Your turn!
### EXERCISE 2: CREATE YOUR DATABASE 💪

---

## User login

Remember that the BaaS SDK allows user login, we can now store the user and allow sign up and log in

---

How does the **login** work?

1. User submits the username and password to **register** for an account and automatically **logs in** using the same credentials

2. If the user already has an account (with matching user name), will try to **log in** using those same credentials

---

## Live Code 3: Sign-up and Login 👩‍💻

---

## Sign Up

---

Sign-up form

```xml
<!-- user.wxml -->
<form>
  <view>Username</view>
  <input name="username" placeholder="Enter Your Name"></input>
  <view>Password</view>
  <input name="password" type="password" placeholder="Enter Your Password"></input>
  <button formType="submit">Sign Up</button>
</form>
```

---

### User Registration

---

Get form data

```xml
<!-- user.wxml -->
<form bindsubmit="onRegister">
  <!-- ... -->
</form>
```

```js
// user.js
Page({
  //...
  onRegister: function(event) {
    // console.log(event)
    let username = event.detail.value.username
    let password = event.detail.value.password
  }
  //...
})
```

---

Store user to the database

```js
// user.js
Page({
  onRegister: function(event) {
    // get user credentials from sign-up form
    wx.BaaS.auth.register({
      username: username,
      password: password
    }).then(dosomething).catch(function(err) {
      wx.showModal({
        title: 'Sign up failed',
        content: err.message 
      })
    })
  }
})
```

---

User in the BaaS

![drop-shadow](https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20191007044757322.png)

---

## User Profile Page

Once user has signed up or logged in, navigate to his/her profile page

---

Store user's data **locally** in `user.js` by getting the request data

```js
// user.js
Page({

  data: {
    currentUser: null
  },

  onRegister: function(event) {
    //...
    let page = this
    
    wx.BaaS.auth.register({
      username: username,
      password: password
    }).then(page.getRequestData).catch(function(err) {
      // HError
    })
  },
  //...
})
```

---

Bind data to display user's profile

```xml
<!-- user.wxml -->
<view wx:if="{{currentUser}}">
  <text>{{currentUser._username}}</text>
</view>

<view wx:else>
  <!-- sign up -->
</view>
```

*Note: the code placement of user profile and sign-up form. Both blocks of code are written in `user.wxml`. Therefore, we need to set specific **conditions** for different actions* 

---

**Save and refresh!**

Did you notice a problem? Users now have to register again. If users try to register with the same username, there's an error! Terrible UX 😤

---

## Log In

Users who already have an account should be able to log in with the same credentials

---

To get the user currently logged in:

```js
// user.js in onLoad function
wx.BaaS.auth.getCurrentUser().then(dosomething).catch(function(err) {
  wx.showModal({
    title: 'Error',
    content: err.message
  })
})
```

---

Login, similar to sign-up

```js
wx.BaaS.auth.login({
  username: username, 
  password: password
  }).then(dosomething).catch(function(err) {
    wx.showModal({
      title: 'Sign in failed',
      content: err.message
    })
  })
```

---

Now users can view both sign-up and login forms! Poor UX 😤

---

We need a data property to determine and change the state of the user - register or login

---

`user.js`

```js
Page({
  data: {
    state: 'register', // or login
    //...
  },
  //...
})
```

`user.wxml`

```xml
<!-- profile page -->
<view wx:else>
  <view wx:if="{{state == 'register"}}>
    <!-- sign up -->
  </view>
  
  <view wx:if="{{state == 'login"}}>
    <!-- log in -->
  </view>
</view>
```

---

`user.wxml`

```xml
<!-- in signup -->
<view bindtap="changeState">Already have an account? Log in</view>

<!-- in login -->
<view bindtap="changeState">Need an account? Sign up</view>
```

`user.js`

```js
changeState: function () {
  if (this.data.state == 'register') {
    this.setData({
      state: 'login'
    })
  } else {
    this.setData({
      state: 'register'
    })
  }
},
```

---

## Log Out

---

Users can only log out after they've logged in. Simple enough!

`user.wxml`

```xml
<view wx:if="{{currentUser}}">
  <text>{{currentUser._username}}</text>
  <button bindtap="onLogout">Log Out</button>
</view>
```

`user.js`

```js
onLogout: function() {
  wx.BaaS.auth.logout()
  this.setData({
    currentUser: null
  })
},
```

Once user logs out, return to sign-up or login form

---

Your turn!
### EXERCISE 3: USER SIGN-UP & LOGIN 💪

---

## Happy 2nd Day of BaaS 🤩
