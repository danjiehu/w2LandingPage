---
marp: true
---

# Location and Maps 🗺 

---

## Agenda

1. Authorizing location
2. Getting user's current location
3. Picking a location on a map
4. WXMP Map component

---

## Authorizing location
> Only if you are planning to get user's location

---

User location is sensitive information, hence Tencent requires a special [`permission`](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission) clause in your `app.json`:

```js
// make sure to put commas in the right places...
"permission": {
    "scope.userLocation": {
      "desc": "A message to tell the user why you need permission"
    }
  }
// ...
```

---

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 60%;">
    <img alt="location_authorization.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/NB3KScXTVU5CGzx27XeeRUeB" />
  </figure>
  <div>
  <br>
  This will create a popup like this when you try to get user's location.
  <br><br>
  We are now ready to access user location! 📍
  </div>
</div>

---

## Getting user's current location

---

Tencent provides us with a nifty [`wx.getLocation`](https://developers.weixin.qq.com/miniprogram/en/dev/api/location/wx.getLocation.html) API

```js
wx.getLocation({
    type: 'wgs84',
    success: function(res) {
      console.log(res)
    }
  })
```
Result that we want 👇

```js
errMsg: "getLocation:ok"
latitude: 31.2494
longitude: 121.397
// ...
```

---

Note the parameter `type`. You want to use the [World Geodetic System (WGS84)](https://gisgeography.com/wgs84-world-geodetic-system/) to get a precise location.

> BUT If you plan to open a **Tencent map** centered on your user with `wx.openLocation()`, you want to use the type *[`gcj-02`](https://en.wikipedia.org/wiki/Restrictions_on_geographic_data_in_China#GCJ-02)* instead. For national security the GPS coordinates were offset on China maps!

---

We can set the `latitude` and `longitude` to the page data and use it to:

* Pin nearby locations
* Pinpoint the user on a map
* Recommend nearest venues

---

## Picking a location on a map

---


The [`wx.chooseLocation()`](https://developers.weixin.qq.com/miniprogram/en/dev/api/location/wx.chooseLocation.html) API is a convenient way for your user to pick a spot on a map.

<br>

They can search (best in Chinese or pinyin) or move around a marker. After confirmation, the `success` callback will contain the location information of the selected place.

---

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 60%;">
    <img alt="wechat_mp_choose_location.gif" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/sHm2F9cX749RowL3EFfASUwR" />
  </figure>
  <div>
  <br>

  `wx.chooseLocation()` in action!
  </div>
</div>

---

`wx.chooseLocation()` in action! (under the hood)

```js
wx.chooseLocation({
  success: function(res) {
    console.log(res)
  }
})
```
Result that we want 👇
```js
//...
address: "上海市长宁区愚园路1300号"
latitude: 31.219042698
longitude: 121.424379349
```

---

### Question - do we store the address or the coordinates in the BaaS? 🤔 

---

## Answer - Both!

* We're going to use the address to display to the user (in a restaurant `show` page for example)

* We're going to use the coordinates to mark the location on a map or calculate distance

---

In our `restaurants` table in the BaaS add three columns:

* `address` as a string
* `latitude` and `longitude` as a number

<figure style="width: 100%">
  <img alt="adding_column.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/JWAc3QaEN9FoezPmz4RCKs5V" />
</figure>

---

After that is done, you can set the properties of a new restaurant the same way as you would for anything else.

```js
// inside the wx.chooseLocation success callback
let latitude = res.latitude
let longitude = res.longitude
let address = res.address

let Restaurant = new wx.BaaS.TableObject('restaurants')
let restaurant = Restaurant.create()
restaurant.set({ latitude, longitude, address }).save()
```
<br>
Make sure to check your BaaS to see that the properties are updated! 📍

---

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 60%;">
    <img alt="wxmp_open_location.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/tH8AfGECCi5YqzYRzMvj1fuv" />
  </figure>
  <div>
  <br>
  
  ### Bonus - [wx.openLocation()](https://developers.weixin.qq.com/miniprogram/en/dev/api/location/wx.openLocation.html)

  `wx.openLocation` API will open a full-screen map, centered on given coordinates, and allow the user to navigate via any installed map app.
  <br><br>
  ```js
  // example
  wx.openLocation({
    latitude: 31.219042698,
    longitude: 121.424379349,
  })
  ```
  </div>
</div>

---

## Maps 🗺 

---

#### Maps are cool! 

Tencent thinks so too, so they added a handy [`map`](https://developers.weixin.qq.com/miniprogram/en/dev/component/map.html) component.

---

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 60%;">
    <img alt="Screen Shot 2020-09-21 at 12.47.48 AM.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/cLV9JGKBurBRiXnsBuak6KrX" />
  </figure>
  <div>
  <br><br>
  
  ```xml
  <map 
    style="width: 100vw; height: 100vh;" 
    longitude="113.324520" 
    latitude="23.099994">
  </map>
  ```
  
  <br>

  WXMP map component has a ton of attributes - enabling 3D, showing traffic information, adding sattelite image maps and more. Make sure to check the docs 📝 
  </div>
</div>

---

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 60%;">
    <img alt="Screen Shot 2020-09-21 at 12.47.48 AM.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/cLV9JGKBurBRiXnsBuak6KrX" />
  </figure>
  <div>
  <br><br>
  
  ```xml
  <!-- show.wxml -->
  <map 
    style="width: 100vw; height: 100vh;" 
    longitude="{{longitude}}" 
    latitude="{{latitude}}">
  </map>
  ```
  ```js
  // show.js
  data: {
    longitude: 113.324520,
    latitude: 23.099994
  }

  ```
  
  <br>

  Make sure you are making your maps **dynamic** from the start!
  </div>
</div>

---

### Adding markers to the map 📍

---

`map` also has an optional attribute called `markers` - this attribute takes an array of Marker objects. Here is an example:

```js
markers: [{
  iconPath: "/images/marker.png",
  id: 0,
  latitude: 23.099994,
  longitude: 113.324520,
  width: 50,
  height: 50
}]
```
> This is an array with one marker

---

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 60%;">
    <img alt="Screen Shot 2020-09-21 at 1.08.13 AM.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/U72dUqMQSq3k69Wcyvo6i1CX" />
  </figure>
  <div>
  <br><br>
  
  ```xml
  <map 
    style="width: 100vw; height: 100vh;" 
    longitude="{{longitude}}" 
    latitude="{{latitude}}"
    markers="{{markers}}">
  </map>
  ```

  Ta-da! But this is the default marker icon. 😕

  You can (and should) replace it with a custom `marker.png`

  Check out [Iconfont](http://www.iconfont.cn/search/index?q=marker
  ) for some cool icons!
  </div>
</div>

---

<div style="display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-column-gap: 10px;">
  <figure style="width: 60%;">
    <img alt="Screen Shot 2020-09-21 at 1.15.41 AM.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/fFhihKjA3DTqYzEk7YEj7eqh" />
  </figure>
  <div>
  <br><br>
  
  The marker can also have a `callout` object, giving it a small tooltip when you tap it. 

  ```js
  markers: [{
      id: 0,
      latitude: 23.099994,
      longitude: 113.32493,
      width: 50,
      height: 50,
      callout: { 
        content: "💼 Tencent HQ\nShenzhen, China",
        fontSize: 15, 
        color: "#000000", 
        padding: 1
      }
    }]
  ```
 
  
  </div>
</div>

---

You can call a custom function when a marker is tapped by using `bindmarkertap` 

<br>

```xml
<map 
  style="width: 100vw; height: 100vh;" 
  longitude="{{longitude}}" 
  latitude="{{latitude}}"
  markers="{{markers}}"
  bindmarkertap="goToVenue">
</map>
```

```js
// in your JS file
goToVenue: function(e) {
  console.log(e.detail.markerId) 
}
```

---

# Happy Mapping! 🌏