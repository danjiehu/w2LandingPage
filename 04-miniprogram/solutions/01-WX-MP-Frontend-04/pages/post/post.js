// pages/post/post.js

const app = getApp();

Page({

  /**
   * Page initial data
   */
  data: {

  },
  formSubmit: function (event) {

    // DID WE GET IT?

    console.log(event.detail.value.name)
    console.log(event.detail.value.content)

    let name = event.detail.value.name
    let content = event.detail.value.content

    // STORING IN GLOBAL DATA

    app.globalData.stories.unshift({content, name})

    // REDIRECTING

    wx.switchTab({
      url: '/pages/stories/stories',
    })

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
