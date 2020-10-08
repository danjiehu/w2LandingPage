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

    let recordID = data.id

    let Comment = new wx.BaaS.TableObject('comments')
    Comment.delete(recordID).then(()=>{
      wx.reLaunch({
        url: '/pages/index/index'
      });
    })
  },
  voteComment(event) {
    const data = event.currentTarget.dataset;
    const id = data.id
    const votes = data.votes;
    const page = this

    let tableName = 'comments'
    let recordID = id // 数据行 id

    let Comment = new wx.BaaS.TableObject(tableName)
    let comment = Comment.getWithoutData(recordID)

    comment.set('votes', votes + 1)
    comment.update().then(res => {
      console.log(res)
      const new_comment = res.data
      let comments = page.data.comments
      let comment = comments.find(comment => comment._id == new_comment.id)
      comment.votes = new_comment.votes

      page.setData({ comments: comments })
    })

        
  },
  onLoad: function (options) {
    const id = options.id

    const page = this
    
    let tableName = 'comments'

    let Comment = new wx.BaaS.TableObject(tableName)
    let query = new wx.BaaS.Query()
    query.compare('story_id', '=', id)

    Comment.setQuery(query).find().then(res => {
      page.setData({
        comments: res.data.objects
      })
    })

    let tableName2 = 'stories'

    let Story = new wx.BaaS.TableObject(tableName2)

    let recordID = id

    Story.get(recordID).then(res => {
      page.setData({
        story: res.data
      })
    })

  },
  bindSubmit: function (event) {
    const page = this
    let name = "Anonymous";
    let content = event.detail.value.content;

    let data = {
      name: name,
      content: content,
      story_id: page.data.story._id
    }

    let tableName = 'comments'
    let Comment = new wx.BaaS.TableObject(tableName)
    let comment = Comment.create()

    comment.set(data).save().then(res => {
      console.log(res)

      const comment = res.data

      let comments = page.data.comments
      comments.push(comment)

      page.setData({comments: comments})
    })


  }
})