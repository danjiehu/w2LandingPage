## Background and Objectives

Apply some best practices in creating the user sign-up > login > logout system
Backend developers can take up to 2 weeks to build a well-running sign-up and login API. With SDK, things just got a lot easier!

## Specs

### 1. Sign Up
- Create a sign-up **form** in `user.wxml`, with two input fields:  `username` and `password`
Refer back to the [documentation](https://developers.weixin.qq.com/miniprogram/dev/component/form.html) if needed

Once a user has entered his/her credentials, we want to save them to our backend

- Form data can be passed to an event function when the current executing handler is bound. For example:

```xml
<!-- user.wxml -->
<form bindsubmit="onSubmit">
  <!-- ... -->
</form>
```

```js
// user.js
Page({
  //...
  onSubmit: function(event) {
    console.log(event)
  },
  //...
})
```

- Now, apply some code to store registrant's data to the backend by implementing the SDK like below:

 ```js
wx.BaaS.auth.register({email: 'thibault@lewagon.com', password: 'thibault123'}).then(dosomething)
```

### 2. User Profile Page
Upon registering, redirect the user to his/her profile page, displaying the user's `username`

Displaying user's data is a 2-step process:

__Step 1__: Store user's data **locally** in `user.js`
- This is where `dosomething` comes into play! 
- Don't forget to set the current user's default value to `null`. It's only when a user has registered or logged in that we want to display his/her profile

```js
  data: {
    currentUser: null
  }
```

__Step 2__: Display current user's information through **data binding** in `user.wxml`. Remember the mustache syntax `{{ }}`?
- The UI for both user profile and sign-up form will be under `user.wxml`. So, **conditions** need to be set! 

```xml
<view wx:if="{{currentUser}}">
  <!-- show currentUser's _username -->
</view>

<view wx:else>
  <!-- sign up -->
</view> 
```

Now, save and refresh! The user's back at the sign-up form 😒

### 3. Log In

To solve this issue, use the SDK to get the user currently logged in:
```js
// user.js in onLoad function
wx.BaaS.auth.getCurrentUser().then(dosomething)
```

So once logged in, no need to log in again - that's how logins work

- Create a login **form**, the same way you did for sign-up. 
- Now, write some code to allow users who already have an account to **log in**:

```js
wx.BaaS.auth.login({email: 'thibault@lewagon.com', password: 'thibault123'}).then(dosomething)
```

- For better UX, set another layer of **conditions** to distinguish the login form from the sign-up form in `user.wxml`, like so: 

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

Remember to set the default value of the `state` data property in `user.js`

Now, create a toggle-like effect for when:
- Registered users on the sign-up form want to log in 
- Unregistered users on the login form want to sign up

First, bind an event handler to an event. The logic here is: when a user taps on an element, the user will switch from one form to the other

```xml
<!-- in sign-up -->
<view bindtap="changeState">Already have an account? Log in</view>

<!-- in login -->
<view bindtap="changeState">Need an account? Sign up</view>
```

Then, apply logic:

```js
// user.js
changeState: function () {
  if (this.data.state == 'register') {
    dosomething
  } else {
    dosomething
  }
},
```

### 4. Finally, Log Out

Let's not forget to log out. Just call the function and navigate to the sign-up form

Remember:
- Users can only log out in their profile page (once they've successfully logged in)
- Users can only log out when they tap a button

Here's the setup:

```xml
<!-- user.wxml -->
<view wx:if="{{currentUser}}">
  <text>{{currentUser._username}}</text>
  <button bindtap="onLogout">Log Out</button>
</view>
```

Now use the SDK to log out

```js
// user.js
onLogout: function() {
  wx.BaaS.auth.logout()
    dosomething
},
```

That's it for today! You just built a fully-functioning sign-up and login system in less than 2 hours 👏