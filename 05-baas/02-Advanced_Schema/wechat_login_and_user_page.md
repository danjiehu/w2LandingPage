## Background & Objectives

Your goal is to add WeChat login to the mini program you started building on Tuesday.

## Specs

### Step 1 - Configure the BaaS

An account might have to be verified with a real WeChat entity (personal or business) to allow WeChat Login to work.

<figure style="width: 100%">
  <p align="center">
  <img alt="login 1.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/JhEPmXHkT51Fva3qKxvXP14q" />
    </p>
</figure>

<figure style="width: 100%">
  <p align="center">
  <img alt="login 2.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/pkg3bT94nNSFYaawErPwiffr" />
    </p>
</figure>

- From the left menu: Dev > Settings, scroll down to "Login method" and enable "微信小程序登陆" 

### Step 2 - Update your Mini Program

Use the BaaS [SDK login](https://doc.minapp.com/js-sdk/wechat/signin-signout.html)

- Add a login button to your `user.wxml` page. You decide where to put it so it looks appropriate:

```html
<button open-type="getUserInfo" bindgetuserinfo="userInfoHandler">微信 Login</button>
```

> Note: Do not forget `open-type="getUserInfo"`. This magically tells WeChat to ask users for their info. 

- Now add the binded user data handling function `userInfoHandler` in `user.js`:

```js
// user.js, after onLoad()
userInfoHandler: function (data) {
  let page = this
  wx.BaaS.auth.loginWithWechat(data).then(user => {
    console.log(user); // we can log the response in the console, to see what we are getting
    page.setData({currentUser: user}) // when you see that you are getting the right response, you can store the user in the local page data
    // user 包含用户完整信息，详见下方描述
  }, err => {
    // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
  })
},
```

So what *actually* happens when you click the login button?

1. After you click login, a POST request is made to the BaaS authentication endpoint.

<figure style="width: 80%">
  <p align="center">
  <img alt="login 4.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/JGcxkTvBQ4YxPZ7kR3BcAWVj" />
    </p>
</figure>

2. The endpoint returns user data from your WeChat account that is now stored in your BaaS

<figure style="width: 80%">
  <p align="center">
  <img alt="login 5.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/XskchVhx53ch1qCNhTq9RBvB" />
    </p>
</figure>

The POST is called every time the button is clicked as WeChat info is retrieved and saved to the BaaS. 

But if you want to retrieve user info from the BaaS after the login, then just a GET request to the BaaS is ok. You can do it with `wx.BaaS.auth.getCurrentUser()` and get the same response:

<figure style="width: 100%">
  <p align="center">
  <img alt="login 6.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/VL3HGy2PnrybMfYs1uJzx8ap" />
    </p>
</figure>

But not too fast! In "Step 4" we will take about a better way to retrieve your current user.

You might remember we don't pop up the login page when the user first opens the app. This is why:

⚠️ From 2019, WeChat MP's are not allowed to have a `open-type="getUserInfo"` button **on the landing page**. What to do? 😨 

**Solution:** The `getUserInfo` button should **not** be on the landing page of the app. The philosophy of Tencent is, a user should be able to enter the app without giving you their WeChat profile info. This allows users to see the value before deciding whether to allow you access to their info. 

### Step 3 - Test It

- Clear previous authorization cache, as well as user data storage in Data Settings and refresh the app. Now try to login again and check the `OpenID` in the console:

<figure style="width: 100%">
  <p align="center">
  <img alt="login 7.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/QfYHKGXBwDH4AvhpewrSdTAM" />
    </p>
</figure>

<figure style="width: 100%">
  <p align="center">
  <img alt="login 8 .png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/wKaBW5wS8ND43gawNceGiLAr" />
    </p>
</figure>

> Pssst, it should be the same `OpenID`

And you're done implementing WeChat Login!

<hr>

### Step 4 - Storing User Login

Calling the BaaS with the SDK for `currentUser` on every page could be slow! Also restarting the app can clear your logged-in user. After the user has already used your mini program, we should "remember" who they are regardless.

**Solution**: Store the `currentUser` in [the phone storage](https://developers.weixin.qq.com/miniprogram/en/dev/api/storage/wx.setStorageSync.html), and check for this user when the app starts! NOTE: `setStorageSync()` is a synchronous way of storing a key-value pair, so there is no `success` callback.

```js
// after logging in and getting currentUser from the Baas
wx.setStorageSync('user', this.data.currentUser)
```

Getting the user is similar. You will likely want to use the value stored in `user` to populate your page or fetch certain data from the BaaS, so your code might look something like this.

```js
  let user = wx.getStorageSync('user')
  if (user) {
    // populate the local data
    // make a call to your BaaS to retrieve this user's info
  }
```

### Step 5 - `user` page

Now that you have the `user` information in your mini program, it's time to upgrade our dummy user page. 🛠 

You'll want to add the user's avatar and WeChat nickname to the profile page - to make it more personalized.

**Challenge**: create an avatar that shows a default image of your choice if the user is not logged in.
> Hint: you can use logicals like `||` , `&&`, or even the ternary condition `condition ? true : false`  in the view logic

Make the user page cool! 😎 

### (Optional) Step 6 - My Reviews

Another thing you'll typically see in the profile page of an app - **dashboards!**

My orders, my bookings, my wishlist... so how about a **My Reviews**? 😉 

Since we haven't implemented the **C** of CRUD yet, you can create a few reviews that **refer to your user_id** in the Baas manually.

Now in the `user` display the reviews **only** made by this user!
> Hint: you might need a [query](https://doc.minapp.com/js-sdk/schema/query.html).


