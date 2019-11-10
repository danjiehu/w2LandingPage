## 带有API的小程序（Mini Programs）

带有数据的微信小程序的API

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## 之前的前端

![image-20191004002033273](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/backend/image-20191004002033273.png?token=AALUKUDEWGFKOOATP6B3R325ZE36Y)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## 今天，前端与API

![image-20191004002045936](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/backend/image-20191004002045936.png?token=AALUKUAQY7LKLJO2XTOBH725ZE3XE)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## API功能

- 存储数据在客户端本地（e.g. app: web, 本机应用程序native, 微信小程序）
- 为客户提供服务的方法（e.g. 短信，付款）

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### NO BIG DEAL

只不过是一组为单元格内容返回**JSON**数据格式形式的新**端点（endpoints）**...

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 然后，JSON => 小程序

小程序发起**API请求（requests）**本地的**JSON**数据而不是静态数据（e.g app.js文件中的全球对象globalData）

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## JSON复习
![Image result for json example](https://blog.supertext.ch/wp-content/uploads/2016/07/json_file_example_01.png)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## REST-FUL API

```
Purpose       Verb      URI Pattern                  Table#Action
all stories   GET       /stories                     stories#index
create story  POST      /stories                     stories#create
one story     GET       /stories/:id                 stories#show
edit story    PUT       /stories/:id                 stories#update
delete story  DELETE    /stories/:id                 stories#destroy
```

请求方式：GET, POST, PUT, DELETE

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## 使用API的6个步骤
1. 使用API key
2. 指定端点（endpoint）
3. 连接请求数据
4. 发送请求并等待响应
5. 从响应获取数据
6. 处理数据

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## `INDEX`：第一个端点

显示所有stories

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 1. 使用API provider提供的API token（或者key）
例如：

```
API_KEY: xxxxxxxxxxxxxxxxxxxxxxxx
TOKEN: xxxxxxxxxxxxxxxxxxxxxxxx
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

像这样使用:

```
header: {'Authorization':'Bearer xxxxxxxxxxxxxxxxxxxxxxxx'}
```

为参数（params）或表单数据

```
data: {'api_key': 'xxxxxxxxxxxxxxxxxxxxxxxx'}
```

今天的challenges不需要API token

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 2. 指定端点

Restful：请求方式（request）及路径（path）

```
GET /api/v1/stories
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

与主机（host）结合： `https://fml.shanghaiwogeng.com`

获取端点： `https://fml.shanghaiwogeng.com/api/v1/stories`

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // this代表的是当前page对象，只能在函数内部使用
    let page = this;
    ...

    const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'GET' // 如果无方法，默认GET请求方式
    }
  }
  //...
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------


### 3. 连接请求数据

通过请求（作为json对象）获取数据

不需要index页面（我们将获取所有数据）


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

能够进行筛选:

```js
// /pages/index/index.js
// in onLoad
   ...
    let filter = {
      include: 'My name',
    }

    const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'GET',
      data: filter // Not today, but later in course
    }
```

index中没有任何数据


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 4. 发送请求并等待响应

![image-20190605133710289](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/backend/insomnia-16362aaee683e89c76923b803287a793f7855f13f22d5497fd4ac52f09990be0.png?token=AALUKUDVZOKF65DBA5UPMQC5ZE56G)


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

工具：使用[Postman](https://www.getpostman.com/downloads/) 或者 [Insomnia](https://insomnia.rest/download/)


浏览器： `https://fml.shanghaiwogeng.com/api/v1/stories`


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

微信小程序：

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // this代表的是当前page对象，只能在函数内部使用
    let page = this;
    ...

  const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'GET', // 如果无方法，默认GET请求方式
    }
    // 获取api数据
    wx.request(request); // 等待响应！
    // 当请求等待时，其余的代码将继续运行！
  }
  //...
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

Not Working? -> 需要获微信许可

Wechat IDE Menu: Settings -> Project Settings:

![image-20191004182608872](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/backend/image-20191004182608872.png?token=AALUKUH3GBUVZQKI53N4WC25ZE6AQ)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 5. 从响应获取数据

在index页面中添加一个新函数：`getRequestData`


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

```js
// /pages/index/index.js

Page({
  //...
  getRequestData: function (res) {
  console.log(res)
  },
  onLoad: function (options) {
  //...

```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

