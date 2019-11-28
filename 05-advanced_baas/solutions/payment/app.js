//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
      wx.getUserInfo,
      wx.requestPayment)

    wx.BaaS.init('8c74e1e1356bd2fd1769')

    // wx.BaaS.auth.register({ username: 'ifanrx', password: 'ifanrx123' }).then(user => {
    //   console.log(user)
    // })

    // wx.BaaS.auth.login({ username: 'ifanrx', password: 'ifanrx123' }).then(user => {
    //   console.log(user)
    // }).catch(err => {
    //   // HError
    // })



    // // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     let params = {
    //       totalCost: 0.1,
    //       merchandiseDescription: '煎饼'
    //     }

    //     // wx.BaaS.pay(params).then(res => {
    //     //   // success. 支付请求成功响应，可以在 res 中拿到 transaction_no 和支付结果信息
    //     // }, err => {
    //     //   // 未完成用户授权或发生网络异常等
    //     //   console.log(err)
    //     // })
    //   }
    // })
    // // 获取用户信息
    // wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
    //       wx.getUserInfo({
    //         success: res => {
    //           // 可以将 res 发送给后台解码出 unionId
    //           this.globalData.userInfo = res.userInfo

    //           // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //           // 所以此处加入 callback 以防止这种情况
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    // })
  },
  globalData: {
    userInfo: null
  }
})