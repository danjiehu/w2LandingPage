## Challenge 1: Create a Landing Page to greet users

## Background & objectives

The goal of this first challenge is to understand the basic structure of an app, and in particular the view layer written in WXML/WXSS.

## Specs

### 1. Setup your app

Create a new WeChat Mini Program and name it FMC. Using its setup file `app.json`, customize the **navigation bar** with a better name and style.

### 2. Use the Pages array

Use the setup file `app.json` to add a new route inside the array `pages:[]`:

```
"pages/landing/landing"
```

⚠️ Warning: don't forget to separate each route by a comma! If you break the array `pages:[]`, your app is down...

When you save this file, WeChat's IDE will generate a new page folder for you. All files inside are a boilerplate for you to use! 👏

### 3. Build a quick landing page

This window will greet your users and explain the concept behind FMC app. You want to make a great first impression!

Save time by transforming the [Banner Component from Le Wagon UI](https://uikit.lewagon.com/documentation#banner) into a quick landing page.

**Tip**: WeChat Mini Programs CAN’T load a CSS `background-image` with a `local file` (inside your directory)...
It’s a restriction of the framework, to *keep your app lightweight.* Instead, you must load a `remote file` 🌏, and it must come through HTTPs!

Let's use some `inline CSS` through the style="" attribute:

```
<view class="banner" style="height: 100vh; background-image: linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(https://www.lewagon.com/api/v1/cities/shenzhen/cover?width=1200);">
</view>
```
