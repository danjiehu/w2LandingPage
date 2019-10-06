# Photo Uploading

## Take a picture or choose one from an album

[📚 wx.chooseImage() [中文]](https://developers.weixin.qq.com/miniprogram/dev/api/media-picture.html#wxchooseimageobject)

- Count: max 9 images
- SizeType:  'original' or 'compressed'
- SourceType:  'album' , 'camera'

```javascript
// index.js
 takePhoto: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths)
      }
    })
  }
```

Get the result from `fileTempPaths`

```javascript
// console.log(tempFilePaths)
["http://tmp/wx6545a117799ef0b5.o6zAJs-Qx9fK6n67eUMn….fDk8Xlh5QYnOa097c96f52f8ed30f0970bc0d5bd4774.jpg"]
```

## Preview images

![](https://github.com/pitipon/MP-Lecture-Image/blob/master/previewimage.png?raw=true)

[📚 wx.previewImage() [中文]](https://developers.weixin.qq.com/miniprogram/dev/api/media-picture.html#wxpreviewimageobject)

- Current: defines which image should show first
- Urls: an array of image paths

```javascript
// index.js
 previewMyImage: function(files) {
    wx.previewImage({
      current: '',  // number of index or file path
      urls: files  // Array of temp files
    })
  }
```


## Store your images on [LeanCloud](https://leancloud.cn/)

1. **Register a [new account on LeanCloud](https://leancloud.cn/dashboard/login.html#/signup)** (it's free)

2. **Create a new project on LeanCloud and get an and `AppID`,` AppKEY`**

3. **Grab the LeanCloud SDK `av-weapp.min.js` and add it to your `utils` folder**

[av-weapp-min.js is available in this repo](https://github.com/pitipon/Thanos-MP/blob/master/utils/av-weapp-min.js)

4. **Initialize LeanCloud with your `AppID` and `AppKEY`**

(save your `AppID` and `AppKEY` to a separate js file, and add it to your `.gitignore` file so that it will not be uploaded to github)

```javascript
// app.js
  const AV = require('./utils/av-weapp-min.js')
  const config = require('./key')
  // Initialization of the app

  AV.init({
    appId: config.appId,
    appKey: config.appKey,
  });
```

```javascript
// key.js
  module.exports = {
    appId : '3kqKsQYB4gVrjYxxxxxxx',
    appKey : 'CXBycRIiDtxxxxxxxxx'
  }
```



Security tip: use Gitignore to hide your keys!

**Do not expose your `AppID` or `AppSecret` on GitHub**

Any sensitive information such as your `AppID`, `AppSecret`, and LeanCloud `AppKEY`, should be stored in your `project.config.json` file and ignored by git using a `.gitignore` file

```bash
# .gitignore
project.config.json
```

5. **Implement LeanCloud Upload from Camera**

```javascript
//index.js
const app = getApp()
const AV = require('../../utils/av-weapp-min.js');

Page({
  data: {
    items: []
  },
  onLoad: function () {
  },
  takePhoto: function() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        let tempFilePath = res.tempFilePaths[0];
        new AV.File('file-name', {
          blob: {
            uri: tempFilePath,
          },
        }).save().then(
          file => console.log(file.url())
        ).catch(console.error);
      }
    });
  }
})
```

![](https://github.com/pitipon/MP-Lecture-Image/blob/master/leancloud.png?raw=true)



## Whitelist the LeanCloud domain for your MP

1. **[Go to your MP dashboard](https://leancloud.cn/docs/weapp-domains.html)**

2. **Add LeanCloud to the whitelist as shown below**

   ![](https://github.com/JakeTompkins/files/raw/master/images/whiteListLeanCloud.png)




