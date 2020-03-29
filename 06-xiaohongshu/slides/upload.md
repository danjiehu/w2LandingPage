## Uploading Photos

### 1. Take a picture or choose one from an album

Use [WeChat Image Upload](https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.chooseImage.html) with the following settings:

- `count`: max 9 images 
- `sizeType`:  `original` or `compressed`
- `sourceType`:  `album` or `camera`

```js
// index.js
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

Then get the image from the successful upload, find `fileTempPaths` from the result `res`

```javascript
// console.log(tempFilePaths)
["http://tmp/wx6545a117799ef0b5.o6zAJs-Qx9fK6n67eUMn….fDk8Xlh5QYnOa097c96f52f8ed30f0970bc0d5bd4774.jpg"]
```

How do you see this image?

### 2. Preview images

Use the [Image Preview](https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.previewImage.html) with these settings:

- `current`: defines which image should show first
- `urls`: an array of image paths

```js
// index.js
 previewMyImage: function(files) {
    wx.previewImage({
      current: '',  // number of index or file path
      urls: files  // Array of temp files
    })
  }
```

### 3. Store your images on the BaaS

#### Configure SDK  (optionally hide app secret)

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

Here the value in `init()` is an app "secret."  It's the key to your backend. We don't always want to commit that to Git where **everyone can see it**. 

#### For added security (optional):

Save your app secret as an `AppKEY` to a separate js file, and add its name to your `.gitignore` file. Any file listed there will not be uploaded to Github.

```js
// app.js
let AV = require('./utils/av-weapp-min.js')
let config = require('./key')

App({
  onLaunch: function () {
    //...
    wx.BaaS = requirePlugin('sdkPlugin')
    wx.BaaS.init(config.appKey)
    //...
```

```js
// key.js
module.exports = {
  appKey : 'CXBycRIiDtxxxxxxxxx'
}
```

in `.gitignore` (create it if you don't have it in your project root folder)
```
# .gitignore
key.js
```


### 4. Upload files with SDK

To [upload to the SDK](https://doc.minapp.com/js-sdk/file/file.html#文件上传):

```js
wx.chooseImage({
  success: function(res) {
    let MyFile = new wx.BaaS.File()
    let fileParams = {filePath: res.tempFilePaths[0]}
    let metaData = {categoryName: 'SDK'}

    MyFile.upload(fileParams, metaData).then(res => {
      // Upload successful
      let data = res.data 
    }, err => {
      // HError 
    })
  }
})
```

`fileParams` contains the `path` to your image as explained in the first section. `metaData` contains any labels you want for the file on the SDK. 

The saved file URL is in `res.data`. Use this in your app and save it to your data!

To debug,  you can find a request to the BaaS at `upload/`  "Network" console, and a response in the call after.  

![image-20191126152638302](https://github.com/lewagon/china-product/raw/master/06-xiaohongshu/slides/images/image-20191126152638302.png)

You can manage your file on the BaaS dashboard under "File":

![image-20191126153108043](https://github.com/lewagon/china-product/raw/master/06-xiaohongshu/slides/images/image-20191126153108043.png)

To have the file work in the real world (e.g. not just dev but production mode), you'll need to add the file server to the WeChat MP configuration!

### 5. Whitelist the BaaS domain for your MP

**Step 1:** Find the servers on the BaaS dashboard in "Settings" > "Domain name"
(Yours might be different than example below)

![image-20191126153438960](https://github.com/lewagon/china-product/raw/master/06-xiaohongshu/slides/images/image-20191126153438960.png)

**Step 2:** Add `uploadFile` and `downloadFile` to the whitelist in WeChat Admin Dashboard:

Under "开发" > "开发设置" and scroll to "服务器域名". 

![image-20191126153926309](https://github.com/lewagon/china-product/raw/master/06-xiaohongshu/slides/images/image-20191126153926309.png)

> Tip: all backend servers (where you or the BaaS SDK makes requests) need to be configured in this panel. You can use many servers configured and change them up to 5 times a month.
