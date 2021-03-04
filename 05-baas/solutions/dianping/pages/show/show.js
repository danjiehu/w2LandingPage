// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  // binded to delete button
  deleteReview(event) {
    const data = event.currentTarget.dataset;

    let recordID = data.id

    let Review = new wx.BaaS.TableObject('review')
    Review.delete(recordID).then(()=>{
      wx.reLaunch({
        url: '/pages/index/index'
      });
    })
  },
  rateReview(event) {
    const page = this

    const data = event.currentTarget.dataset;

    const id = data.id
    const rating = data.rating;
    
    let Review = new wx.BaaS.TableObject('review')
    let review = Review.getWithoutData(id)

    review.set('rating', rating)

    review.update().then(res => {
      console.log(res)
      
      const new_review = res.data
      let reviews = page.data.reviews
      let review = reviews.find(review => review._id == new_review.id)
      review.rating = new_review.rating

      page.setData({ reviews: reviews })

      let rating_sum = reviews.reduce((sum, review) => sum + review.rating, 0)

      page.setData({
        rating: rating_sum / reviews.length
      })
    })

        
  },
  onLoad: function (options) {
    const id = options.id
    const page = this

    // Get current user logged in
    wx.BaaS.auth.getCurrentUser().then(user => {
      // user 为 currentUser 对象

      console.log(user)
      page.setData({ currentUser: user })

    }, error => {
      console.log(error)
      page.setData({ currentUser: null })
    })
    
    let Review = new wx.BaaS.TableObject('review')
    let query = new wx.BaaS.Query()
    query.compare('restaurant', '=', id)

    Review.setQuery(query).expand(['user']).find().then(res => {
      let reviews = res.data.objects
      let count = res.data.meta.total_count

      page.setData({
        reviews: reviews
      })

      let rating_sum = reviews.reduce((sum, review) => sum + review.rating, 0)
      
      page.setData({
        rating: rating_sum / count
      })
    })

    let Restaurant = new wx.BaaS.TableObject('restaurant')

    Restaurant.get(id).then(res => {
      page.setData({
        restaurant: res.data
      })
    })

  },
  createReview: function (event) {
    const page = this

    let user = page.data.currentUser;
    let content = event.detail.value.content;
    let restaurant = page.data.restaurant;

    let data = {
      content: content,
      user: user.id.toString(),
      restaurant: restaurant.id.toString()
    }

    let tableName = 'review'
    let Review = new wx.BaaS.TableObject(tableName)
    let review = Review.create()

    review.set(data).save().then(() => {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    })
  },
  showUserPage: function (event) {
    wx.switchTab({
      url: '/pages/user/user',
    })
  }
})