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

    let name = event.detail.value.name;
    let content = event.detail.value.content;

    let data = {
      name: name,
      content: content
    }

    let tableName = 'stories'
    let Story = new wx.BaaS.TableObject(tableName)
    let story = Story.create()

    story.set(data).save().then(res => {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    })
 

  }
})