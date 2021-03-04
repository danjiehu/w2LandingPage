### Introduction to WXMP
WeChat’s easier-to-use alternative to stand-alone apps, which allows you to avoid the "tedious process” of downloading and managing apps on a smartphone. 

---

### Notable Stats
![img](https://github.com/lewagon/china-product/blob/master/03-miniprogram/slides/frontend/notable%20stats.png)

---

###

---

### WeChat MP Documentation

[Your new best friend, bookmark it!](https://developers.weixin.qq.com/miniprogram/dev/index.html)

---

![img](https://github.com/lewagon/china-product/raw/master/03-miniprogram/slides/frontend/docs-268f3341797ca0c95f1faea30be512ccb9ff3701d2e2bf2c11e0bdba894f2cf4.png)

---

### Agenda

We will build 1 WeChat app in this course

#### ["F*** My Code"](https://www.fmylife.com/)

---

### Let's setup a Mini Program!

---

We'll use WeChat's developer tools moving forward.

[Download the stable build now](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

---

![img](https://github.com/lewagon/china-product/raw/master/03-miniprogram/slides/frontend/IDE-9f544b5e5eae1d228975827ab15eb33645a9116b83781c77b785ce92ed59e4fc.png)

---

Setup with a tourist appID

---

![img](https://github.com/lewagon/china-product/raw/master/03-miniprogram/slides/frontend/IDE2-be29b12163e268b876fd90935e8d46572e5cbeae523b8c4df53a0958d429d548.png)

---

Quick tour

---

### Code structure 🤔

There are 4 file types in a WeChat mini program project:

- `.wxml` same as HTML
- `.wxss` same as CSS
- `.js` logic
- `.json` configuration

### Your app is ruled by the following files:

- `app.js` Mini Program functions
- `app.json` Mini Program configuration
- `app.wxss` Global CSS stylesheet

---

### How to create a new page

Mandatory page files (`.wxml`, `.wxss`, `.js`, and `.json`) can be generated by adding a new route inside `app.json`

---

![img](https://github.com/lewagon/china-product/raw/master/03-miniprogram/slides/frontend/Newpage-9c46482c1609685fcbdacff878b879cb572c435cd6ec28051ff5099d5f6fc90e.png)

---

Tip: You can customize the startup page with a new compilation mode.

---

### WXML syntax (same same but different)

![img](https://github.com/lewagon/china-product/raw/master/03-miniprogram/slides/frontend/wxml-html-db645e9281417073b999b276c6dd2a49f629abeebbb928f01e7719a9e0445349.png)

---

### JSON files for configuration

- Customize your app (Eg: app/page title, navigation bar color)
- Setup tabs
- Setup components

[See all options here](https://developers.weixin.qq.com/miniprogram/dev/framework/config.html)

---

### Live code 1: Landing page 💪

We'll use the [Banner Component from Le Wagon UI](https://uikit.lewagon.com/documentation#banner).

---

### Live code 2: Stories page & navigation 💪

Save time using [Le Wagon's card component](https://uikit.lewagon.com/documentation#card_product) (but no need of a product image).

---

Not challenging enough? It was just the beginning...

---