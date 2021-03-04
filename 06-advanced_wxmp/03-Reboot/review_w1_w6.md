Today there are no additional challenges! Take this time to review what you've been working on for the past 6 weeks! 

In particular your **challenges apps** form the foundation of what you'll do from now on. 

## Knowledge Points

Make sure you understand how each of the **knowledge points** in these apps work. Then you can **look them up when you need** for your own project. 

> Tip: Copy the whole course:  `git clone git@github.com:lewagon/china-product.git` and open in Sublime. Then search for keywords with  `shift+command(ctrl)+F` like "spread operator":

<figure style="width: 100%">
  <img alt="review 1.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/EoHYw4QtG3apb5mpvGCffCJR" />
</figure>

[Xiaohongshu challenge](3134)

- CSS cards, component 
- Layouts

[Toutiao challenge](3143)

- CRUD
- 1-to-many relationships
- BaaS SDK 
- Request handling
- WeChat MP framework
  - Data binding
  - Function callbacks
  - Passing data between pages

[Dianping challenge](3912)

- Many-to-many relationships
- View logic
- User account 
- Ordering system

[Dior Membership](3935) and [WeChat Login](3153)

- Membership functions
- More order data (e.g. points)
- Setting user data
- WeChat login

[WeChat Payment](2809) and [Dior Gift Cards](3947)

- Shopping carts
- Combining page data
- Combining objects: spread operator `{ ...allProducts, ...products }`
- List operations: `filter` `reduce` `find` `forEach`, `Object.values()`
- WeChat payment

## WeChat Revisited

### Page lifecycles

The below graph demonstrates the WeChat Mini Program lifecycles.

<figure style="width: 100%">
  <p align="center">
  <img alt="review 2.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/cfNtS3MLw51cgFJBg148uTcm" />
    </p>
</figure>
  
The bar on the left shows the lifecycle milestones that happen on the view thread (visible in `.wxml`). The bar on the right shows the lifecycle milestones that happen on the AppService Thread (inside the WeChat MP API).

You will notice that when a page is created in the WeChat MP IDE by adding a new line in the `app.json` file, the `yourpage.js` file is already created with all the AppService lifecycle milestones!

### View logic

#### `wx:for` - looping inside the view

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

#### Passing data from view layer to logic layer using `data-` and events

1) Passing the ID of a Restaurant from `.wxml` as **restaurantId**:

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

2) Retrieving the restaurantId in `.js` file

```javascript
showRestaurant(e) {
  let data = e.currentTarget.dataset;
  let restaurantId = data.restaurantId;
 }
```

## WeChat Mini Program API routing options

#### `wx.navigateTo`

Calls `onHide` on current page, and opens a new URL - ⚠️ WeChat Mini Program can open **up to 10 pages**, after which navigateTo won't work anymore.

#### `wx.navigateBack`

calls `onHide` on the current page, goes back to one of the previously loaded pages. You can specify how many steps to go back by passing in the **delta** param in the function.

```javascript
  // to go back one step
  wx.navigateBack({
    delta: 1
  })
```

#### `wx.redirectTo`

Calls `onUnload` on current page, closing it, and opens the new URL

#### `wx.reLaunch`

Calls `onUnload` on all open pages, closing them and opens the new URL

#### `wx.switchTab`

⚠️ Only works if you have activated **tabBar** in `app.json`

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

Switching tabs this way calls `onHide` on the current tab and opens the URL.

⚠️ `wx.switchTab` can only link to URLs specified in the **pagePath** paths listed in the list in `app.json`. In fact, the tab bar will not appear on any other pages, except those listed.