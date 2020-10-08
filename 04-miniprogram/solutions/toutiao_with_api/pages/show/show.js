// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  // binded to delete button
  deleteComment(event) {
    
    const data = event.currentTarget.dataset;
    console.log(data.id)
    // make a DELETE request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'DELETE',
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' }, // API key from Above

      success() {
        // no need for response data
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  },
  voteComment(event) {
    const data = event.currentTarget.dataset;
    const votes = data.votes;
    const new_votes = { votes: votes + 1 }
    const page = this

    // make a PUT request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/85188/record/${data.id}`,
      method: 'PUT',
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },

      data: {
        "votes": {
          "$incr_by": 1
        }},
      success(res) {
        // set comment data
        console.log(res)
        const new_comment = res.data
        let comments = page.data.comments
        let comment = comments.find(comment => comment._id == new_comment.id)
        comment.votes = new_comment.votes

        page.setData({ comments: comments })
      }
    });
  },
  onLoad: function (options) {
    const id = options.id

    const page = this
    const request = {
      url: 'https://cloud.minapp.com/oserve/v1/table/85188/record/',
      method: 'GET',
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
      data: {
        where: { // filtering comments for a specific story
          "story_id": { "$eq": id } // story id
        }
      },
    
      success(res) {
        console.log(res)
        page.setData({
          comments: res.data.objects
        })
      }
    }

    wx.request(request)

    const request2 = {
      url: `https://cloud.minapp.com/oserve/v1/table/84988/record/${id}`,
      method: 'GET',
      header: { 'Authorization': 'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e' },
      success(res) {
        console.log(res)
        page.setData({
          story: res.data
        })
      }
    }

    wx.request(request2)

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
})