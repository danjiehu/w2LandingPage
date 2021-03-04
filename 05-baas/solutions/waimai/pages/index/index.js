//index.js
//获取应用实例
const app = getApp()

Page({
  data: {

  },
  editMeal(event) {
    const data = event.currentTarget.dataset;
    const id = data.id;

    wx.navigateTo({
      url: `/pages/new/new?id=${id}`
    });
  },
  addMeal() {
    wx.navigateTo({
      url: `/pages/new/new`
    });
  },
  // binded to clicking on a meal
  showMeal(event) {
    const data = event.currentTarget.dataset;
    const id = data.id;

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    });
  },
  onLoad: function() {
    const page = this

    wx.BaaS.auth.getCurrentUser().then(user => {
      // user 为 currentUser 对象

      console.log(user)
      page.setData({
        currentUser: user
      })

    }, error => {
      console.log(error)
      page.setData({
        currentUser: null
      })
    })

    let tableName = 'meal'

    let Meal = new wx.BaaS.TableObject(tableName)

    Meal.find().then(page.getRequestData)

  },
  getRequestData: function(res) {
    const data = res.objects;
    console.log(res);
    this.setData({
      meals: res.data.objects
    });
  },
  orderMeal: function(event) {
    const data = event.currentTarget.dataset;
    let meal_id = data.id
    let currentUser = this.data.currentUser
    if (!currentUser) {
      wx.switchTab({
        url: '/pages/user/user' // logged in
      });
    } else {
      wx.chooseAddress({
        success(res) {
          let address =
            res.userName + " " +
            res.provinceName + " " +
            res.cityName + " " +
            res.countyName + " " +
            res.detailInfo

          let newOrder = {
            meal: meal_id,
            customer: currentUser.id.toString(),
            address: address,
            state: "opened" // default state for new order
          }

          let Order = new wx.BaaS.TableObject('order')
          let order = Order.create()
          order.set(newOrder).save().then(res => {
            wx.reLaunch({
              url: '/pages/orders/orders' // show list of orders in user dashboard
            });
          })
        }
      })
    }
  }
})