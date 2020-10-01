// pages/show/show.js
Page({

  /**
   * Page initial data
   */
  data: {

  },
  onLoad: function(options) {
    console.log(options)
    const name = options.name
    const page = this

    // Get current user logged in
    wx.BaaS.auth.getCurrentUser().then(user => {

      console.log(user)
      page.setData({
        currentUser: user
      })

      page.loadCart(user)

    }, error => {
      console.log(error)
      page.setData({
        currentUser: null
      })
      wx.switchTab({
        url: '/pages/user/user' // log in
      });
    })

    page.setData({
      name: options.name
    })


  },
  loadCart(user) {
    const page = this
    const Cart = new wx.BaaS.TableObject('cart')
    const User = new wx.BaaS.User()

    let query = new wx.BaaS.Query()
    const customer = User.getWithoutData(user.id.toString())

    query.compare('customer', '=', customer)
    query.notExists('order') // cart not checked out

    Cart.setQuery(query).expand('product').find().then(res => {
      const carts = res.data.objects
      const products = carts.map(cart => {

        let product = cart.product
        product.cart_id = cart.id
        product.amount = cart.amount

        return product
      })

      const combinedPrice = products.reduce((sum, product) => sum + product.amount * product.price, 0)

      const Product = new wx.BaaS.TableObject('product')
      Product.find().then(res => {
        let allProducts = res.data.objects

        let combinedProducts = { ...allProducts,
          ...products
        }

        page.setData({
          products: Object.values(combinedProducts),
          price: combinedPrice
        })
      })
    })
  },
  updateAmount(event) {
    const page = this;
    const data = event.currentTarget.dataset;
    const product_id = data.id;
    const add = data.add;

    const product = page.data.products.find(product => product.id == product_id)
    const currentAmount = product.amount

    if (currentAmount > 0) {
      if (currentAmount + add == 0) {
        page.deleteCart(product);
      } else {
        page.updateCart(product, currentAmount + add);
      }
    } else {
      page.createCart(product);
    }
  },
  deleteCart(product) {
    const page = this;

    let Cart = new wx.BaaS.TableObject('cart')
    Cart.delete(product.cart_id).then(() => {
      page.updateProduct(product.id, null)
    });
  },
  createCart(product) {
    const page = this;

    let newCart = {
      price: product.price,
      amount: 1,
      customer: page.data.currentUser.id.toString(),
      product: product.id
    };

    let Cart = new wx.BaaS.TableObject('cart')
    let cart = Cart.create()

    cart.set(newCart).save().then(res => {
      const cart = res.data;
      page.updateProduct(product.id, cart);
    })
  },
  updateProduct(product_id, cart) {
    const page = this;

    let products = page.data.products;
    let product = products.find(product => product.id == product_id)

    if (cart == null) {
      delete product.amount;
      delete product.cart_id;
    } else {
      product.amount = cart.amount;
      product.cart_id = cart.id;
    }

    const combinedPrice = products.filter(product => product.amount > 0).reduce((sum, product) => sum + product.amount * product.price, 0)

    page.setData({
      products: products,
      price: combinedPrice
    })
  },
  updateCart(product, amount) {
    const page = this

    let Cart = new wx.BaaS.TableObject('cart')
    let cart = Cart.getWithoutData(product.cart_id)

    cart.set('amount', amount)
    cart.update().then(res => {
      const cart = res.data;
      page.updateProduct(product.id, cart);
    })
  },
  createOrder(event) {
    const page = this;
    const price = page.data.price;
    let currentUser = this.data.currentUser
    const name = page.data.name;

    wx.chooseAddress({
      success(res) {
        let address =
          res.userName + " " +
          res.provinceName + " " +
          res.cityName + " " +
          res.countyName + " " +
          res.detailInfo;

        let newOrder = {
          price: price,
          customer: currentUser.id.toString(),
          address: address,
          name: name,
        };

        let Order = new wx.BaaS.TableObject('order')
        let order = Order.create()

        order.set(newOrder).save().then(res => {
          let order = res.data

          let carts = page.data.products.filter(product => product.cart_id)

          carts.forEach( product => {
            let Cart = new wx.BaaS.TableObject('cart')
            let cart = Cart.getWithoutData(product.cart_id)

            cart.set('order', order.id)
            cart.update()
          })

          wx.reLaunch({
            url: '/pages/orders/orders' // show list of orders in user dashboard
          });
        })
      }
    })
  }
})