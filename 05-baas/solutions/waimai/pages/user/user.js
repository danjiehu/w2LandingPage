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
      }).catch(err => {
        console.log(err)
      })
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
  }
})