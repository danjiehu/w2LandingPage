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
    const request = {
      url: 'https://cloud.minapp.com/oserve/v1/table/84988/record/',
      method: 'GET',
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
      success(res) {
        console.log(res)
        page.setData({
          stories: res.data.objects
        })
      }
    }

    wx.request(request)

    // let tableName = 'stories'

    // // 实例化查询对象
    // let query = new wx.BaaS.Query()
    // // query.contains('content', '>=')
    // query.contains('name', 'Socrates')

    // // 应用查询对象
    // let Story = new wx.BaaS.TableObject(tableName)
    // Story.setQuery(query).find().then(page.getRequestData)

    // 不设置查询条件
    // Story.find().then(page.getRequestData)
    
  },
  getRequestData: function (res) {
    const data = res.objects;
    console.log(res);
    // this.setStories(data);
  }

})
