# Review and Reset



Today there are no additional challenges! Take this time to review what you've been working on the past 6 weeks! 

In particular your **challenges apps** form the foundation of what you'll do from now on. 



## Knowledge Points

Make sure you understand how each of the **knowledge points** in these apps work. Then you can **look them up when you need **for your own project. 

> Tip: Copy the whole course:  `git clone git@github.com:dounan1/china-product.git` and open in Sublime. Then search for keywords with  `shift+command(ctrl)+F` like "spread operator":
>
> ![image-20191122232703946](https://github.com/dounan1/china-product/raw/master/syllabus_review_images/image-20191122232703946.png)


[Xiaohongshu](https://github.com/dounan1/china-product/blob/master/01-design/challenges/xiaohongshu/Challenge%20Xiaohongshu%20Landing%20Page.md)

- CSS cards, component 
- Layouts

[Toutiao](https://github.com/dounan1/china-product/blob/master/04-baas/slides/db.md)

- CRUD
- 1-to-many relationships
- BaaS SDK 
- Request handling
- WeChat MP framework
  - data binding
  - function callbacks
  - passing data between pages

[Dianping](https://github.com/dounan1/china-product/blob/master/04-baas/slides/advanced_db.md)

- many-to-many relationships
- view logic
- user account 

[Waimai](https://github.com/dounan1/china-product/blob/master/04-baas/challenges/waimai.md)

- ordering system
- user roles
- permssions (ACL)
- filtering with query

[Membership](https://github.com/dounan1/china-product/blob/master/05-advanced_baas/slides/login.md)

- membership functions
- more order data (e.g. points)
- setting user data
- WeChat login

[E-Commerce](https://github.com/dounan1/china-product/blob/master/05-advanced_baas/slides/payment.md)

- shopping carts
- combining page data
- combining objects: spread operator `{ ...allProducts, ...products }`
- list operations: `filter` `reduce` `find` `forEach`, `Object.values()`
- WeChat payment



## Tips:

Here are some guidelines to help you get most out of the next three works building team products. 

- It's ok to not know everything
- pick something you like
- do that as well as you can - be good at it
- see the big picture - ask why and understand the process 
- prepare for the long journey - learn how to learn



## WeChat Revisited

## Page lifecycles

Below graph demonstrates the WeChat Mini Program lifecycles.

![wx-mp-lifecycles](https://github.com/The-Pavel/images/blob/master/page-lifecycles.png?raw=true)

The bar on the left shows the lifecycle milestones that happen on the view thread (visible in `.wxml`). The bar on the right shows the lifecycle milestones that happen on the AppService Thread (inside the WeChat MP API).

You will notice that when a page is created in the WeChat MP IDE by adding a new line in the `app.json` file, the `yourpage.js` file is already created with all the AppService lifecycle milestones!

## View logic

### `wx:for` - looping inside the view

The "simple" way: `wx:for-item="item"` automatically generated

```html
<block wx:for="{{items}}">
  <view class="card-outer-border">
    <view class="card-header-item">
      {{item.name}}
    </view>
    <view class="card-line"/>
    <view class="card-body-item">
      {{item.content}}
    </view>
  </view>
</block>
```

The explicit way:

```html
<block wx:for="{{items}}" wx:for-item="item" wx:for-index="itemsIndex" wx:key=“item.id”>
  <view class="card-outer-border">
    <view class="card-header-item">
      {{item.name}}
    </view>
    <view class="card-line"/>
    <view class="card-body-item">
      {{item.content}}
    </view>
  </view>
</block>
```

### Passing data from view layer to logic layer using `data-` and events

1. Passing the ID of a Restaurant from `.wxml` as **restaurantId**:

```html
<view bindtap="showRestaurant" data-restaurantId="{{restaurant.id}}">
 <view class="card-category">
  {{restaurant.address}}
 </view>
 <view class="card-description">
  <view class="name">
    {{restaurant.name}}
  </view>
  <view class="tag">
    {{restaurant.tag}}
  </view>
 </view>
</view>
```

2. Retrieving the restaurantId in `.js` file

```javascript
showRestaurant(e) {
  const data = e.currentTarget.dataset;
  const restaurantId = data.restaurantId;
 }
```

## WeChat Mini Program API routing options

#### `wx.navigateTo`

calls `onHide` on current page, and opens a new url - ⚠️ WeChat Mini Program can open **up to 10 pages**, after which navigateTo won't work any more.

#### `wx.navigateBack`

calls `onHide` on the current page, goes back to one of the previously loaded pages. You can specify how many steps to go back by passing in the **delta** param in the function.

```javascript
  // to go back one step
  wx.navigateBack({
    delta: 1
  })
```

#### `wx.redirectTo`

calls `onUnload` on current page, closing it, and opens the new url

#### `wx.reLaunch`

calls `onUnload` on all open pages, closing them, and opens the new url

#### `wx.switchTab`

⚠️ only works if you have activated **tabBar** in `app.json`

```javascript
// app.json
//...
"tabBar": {
  "backgroundColor": "#FFFFFE",
  "borderStyle": "#D3D3D3",
  "selectedColor": "#D03232",
  "color": "#888888",
  "list": [{
    "pagePath": "pages/index/index",
    "text": "Home",
    "iconPath": "/commons/assets/icons/home-unactive.png",
    "selectedIconPath": "/commons/assets/icons/home.png"
    },{
    "pagePath": "pages/post/post",
    "text": "Post",
    "iconPath": "/commons/assets/icons/post-unactive.png",
    "selectedIconPath": "/commons/assets/icons/post.png"
  }]
}
```

Switching tabs this way calls `onHide` on the current tab and opens the url

⚠️ `wx.switchTab` can only link to url's specified in the **pagePath** paths listed in the list in `app.json`. In fact the tab bar will not appear on any other pages, except those listed.