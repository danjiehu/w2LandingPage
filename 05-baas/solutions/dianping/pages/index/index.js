//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  // binded to clicking on a restaurant
  showRestaurant(event) {
    const data = event.currentTarget.dataset;
    const id = data.id;

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    });
  },
  onLoad: function () {
    const page = this

    let tableName = 'restaurant'

    let Restaurant = new wx.BaaS.TableObject(tableName)

    Restaurant.find().then(page.getRequestData)
 
  },
  getRequestData: function (res) {
    const data = res.objects;
    console.log(res);
    this.setData({restaurants: res.data.objects});
  }

})
