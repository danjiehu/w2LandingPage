//orders.js

Page({
  data: {

  },
  onLoad: function (options) {
    const page = this;

    wx.BaaS.auth.getCurrentUser().then(user => {
      // user 为 currentUser 对象

      console.log(user)  
      page.setData({
        currentUser: user
      })

      page.loadOrder();
      

    }, error => {
      console.log(error)
      page.setData({
        currentUser: null
      })
      wx.switchTab({
        url: '/pages/user/user' // logged in
      });
    })
  },
  loadOrder: function() {
    const page = this;

    let tableName = 'order'

    let Order = new wx.BaaS.TableObject(tableName)

    var query = new wx.BaaS.Query()

    Order.expand(["product", "deliverer"]).find().then(page.getRequestData)

  },
  getRequestData: function (res) {
    const data = res.objects;
    console.log(res);
    this.setData({
      orders: res.data.objects
    });
  },
})