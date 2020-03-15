## Background and Objectives

Before writing any code, you first need to setup a unified front- and back-end.

## Specs

### 1. Setup BaaS 
- Go into your [BaaS dashboard](https://cloud.minapp.com/dashboard), you can use Tuesday's database to complete this week's exercises and challenges

- Navigate to your Miniapp's Authorization instruction's page - the 3-step process that helps bind your mini-program to the backend and initializes it
> You can find it in: "Settings" in the sidebar menu > "WeChat" tab > "Wizard"

- Open your WeChat mini-program IDE and create a new project. Don't forget to enter your **AppID** from the BaaS
⚠ Select **Use no cloud service** for your choise of backend services

- Go back to your Miniapp and complete **step 2**! Like you did on Tuesday 😊
> Be careful where you're pasting each block of code and to add the necessary syntaxes

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
👆 Do **not** copy

### 2. Complete Mini-Program Setup
Clean up your mini-program:
- Delete your `index` directory by right-clicking on the directory and "Delete"
⚠ Don't forget to delete the path in `app.json`

Create the first 2 directories needed to build your Dianping mini-program:
- `index` - to list all restaurants (the same name as the directory you deleted, but different functionality)
⚠ Note: You will need to create the directory manually by right-clicking on ”page“ > ”New Directory“ > ”New Page“
- `user` - for users sign-up/login. You can manually create the directory or type out the path in `app.json`

Now create a 'tabBar'! You'll want to navigate between 2 main tabs: **home** for your restaurants index on the left and **account** for users to sign up/log in
Check the [settings documentation](https://developers.weixin.qq.com/miniprogram/en/dev/framework/config.html) to implement the tabBar object correctly

All set!