//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  // binded to clicking on a story
  showStory(event) {
    const data = event.currentTarget.dataset;
    const id = data.id;

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    });
  },
  onLoad: function () {
    const page = this

    let tableName = 'stories'

    let Story = new wx.BaaS.TableObject(tableName)

    Story.find().then(page.getRequestData)
 
  },
  getRequestData: function (res) {
    const data = res.objects;
    console.log(res);
    this.setData({stories: res.data.objects});
  }

})
