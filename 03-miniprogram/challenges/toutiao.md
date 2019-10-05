# Toutiao


![image-20191003202532319](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191003202532319.png)

Today we'll make the mobile version of this popular app!



## Core User Journey Pages

### Landing Page (Story Index)

Stories have name and content, some have photos or videos (optional)

![image-20191005060348073](images/image-20191005060348073.png)

### Story Page (Story Show)



![image-20191005060601357](/Users/dounanhu/Code/wg/china-product/03-miniprogram/challenges/images/image-20191005060601357.png)

Stories have comments

![image-20191005060723295](/Users/dounanhu/Code/wg/china-product/03-miniprogram/challenges/images/image-20191005060723295.png)

Comments have name, content, votes



### Click create icon -> Create Pages

![image-20191005061013131](/Users/dounanhu/Code/wg/china-product/03-miniprogram/challenges/images/image-20191005061013131.png)



Users can create a tweet type Story with Photo and Location:

![image-20191005061159237](/Users/dounanhu/Code/wg/china-product/03-miniprogram/challenges/images/image-20191005061159237.png)

We'll use these functions in later course



For now, our story is like the question type - just text.

![image-20191005061114431](/Users/dounanhu/Code/wg/china-product/03-miniprogram/challenges/images/image-20191005061114431.png)


Refer to this handy guide if you need:

[Documentation](https://doc.minapp.com/open-api/data/record.html)


## Landing (Index) Page

`INDEX`: 1ST ENDPOINT

For the landing page, we have the `index` page again, with data from the `index` endpoint.
Tip: Use your FML frontend as starting point to save time. They are very similar!

### 1. Use API token (or key)
[Documentation](https://doc.minapp.com/open-api/authentication.html): Where to find and how to use


```
Token: 7a82a2b76c38e309ae34ff3c83c87f8409748b0e
```
Inside the header in the form of a "Bearer Token"

```json
header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'},
```

### 2. Specify endpoint


Restful Verb and Path

```
GET /oserve/v1/table/84988/record/
```

Combine with host: `https://cloud.minapp.com/`

Do you know what the endpoint is?

```js
const index_endpoint = YOUR_ANSWER
```


Then put into a json

``` json
{
  url: index_endpoint,
  method: 'GET'
  header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'} // API key from Above
}
```

`onLoad`


``` json
{
  url: index_endpoint,
  method: 'GET'
  header: {'Authorization':'Bearer 7a82a2b76c38e309ae34ff3c83c87f8409748b0e'} // API key from Above
}
```
We don't need to send data, so can send off the request!

### 4. Send request and **wait** for response

```js
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // Save reference to page
    let page = this;

    // Your code from above
    wx.request(request);
    }
    // Get api data
  }
  //...
```

Tip: Not Working? Check your WeChat permission in Settings -> Project Settings:


### 5. Receive data from response

Two ways to get response

define a page function to be included in the request json

```js
const request = {
  //... request json from above
  success: page.getRequestData
}
```

or

```js
const request = {
  //... request json from above
  success(res) { console.log(res) }
}
```

Either way, after you console log the response, find and extract the stories data from the successful response

```js
const stories = res.SOMETHING_YOU_FIND
```

Then you can pass the stories data to the next step


### 6. Handle the data

We can now set the data of the index page to the stories

```js
// /pages/index/index.js

  // after successful response:
  const stories = res.SOMETHING_YOU_FIND

  // Update local stories data
  page.setData({
    stories: stories
  });
```

Be careful where the code above is put - can you retrace the steps and find the right place?

Note the stories' IDs are not used - why are they there? You'll see next.

## Show Story

Getting data to show one story is very similar to getting all the stories for the index page. However the endpoint is different because of a different Restful API:

```
GET /oserve/v1/table/84988/record/:id/
```


`id` can be found in the `options` of `onLoad`


```js
// /pages/show/show.js
Page({
  //...

  onLoad: function (options) {
    const id = options.id
    //...
  },
//...
```

This requires the navigation to include the `id` as a `param` in the `url`


```js
// pages/index/index.js

Page({
  //...

  // binded to delete button
  showStory(event) {
    const data = event.currentTarget.dataset;
    const id = data.id;

    wx.navigateTo({
      url: `/pages/show/show?id=${id}`
    });
  },

```

But how do we know which story to show?

We take the `id` of the click event from `data-id` attribute of the story that was clicked in `index.xml`


```xml
<view data-id=3 bindtap="showStory" > Story 3</view>
```

Remember we have comments to show too. And we want to delete any comments we don't like ;-)

### Comments Index

You can follow the same steps as getting the data for the stories index page. Only difference is that the `comments` table path is:

`/oserve/v1/table/85188/record/`

But how do we make sure that the comments belong to the story being shown?

Hint, use the query functions above to filter!


### Comments Delete

Restful API again gives us the endpoint address

```
DELETE /oserve/v1/table/84988/record/:id
```

Now we need the id of the comment to be used in the address above.

We add a `deleteComment` function to listen for the comment delete action.


```
// pages/show/show.js

Page({
  //...

  // binded to delete button
  deleteComment(event) {
    const data = event.currentTarget.dataset;

    // make a DELETE request
    wx.request({
      url: `https://cloud.minapp.com/oserve/v1/table/84988/record/${data.id}`,
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

Where do we bind the id of comment to the event?

Hint: what DOM element is sending the event when delete is clicked?

Make sure you include the `data-id` attribute in each of the comments when you show them on the page!

## Create Story

Using Restful API again

```
POST /oserve/v1/table/84988/record/

```

Find the endpoint

```js
const create_endpoint = YOUR_ENDPOINT_ADDRESS
```


Now we need to send data in the request like this

```js
wx.request({
  url: create_endpoint,
  method: 'POST',
  data: story
  //...
})
```

So we find the form data from the submission event that comes automatically  when a form is submitted

```js
// pages/new/new.js

Page({
  //...

  // New Story Submission
  bindSubmit: function (event) {
    //...

    let name = event.detail.value.name;
    let text = event.detail.value.text;

    let story = {
      name: name,
      text: text
    }

    // Post data to API
    wx.request({
      url: create_endpoint,
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

We don't need to handle the response, but instead redirect back to the stories index page.

That should be all for today! Congratulations on making a complete Wechat Mini Program all in one day!

