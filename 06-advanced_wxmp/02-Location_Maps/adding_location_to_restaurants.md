Time to supercharge our `retaurants` with location info! 📍 

## Spec

We want to be able to:
1. Display our restaurants on a map
2. Add an address (and hence coordinates) to a restaurant when creating it

Before we get into the fun coding part, we need to update our BaaS

<br>

### 1. Updating the BaaS

We need to add three columns to our `restaurants` table:

* `address` as a string
* `latitude` and `longitude`. **What data type should they be?** Remember the typical response JSON from getting location inside a mini program:

```js
errMsg: "getLocation:ok"
latitude: 31.2494
longitude: 121.397
```

Once done, let's go back to the mini program.

<br>

### 2. Updating the new restaurant form

Back in the `new` page, with the restaurant creation form, we need a new field.

**Question** - do we need fields for `address` , `latitude` and `longitude`?

Nope! You should only add an input for an address, since that is the information the user cares about. Lat and Long is only for *us* to pin the restaurant on a map.

The field should look like a regular input. However, we don't the user to have to type the address. Instead we want to use the [`wx.chooseLocation()`](https://developers.weixin.qq.com/miniprogram/en/dev/api/location/wx.chooseLocation.html) API!

```js
wx.chooseLocation({
  success: function(res) {
    // do something with the res
  }
})
```

After you get the the `res`ponse, you want to store it in the page's local data.

Finally, **display** the address in the input. For good UX, the user should see that the address has been selected! ⭐️ 

Your address input should look something like this:

```xml
<input bindfocus="chooseLocation" value="{{selectedAddress}}" placeholder="Click to select address"/>
```

<br>

### 3. Update the logic layer

Update your `formSubmit` function to pass address, Lat and Long in the `restaurant.set()` method 👇 

```js
let lat = page.data.lat
let long = page.data.long
let address =  page.data.address
let Restaurant = new wx.BaaS.TableObject('restaurants')
let restaurant = Restaurant.create()
restaurant.set({ lat, long, address, ...}).save() // remember to set the other fields too!
```

<br>

### 4. Test!

Try to make a `restaurant` and check your table in the BaaS - are `address`, `latitude` and `longitude` there? Are the other fields also fine? **Golden rule** - one fix might break something else 😅 So always double check!

<br>

---

You should now be good to move on to the next step - making your first `map`!