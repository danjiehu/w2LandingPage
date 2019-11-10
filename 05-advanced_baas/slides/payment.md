



## WeChat Merchant Account

https://pay.weixin.qq.com/

### WeChat pay requires

- A verified official account
- A company business license
- A corporate bank account

### WECHAT PAYMENT

Allow payment at root URL.

![payment_setting](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/payment_setting-63ccd06644ad01f637d219f6c27ef74d5886a7deda29cbb4278be42b42b8532b.png)

### Payment Merchants

Certification file must be installed on your computer before any further important action.

Needed for moving money out of account (Not for development)

![payment_certificate](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/payment_certificate-bfb5855758a7f0f2a0ba9121cdd5d4b0cc189354fb719b9c6e2c827f01477ab6.png)

### Merchants ID and Key

API secret (`wechat_pay_api_key`)  (required by Minapp Baas)

![merchants_api](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/merchants_api-9d74a6c47e0c4018b2b0502e637ab5039b85b306f0a83667da6c6b53be806bf7.png)

### Merchants API certificate

Needed for refunds - (required by Minapp Baas)

![download_api_certificate](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/download_api_certificate-d66eb70b34a8b257e4fd31f76d80d202d7590a4d7b5f46618f68247bb38ffcf8.png)

### Merchants ID

`wechat_pay_mch_id` is the last thing you need.

![merchants_info](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/merchants_info-1828b571a922ee64b9a2271f9c9ed2322426a718a7a9099006a29f4aa68216f0.png)

### Payment Flow Diagram

3 party dance



![小程序支付模式图-来自微信官方](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/wxa-7-2.png)



## Implementing WeChat Payment

Your goal is to add payment to eCommerce Frontend built last weekend challenge (Waimai app)



### Payment function on BaaS

[Setup Documentation](https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml)

[SKD Documentation](https://doc.minapp.com/js-sdk/payment/wechat-pay.html)



Setup needs these merchant info, in addition to your current WeChat AppID

1. WeChat Merchant number

2. WeChat Merchant key

3. WeChat Merchant API certificate



### Certificates



To get the API certificate:

使用超级管理员账号登录[微信支付商户平台](https://pay.weixin.qq.com/index.php/apply/applyment_home/guide_normal)，进入「账户中心」->「 API 安全」，获取商户密钥及 API 证书(不是 APIv3)。



![image-20191013005853841](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191013005853841.png)


https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191013005853841.png


![image-20191013005917501](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191013005917501.png)



![image-20191013005931025](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191013005931025.png)




Then you're ready to enable payment on the Minapp.com platform. Go to Dev -> Pay on the side menu, and then "Certificate" on the top tab. On the top right, click on Add an account.

![image-20191007193443651](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191007193443651.png)



Then fill out the form with merchant info you gathered above:

![image-20191007193525891](https://raw.githubusercontent.com/dounan1/china-product/master/05-advanced_baas/slides/images/image-20191007193525891.png?token=AALUKUAI6SNYJUMX7QUN4725ZFNIG)

Look for your account info under "Pay" in the menu. Under "Associate WeChat business account," click `authorize verfication` and wait for `Status` to say "Authorization successful" as in below.



![image-20191104205750735](/Users/dounanhu/Code/wg/china-product/05-advanced_baas/slides/images/image-20191104205750735.png)



### Payment data



Note the payment is a table on order

### Pay with WeChat SDK 



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

**支付成功返回示例**

```json
{
  errMsg: "requestPayment:ok",
  transaction_no: "MDUhtNmacdYBKokJbCXhvYuoJnHXzpeN",
  trade_no: '4DySOWgNssfu5XsiTH9Ek2f5m9jWTwTw'
}
```



Be careful to log in first, or you'll see an error:

![image-20191008151611379](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20191008151611379.png)


## Your turn! Dior Gift Cards

Build a new eCommerce app but adapt existing code to save time



# Dior Gift Cards



![image-20190327204251870](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/image-20190327204251870.jpg)











![7491570472103_.pic](https://github.com/dounan1/china-product/raw/master/05-advanced_baas/slides/images/7491570472103.png)

