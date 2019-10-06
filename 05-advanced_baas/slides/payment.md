## WeChat Merchant Account

https://pay.weixin.qq.com/

### WeChat pay requires

- A verified official account
- A company business license
- A corporate bank account

### WECHAT PAYMENT

Allow payment at root URL.

![payment_setting](https://kitt.lewagon.com/karr/assets/china/wechat_env_setup/payment_setting-63ccd06644ad01f637d219f6c27ef74d5886a7deda29cbb4278be42b42b8532b.png)

### Payment Merchants

Certification file must be installed on your computer before any further important action.

Needed for moving money out of account (Not for development)

![payment_certificate](https://kitt.lewagon.com/karr/assets/china/wechat_env_setup/payment_certificate-bfb5855758a7f0f2a0ba9121cdd5d4b0cc189354fb719b9c6e2c827f01477ab6.png)

### Merchants ID and Key

API secret (`wechat_pay_api_key`)  (required by Minapp Baas)

![merchants_api](https://kitt.lewagon.com/karr/assets/china/wechat_env_setup/merchants_api-9d74a6c47e0c4018b2b0502e637ab5039b85b306f0a83667da6c6b53be806bf7.png)

### Merchants API certificate

Needed for refunds - (required by Minapp Baas)

![download_api_certificate](https://kitt.lewagon.com/karr/assets/china/wechat_env_setup/download_api_certificate-d66eb70b34a8b257e4fd31f76d80d202d7590a4d7b5f46618f68247bb38ffcf8.png)

### Merchants ID

`wechat_pay_mch_id` is the last thing you need.

![merchants_info](https://kitt.lewagon.com/karr/assets/china/wechat_env_setup/merchants_info-1828b571a922ee64b9a2271f9c9ed2322426a718a7a9099006a29f4aa68216f0.png)

### Payment Flow Diagram

3 party dance



![小程序支付模式图-来自微信官方](https://pay.weixin.qq.com/wiki/doc/api/img/wxa-7-2.jpg)



## Payment

Add payment to eCommerce Frontend built last weekend challenge (Waimai app)



### Payment function on BaaS

[Setup Documentation](https://pay.weixin.qq.com/static/pay_setting/appid_protocol.shtml)

[SKD Documentation](https://doc.minapp.com/js-sdk/payment/wechat-pay.html)



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


## Your turn! Dior Gift Cards

Build a new eCommerce app but adapt existing code to save time


