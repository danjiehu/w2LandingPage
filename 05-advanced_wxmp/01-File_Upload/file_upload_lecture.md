---
marp: true
---

## Adding photos and videos to our mini program! 📸 

---

Use [WeChat Image Upload](https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.chooseImage.html) API with the following settings:

- `count`: max 9 images 
- `sizeType`:  `original` or `compressed`
- `sourceType`:  `album` or `camera` (or both)

---

Here is an example of how your function might look like:

```js
 takePhoto: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
      }
    })
  }
```

---

The `fileTempPaths` from the `res`ponse will hold temporary URLs for the images:

```javascript
// console.log(tempFilePaths)
["http://tmp/wx6545a117799ef0b5.o6zAJs-Qx9fK6n67eUMn….fDk8Xlh5QYnOa097c96f52f8ed30f0970bc0d5bd4774.jpg"]
```

---

## Can we preview the images?

---

Yes! Use the [Image Preview](https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.previewImage.html) API with these settings:

- `current`: defines which image should show first
- `urls`: an array of image paths

---

Here is an example:

```js
// index.js
 previewMyImages: function(files) {
    wx.previewImage({
      current: '',  // number of index or file path
      urls: files  // Array of temp files
    })
  }
```

---

## Storing your images in the BaaS 

---

### 1. Configuring SDK  (+ hiding our app IDs 🤫 )

---

Remember you need the BaaS SDK. That's imported in `app.json`:

```js
//app.json
"plugins": {
  "sdkPlugin": {
    "version": "2.7.0",
      "provider": "wxc6b86e382a1e3294"
  }
},
```

---

Then the SDK is set up in `app.js`

```js
//app.js
App({
  onLaunch: function () {
    //...
    wx.BaaS = requirePlugin('sdkPlugin')
    wx.BaaS.init('CXBycRIiDtxxxxxxxxx')
    //...
```

---

⚠️  Here the value in `init()` is an app "secret."  It's the key to your BaaS. We don't want to commit that to Git where **everyone can see it**. 

---

#### For added security:

Save your app secret as an `AppKEY` to a separate js file, and add its name to your `.gitignore` file. Any file listed there will not be uploaded to Github.

---

```js
// key.js
module.exports = {
  appKey : 'CXBycRIiDtxxxxxxxxx'
}
```

```js
// app.js
let config = require('./key')

App({
  onLaunch: function () {
    //...
    wx.BaaS = requirePlugin('sdkPlugin')
    wx.BaaS.init(config.appKey)
    //...
```
---

Then in the `.gitignore` file (create it if you don't have it in your project root folder) we add file(s) we don't want added to Git:
```
# .gitignore
key.js
```

---

### 2. Upload files with SDK

---

To [upload to the SDK](https://doc.minapp.com/js-sdk/file/file.html#文件上传):

```js
wx.chooseImage({
  // chooseImage settings
  success: function(res) {
    let File = new wx.BaaS.File()
    let fileParams = {filePath: res.tempFilePaths[0]}
    let metaData = {categoryName: 'SDK'}

    File.upload(fileParams, metaData).then(res => {
      // Upload successful
      let data = res.data 
    }, error => {
      // Uh-oh, something happened
    })
  }
})
```

---

`fileParams` contains the temporary file path to your image. `metaData` contains any labels you want for the file on the SDK (for example a `categoryName`)

The file is now saved in your BaaS! The URL is in `res.data`. Use this in your app and save it to your object!
<br>

```js
  // ... for example:
    File.upload(fileParams, metaData).then(res => {
      let photo = res.data.path
      let restaurant = Restaurant.create()

      restaurant.set({page.data.restaurant, photo: photo })
      restaurant.save().then(dosomething)
    }
```

---

To debug,  you can find a request to the BaaS at `upload/`  "Network" console, and a response in the call after.  

<figure style="height: 90%">
  <img alt="team 4.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/o2Aerzx5jNGz1sLLoXMtbtoA" />
</figure>

---

You can manage your file on the BaaS dashboard under "File":

<figure style="width: 100%">
  <img alt="team 5.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/bAoFRj8jh8aPd2dRepwUGADC" />
</figure>

---

## Testing time!

---

<figure style="width: 100%">
  <img alt="whitelist_error.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/uHzuCRBcWrgmKpuQKqZ8PMMp" />
</figure>

---

To have the file work in the real world (e.g. not just dev but production mode), you'll need to add the file server to the WeChat MP **domain whitelist**!

---

### 3. Whitelist the BaaS domain for your MP

---

**Step 1:** Find the servers on the BaaS dashboard in "Settings" > "Domain name"
(Yours might be different than example below)

<figure style="width: 100%">
  <img alt="team 6.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/XXWQH1XWQuBUMAwsppKUmAGL" />
</figure>

---

**Step 2:** Add `uploadFile` and `downloadFile` to the whitelist in WeChat Admin Dashboard:

Under "开发" > "开发设置" and scroll to "服务器域名". 

<figure style="height: 90%">
  <img alt="team 7.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/1g3Mhoo2zTDr2arGKJaKT7wy" />
</figure>

---

Remember how Tencent protects their users? That's why they use the **whitelist** approach - all external domains are blocked, unless whitelisted. 

<br>

> Tip: all backend servers (where you or the BaaS SDK makes requests) need to be whitelisted in this panel. You can use many servers configured and change them up to 5 times a month.

---

Congrats! 🎉 

Now that you can upload media files to your BaaS, it's just about using the file URLs in [image](https://developers.weixin.qq.com/miniprogram/en/dev/component/image.html) or [video](https://developers.weixin.qq.com/miniprogram/en/dev/component/video.html) tags!

___

## Happy uploading! 🤓 