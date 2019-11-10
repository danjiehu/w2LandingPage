### 微信小程序开发文档

[你的新陪伴，收藏起来！](https://developers.weixin.qq.com/miniprogram/dev/index.html)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

![img](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/frontend/docs-268f3341797ca0c95f1faea30be512ccb9ff3701d2e2bf2c11e0bdba894f2cf4.png?token=AALUKUHIQLT7WJNIMXEUPUC5ZE72W)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 微信小程序UI库（WeUI）

[微信扫描二维码](https://github.com/Tencent/weui-wxss)
![img](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/frontend/weui-fd6e8ff2b8517881bb63911e21d306c07208d20528ed32fb38063c874b37d180.png?token=AALUKUELBZR44YRLKANFBM25ZE74M)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 课程计划

创建一个微信小程序

#### ["F*** My Code"](https://www.fmylife.com/)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 如何setup一个小程序

使用微信的开发工具

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

[下载stable build](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

![img](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/frontend/IDE-9f544b5e5eae1d228975827ab15eb33645a9116b83781c77b785ce92ed59e4fc.png?token=AALUKUGC3YTFJMUNCSXH2D25ZE75Y)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

使用touristID作为appID

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

![img](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/frontend/IDE2-be29b12163e268b876fd90935e8d46572e5cbeae523b8c4df53a0958d429d548.png?token=AALUKUBPIHYLFQ7FUPXPZG25ZE76Q)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

快速预览

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 微信小程序代码结构🤔

小程序的4种代码文件类型:

- `.wxml` = HTML文件
- `.wxss` = CSS文件
- `.js` 逻辑文件
- `.json` 配置文件（configuration）


### 小程序由以下文件运行：

- `app.js` 定义函数
- `app.json` 公共设置
- `app.wxss` 公共样式表

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 如何创建微信小程序页面

直接在app.json的pages配置中添加新路由注册即可，将生成page的四个文件（`.wxml`, `.wxss`, `.js`, and `.json`）

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

![img](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/frontend/Newpage-9c46482c1609685fcbdacff878b879cb572c435cd6ec28051ff5099d5f6fc90e.png?token=AALUKUAWV7EJMK7YCATBOFK5ZE77Q)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

提示：可以使用开发工具的编译模式（compilation mode）设置启动页面（startup page）

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### WXML语法（大同小异）

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

![img](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/frontend/wxml-html-db645e9281417073b999b276c6dd2a49f629abeebbb928f01e7719a9e0445349.png?token=AALUKUEJC4BXP5RJNYNCLGC5ZFAAG)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### JSON文件进行配置

- 定制小程序（Eg: app/page title, navigation bar color）
- 设置标签页
- 设置组件（components）

[查看所有选项](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 现场编程 1：落地页 💪

使用[Le Wagon设定的banner组件](https://uikit.lewagon.com/documentation#banner).

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 现场编程 2: 故事页面 💪

为了节省时间，使用[Le Wagon 预设的卡片组件](https://uikit.lewagon.com/documentation#card_product)（不需要产品图片）

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

不够有挑战性吗？
我们才刚刚开始...

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## 让我们开始编程

框架概念：

- 生命周期
- 数据存储
- 数据绑定（data binding）
- 逻辑控制

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 查看JS的结构

- 主要函数：**Page({...})** 或者 **App({...})**
- 数据存储：**data: {key: value}** 或者 **globalData: {key: value}**
- 生命周期：**onLoad**, **onLaunch**,...
- 自定义函数

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 小程序生命周期

可以**console.log**每个函数，以查看它们被调用的顺序。
试试`onLoad`, `onShow`, `onReady`看看有什么不同。

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

生命周期函数是指一个小程序从创建到销毁的一系列过程

![img](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/frontend/lifecycle-eda1c2a96b8b80d90e62ce2fa530e7bba9e73b91dab8119b40e8250730ee98b4.png?token=AALUKUETKMDMNXRE2CNC65C5ZFABQ)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 例如：

可以在onReady生命周期方法中创建并触发函数

```
//index.js
Page({
  testFunction: function() {
    console.log('test')
  },
  onReady: function() {
    this.testFunction()
  }
})
```

要访问该函数，用以下语法： `this.functionName()`

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 在哪里存储数据?

1. **本地数据（local data）**: 页面的内部数据
2. **全局数据（global data）**: 小程序所有页面中的共享数据
3. **缓存（cache）**: 用户手机本地
4. **服务器（server）**: 通过API！

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 查看WXML中的本地数据

可以将数据存储在JS文件中，并在WXML文件中访问。这称为**数据绑定（data binding）**。

```
//index.js
Page({
    data: { name: 'Allen' }
})
<!-- index.wxml -->
<text> My name is {{name}}</text>
```

与HTML相比，WXML更多样化：是一种**模板语言（templating language）**!

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### setData({ })

可以更新本地数据存储中的一些值

```
//index.js
Page({
    data: { text: "Original data" },
    testFunction: function() {
        console.log(this.data.text)
        this.setData({
            text: 'F My Code!'
        })
    },
    onReady: function() {
        this.testFunction()
  }
})
<!-- index.wxml -->
<text> {{text}}</text>
```
![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### this.data

可以访问JS代码中的本地数据

```
//index.js
Page({
    data: { text: "original data" },
    onReady: function() {
        console.log(this.data.text)
  }
})
```
![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 触发函数（example 1）

可以通过向元素添加**bindtap**中的参数从`.wxml`文件触发函数

```
//index.js
Page({
    testFunction: function() {
        console.log('Trigger testFunction from Button')
  }
})
<!-- index.wxml -->
<button bindtap="testFunction">OK</button>
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 触发函数（example 2）

```
//index.js
Page({
  myToast: function() {
      wx.showToast({
          title: 'SUCCESS'
        })
    }
})
<!-- index.wxml -->
<button bindtap="myToast">Show Success Toast</button>
```

[showToast API文档](https://developers.weixin.qq.com/miniprogram/dev/api/wx.showToast.html)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### WXML一个高级视图层

可以在`<view>`和`<block>`上使用特殊属性

1. **wx:for** control属性：绑定数组（array）
2. **wx:if** 条件属性：绑定语句

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### wx:for

Example 1：简单版本（`item`是默认的）

```
<!-- index.wxml -->
<view wx:for="{{['Restaurant 1','Restaurant 2','Restaurant 3']}}">
    <view>{{item}}</view>
</view>
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

Example 2：带有自定义index和item的完整版

```
<view wx:for="{{['Restaurant 1','Restaurant 2','Restaurant 3']}}"
wx:for-index="index" wx:for-item="restaurant">
  <view>{{index}}: {{restaurant}}</view>
</view>
```
![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### wx:for

还可以直接从页面的数据中获取数据！

```
//index.js
Page({
  data: {
    thingsIcoded:
    [
        { module: "Programming", name: "Black Jack" },
        { module: "OOP", name: "Food Delivery" },
        { module: "Databases", name: "Hacker News" },
        { module: "Front", name: "Chatroom" },
        { module: "WeChat", name: "FMC" }
    ]
  },
})
<!-- index.wxml -->
<view wx:for="{{thingsIcoded}}" wx:for-item="thing">
  <view>
    {{thing.module}} | {{thing.name}}
  </view>
</view>
```
![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### wx:if

可以使用**wx:if**隐藏或显示卡片组件

```
<view wx:if="{{true}}">...</view>
<view wx:if="{{false}}">...</view>
```
![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### wx:if

逻辑可以直接写在WXML文件中

```
<view wx:if="{{true}}">Fuck My Code 1</view>
<view wx:if="{{1 === 1}}">Fuck My Code 2</view>
<view wx:if="{{1 === 2}}">Fuck My Code 3</view>
```
![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### wx:if

还可以直接从页面的数据对象获取语句

```
//index.js
Page({
    data: {
        trueStatement: true,
        falseStatement: false
    }
})
<!-- index.wxml -->
<view wx:if="{{trueStatement}}">Fuck My Code 1</view>
<view wx:if="{{falseStatement}}">Fuck My Code 2</view>
```
![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### Live code 3: 改善设计（添加添加多个卡片）💪

在**stories页面**中显示多个stories，而不重复相同的WXML标记。

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 全局数据（Global Data）

在页面中存储数据比较mainstream

- 所有Javascript页面可以从`app.js`文件访问**全局数据（globalData）对象**
- 但WXML文件不可直接访问**全局数据（globalData）**...

```
//app.js
App({
  globalData: {
    userInfo: { nickName: "salmon", gender: 1 }
  }
})
//index.js
let app = getApp()

Page({
  data: { userInfo: app.globalData.userInfo }
})
<!-- index.wxml -->
<view>Hello {{userInfo.nickName}}</view>
```
![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 在哪里存储数据？
![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

#### 遵循以下指南..

- 数据验证 👉 **缓存（cache）**
- 小程序中多次使用的数据（ex: userId） 👉 **全局数据（globalData）**
- 获取仅与页面相关的数据 👉 **本地数据 page.js**

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### Live code 4：创建一个Post页面💪

使用一个表单在全局数据存储中添加新的FMC stories

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

#### Congratulations, you're a mini program developer!
