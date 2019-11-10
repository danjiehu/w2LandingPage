## How to use the solutions

Toutiao-SDK:[Navigate to this folder](solutions/toutiao-sdk/)

Dianping:[Navigate to this folder](solutions/dianping/)

Meituan Waimai:[Navigate to this folder](solutions/waimai/)

Before your import it on the WeChat IDE, here's some quick set up to do:

### 1. Add your WeChat app ID

Only authorized developers can open and edit an app!
Start by adding your own WeChat App ID, since for sure you are authorized there 😉

- Locate `project.config.json`
- Under the "setting" object, edit the value in `"appid": "YOUR-WECHAT-APP-ID"`

### 2. Setup your own BaaS client ID

https://cloud.minapp.com will not let you download data from their server if they can't recognize you... You need to initialize the SDK with your own credentials!

- Open `app.js`
- Edit `wx.BaaS.init('YOUR-CLIENTID')` with your own ClientID

Please read this [Documentation](https://doc.minapp.com/js-sdk/wechat/) to find your ClientID.
