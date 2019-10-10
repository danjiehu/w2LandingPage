## How to use Toutiao-SDK app (solution)

- [Navigate to this folder](solutions/toutiao-sdk/) on your computer. It contains our solution.
- Before your import it on the WeChat IDE, some quick set up to do:

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
