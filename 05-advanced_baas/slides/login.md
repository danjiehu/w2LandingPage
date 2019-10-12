## We use two APIs

1. Logging in as WeChat user:
[📚 wx.login [中文]](https://developers.weixin.qq.com/miniprogram/dev/api/api-login.html)

2. Getting WeChat user info:

[📚 wx.getUserInfo [中文]](https://developers.weixin.qq.com/miniprogram/dev/api/open.html#wxgetuserinfoobject)

## Process overview

1. MP requests a `code` from Tencent
2. Tencent sends back a `code` to MP
3. MP sends `code` to Backend (as a Service)
4. BaaS sends `code + params` to Tencent
5. Tencent sends back a unique `openId` to Rails
6. BaaS creates or identifies a user and sends its `userId` to MP

😅

## Step 1 - Build the BaaS

**1. Create a new *BaaS* **
On Minapp.com or use an existing one. 

Remember an account has to be verified with a real WeChat entity (personal or business) to allow WeChat Login to work.



## Step 2 - in your Mini Program

**1. Setup**

- Create a new MP
- Input your `App Id` on the setup screen
- Remove all code from `app.js` and `index.js`
- Remove `logs.js` folder and logs pages from `app.json`
- Check *"不校验合法域名、web-view（业务域名）、tls 版本以及 https 证书"* in the right menu

**2. Get the code with `wx.login()` (in `app.js`)**

```js
onLaunch: function () {
  const host = 'http://localhost:3000/'
  console.log('beginning login')
  wx.login({
    success: (res) => {
      console.log(res)
    // insert next code here
    }
  })
},
globalData: {}
```

**3. Post the request to Rails**

```js
wx.request({
  url: host + 'login',
  method: 'post',
  data: {
    code: res.code
  },
// insert next code here
})
```

**4. Save the result in `globalData`**

```js
success: (res) => {
  console.log(res)
  this.globalData.userId = res.data.userId
}
```

## Step 3 - Test it

**1. Load on the MP **

**2. Refresh your app to log in again (you can clear previous login permission, and user data storage in Data Settings) and look at the UserID in the `console`**

## Step 4 - Get User Information

**1. Create a login `button` to ask for user info**

```html
<button open-type="getUserInfo" bindgetuserinfo="getUserInfo">Login</button>
```

**Note:** do not forget `open-type="getUserInfo"`

⚠️From 2019, WeChat MP's are not allowed to have a `open-type="getUserInfo"` button **on the landing page**. 

> **Solution:** You can still run `wx.login` in your `app.js` or `LANDING_PAGE.js`. But the `getUserInfo` button should not be on the landing page of the app. The philosophy of Tencent is, that a user should be able to enter the app without giving you their WeChat profile info.

**2. Create the `getUserInfo` function**

```js
const app = getApp()

Page({
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo
    })
  }
})
```



## Login with phone number

```html
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber"></button>
```

[Documentation](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/getPhoneNumber.html)



## Step 5 - Test test test

**1. Reload the MP**

**2. Click on your button and check the `console` for results**

<hr>

## FAQ

**1. Getting the code and exchanging everytime can be too slow**

> **Solution**: Store the user ID in the phone storage, and check for user ID before using `wx.login`

**2. For the new users, the first page is loaded before you have their user ID stored**

> **Solution**: Do not show user specific info on the homepage, or make a landing page to give you time to retrieve the info!



# Dior Membership - User Journey



![7431570471627_.pic](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/7431570471627.png)



![7441570471627_.pic](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/7441570471627.png)



![7461570471629_.pic](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/7461570471629.png)



![7471570471629_.pic](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/7471570471629.png)

![7481570471630_.pic](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/7481570471630.png)



Select gifts for services to exchange points for! Can add these to a basket as well for redeeming later.