# Create a Landing Page

## Background & Objectives

The goal of this first challenge is to understand the basic structure of an app, and in particular the view layer written in WXML/WXSS.

## Specs

### 1. Setup your app

Create a new WeChat Mini Program and name it FMC. Using its setup file `app.json`.

### 2. Remove unecessary code

Just as we did in the lecture, let's remove some unecessary code!

1. In `app.json` remove the `logs` item in the `pages` array.

2. Delete the `logs` folder from your `pages` directory

3. Delete unwanted code in your `index.wxml`, `index.wxss`, and `index.js`.

Great! Now you're working from a clean slate. 

### 3. Build a quick landing page in `index`

This page will greet your users and explain the concept behind your FMC app. You want to make a great first impression!

> **Tip**: WeChat Mini Programs CAN’T load a CSS `background-image` with a `local file` (inside your directory)...
It’s a restriction of the framework, to *keep your app lightweight.* Instead, you must load a `remote file` 🌏, and it must come through HTTPs!

#### index.wxml

```html
<view class="banner">
    <!-- Insert header, subheader, and button here -->
</view>
```

#### index.wxss

```css
.banner {
    height: 100vh;
    background-image: url(https://www.lewagon.com/api/v1/cities/shenzhen/cover?width=1200);
    background-size: cover;
}

/* additional css for .header, .subheader, .button */
```

**Remember to make this app your own! Find a unique image, header, and subheader that fits the app your creating.**