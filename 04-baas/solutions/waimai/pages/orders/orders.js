//orders.js

Page({
  data: {

  },
  // binded to clicking on the order 'ready' button
  readyOrder(event) {
    const page = this;
    const data = event.currentTarget.dataset;
    const id = data.id;

    console.log(id);

    let tableName = 'order'
    let Order = new wx.BaaS.TableObject(tableName)
    let order = Order.getWithoutData(id)

    order.set("state", "ready").update().then(res => {
      wx.reLaunch({
        url: '/pages/orders/orders',
      })
    })
  },
  // binded to clicking on the order 'deliver' button
  deliverOrder(event) {
    const page = this;
    const data = event.currentTarget.dataset;
    const id = data.id;

    console.log(id);

    let tableName = 'order'
    let Order = new wx.BaaS.TableObject(tableName)
    let order = Order.getWithoutData(id)

    order.set("state", "delivering").update().then(res => {
      wx.reLaunch({
        url: '/pages/orders/orders',
      })
    })
  },
  deliveredOrder(event) {
    const page = this;
    const data = event.currentTarget.dataset;
    const id = data.id;

    console.log(id);

    let tableName = 'order'
    let Order = new wx.BaaS.TableObject(tableName)
    let order = Order.getWithoutData(id)

    order.set("state", "delivered").update().then(res => {
      wx.reLaunch({
        url: '/pages/orders/orders',
      })
    })
  },
  onLoad: function () {
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

    const isDeliverer = page.data.currentUser.get('role') == 'deliverer';

    if (isDeliverer) {
      query.in('state', ['ready', 'delivering']);
      Order.setQuery(query);
    }

    Order.expand(["meal"]).find().then(page.getRequestData)

  },
  getRequestData: function (res) {
    const data = res.objects;
    console.log(res);
    this.setData({
      orders: res.data.objects
    });
  },
})