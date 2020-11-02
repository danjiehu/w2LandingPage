### 4. Data binding introduction

WXML is much more than HTML: it's a **templating language** allowing us to [inject javascript variables and even loop through our local data](https://developers.weixin.qq.com/miniprogram/en/dev/framework/view/wxml/)! The magic happens when you use this syntax: `{{variable or operation}}`.

We call it the **mustache syntax** 👨‍🦰 and it connects JS and HTML both ways...

**From JS to WXML ➡️**

- Store ‘Who is here?’ inside a `text` variable in the `stories.js` page data

```js
//stories.js
Page({
  data: {
    text: 'Who is here?'
  }
})
```

- Display the text inside your `stories.wxml` page

```html
<!-- stories.wxml -->
<view>{{text}}</view>
```

Any string stored inside `text` will dynamically show in your view 🤓

**From WXML to JS ⬅️**

- Create a button with the "bindtap" attribute and a function name as a value

```html
<!-- stories.wxml -->
<button bindtap="clickMe">{{text}}</button>
```

- Define this new function in your Page object:

```js
//stories.js
Page({
  clickMe: function() {
    this.setData({ text: "Hello World" })
  }
})
```

Well done! Now you have a button firing a a "bindtap" event to the logical layer (the javascript file), and a function that re-sets the local data to another string... immediately rendered in the view.

⚠️ Do not break the Page object! **Each key-value pair is chained with a comma.** Notice how the Page object contains different keys provided by the framework: `onReady`, `onShow` etc. We call them [lifestyle functions](https://developers.weixin.qq.com/miniprogram/en/dev/framework/app-service/page.html).

### Bonus action:

Transform your `<navigator>` from the landing page into a `<button>` element, calling this function on **bindtap**:

```js
//landing.js

goToStoriesPage: function() {
  wx.navigateTo({
    url: '/pages/stories/stories'
  })
}
```
