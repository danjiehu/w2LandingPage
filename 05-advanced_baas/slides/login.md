## Background & Objectives

Your goal is to add WeChat login to the eCommerce app built for last weekend's challenge (Waimai app)

## Specs

### Step 1 - Configure the BaaS

An account might have to be verified with a real WeChat entity (personal or business) to allow WeChat Login to work.

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/baas-setup1.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/baas-setup2.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

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
userInfoHandler(data) {
  wx.BaaS.auth.loginWithWechat(data).then(user => {
    console.log(user);
    // user 包含用户完整信息，详见下方描述
  }, err => {
    // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
  })
},
```

You can add a relaunch at the user’s page when successful, and log the error if failed. Consult the previous login code if you need to.

- Before you click the login button, log in as a user with a password (without WeChat login). Go to the Network tab of the console - you'll find the request that your page made. It looks something like this. Note it doesn't have much data.

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191114030239322.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

- After you click login, a POST request is made to the BaaS authentication endpoint.

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191114030924334.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191114030721000.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

And it returns user data from your WeChat account mixed in with your existing user data (and any customized form info like `photo`). Your accounts are combined.

The POST is called every time the button is clicked as WeChat info is retrieved and saved to the BaaS. 

But if you want to retrieve user info from the BaaS after the login, then just a GET request to the BaaS is ok. You've done this with: `wx.BaaS.auth.getCurrentUser()`:

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191114030457334.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

Remember this is saved to the `page.data.currentUser` through your login code ` page.setData({ currentUser: user })`. 

See if you can show the WeChat avatar if the user-defined photo isn't present. 
> Hint: you can use conditions like `||` , `&&`, or even the ternary `condition ? true : false`  in the view logic

**Solution**:

```xml
<image class="avatar" src="{{currentUser.photo || currentUser.avatar}}" />
```

You might remember we don't pop up the login page when the user first opens the app. This is why:

⚠️ From 2019, WeChat MP's are not allowed to have a `open-type="getUserInfo"` button **on the landing page**. 

**Solution:** The `getUserInfo` button should not be on the landing page of the app. The philosophy of Tencent is, a user should be able to enter the app without giving you their WeChat profile info. This allows users to see the value before deciding whether to allow you access to their info. 

### Step 3 - Test It

- Refresh your app and logout and login again (you can clear previous login permission, and user data storage in Data Settings) and look at the OpenID in the `console`:

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191115165234833.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191115165349407.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

- Make sure the login form with the password and customized fields works still. 

And you're done implementing WeChat Login! Try logging out and then in again, with and without WeChat. Everything should work the same as before. 

<hr>

## Optional

### 1) Storing User Login

Calling the BaaS with the SDK for `currentUser` on every page could be slow! Also restarting the app can clear your logged-in user. Sometimes we want the user to stay logged in. 

**Solution**: Store the `currentUser` in [the phone storage](https://developers.weixin.qq.com/miniprogram/en/dev/api/storage/wx.setStorageSync.html), and check for this user in all the pages!

```js
// after logging in and getting currentUser from the Baas
wx.setStorage({
  key:"currentUser",
  data: currentUser
})
```

Getting the data is similar to getting the `currentUser` from the SDK

```js
wx.getStorage({
  key: 'currentUser',
  success (res) {
    console.log(res.data)
    //set PageData to res.data
  }
})
```

### 2) Login with Phone Number

Add a login with [Log In with phone button](https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/getPhoneNumber.html):

```html
<button open-type="getPhoneNumber" bindgetphonenumber="getPhoneNumber">Phone Login </button>
```

And then in the handler `getPhoneNumber` function, put the phone number into the login/singup form. Then when the user submits, [login with phone](https://doc.minapp.com/js-sdk/auth.html#通过手机号注册):

```js
wx.BaaS.auth.register({phone: phone, password: password}).then(user => {
  console.log(user)
  //store user data
})
```

You can also combine with [SMS phone verification](https://doc.minapp.com/js-sdk/sms.html):

```js
wx.BaaS.verifySmsCode({phone: '132888888', code: 123456}).then(res => {
    // success
    console.log(res.data) // { "status": "ok" }
}).catch(e => {
    // err
    console.log(e.code) // 错误状态码
})
```

### 3) Combine User Logins

Sometimes the user can deny a request to give his WeChat info. You can still merge the user who logged in with a password to his WeChat account but **not** get his Wechat user info like nickname or avatar. Then you can still use WeChat to log him in and ask him from your app to provide more user info. You can also track who he is across WeChat products like official accounts for analytics. 

Use the [SDK combined login](https://doc.minapp.com/js-sdk/wechat/signin-signout.html#关联微信小程序):

The same form-submit `button` is used to send customized user info. But adding a `user.linkWechat()` allows these info to be merged.

```js
// in bindLogin, in wx.BaaS.auth.register().catch(err => {
wx.BaaS.auth.login({ username: username, password: password }).then(user => {
  // user 为 currentUser 对象
  console.log(user)
  page.setData({ currentUser: user })

  return user.linkWechat()
}).then(res => {
  // success
  // 用户可以通过微信授权登录同一个账户了
})
```

This and other ways to combine logins from other mini-program ecosystems and web and native apps can be done with the SDK in the documentation above. 
