## Why

In the future, you'll likely want to monetize your mini program - sell products or provide services.

Being inside WeChat already, you have direct access to a wallet that 99% of China's population use - WeChat Pay!

👉 This tutorial will show you how to setup WeChat Pay in your mini program using the BaaS built in payment feature.

## Specs

For payment, you will need a: **WeChat Merchant Account**

Opening a [WeChat merchant account](https://pay.weixin.qq.com/) requires:

- A company business license
- A corporate bank account
- A Chinese ID Card

And takes 2-3 days for WeChat to approve.

Once approved, **setup** as follows:

In "My Products" select "JSAPI." 

<figure style="width: 100%">
  <img alt="wechat-pay-img-1.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/i6LM7YkuaUfrCpBkC99E6cd9" />
<figcaption>Select JSAPI in this screen
</figcaption>
</figure>


Then in "Developer Settings," add your WeChat MP `AppID` 

<figure style="width: 100%">
  <img alt="wechat-pay-img-2.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/DZmmXt6FXN83DB7W1KURnAeE" />
<figcaption>Input in the APPID field
</figcaption>
</figure>


### WeChat Payment: API Key and certificates

For taking money from the user - the API secret and the `pem` certificate files are required by the BaaS. 

To get the API certificate:

进入「账户中心」->「 API 安全」，申请 API 证书(不是 APIv3)。


<figure style="width: 100%">
  <img alt="wechat-pay-img-3.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/2AM9JNMEsvF2XHeXFmzcgXqM" />
<figcaption>Getting the API certificate
</figcaption>
</figure>


Then under Account Settings -> "API安全" -> "API证书", click on "下载证书"

<figure style="width: 100%">
  <img alt="wechat-pay-img-4.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/igCvYdwY6APegetAetR6TFdZ" />
<figcaption>Merchant API key
</figcaption>
</figure>


<figure style="width: 100%">
  <img alt="wechat-pay-img-5.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/54w5KyYghRvhBhnKazH2g2fN" />
<figcaption>Downloading the certificate
</figcaption>
</figure>


Follow the steps to download the certificate. 

Also under "API密钥" click "设置密钥". WeChat calls this Merchant or API secret. It is 32 digits with number and letters (32位组合密码). 

### Merchants ID

Merchant Id (微信支付商业号) is the last thing you need. It's a ten-digit number that will identify your WeChat payment account.

<figure style="width: 100%">
  <img alt="wechat-pay-img-6.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/CBf6oGsQ4GyFraCD76xRYLyu" />
<figcaption>Getting the Merchant ID
</figcaption>
</figure>


-----

### Optional: Additional settings (and check if payment not working)

#### Developer settings  

All backend endpoints are whitelisted in developer settings:

<figure style="width: 100%">
  <img alt="wechat-pay-img-7.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/bwCS2pKLDZQmiAYLwDhZWNvb" />
<figcaption>Whitelisting domains
</figcaption>
</figure>


Check that minapp.com or myminapp.com are listed in the "request合法域名." This is ordinarily done automatically by the BaaS configuration. 

#### WeChat Development Platform

For taking payments in WeChat Official Accounts, and other WeChat payment channels.

Verification process needed (2-3 days).  An Official Account backend payment endpoint is needed.

<figure style="width: 100%">
  <img alt="wechat-pay-img-8.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/FANXDvznQvwResEdL1z7YgkW" />
<figcaption>Verifying domain for payments
</figcaption>
</figure>


#### Merchant Certificate  

Not the API certificate, but this merchant certification file must be installed on **the operator's** computer before moving money out of the WeChat Pay account (e.g. to your bank). This is for accounting, not always required for development. 

<figure style="width: 100%">
  <img alt="wechat-pay-img-9.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/uAgDirunVySKZ67s4deE7jDq" />
<figcaption>Getting the Merchant Certificate
</figcaption>
</figure>


-----

## How does WeChat Pay work? 

### Payment Flow:

The three-party dance: User, BaaS (backend server), Tencent.

<figure style="width: 100%">
  <img alt="wechat-pay-img-10.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/2WWMzLzs6Z14mMVP14NMb8M9" />
<figcaption>WeChat Pay flow
</figcaption>
</figure>


Looks complicated? No worries, the **BaaS SDK** will take care of both the BaaS and Tencent part, so you just need to set it up and use its payment functions for the user's frontend. 

## Setup WeChat Payment on BaaS

### Payment with BaaS

In addition to your WeChat AppID, the [BaaS setup](https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml) needs these payment merchant info:

1. WeChat Merchant number (`MCHID`)

2. WeChat Merchant key

3. WeChat Merchant API certificate

Enable "Pay" from the left menu bar: Dev > Settings, then 功能配置:

<figure style="width: 100%">
  <img alt="wechat-pay-img-11.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/MELBGRR7wbik7myiAzqnd63v" />
<figcaption>Enable Pay in the BaaS
</figcaption>
</figure>



Now You're ready to set up payment. 

Go to Dev -> Pay on the side menu, and then "Certificate" on the top tab. 

On the "Associate WeChat business account" top right, click on "Add an account":

<figure style="width: 100%">
  <img alt="wechat-pay-img-12.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/baLq9NUNCAQAKTpmEsGSezdt" />
<figcaption>Associate the two accounts
</figcaption>
</figure>


Fill out the merchant id, API secret, and certificates that you gathered following steps in the section above:

<figure style="width: 100%">
  <img alt="wechat-pay-img-13.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/5wig13oJnJS1FtVSLrqvfqcb" />
<figcaption>Fill in the form
</figcaption>
</figure>

Under "Associate WeChat business account," you should see your new account.  Click `authorize verification` and wait for `Status` to say "Authorization successful" as in below.


<figure style="width: 100%">
  <img alt="wechat-pay-img-14.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/Lrt3cw9xULGkZ75v5PUQoPw3" />
<figcaption>Success!
</figcaption>
</figure>


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

<figure style="width: 100%">
  <img alt="wechat-pay-img-15.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/b6mJPBELroqH7H5iPMg8Ncgg" />
<figcaption>Error if not logged in with WeChat
</figcaption>
</figure>


You should see a payment QR when successful:

<figure style="width: 100%">
  <img alt="wechat-pay-img-16.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/jbnVfVqchhob2oANDREBpNSy" />
<figcaption>Successfully logged in and paid
</figcaption>
</figure>

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

<figure style="width: 100%">
  <img alt="wechat-pay-img-17.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/fi5hSe42Q9YCbK1Sug1yRyHR" />
<figcaption>A single payment record
</figcaption>
</figure>

You can also issue refunds on this table!

The payment transaction data can also be queried by the SDK with the `order()` function with `transactionID`

```js
let transactionID = "MDUhtNmacdYBKokJbCXhvYuoJnHXzpeN"
let params = { transactionID }

wx.BaaS.order(params).then(res => console.log(res)) // shows all the payment data
```
This is all we need to get going on our eCommerce App!

-----

### Optional: Payment

If you have the payment account set up, you can add WeChat payment to the App!

Then following the demo and instructions, you can ask the user to use WeChat Pay to pay the amount for the order before creating it!

> Tip: Test it on a small purchase (edit the price in the BaaS if you need).