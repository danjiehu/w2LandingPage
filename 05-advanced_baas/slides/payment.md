## Background & Objectives

Your goal is to add payment to the eCommerce app built for last weekend's challenge (Waimai app)

## Specs

For payment, you will need a: **WeChat Merchant Account**

Opening a [WeChat merchant account](https://pay.weixin.qq.com/) requires:

- A verified WeChat official account
- A company business license
- A corporate bank account

And takes 2-3 days for WeChat to approve.

Once approved, **setup** as follows:

In "My Products" select "JSAPI." 

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191013005917501.png" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

Then in "Developer Settings," add your WeChat MP `AppID` 

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191013005931025.png" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

### WeChat Payment: API Key and certificates

For taking money from the user - the API  secret and the `pem` certificate files are required by Minapp Baas. 

To get the API certificate:

进入「账户中心」->「 API 安全」，申请 API 证书(不是 APIv3)。

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191013005853841.png" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

Then under Account Settings -> "API安全" -> "API证书", click on "下载证书"

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/merchants_api-9d74a6c47e0c4018b2b0502e637ab5039b85b306f0a83667da6c6b53be806bf7.png" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/download_api_certificate-d66eb70b34a8b257e4fd31f76d80d202d7590a4d7b5f46618f68247bb38ffcf8.png" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

Follow the steps to download the certificate. 

Also under "API密钥" click "设置密钥". WeChat calls this Merchant or API secret. It is 32 digits with number and letters (32位组合密码). 

### Merchants ID

Merchant Id (微信支付商业号) is the last thing you need. It's a ten-digit number that will identify your WeChat payment account.

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/merchants_info-1828b571a922ee64b9a2271f9c9ed2322426a718a7a9099006a29f4aa68216f0.png" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

## Optional: Additional settings (and check if payment not working)


### Developer settings  

All backend endpoints are whitelisted in developer settings:

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191116145007595.png" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

Check that minapp.com or myminapp.com are listed in the "request合法域名." This is ordinarily done automatically by the BaaS configuration. 

### WeChat Development Platform

For taking payments in WeChat Official Accounts, and other WeChat payment channels.

Verification process needed (2-3 days).  An Official Account backend payment endpoint is needed.

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/payment_setting-63ccd06644ad01f637d219f6c27ef74d5886a7deda29cbb4278be42b42b8532b.png" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

### Merchant Certificate  

Not the API certificate, this merchant certification file must be installed on **the operator's** computer before moving money out of the WeChat Pay account (e.g. to your bank). This is for accounting, not always required for development. 

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/payment_certificate-bfb5855758a7f0f2a0ba9121cdd5d4b0cc189354fb719b9c6e2c827f01477ab6.png" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

## How does WeChat Pay work? 

### Payment Flow:

The three-party dance: User, BaaS (backend server), Tencent.

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/wxa-7-2.png" style="border: 1px solid rgb(240, 240, 240)" width="600"/>
</p>

Looks complicated? No worries, the **BaaS SDK** will take care of both the BaaS and Tencent part, so you just need to set it up and use its payment functions for the user's frontend. 

## Setup WeChat Payment on BaaS

### Payment with BaaS

In addition to your WeChat AppID, the [BaaS setup](https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml) needs these payment merchant info:

1. WeChat Merchant number (`MCHID`)

2. WeChat Merchant key

3. WeChat Merchant API certificate

Enable "Pay" from the left menu bar: Dev > Settings, then 功能配置:

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191114002320183.png" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

Now You're ready to set up payment. 

Go to Dev -> Pay on the side menu, and then "Certificate" on the top tab. 

On the "Associate WeChat business account" top right, click on "Add an account":

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191007193443651.png" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

Fill out the merchant id, API secret, and certificates that you gathered following steps in the section above:

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191007193525891.png" style="border: 1px solid rgb(240, 240, 240)" width="600"/>
</p>
Under "Associate WeChat business account," you should see your new account.  Click `authorize verification` and wait for `Status` to say "Authorization successful" as in below.


<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191104205750735.png" style="border: 1px solid rgb(240, 240, 240)" width="800"/>
</p>

Now you're ready to take payment in your Mini Program with Minapp SDK!

### Pay with Minapp SDK 

Type the following into your console:

```js
// 支付示例代码
let params = {
  totalCost: 0.1,
  merchandiseDescription: '深蓝色秋裤'
}

wx.BaaS.pay(params).then(res => {
  // success. 支付请求成功响应，可以在 res 中拿到 transaction_no 和支付结果信息
}, err => {
  // 未完成用户授权或发生网络异常等
  console.log(err)
})
```

Be careful to log in first with WeChat, or you'll see an error:

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191008151611379.png" style="border: 1px solid rgb(240, 240, 240)" width="600"/>
</p>

You should see a payment QR when successful:

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191114035014673.png" style="border: 1px solid rgb(240, 240, 240)" width="300"/>
</p>
and the following data returned from the request (**支付成功返回示例**)

```text
{
  errMsg: "requestPayment:ok",
  transaction_no: "MDUhtNmacdYBKokJbCXhvYuoJnHXzpeN",
  trade_no: '4DySOWgNssfu5XsiTH9Ek2f5m9jWTwTw'
}
```

### Payment data

In the BaaS dashboard, under "Pay" in the Dev menu, you can find all the payments in the "Payment record" tab:

<p align="center">
<img alt="#" src="https://github.com/lewagon/china-product/raw/master/05-advanced_baas/slides/images/image-20191116161354313.png" style="border: 1px solid rgb(240, 240, 240)" width="1000"/>
</p>
You can also issue refunds on this table!

The payment transaction data can also be queried by the SDK with the `order()` function with `transactionID`

```js
let transactionID = "MDUhtNmacdYBKokJbCXhvYuoJnHXzpeN"
let params = { transactionID }

wx.BaaS.order(params).then(res => console.log(res)) // shows all the payment data
```
This is all we need to get going on our eCommerce App!

-----

## Optional: Payment

If you have the payment account set up, you can add WeChat payment to the App!

Then following the demo and instructions, you can ask the user to use WeChat Pay to pay the amount for the order before creating it!

> Tip: Test it on a small purchase (edit the price in the BaaS if you need). 
