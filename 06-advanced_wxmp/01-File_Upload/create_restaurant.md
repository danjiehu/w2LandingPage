We already made an interface for commenting on restaurants, but also want **logged in** users to add new restaurants 🚀 

## Specs

### 1. Update the database

If you haven't yet, make sure to add a `photo` column to the `restaurants` table in the BaaS.


<figure style="width: 100%">
  <img alt="adding_column.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/JWAc3QaEN9FoezPmz4RCKs5V" />
<figcaption>What should be the data type of the `photo` column? 🤔 We are just storing a link to a file...
</figcaption>
</figure>

### 2. Create a `new` page

Create a page for the new restaurant creation form. Remember, you can create new pages by simply adding them to the `pages` array in `app.json` ;)

Let's edit the page and add a [`form`](https://developers.weixin.qq.com/miniprogram/en/dev/component/form.html) component. Remember that you can add a **New Compliation Mode** to recompile to this new page directly for quicker feedback!

### 3. Building the form

What do we need in the form? 🤔 

Well we need inputs for the `name` and `description` of a restaurant. For the name you can use the regular [`input`](https://developers.weixin.qq.com/miniprogram/en/dev/component/input.html) field and for the description you might want to use a [`textarea`](https://developers.weixin.qq.com/miniprogram/en/dev/component/textarea.html).

```xml
<form bindsubmit="formSubmit" bindreset="formReset">
  <view class="section">
    <input name="name" placeholder="Name of the restaurant" />
  </view>
  <view class="section">
    <textarea name="description" placeholder="Tell us about the restaurant"  />
  </view>
  
  <!-- Photo upload field -->
  
  <view class="btn-area">
    <button form-type="submit">Submit</button>
    <button form-type="reset">Reset</button>
  </view>
</form>
```

What about the photo upload field? You probably want to make something like this:


<figure style="width: 50%">
  <img alt="adding_photo_form.jpg" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/QrxGmXPyxzMLUS4if9QFv7Mf" />
<figcaption>From a past alumni project :)
</figcaption>
</figure>

So most likely your photo upload "field" will be a `view` with a few components inside, like an image and some text, or some icons. So your final form should look like this:

```xml
<form bindsubmit="formSubmit">
  <view class="section">
    <input name="name" placeholder="Name of the restaurant" />
  </view>
  <view class="section">
    <textarea name="description" placeholder="Tell us about the restaurant"  />
  </view>
  <view class="section">
    <view class="image-upload" bindtap="uploadImage">
      <!-- your beautiful image upload component -->
    </view>
  </view>
  <view class="btn-area">
    <button form-type="submit">Submit</button>
  </view>
</form>
```

### 4. The `uploadImage` function

You're ready to move on to the *logic layer*.

There are three steps to attaching a photo to a restaurant:

1. Use the built in [wx.chooseImage()](https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.chooseImage.html) API to let the user select a photo. *Recommendation: start with `count` set as 1*
2. Use the BaaS SDK [File Upload](https://doc.minapp.com/js-sdk/file/file.html#%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0) function to then upload the selected image to your database
3. Assign the image path from the `res`ponse of the upload as the `photo` of the restaurant. The code for that looks like this:
```js
let Restaurant = new wx.BaaS.TableObject('restaurants')
let restaurant = Restaurant.create()
restaurant.set({photo: res.data.path, ...}).save() // remember to set the name and description too!
```

Test! 🛠 

If all went well, the `photo` field in the restaurants table should have a URL with `https://cloud-minapp-...`.

Refresh (or *recompile*) the mini program back to the `index` page - do you see the new restaurant? 👀 
> Hint: make sure to check `do not verify valid domain names` in the IDE `Details` settings

**Bonus:** it's annoying when you can't tell if a photo has been uploaded in the form or not. Adjust your image upload field to change when an image is uploaded. Perhaps a [`wx:if`](https://developers.weixin.qq.com/miniprogram/en/dev/reference/wxml/conditional.html) can help? 🤔 

### 5. Link it up!

Add a button to the `user` page that links to the restaurant creation form. Remember, only **logged in** users should be allowed to create restaurants

After a restaurant is created is a good place for a [`wx.reLaunch`]() back to the index page - to clear the stack of loaded pages and take the user to see their newly created restaurant!