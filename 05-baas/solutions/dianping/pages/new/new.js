// pages/new/new.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {

  },

  bindSubmit: function(event) {

    wx.BaaS.auth.getCurrentUser().then(user => {
      console.log(user)
      getApp().globalData.user = user

      // user 为 currentUser 对象
    }).catch(err => {
      // HError
      if (err.code === 604) {
        console.log('用户未登录')
        // redirect to login page

      }
    })

    let name = event.detail.value.name
    let description = event.detail.value.description;
    let photo = event.detail.value.photo;

    let data = {
      name: name,
      description: description,
      photo: photo,

    }

    let tableName = 'restaurant'
    let Restaurant = new wx.BaaS.TableObject(tableName)
    let restaurant = Restaurant.create()

    restaurant.set(data).save().then(res => {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    })
  }
})