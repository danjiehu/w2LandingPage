// pages/user/user.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const page = this

    wx.BaaS.auth.getCurrentUser().then(user => {
      // user 为 currentUser 对象

      console.log(user)
      page.setData({ currentUser: user })

    }, error => {
      console.log(error)
      page.setData({ currentUser: null })
    })

  },
  userInfoHandler(data) {
    wx.BaaS.auth.loginWithWechat(data).then(user => {
      console.log(user);
      // user 包含用户完整信息，详见下方描述
      wx.reLaunch({
        url: '/pages/user/user',
      })
    }, err => {
      console.log(err);
      // **err 有两种情况**：用户拒绝授权，HError 对象上会包含基本用户信息：id、openid、unionid；其他类型的错误，如网络断开、请求超时等，将返回 HError 对象（详情见下方注解）
    })
  },
  bindLogout: function (event) {
    wx.BaaS.auth.logout().then(() => {
      wx.reLaunch({
        url: '/pages/user/user',
      })
    })
  },
  bindLogin: function (event) {
    let page = this;

    let username = event.detail.value.username
    let password = event.detail.value.password;

    wx.BaaS.auth.register({ username: username, password: password }).then(user => {
      // user 为 currentUser 对象

      console.log(user)
      page.setData({ currentUser: user })

    }).catch(err => {

      wx.BaaS.auth.login({ username: username, password: password }).then(user => {
        // user 为 currentUser 对象
        console.log(user)
        page.setData({ currentUser: user })

        return user.linkWechat()
      }).then(res => {
        // success
        // 用户可以通过微信授权登录同一个账户了
      })

      // wx.BaaS.auth.login({ username: username, password: password }).then(user => {
      //   // user 为 currentUser 对象

      //   console.log(user)
      //   page.setData({ currentUser: user })
      // }).catch(err => {
      //   console.log(err)
      // })
    })
  },
  bindEditProfile: function (event) {
    const page = this

    let photo = event.detail.value.photo

    let user = page.data.currentUser

    user.set("photo", photo).update().then(res => {
      wx.reLaunch({
        url: '/pages/user/user',
      })
    })
  },
  showHistory: function () {
    wx.navigateTo({
      url: '/pages/points/points',
    })
  }
})