## Real-time debugging

Click the small bug 🐞 icon at the top of your WeChat IDE. This will give you a QR code to scan.

Scan that in WeChat - you can now preview your mini program on your **phone** while having a live debugging console on your **laptop**

![real-time-debugging](https://github.com/The-Pavel/images/blob/master/real-time-debugging.png?raw=true)

## Protect your AppID and AppSecret

Use `.gitignore` to hide your AppID and AppSecret from your public git repositories (and even private if you are paranoid) - you don't want those to be public!

Here is a quick walkthrough:

1. Create a gitignore file

```bash
touch .gitignore
```

2. Open the .gitignore file in your code editor
3. Add a file you want to ignore on a new line and save

```ruby
keys.js
keys.yml
project.config.json # often developers choose to add keys here
#...
```

4. Add files, commit and push to remote like you normally would 😎

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

## Adding permissions to your Mini Program

WeChat MP framework now allows you to add and customize user permissions

Detailed documentation can be found [here](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) and this is how it looks like in action:

![add_permissions_in_wxmp](https://github.com/The-Pavel/images/blob/master/Screenshot%202019-06-13%20at%205.35.41%20PM.png?raw=true)

## What if a user denies permission?

When using `wx.authorize`, if a user denies permission once, it will permanently save that setting and will not ask for authorization again! 😱

To go around that, you can use `open-type="openSetting"` on your authorization button to check the current settings for different permission scopes and then call `wx.authorize` on specific scope from there:

```html
<!-- yourpage.wxml -->
<button open-type="openSetting" bindtap="openSetting"> Check Authorize Setting </button>
```

```javascript
// yourpage.js
//...
openSetting: function () {
  wx.getSetting({
    success(res) {
      console.log(res)
    }
  })
}
```

The result logged will look something like this:

![logged_openSetting_result](https://github.com/The-Pavel/images/blob/master/result_opensettings_logged.png?raw=true)

For any scope authorizations you are missing, you can call `wx.authorize` and ask for user permission. You can see some examples of how that can be used with geolocation [here](https://github.com/pitipon/MP-openLocation), and [here](https://github.com/pitipon/MP-chooseAddress).

## QR Code Generation

To generate a dynamic QRCode for your Mini-Program, you will need to have:

- App ID
- App Secret
- A published Mini-Program

*Note: You could still generate a QRCode image with unpublished Mini-Program or sandbox account, but it will lead to a "NOT PUBLISHED" error.*

### Get your token

To get your access token, you will need to make a request to Tencent from your **backend**

```
https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential  &appid={{YOUR_APP_ID}}&secret={{YOUR_APP_SECRET}}
```

### The Ordinary QRCode (Squared)

Tencent actually don’t recommend this, because it doesn’t look like a Mini-Program QRCode 😉

```bash
POST https://api.weixin.qq.com/cgi-bin/wxaapp/createwxaqrcode ?access_token={{YOUR_ACCESS_TOKEN}}
```

You will get a square QRCode, which you can generate up to 100,000 times. This post request can be sent from **frontend** directly.

**The params you send**

```json
{
  path:"page/index/index",
  width:430
}
```

- The **path** is the page that you want your Mini-Program to open when users scan.
- The **width** defaults to 430 pixels. Min: 280px Max: 1280px

### The Circular QRCode (Rounded) unlimited!

```bash
POST https://api.weixin.qq.com/wxa/getwxacodeunlimit ?access_token={{YOUR_ACCESS_TOKEN}}
```

**The params you send**

```json
{
  scene: 'parameter_on_load',
  path: 'pages/index/index',
  width: 430,
  auto_color: false,
  line_color: { r: '000', g: '000', b: '000' },
  is_hyaline: false,
}
```

- **path** and **width** are the same as above.
- When **auto_color** is `true`, the lines default to black.
- When **auto_color** is `false`, you can set your own line colours using RGB values in **line_color**
- **is_hyaline** means if you want your image to be transparent or not
- **scene** are extra parameters that you wish to include in your QRCode. You can access the scene in the `onLoad` method in your Mini-Program to pass any data with the QR code! 🤓

```js
Page({
  onLoad (query) {
    const scene = decodeURIComponent(query.scene)
  }
})
```

What is the success callback of this POST request? A circular QR code like this:

![circular_mp_qr_code](https://cdn-images-1.medium.com/max/1600/1*2ZIgmthwqm68J-Gcyeay5w.png)



## Mapping

### 1. Get the user's permission

```json
//app.json

{
  "permission": {
    "scope.userLocation": {
      "desc": "A message to tell the user why you need permission"
    }
  }
}
```

The user's location is only one of the many kinds of information you can ask permission for. Check out the [documentation](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html) for a complete list!



### 2. Get current user location (latitude, longitude...)

#### wx.getLocation()

This built-in API can be used in a lifecycle function (e.g onLoad) or anywhere in your code when you need to find the GPS coordinates of your user: **latitude**, **longitude**,  **altitude** & **velocity**!

[📚 Official documentation [中文]](https://developers.weixin.qq.com/miniprogram/dev/api/location.html#wxgetlocationobject)



```javascript
// yourPage.js
onLoad: function (options) {
  const that = this
  wx.getLocation({
    type: 'wgs84', // **1
    success: function(res) {
      const latitude = res.latitude
      const longitude = res.longitude
      const speed = res.speed
      const accuracy = res.accuracy
      that.setData({latitude, longitude, speed, accuracy})
    }
  })
}
```

```html
<!-- yourPage.wxml -->
<view>Get current location</view>
<view>--------------------</view>
<view>Latitude : {{latitude}}</view>
<view>Longitude : {{longitude}}</view>
<view>Speed : {{speed}}</view>
<view>Accuracy : {{Accuracy}}</view>
```

\*\*1: Notice the parameter `type`. You want to use the [World Geodetic System (WGS84)](https://gisgeography.com/wgs84-world-geodetic-system/) to get the real location and make your calculations.

If you plan to open a **Tencent map** centered on your user with `wx.openLocation()`, you want to use the type *[GCJ-02](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China#GCJ-02)* instead. For national security the GPS coordinates were offset on China maps!

### 2. Select a location on a map

#### wx.chooseLocation()

This function is a convenient way for your visitors to pick a spot on a map.

They can search major landmarks in Chinese or move around a marker. After confirmation, the success callback will contain the GPS coordinates of the selected spot.

Because of WeChat's new authorization scheme, the user must first give their permission using `wx.authorize()`



```javascript
// yourPage.js
onLoad: function (options) {
  let that = this
  wx.authorize({
    scope: 'scope.userLocation',
      success(res){
        console.log(res)
        wx.chooseLocation({
          success: function(res) {
          console.log(res)
        }
      })
    },
    fail(err) {
      console.log(err)
    }
  })
}
```

<img src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/tutorials/wechat/wechat_mp_choose_location.gif" alt="Selecting location on a Map" style="width:280px">

*console log with the results*

```bash
{errMsg: "chooseLocation:ok", name: "", address: "上海市上海市", latitude: 31.22352, longitude: 121.45591}
```

### 3. View a location on Tencent Map

#### wx.openLocation()

This function will trigger a full-page Tencent map according to the parameters you define (location, scale etc).

[📚 Official documentation [中文]](https://developers.weixin.qq.com/miniprogram/dev/api/location.html#wxopenlocationobject)



```javascript
// yourPage.js
onLoad: function (options) {
  wx.authorize({
    scope: 'scope.userLocation',
    success(res) {
      console.log(res)
      wx.openLocation({
        latitude: 30.64242,
        longitude: 104.04311,
        scale: 28
      })
    },
    fail(err) {
      console.log(err)
    }
  })
}
```

### 4. Display markers on a map

#### Use of the &#60;map&#x3e; component

There's a very handy WXML component named **&#60;map&#x3e;** to help create anything from a store locator to a list of nearest bikes...

[📚 Official documentation [中文]](https://developers.weixin.qq.com/miniprogram/dev/component/map.html#map)

As you can see in the official doc, the map can be configured with dynamic parameters via `{{data binding}}`. E.g



```html
<!-- yourPage.wxml -->
<map longitude="{{lg}}" latitude="{{lt}}" scale="{{sc}}" style="width: 100%; height: 80vh;" markers="{{mk}}"></map>
```



```javascript
// yourPage.js
data: {
	lt: "31.232065",
	lg: "121.470645",
	sc: '14',
	mk: []
}
```

Note the optional array **markers: []** 👈 That's where you want to list all of the pointers to be shown on the map!

Here's an array with only 1 marker:

```javascript
// yourPage.js
mk: [
  {
    iconPath: "/img/marker.png", // **1
    id: 0,
    latitude: 31.219614,
    longitude: 121.443877,
    width: 40,
    height: 40
  }//, add more markers here
]
```

You can use the *callout* object in your marker to create a little tooltip displayed on tap.

To catch the taps, you will need to add property `bindmarkertap="markertap"` in your **&#60;map&#x3e;** component.  E.g:

```javascript
// yourPage.js
mk: [
  {
    iconPath: "/img/marker.png", // **1
    id: 0,
    latitude: 23.099994,
    longitude: 113.324520,
    width: 50,
    height: 50,
    callout: { content: "Le Wagon \n Shanghai, China", fontSize: 15, color: "#000000", padding: 10 }
  }
]
```

```html
<!-- yourPage.wxml -->
<map bindmarkertap="markertap" longitude="{{lg}}" latitude="{{lt}}" scale="{{sc}}" style="width: 100%; height: 80vh;" markers="{{mk}}"></map>
```

```javascript
// yourPage.js
markertap(e) {
    console.log(e.markerId)
 }
```

\*\*1: The *iconPath* should start with a slash /

It loads your marker icon.
[Iconfont](http://www.iconfont.cn/search/index?q=marker
) has nice options of markers for your project!

Happy Mapping! 🌏



#### Happy hacking! 💻

