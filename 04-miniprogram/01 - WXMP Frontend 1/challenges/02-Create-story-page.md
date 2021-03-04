# Create a Stories Page

Alright, now that we have our Landing page, let's move onto our Stories page.

## Step 1: Create a new page in your app.json

Use the setup file `app.json` to add a new route inside the array `pages:[]`

```js
"pages":[
    "pages/index/index"
]
```

```js
"pages":[
    "pages/index/index",
    "pages/stories/stories"
]
```

You'll notice that a new folder has now been created in your `pages` directory!

---

## Step 2: Setup Navigation from Landing to Stories

Our `button` on index.wxml currently doesn't do much. Let's fix that.

### Step 2a: Add a navigation function to index.js

In your `index.js` add a new function which uses the [wx.navigateTo](https://developers.weixin.qq.com/miniprogram/en/dev/api/route/wx.navigateTo.html) method to navigate to the stories page.

### Step 2b: Add a bindtap to our button on index.wxml

In your `index.wxml` add a [bindtap](https://developers.weixin.qq.com/miniprogram/en/dev/framework/view/wxml/event.html) to the `button` element that references the JS function you just created.

---

## Step 3: Make your Stories page look great

Now that you're able to navigate between both pages, let's make our stories page look good.

1. We'll want a card component to display our FMC stories: each card will host **content** and **author**. Just one story is enough, we're just templating here.

2. Add a header to the top of your stories page

---

**That's it! Good job today, you've now created a two page WeChat Mini Program that looks and feels great. Next class we'll move onto how we can manipulate and render data in our app. 🚀
