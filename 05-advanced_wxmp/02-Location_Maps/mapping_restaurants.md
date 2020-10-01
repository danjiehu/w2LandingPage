Next up - marking the restaurants on a map! 🗺 

## Specs

We want to make a map with all our restaurants. And then we want to make the markers **interactive**! 🤩

<br>

### 1. The [`map`](https://developers.weixin.qq.com/miniprogram/en/dev/component/map.html) component

First of all - where do you put it? 🤔 

How about a map tab in your `tabBar`! You can check the WXMP built-in tab bar docs [here](https://developers.weixin.qq.com/miniprogram/en/dev/reference/configuration/app.html#tabbar) (scroll all the way to the bottom). Remember to first add the new map page to your `pages` array in `app.json`.

After that's done, add a `map` component to the new page. Give it some `height` and `width` to make it fit well on the page 🖼 

Where is the map pointing to? 🤔  Well, probably Beijing - that's the default if you haven't set any latitude or longitude yet.

Let's center it on the user!

<br>

### 2. Getting user permission for their location

Remember that getting user location is a two-step process:

1. You need to ask user for **authorization** first
2. Then you can user the build in `wx.getLocation()` API

You can check the documentation about adding a [`permission`](https://developers.weixin.qq.com/miniprogram/dev/reference/configuration/app.html#permission) clause in your `app.json`. It should look something like this 👇 

```js
// make sure to put commas in the right places...
"permission": {
    "scope.userLocation": {
      "desc": "A message to tell the user why you need permission"
    }
  }
// ...
```

That will pop-up a modal, asking the user to authorize your mini program to get their location data:

<figure style="width: 50%">
  <img alt="location_permission.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/4ryTjxAmdgdsgcVzgEPWt7Ju" />
<figcaption>"We need to find you" is coming from the `desc` in the permission
</figcaption>
</figure>

#### What if the user doesn't give permission?! 😱 
<details>
When using `wx.authorize`, if a user denies permission once, it will permanently save that setting and will not ask for authorization again! 😱

To go around that, you can use `open-type="openSetting"` on your authorization button to check the current settings for different permission scopes and then call `wx.authorize` on specific scope from there:

```xml
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

</details>

<br>

### 3. Centering the map on the user

Now that we (hopefully) have user's permission, let's use the the [`wx.getLocation()`](https://developers.weixin.qq.com/miniprogram/en/dev/api/location/wx.getLocation.html) API, which returns the user's coordinates - `latitude` and `longitude`. Set these to your local page data.

You should be doing this inside the `onLoad` lifecycle, so that when the map loads, it's already centered on the user.

Time to add the Lat and Long to your map:

```xml
<map latitude="{{lat}}" longitude="{{long}}"/>
```

<br>

### 4. Adding markers to the map

Now comes an interesting part - how do we turn our `restaurants` into `markers`? 🤔 

First of all, we need to get *all* the restaurants from our BaaS:

```js
// inside the onLoad lifecycle...
let Restaurant = new wx.BaaS.TableObject('restaurants')
Restaurant.find().then( res => {
  console.log(res.data)
})
```

If the `res`ponse is successful, you should see an array of **restaurant objects** in the console. Something like this:

```js
[
  //...
  {
    id: "sdkvdf874asdbsf34"
    name: "McDonald's",
    description: "I'm lovin' it",
    address: "Shanghai Pudong Airport",
    latitude: 31.150343432,
    longitude: 121.806285735,
    photo: "https://cloud-minapp-13908.cloud.ifanrusercontent.com/1kFq1uH13sjFBO7W.jpg"
  },
  //...
]
```

But we want to turn this array into an **array of markers**. You can scroll to the bottom of [`map`](https://developers.weixin.qq.com/miniprogram/en/dev/component/map.html) documentation to find an example of a marker - you'll see they also have `latitude`, `longitude`, `id`, but there's also other fields we want, like a `callout`...

So in short:

> We need to turn an array of X items into a *transformed* array of X items

That's exactly why the JavaScript [`.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) function exists! 🎯 

From the docs above, here is an example of how it works:

```js
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]
```

So, based on this example, we want to `map` the array of restaurants into a new array of markers:

```js
// after getting the response from BaaS
let restaurants = res.data

let markers = restaurants.map( restaurant => {
  // now for each restaurant we need to make a `marker` object
  let marker = {
    id: restaurant.id,
    latitude: restaurant.latitude,
    longitude: restaurant.longitude,
    iconPath: "/images/path_to_your_icon.png",
    height: 50,
    width: 50,
    callout: { content: restaurant.name }
  }
  return marker
})
page.setData({ markers })
```

Check in your **AppData** to make sure that you have the `markers` key in your page's local data:

<figure style="width: 60%">
  <img alt="map_markers.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/dvKUegZ2BxpEHPgEaJwuUdpB" />
</figure>

Now add the markers to your `map` component:

```xml
<map latitude="{{lat}}" longitude="{{long}}" markers="{{markers}}"/>
```

<figure style="width: 50%">
  <img alt="map_with_markers.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/mF7E92px8sndfYDrJDWEXTxP" />
<figcaption>Please don't use the default icons... 🙏 
</figcaption>
</figure>

Lastly, can you improve the `callout` message? Make sure to check out the docs - you can change text size, padding and more. Also, make a nice message combining the name and description of restaurant using **string interpolation**:

```js
let age = 18
console.log(`Congratulations, you are now ${age}!`) // make sure to use the backticks ``
```

<br>

### 5. Final step - redirecting to a restaurant `show` page!

By default, tapping on a marker displays it's  tooltip (`callout`) - which is great! As a user, you would want to see the details of a restaurant before going further.

But check this out - the folks at Tencent also added a `bindcallouttap` which is an event handler for when a user clicks on the tooltip. Let's go ahead and bind it to a `goToRestaurant` function:

```xml
<map latitude="{{lat}}" longitude="{{long}}" markers="{{markers}}" bindcallouttap="goToRestaurant"/>
```

Now in our .js file:

```js
goToRestaurant: function(e) {
  console.log(e.detail)
}
```

You'll see that the event `e` stores the `markerId` - which you set to be the same as the restaurant `id`! 💡 

That means, from here you can navigate to the restaurant show page, passing this ID as a **query param**:

```js
  goToRestaurant: function(e) {
    let restaurant_id = e.detail.markerId
    wx.navigateTo({
      url: `pages/show/show?id=${restaurant_id}`
    })
  }
```

Now go to the .js file of the `show` page and check your `onLoad` lifecycle function. It should look something like this:

```js
  // inside the onLoad lifecycle
  let id = options.id
  let Restaurant = new wx.BaaS.TableObject('restaurants')
  Restaurant.get(id).then(dosomething)
```

**You already have all the code implemented! 🚀 **

Navigating to this page from a marker works the same way as navigating from clicking a restaurant in a list - just the *source* of the restaurant `id` is different.

Since you already completed the user story of `as a user, I can see one restaurant`, this page should be good to go! 🙌 