当请求响应`success`时调用该函数

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // this代表的是当前page对象，只能在函数内部使用
    let page = this;
    ...

  const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'GET', // 如果无方法，默认GET请求方式
      success: page.getRequestData

    }
    // Get api data
    wx.request(request);
  }
  //...
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 6. 处理数据

将响应中的数据传递给处理程序


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

```js
// /pages/index/index.js

Page({
  //...
  getRequestData: function (res) {
  console.log(res)

  const data = res.data;
    page.setStories(data);
  },
  onLoad: function (options) {
  //...

```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

在index页中添加`setStories`的函数将处理数据

```js
Page({
  //...
  setStories: function (data) {
    // this代表的是当前page对象，只能在函数内部使用
    let page = this;

  // 获取stories的数据从
    const stories = data.stories;

    // 更新本地stories数据
    page.setData({
      stories: stories
    });

  }

```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## 第二个端点：`CREATE`


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 1. 使用API token（或者key）
不需要开放API（e.g. anyone can create, 无须login）


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 2. 指定端点

Restful：请求方式（request）及路径（path）

```
POST /api/v1/stories
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

结合主机（host）=> 同样端点，但POST 方法：

`https://fml.shanghaiwogeng.com/api/v1/stories`


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // this代表的是当前page对象，只能在函数内部使用
    let page = this;
    ...

    const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'POST'
    }
  }
  //...
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 3. 连接请求数据

如以上的GET所示，通过请求（作为json对象）获取数据
For create，数据来自`post`页面的表单提交：


```js
// pages/post/post.js

Page({
  //...

  // 新的story提交
  bindSubmit: function (event) {
    console.log(event.detail.value.name)
    console.log(event.detail.value.content)

    let name = event.detail.value.name
    let text = event.detail.value.text
  }
  //...
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

然后将story的表单数据转换为请求数据

```js
// /pages/post/post.js
// in bindSubmit

   ...
    let story = {
      name: name,
      text: text
    }

    const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'POST',
      data: story
    }
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 4. 发送请求并等待响应

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 微信小程序：新的Story

如上，为api允许微信权限或跳过权限检查

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

```js
// in Page() pages/post/post.js 提交新的Story
  bindSubmit: function (event) {
    console.log(event.detail.value.name)
    console.log(event.detail.value.content)

    let name = event.detail.value.name
    let text = event.detail.value.text

    let story = {
      name: name,
      text: text
    }

    const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'POST',
      data: story
    }

    // 发射数据
    wx.request(request); // Then wait for response!
  }
```


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 5. 从响应获取数据

不需要响应数据，而是将重定向回index

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 6. 处理数据

重定向在`success`的函数中调用，不需要像`index.js`那样单独的页面函数


提示：JSON allows you to define functions inside to save you time

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

```js
// /pages/post/post.js
// in bindSubmit

    //...

    const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'POST',
      data: story,
      success() {
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    }

    //...
```

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## 小程序函数与API

深度阅读小程序api是如何构成的

- [Wechat Doc on Network Requests (English)](http://open.wechat.com/cgi-bin/newreadtemplate?t=overseas_open/docs/mini-programs/development/api/network-request)

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## API资源

我可以使用哪些api？

### 全球
rapidapi.com
programmableweb.com
apihound.com
apiforthat.com

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 国内
apistore.baidu.com
shenjian.io
juhe.cn

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## B2D - API经济

Revenue through api’s

50% => Salesforce.com
60% => eBay.com
90% => Expedia.com

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

### 17,000个API

900万私有api开发者

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

Explosion of APIs growth
![image-20191004180349425](https://raw.githubusercontent.com/dounan1/china-product/master/03-miniprogram/slides/backend/image-20191004180349425.png?token=AALUKUH66YDEFPSR72XB6FC5ZE432)


![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## API策略


api对于原型设计是必不可少的——对创业者而言非常重要

关注业务的独特功能
快速且低成本地开发初始产品


api对数字转型至关重要

Use infrastructure so you don't build from scratch or reinvent the wheel

![bg](https://raw.githubusercontent.com/dounan1/china-product/master/02-javascript/slides/background.png?token=AK2POYHILYGQILLSNHFK4O25YFWFA)

------

## HAPPY API-ING!
