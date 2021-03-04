## Background and Objectives

Before writing any code, you first need to finish setting up a unified front- and back-end.

## Specs

### 1. Setup BaaS 
- Go into your [BaaS dashboard](https://cloud.minapp.com/dashboard), you can use Tuesday's database to complete this week's exercises and challenges

- Navigate to your Minapp's Authorization instruction's page - the 3-step process that helps bind your mini-program to the backend and initializes it
> You can find it in: "Settings" in the sidebar menu > "WeChat" tab > "Wizard"
These steps should already be done, but we might need some updates.

- For **step 3**, delete all the pre-existing code in your `app.js` and directly copy & paste the one from the BaaS. This will help fix some bugs you encountered on Tuesday. Looks a lot cleaner as well!
⚠ Note: You will need to copy the entire block of code this time, remove the extra `,` , and comment out `wx.BaaS.auth.loginWithWechat()`

Your `app.js` should now look something like this:
```js
// app.js
App({
  onLaunch: function () {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
      wx.getUserInfo,
      wx.requestPayment)

    wx.BaaS.init('186f23eb253cb5ce46ce')
    // wx.BaaS.auth.loginWithWechat() 
  } // removed comma
})
```
👆 Do **not** copy, you'll have a different client ID

### 2. Complete Mini-Program Setup
At this point you should have two pages:
- `index` - to list all restaurants
- `show` - to show one restaurant, and it's reviews

Time to add the `user` page! 👤

I am sure you've seen tab bars inside almost every mini program - now it's time for you to add one. You'll want to navigate between 2 main tabs: **home** for your restaurants index on the left and **profile** for the user's page
Check the [settings documentation](https://developers.weixin.qq.com/miniprogram/en/dev/framework/config.html) to implement the `tabBar` object correctly.

Add some dummy data to the `user` page and you're all set!

