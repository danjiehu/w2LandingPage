# Serverless Backend as a Service (Baas)



## ALLOWS YOU TO:

- Provide data for client (e.g. an app: web, native, Wechat Mini Program)

- Provide service to customers (e.g. sms, payment)


### NO BIG DEAL

It's just a new set of **Tables**...

...which return **JSON** format for contents of cells



### THEN Mini Program => API

Mini Program makes **API Requests**...

…and uses **JSON** from API



### NOW Mini Program => BaaS

... through **SDK**, even **easier** than API requests

------

## Data and Schema

How is data stored?

------

## Excel

Let's start with something we all know

### Example

Let's store **cities** and their **inhabitants** using Excel. How would you do it?

![img](https://kitt.lewagon.com/karr/assets/db/02-excel-cities-inhabitants-23a616d71372edd3bef4ff30c077000b2c7f71c6a8026716afb013a959c0c8e7.png)

![img](https://kitt.lewagon.com/karr/assets/db/01-excel-cities-inhabitants-ec97772039adaef6ff12c322d526ffae40f15ed8bc0b0947dbfb958f3dc09500.png)

![img](https://kitt.lewagon.com/karr/assets/db/03-excel-cities-inhabitants-aa0a85a4e73dc48eb9576ede6c05be76868c0467b1f7d9182fd98a880e322cdc.png)

![img](https://kitt.lewagon.com/karr/assets/db/04-excel-cities-inhabitants-896e163a1038d16ef9c6c4333526c73d13377e962c4dd14ead58fbc7fd01d58f.png)

## 1:n relation (one to many)

An inhabitant **belongs to** one city (or has one city)



## Toutiao Data Schema



![image-20191005071945284](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191005071945284.png)

## Relationships

![image-20191005071957338](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191005071957338.png)


## IDs => Foreign Keys

![image-20191005072007321](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191005072007321.png)

## Let's create the backend!

1. Setup BaaS
2. Install SDK
3. Create Tables
4. Add Data


## Setup BaaS

BaaS = Backend as a Service, has:
- server
- database
- api

Baas + Frontend = SaaS, aka App

[Minapp.com](https://cloud.minapp.com)



![image-20190918005342925](/Users/dounanhu/Library/Application Support/typora-user-images/image-20190918005342925.png)



![image-20190918005356038](/Users/dounanhu/Library/Application Support/typora-user-images/image-20190918005356038.png)

## Install SDK

```json
// app.json
//... other configurations
"plugins": {
  "sdkPlugin": {
    "version": "2.3.0",
    "provider": "wxc6b86e382a1e3294" //This BaaS id doesn't change
  }
}

```

Configure the [SDK](https://doc.minapp.com/js-sdk/wechat/)

```js
// app.js
App({
  onLaunch: function() {
    wx.BaaS = requirePlugin('sdkPlugin')
    //让插件帮助完成登录、支付等功能
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    const clientID = 'c1e7a280f6d8c8646756' // 知晓云管理后台获取到的 ClientID
    wx.BaaS.init(clientID)


    // Login as anonymous user
    wx.BaaS.auth.anonymousLogin().then(user => {
      console.log(user)
    }).catch(err => {
      // HError
    })
  },
})
```

Note the ability to have users!  We'll explore more in later classes.

## Creating Table

![image-20190929001937147](/Users/dounanhu/Library/Application Support/typora-user-images/image-20190929001937147.png)

![image-20190929011940227](/Users/dounanhu/Library/Application Support/typora-user-images/image-20190929011940227.png)

![image-20190929012121745](/Users/dounanhu/Library/Application Support/typora-user-images/image-20190929012121745.png)

![image-20190929012204563](/Users/dounanhu/Library/Application Support/typora-user-images/image-20190929012204563.png)



Create a `comments` table in the same way.

Add fields for name (string), content (string), and votes. What type should votes be? Hint: Is it countable?



Now add the foreign key:



![image-20191005064402018](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191005064402018.png)



Why is the `required` field checked? Don't want comments on nothing!



## Adding Data

Click "Add row" on the menu above the stories table

![image-20191003201101991](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191003201101991.png)

Then fill out this form

![image-20191003201208914](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191003201208914.png)



Add a story or two, and then some comments to the stories:

Don't forget to copy the `id` of the story for the comment's `story_id`

![image-20191005064757458](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191005064757458.png)



## Let's use the backend!

Do the same CRUD with Baas SDK instead of API



## I Go, then Your Turn

For your **Exercise**, you will be making the same backend that you used for last weekend's Toutiao Challenge!

Connect the backend to your Toutiao Mini Program through using SDK!



## Reading Data

### Multiple stories



With the `find` function in the [SDK](https://doc.minapp.com/js-sdk/schema/query.html), getting data is just these few lines

```js
// index.js, in onLoad function

let tableName = 'stories'

let Story = new wx.BaaS.TableObject(tableName)

Story.find().then(dosomething)
```

What should `dosomething` be? It's the function that handles the request response. Remember `page.getRequestData` from Toutiao challenge? You can use that here too:

```js
Page({
  //...
  getRequestData: function (res) {
    console.log(res)
    // more functions to handle the data
    // or navigate to another page!
  },
  //...
```

Then our call in `onLoad`  becomes:

```js
Story.find().then(page.getRequestData)
```

Requests are processed by another service and is not always up to you, so waiting is normal! It's called asynchronous code.

Deeper explanation: The `.then(dosomething)` is called a **promise**. You just have to know that `dosomething` will wait for `get(recordID)` to respond, just like in the Toutiao exercise with the api requests. So the promise takes care of the waiting. Plus it's A LOT cleaner to look at!

### Your turn!

Now let's implement your stories index using the [SDK](https://doc.minapp.com/js-sdk/schema/query.html)!



### Show One Story

```js
// show.js, in onLoad function

let tableName = 'stories'

let Story = new wx.BaaS.TableObject(tableName)

let recordID = id // e.g. '59897882ff650c0477f00485'

Story.get(recordID).then(dosomething)
```



### Your turn!

Now let's implement your show pages using the `get` function from the [SDK](https://doc.minapp.com/js-sdk/schema/get-record-detail.html)!  (Hint: click on the SDK for more lookup features). Remember to set the `id` from the `options` param, and  replace the `dosomething` with your show page data handling code. You can even inline the handler function like so:



```js
// index.js, in onLoad function
Story.get(recordID).then(res => {
  page.setData({
    story: res.data
  })
})
```




How often do we really want to display everything all at once? That brings us to queries:

### Querying multiple stories

What is a query? Think of it as a search function in your table

You can search text, numbers, booleans... any type with exact matching or operations like >, <=, != ...

Chances are you've been using that without knowing. Anytime you use a search bar! You are querying ;-)



So first define a query

```js
//... Define Story in onLoad function as above

// 实例化查询对象
let query = new wx.BaaS.Query()

// 应用查询对象
Story.setQuery(query).find().then(page.getRequestData)

```

Now we can run queries by using conditions like below!


```js
//... in onLoad
// 实例化查询对象
let query = new wx.BaaS.Query()

// 设置查询条件（比较、字符串包含、组合等）
query.contains('name', 'jack')

//... 应用查询对象
```


Lots of queries are possible, including  [chaining](https://doc.minapp.com/js-sdk/schema/query.html) them!

### Your turn!

Now let's implement your story creation index using the [SDK](https://doc.minapp.com/js-sdk/schema/query.html)!

Also use a filter to find comments for just one story, like we did in the weekend Toutiao challenge!

What is the query for comparing story_id?

```js
 query.compare('story_id', '=', id)
```



## Creating Data

We're ready to post new stories


```js
// new.js, in bindSubmit function

// 向 tableName 为 'product' 的数据表插入一条记录
let tableName = 'stories'
let Story = new wx.BaaS.TableObject(tableName)
let story = Story.create()

let data = {
  name: 'Boris',
  content: 'You can learn to code in 9 weeks',
}

story.set(data).save().then(page.getRequestData)
```



### Your turn

Now let's implement your new story code using the [SDK](https://doc.minapp.com/js-sdk/schema/create-record.html)

Of course, adapt any hardcoded data with code from your previous Toutiao app.



Now apply this to creating a comment as well. First add a form for new comments for a story, and then adapt the story creation code above to create the comment!



Add a form at the bottom of the story show page, just like in the Toutiao app screenshot above.

Specify the comment's story by referring back to the page story data you stored on loading. `_id` was given along with other story fields by the SDK request.

```js
// in bindSubmit function
//...
const story_id = page.data.story._id

let data = {
	name: name,
	content: content,
	story_id: story_id
}

//... Create the comment with SDK
```

Now we can proceed to create the comment with the SDK just as with creating a story from above.



```js
let tableName = 'comments'
let Comment = new wx.BaaS.TableObject(tableName)
let comment = Comment.create()

comment.set(data).save().then(res => {
  console.log(res)

  const comment = res.data

  let comments = page.data.comments
  comments.push(comment)

  page.setData({comments: comments})
})
```

When handle the response data, we added the new comment back to the page comments data. You'll recognize this from the comment update code in the Toutiao challenge .

You should now see comments appear on the page when submitted!



Lastly, we want to use the SDK for voting on and deleting the comment.

## Updating Data



```js
// 更新 tableName 为 'comments' 的数据表中 id 的数据行的 votes 字段
let tableName = 'comments'
let recordID = id // 数据行 id

let Comment = new wx.BaaS.TableObject(tableName)
let comment = Comment.getWithoutData(recordID)

comment.set('votes', 11)
comment.update().then(page.getRequestData)
```



### Your turn

Now let's implement voting code using the [SDK](https://doc.minapp.com/js-sdk/schema/update-record.html)

Remember to replace any hardcoded data with the right code from your weekend challenge's Toutiao app.



## Deleting Data



```js
// 删除 tableName 为 'comments' 的数据表中 recordID 的数据项
let tableName = 'comments'
let recordID = id

let Comment = new wx.BaaS.TableObject(tableName)
Comment.delete(recordID).then(page.getRequestData)
```

### Your turn

Now let's implement deletion code using the [SDK](https://doc.minapp.com/js-sdk/schema/delete-record.html)

