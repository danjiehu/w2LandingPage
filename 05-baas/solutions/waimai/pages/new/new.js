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
    const id = options.id
    const page = this

    let Meal = new wx.BaaS.TableObject('meal')

    Meal.get(id).then(res => {
      page.setData({
        meal: res.data
      })
    })
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
    let price = event.detail.value.price;
    let photo = event.detail.value.photo;

    let data = {
      name: name,
      price: Number.parseInt(price),
      photo: photo,

    }

    let tableName = 'meal'
    let Meal = new wx.BaaS.TableObject(tableName)
    let meal = Meal.create()

    meal.set(data).save().then(res => {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    })
  }
})