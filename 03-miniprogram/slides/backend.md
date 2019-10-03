## Mini Programs 小程序 with API

API WITH DATA FOR WECHAT MPS  

## OUR FRONTEND SO FAR

![image-20191004002033273](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191004002033273.png)

## OUR FRONTEND WITH API TODAY

![image-20191004002045936](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191004002045936.png)

------

## APIs ALLOWS YOU TO:

- Provide data for client (e.g. an app: web, native, Wechat Mini Program)
- Provide service to customers (e.g. sms, payment): later course


### NO BIG DEAL

It's just a new set of **Endpoints**...

...which return **JSON** format for contents of cells

### THEN JSON => Mini Program

Mini Program makes **API Requests**...

…and uses **JSON** from API instead of static data (e.g globalData in app.js)

------
## JSON (refresher)
![Image result for json example](https://blog.supertext.ch/wp-content/uploads/2016/07/json_file_example_01.png)

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

4 Verbs: GET, POST, PUT, DELETE

------

## 6 STEPS OF USING API
1. Use API key
2. Specify endpoint 
3. Attach request data
4. Send request and **wait** for response
5. Receive data from response
6. Handle the data

------

## `INDEX`: 1ST ENDPOINT

For showing all the stories

### 1. Use API key
From API provider (when creating account):

```
API_KEY
```


### 2. Specify endpoint 

Verb and address
```
GET /api/v1/stories
```



### 3. Attach request data

```
# app/controllers/api/v1/stories_controller.rb
class Api::V1::StoriesController < Api::V1::BaseController
  def index
    @stories = Story.all
    render json: @stories #Just for testing
  end
end
```

### 4. Send request and **wait** for response

![image-20190605133710289](https://kitt.lewagon.com/karr/assets/china/wx-mp/insomnia-16362aaee683e89c76923b803287a793f7855f13f22d5497fd4ac52f09990be0.png)

Tools: You can use [Postman](https://www.getpostman.com/downloads/) or [Insomnia](https://insomnia.rest/download/)

In browser: http://localhost:3000/api/v1/stories

In WeChat MP:

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // Save reference to page
    let page = this;
    ...

    // Get api data
    wx.request({
      url: "http://localhost:3000/api/v1/stories",
      method: 'GET'
    });
  }
  //...
```

### 5. Receive data from response


```js
// /pages/index/index.js
Page({
  //...
  getRequestData: function (res) {
    const data = res.data;

    page.setStories(data);
  }

```

```js
Page({
  //...
  onLoad: function (options) {
    // Save reference to page
    let page = this;
    ...

    // Get api data
    wx.request({
      url: "http://localhost:3000/api/v1/stories",
      method: 'GET',
      success: getRequestData
    });
  }
  //...
```

### 6. Handle the data

```js
Page({
  //...
  setStories: function (data) {
    const stories = data.stories;

    // Update local stories data
    page.setData({
      stories: stories
    });

  }

```

------

## 2ND ENDPOINT: `SHOW`

```
GET /api/v1/stories/:id
```





### MINI PROGRAM: Show Story

```
// /pages/show/show.js
Page({
  //...

  onLoad: function (options) {

    let page = this;

    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${options.id}`,
      method: 'GET',
      success(res) {
        const story = res.data;

        // Update local data
        that.setData(
          story
        );

        wx.hideToast();
      }
    });
  }
  //...
```

------

## 3RD ENDPOINT: `UPDATE`

```
PUT /api/v1/stories/:id 
```



### MINI PROGRAM: Edit Story Form

```
// pages/edit/edit.js

Page({
  //...

  // Retrieve user info
  onLoad: function (options) {
    let page = this;

    wx.showToast({
      title: 'Loading...',
      icon: 'loading',
      duration: 1500
    });


    // Get story data from server (to show in form)
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${options.id}`,
      method: 'GET',
      success(res) {
        var story = res.data;

        // Update local data
        page.setData(
          story
        );

        wx.hideToast();
      }
    });
  }
  //...
```

### MINI PROGRAM: Submit Edit

```
// pages/edit/edit.js

Page({
  //...

  // Retrieving data from the view
  bindSubmit: function (e) {

    //...

    let name = e.detail.value.name;
    let text = e.detail.value.text;
    let id = this.data.id;

    let story = {
      name: name,
      text: text
    }

    // Update api data
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      method: 'PUT',
      data: story,
      success() {
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  }
  //...
```

------

## 4TH ENDPOINT: `CREATE`

```
POST /api/v1/stories 
```



### MINI PROGRAM: New Story

```
// pages/new/new.js

Page({
  //...

  // New Story Submission
  bindSubmit: function (e) {
    //...

    let name = e.detail.value.name;
    let text = e.detail.value.text;

    let story = {
      name: name,
      text: text
    }

    // Post data to API
    wx.request({
      url: `http://localhost:3000/api/v1/stories`,
      method: 'POST',
      data: story,
      success() {
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  }
  //...
```

------

## 5TH ENDPOINT: `DESTROY`

```
DELETE /api/v1/stories/:id 
```



### MINI PROGRAM: Delete Button

```
// pages/show/show.js

Page({
  //...

  // binded to delete button
  deleteStory(e) {
    const data = e.currentTarget.dataset;

    // make a DELETE request
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${data.id}`,
      method: 'DELETE',
      success() {
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  }
  //...
```

------

## Mini Program functions with API

Read more about how Mini Programs can work with APIs

- [Wechat Doc on Network Requests (English)](http://open.wechat.com/cgi-bin/newreadtemplate?t=overseas_open/docs/mini-programs/development/api/network-request)

------

## API resources

What APIs can I use? Where to find them? 

Global
Rapid API
Programmable Web

In China

------

## B2D - API Economy

Companies with revenue from APIs:

Explosion of APIs growth

------

## API Strategy

APIs are key to prototype

Digital transformation

Use infrastructure, don't build from scratch, reinvent the whell...

------

## HAPPY API-ING!