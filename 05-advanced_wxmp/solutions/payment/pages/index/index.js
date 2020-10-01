//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    cards: [ 
      "我爱你",
      "谢谢你",
      "祝贺你",
      "生日快乐"
    ]
  },
  selectCard(event) {
    console.log(event)
    const data = event.currentTarget.dataset;
    const name = data.name;

    wx.navigateTo({
      url: `/pages/show/show?name=${name}`
    });
  },
  editProduct(event) {
    const data = event.currentTarget.dataset;
    const id = data.id;

    wx.navigateTo({
      url: `/pages/new/new?id=${id}`
    });
  },
  addProduct() {
    wx.navigateTo({
      url: `/pages/new/new`
    });
  },
  // binded to clicking on a product
  showProduct(event) {
    const data = event.currentTarget.dataset;
    const id = data.id;

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    });
  },
  onLoad: function() {
    const page = this

    let tableName = 'product';
    let Product = new wx.BaaS.TableObject(tableName);

    wx.BaaS.auth.getCurrentUser().then(user => {
      // user 为 currentUser 对象

      console.log(user)
      page.setData({
        currentUser: user
      })

      let currentPoints = user.get("points");

      var query = new wx.BaaS.Query();
      query.compare('points', ">=", -currentPoints);

      Product.setQuery(query);
      Product.find().then(page.getRequestData);


    }, error => {
      console.log(error)
      page.setData({
        currentUser: null
      })

      Product.find().then(page.getRequestData);
    })
  },
  getRequestData: function(res) {
    const data = res.objects;
    console.log(res);
    this.setData({
      products: res.data.objects
    });
  },
  orderProduct: function(event) {
    const data = event.currentTarget.dataset;
    let product_id = data.id
    let product = this.data.products.find(product => product.id == product_id)

    let currentUser = this.data.currentUser
    if (!currentUser) {
      wx.switchTab({
        url: '/pages/user/user' // logged in
      });
    } else {
      let currentPoints = currentUser.get("points");

      if (product.points + currentPoints < 0) {
        wx.showModal({
          title: 'Uh oh',
          content: 'Order products to get more points!',
        })

      } else {
        this.sendOrder(product);
      }
    }
  },
  sendOrder: function (product) {
    let currentUser = this.data.currentUser
    let currentPoints = currentUser.get("points")

    wx.chooseAddress({
      success(res) {
        let address =
          res.userName + " " +
          res.provinceName + " " +
          res.cityName + " " +
          res.countyName + " " +
          res.detailInfo;

        let newOrder = {
          product: product.id,
          customer: currentUser.id.toString(),
          address: address,
          points: product.points,
          state: "opened" // default state for new order
        };

        let Order = new wx.BaaS.TableObject('order')
        let order = Order.create()
        order.set(newOrder).save().then(res => {
          const points = res.data.points
          currentUser.set("points", currentPoints + points).update().then(res => {
            wx.reLaunch({
              url: '/pages/orders/orders' // show list of orders in user dashboard
            });
          })
        })
      }
    })
  }
})