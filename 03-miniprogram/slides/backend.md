## Mini Programs 小程序 with API

API WITH DATA FOR WECHAT MPS  

## OUR FRONTEND SO FAR

![image-20191004002033273](backend/image-20191004002033273.png)

## OUR FRONTEND WITH API TODAY

![image-20191004002045936](backend/image-20191004002045936.png)

------

## APIs ALLOWS YOU TO

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

### 1. Use API token (or key)
From API provider (when creating account)
Something like:

```
API_KEY: xxxxxxxxxxxxxxxxxxxxxxxx
TOKEN: xxxxxxxxxxxxxxxxxxxxxxxx
```

Use like:

```json
header: {'Authorization':'Bearer xxxxxxxxxxxxxxxxxxxxxxxx'}
```

or as params or form data

```json
data: {'api_key': 'xxxxxxxxxxxxxxxxxxxxxxxx'}
```

For today's exercise - no API token needed

### 2. Specify endpoint 

Restful:  Verb and Path

```
GET /api/v1/stories
```

Combine with host: `https://fml.shanghaiwogeng.com`

Get endpoint: `https://fml.shanghaiwogeng.com/api/v1/stories`

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // Save reference to page
    let page = this;
    ...

    const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'GET' // If no method, default is GET
  	}
  }
  //...
```


### 3. Attach request data

Data can be sent with request as a json object

No need for our index page (we want everything).

Possible for filtering in the future:

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

For index, we don't have any data

### 4. Send request and **wait** for response

![image-20190605133710289](backend/insomnia-16362aaee683e89c76923b803287a793f7855f13f22d5497fd4ac52f09990be0.png)

Tools: You can use [Postman](https://www.getpostman.com/downloads/) or [Insomnia](https://insomnia.rest/download/)

In browser: `https://fml.shanghaiwogeng.com/api/v1/stories`

In WeChat MP:

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // Save reference to page
    let page = this;
    ...
    
	const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'GET', // If no method, default is GET
  	}
    // Get api data
    wx.request(request); // Then wait for response!
    // Rest of code will KEEP RUNNING while request waits!
  }
  //...
```

------

Not Working? -> Need WeChat permission

Wechat IDE Menu: Settings -> Project Settings:

![image-20191004182608872](backend/image-20191004182608872.png)



### 5. Receive data from response

Add a new function in your index page called `getRequestData`

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

Call the function when request responds `success`

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // Save reference to page
    let page = this;
    ...
    
	const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'GET', // If no method, default is GET
      success: page.getRequestData

  	}
    // Get api data
    wx.request(request);
  }
  //...
```

### 6. Handle the data

Pass the data is in the response to the handler

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

Add a new function in your index page called `setStories` to handle data

```js
Page({
  //...
  setStories: function (data) {  
    // Save reference to page
    let page = this;

	// Take the stories from data passed in
    const stories = data.stories;

    // Update local stories data
    page.setData({
      stories: stories
    });

  }

```



## 2TH ENDPOINT: `CREATE`

### 1. Use API token (or key)
Not needed for open API  (e.g. anyone can create, no login)

### 2. Specify endpoint 

Restful:  Verb and Path

```
POST /api/v1/stories 
```

Combine with host => Same endpoint, but POST verb:

`https://fml.shanghaiwogeng.com/api/v1/stories`

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // Save reference to page
    let page = this;
    ...

    const request = {
      url: `https://fml.shanghaiwogeng.com/api/v1/stories`,
      method: 'POST'
  	}
  }
  //...
```

### 3. Attach request data

As in a GET shown above, data is sent as a json object
For create,  data comes from form submission on `post` page:

```js
// pages/post/post.js

Page({
  //...

  // New Story Submission
  bindSubmit: function (event) {
    console.log(event.detail.value.name)
    console.log(event.detail.value.content)

    let name = event.detail.value.name
    let text = event.detail.value.text
  }
  //...
```

Then make form story data into request data

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

### 4. Send request and **wait** for response

### MINI PROGRAM: New Story

```js
// pages/post/post.js

Page({
  //...

  // New Story Submission
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

    // Post data to API
    wx.request(request); // Then wait for response!
  }
  //...
```

As before, allow WeChat permission for this api or skip the permission check.

### 5. Receive data from response

No response data is needed, instead we'll redirect back to index


### 6. Handle the data

Redirect is called in a function called `success` in the request. 
We don't need a separate page function as in `index.js`

TIP: JSON allows you to define functions inside to save you time

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

------

## Mini Program functions with API

Read more about how Mini Programs can work with APIs

- [Wechat Doc on Network Requests (English)](http://open.wechat.com/cgi-bin/newreadtemplate?t=overseas_open/docs/mini-programs/development/api/network-request)

------

## API resources

What APIs can I use? Where to find them? 

### Global
rapidapi.com
programmableweb.com
apihound.com
apiforthat.com

------

### China
apistore.baidu.com
shenjian.io
juhe.cn

------

## B2D - API Economy

Revenue through api’s

50% => Salesforce.com
60% => eBay.com
90% => Expedia.com

------

### There are 17,000 APIs

9 million private api developers

------

Explosion of APIs growth
![image-20191004180349425](backend/image-20191004180349425.png)

------

## API Strategy


APIs are key to prototyping - great for entrepreneurs

focus on unique functionalities for business
delivering initial product quickly & less expensively


APIs are vital to digital transformation

Use infrastructure so you don't build from scratch or reinvent the wheel

------

## HAPPY API-ING!