## 今天的目标

- 学习HTML / CSS基础
- 创建个人profile page [例子](https://papillard.github.io/my-profile/)
- 通过[Github Pages](https://pages.github.com/)把页面上传到网上 

-----

## Lecture Boilerplate

https://github.com/lewagon/html-demo

```
cd ~/code/$GITHUB_USERNAME
git clone git@github.com:lewagon/html-demo.git
cd html-demo
rm -rf .git
stt
```

------

## 前端

是针对**浏览器**而开发的

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/front-languages-24d3a355bfc2e8758518763bff78bab685d96644f56b94155c4e42a014270203.png)

------

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/html5-logo-b1dcae04056e918ace39b2a6e15ee848b658f28d2a1bba6cb7c63731d521c785.png)

是一种标记语言（markup language）== 结构

-----

## HTML 超文本标记语言

网页将显示不同的内容

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/content-68d2a1782391be808a207de804572c3f2a559d0331ce7e61681b082e07f50ab9.png)

-----

## HTML 超文本标记语言

标签（tags）是用来**定义**内容的

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/content-with-tags-414c7ab318d111663bf5454c60737d240488c7dc8f25276f736da6fe504e56b7.png)

------

## HTML 超文本标记语言

因此，将应用**浏览器默认的样式**

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/content-with-tags-html-4e57417cc0d56394fb4b3ad1c77d7239da5f9bf5b5c592b3718c5da2a3ca6c77.png)

------

## HTML 超文本标记语言

也可以对标签的样式进行修改

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/content-tags-css-6971d60a88bf6fb3290482393b3b31675a5eadea7c27bbdd0d16354c1ad7c651.png)

------

## HTML结构

```
<!DOCTYPE html>










<!-- end of file -->
```

------

## HTML结构

```
<!DOCTYPE html>
<html>







</html>
<!-- end of file -->
```

------

## HTML结构

```
<!DOCTYPE html>
<html>
  <head>

    <!-- 元素包含了文档的元（meta）数据 -->

  </head>
  <body>

    <!-- 元素包含了可见的页面内容 -->

  </body>
</html>
<!-- end of file -->
```

------

## HTML结构 - head

```
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title. Maximum length 60-70 characters</title>
    <meta name="description" content="Page description. No longer than 155 characters.">
    <meta charset="utf-8">
  </head>
  <body>

  </body>
</html>
<!-- end of file -->
```

------

## HTML结构 - head & Google

```
<head>
  <!-- Google文本 -->
  <title>Coding Bootcamp Le Wagon | Europe's Best Coding Bootcamp</title>
  <!-- Google描述 -->
  <meta name="description" content="Le Wagon is Europe’s best coding bootcamp for creative people & entrepreneurs. Learn to code in 9 weeks with our fullstack coding bootcamp.">
</head>
```

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/google-card-a361304b30e0875e1e06a6ee20b7f3f8acc14e9c3b2cf74f1044802c5a737310.png)

------

## HTML结构 - head & Facebook

```
<head>
  <meta property="og:title" content="Le Wagon - The French innovative coding school">
  <meta property="og:image" content="facebook-card.jpg">
  <meta property="og:description" content="Le Wagon is the best French coding school for entrepreneurs. Checkout by yourself the projects of our students. You will be impressed.">
  <meta property="og:site_name" content="Le Wagon"/>
</head>
```

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/fb-card-f68955dc612031b453e44657ce1a225d26d8b9cfad60bfde829d7b6ee568c295.png)

------

## HTML结构 - head & Twitter

```
<head>
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@Lewagonparis">
  <meta name="twitter:title" content="Le Wagon - The French innovative coding school">
  <meta name="twitter:description" content="Le Wagon is the best French coding school for entrepreneurs. Checkout by yourself the projects of our students. You will be impressed.">
  <meta name="twitter:creator" content="@Lewagonparis">
  <meta name="twitter:image:src" content="http://twitter-card.jpg">
</head>
```

------

## HTML结构 - body

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Hello world</title>
  </head>
  <body>
    <h1>Hello buddies!</h1>
  </body>
</html>
<!-- end of file -->
```
------

## 基本语法

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/element-syntax-0a692d495a6c0df2d59fe46662c2855a0b704a8d30ed8378910e15e0e4506c72.png)

------

## 例如：

```
<a href="https://www.lewagon.com" target="_blank">
  Le Wagon
</a>
```

结果：[Le Wagon](https://www.lewagon.com/)


### Quiz

请指出：
- 标签的名称（tag's name）
- 内容（content）
- 两个属性（attributes） 的名称（name）及值（value）

------

## 标题

```
<h1>[...]</h1>  <!-- 每个网页只能拥有一个<h1>标签！对SEO有影响 -->

<h2>[...]</h2>
<h3>[...]</h3>
<h4>[...]</h4>
<h5>[...]</h5>
<h6>[...]</h6>
```

-----

## 段落

```
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Veritatis laboriosam mollitia autem at ab omnis iure quis
  asperiores inventore eos nam aut iusto officiis deserunt
  nihil, sequi tempore impedit quae?
</p>
```
-----

## 强调文本

```
<p>
  You can emphasize <em>some words</em>,
  and even <strong>more if needed</strong>
</p>
```

-----

## 列表

```
<h2>Shopping List</h2>
<ul>
  <li>Milk</li>
  <li>Butter</li>
</ul>

<h2>World Cup 2018</h2>
<ol>
  <li>France</li>
  <li>Croatia</li>
  <li>Belgium</li>
  <li>England</li>
</ol>
```

-----

## 图片

```
<img src="logo.png" alt="Le Wagon logo">
```

-----

## 表单

```
<form>
  <input type="email">
  <input type="password">
  <input type="submit" value="Log in">
</form>
```

-----

## 还有更多

- [codeguide.co](http://codeguide.co/)
- [MDN文档](https://developer.mozilla.org/en/docs/Web/HTML/Element)

-----

## Live-code

接下来，我们将添加一些HTML内容到profile page中！

-----

![img](https://kitt.lewagon.com/karr/assets/front_new/profile_html-f5630480d2ba69e6707bdeef20fce4993c15b1bc44c69315a64217dfe37fbafe.png)

-----

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/css3-logo-195ecfeee1639c0cd00bcc4cfc85a548d6a7fa900eeed2707a75548798f89733.png)

-----

## 还有CSS

- 用Chrome的开发工具剪切[medium.com](https://medium.com/)的`<head>`区域
- 你看到的是一个没有CSS样式的网站😬

-----

## 如何引入CSS到HTML中

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/linking-css-93a0e35c150df4ec377c3b2b8045c22fcfb74e47c166758e92dfac4949907682.png)

-----

## CSS语法

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/css-syntax-3633232082c8f9b84ebde51ead6472ccfe80c1af4bf1cdb4140b94f79dcf0400.png)

-----

## CSS词汇

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/css-vocabulary-54709fcfe49b81165cc66c5cda5d78cc0c5b5eec7d8bbcf879b3b263fedf1145.png)

-----

## 例如

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/css-syntax-example-19d14b8f80d0d2d7af3a579fab48716f0da8a148f9eee5dd2b3c45ac38085f09.png)

-----

## 颜色

```
color: #FF530D;
color: rgb(255, 83, 13);
color: rgba(255, 83, 13, 1.0);
```


-----

## 颜色 - 提示

```
body {
  color: rgb(10, 10, 10);
}
```

- **RGB** 代表 **R**ed（红） **G**reen（绿） **B**lue（蓝）
- 强度值：0-255
- 当三色灰度数值相同时，产生不同灰度值的灰色调

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/grey-scale-efaa01b8c08d4a90505ef417a86fdffe7bed8e670e3fab84ae8f5dce203e0931.png)

-----

## 文本 vs 背景

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/text-vs-bg-5f4f366955757d5bf06d93b83402c842a3abbff025950aa96670442da1d1ad98.png)

-----

## 背景图片

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/bg-image-c2a76d897059d5224827ef1f1941aab90e4c1b1fc405ef893e4b7bd693ed751d.png)

-----


## 通用字型

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/font-family-ca0758530f7c9d5a357b16e7402ce0511bbcf1f3a81d894f1d9e73334a5b0fdc.png)

-----

## 字体大小，字体字距

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/text-spaces-ad13823a0e1ec70a2c6a4cfc6093f5c143842ba642ee06c013262a62fcf57ed9.png)

-----

## 字体装饰

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/text-decoration-71fb6097fb8f9b1c821a15dd246e082163bfbef13010c03dd5277439cec07a21.png)

-----

## 字体对齐

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/text-align-5902740aa2f71de097abf94ec553f207ef7bef817c5ddd605b30ba6e0e2f6e28.png)

-----

## 字体厚度

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/font-weight-ccef280d6ce99b985f3dd585fb09dd5f9bc5afa2d9f25196df93685225be691a.png)

-----

## Google字体

可用[Google fonts](http://www.google.com/fonts).

- **Open-Sans** 👉 `<body>`
- **Raleway, Montserrat, Varela Round, etc...** 👉 `<h1>`, `<h2>`, `<h3>`

-----

## Font Awesome

[Font Awesome](https://fontawesome.com/) 是一个字体和图标工具包！

```
<!-- 把cdn连接粘贴到<head>区域 -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css">
```

-----

## 提示

使用检查器，然后在Sublime中复制`css`

![img](https://kitt.lewagon.com/karr/assets/front_new/profile_inspector-bc6384e4ccd1257c10b9f57c7aa3009f9cf59055d9d515b64f6816776ab82ba8.png)

-----

## Live-code

接下来，我们将使用[Google字体](https://fonts.google.com/)来设计字体和颜色

-----

![img](https://kitt.lewagon.com/karr/assets/front_new/profile_css-29dd6ce7fa3ce73796907f05d3af52425b251debbb7bb62aab64104ec8266091.png)

------

## Div及盒子模型（box model）

## Real life...

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/airbnb-02cbe138eb3e2d0f05ad8f7a05c11cce4d8f2f7d8d30128d02322939af13e992.png)

-----

## ...是由`<div>`来组成的

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/airbnb-with-div-20b4ad563c8066f7035bd1bf408960003a7937d8842f3a00f093450d29336a84.png)

-----

## 盒子模型（box model）

![img](https://kitt.lewagon.com/karr/assets/front_new/box_spacing-bbfa0b27d2a85ce5238029e989360fac63a09c61c304addeb8ecaafc6f1d744a.png)

-----

## 盒子模型 - 边框（border）

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/box-model-3-c489c1980f18303347fe3a385eeac670814f7bd060c0f606a2e7235a1c5192a5.png)

-----

## 边框（border）

```
div {
  border: 1px solid red;
}
/* 或者 */
div {
  border-top: 1px solid red;
  border-right: 2px dotted black;
  border-bottom: 1px dashed green;
  border-left: 2px dotted black;
}
```

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/borders-aa6243ac7d9e4d4d902ee669c6b360d29349677f4f6cc33b8f6c7b305d8a2052.png)

-----

## 圆角边框（border-radius）

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/radius-1-30d42e5cc809b05bd644edc133d49984aa1ee5c47eecbd5e8e3bde356a2734c1.png)

-----

## 圆角边框（border-radius）

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/radius-2-c631c1e6c6ce3abdd8f925e819b18625f70df7fd2b8eab52decb28ee0b034993.png)

-----

## 阴影（box shadow）

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/box-shadow-92839ef882b5e4bf0299dc7e5194c0c3c968af4d0053a9588ef56def4ec75195.png)

-----

## 单位（units）

```
/* 绝对定位 */
p {
  width: 50px;
}

/* 相对于父元素的定位 */
p {
  width: 50%;
}

/* Relative to font size */
p {
  width: 2em;
}
```

-----

## Div设计技巧

```
background: white;                         /* 白色背景 */
padding: 30px;                             /* 内部空间 */
border-radius: 4px;                        /* 小的圆角边框 */
box-shadow: 0 10px 30px rgba(0,0,0,.1);    /* 淡色阴影 */
```
-----

## Div剧中技巧

```
width: 300px;        /* 设置宽度 */
margin: 0 auto;      /* Set automatic margins on right/left
设置左边/右边的自动页边距
 */
```

-----

## Live-code

接下来，我们将**添加一些div**到我们的HTML body区域里并使用Chrome开发者工具进行测试盒子模型 

------

## id和class选择器

-----

## 如何指定logo的特定样式？

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/id-dilemma-498dc8980d3e0dd3e9f40dbc53eb9bc718e937f0aedce7a88dce6ad65adf7946.png)

-----

## id选择器可以为标有特定id的HTML元素指定特定的样式

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/id-solution-ecc142b3ca1161f17f9078effb3710bbbdb638b09a3de9625c6da65826d74da1.png)

-----

## 如何制定staff照片的特定样式？

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/class-dilemma-6a3a8a6997df006eb99d5f034d86bec91360c41e563677f0148fef3b90f218b2.png)

-----

## class选择器在HTML中以class属性表示

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/class-solution-93d33d4c380330298ebfaa781365427efc3169359b4e07778b578af370d042fa.png)

-----

## id或者class？

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/class-or-id-dc3998e0ee573a38daa186715b28934ff0560215e07262118a46c18343d05c6f.png)

-----

## 组合（1）

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/combine-class-1-52b0cca31494d55f136d68e47aa09060478005031abd233f8ec333857b4f1300.png)

-----

## 组合（2）

## ![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/combine-class-2-9b99d83da19cbf7e494192f3b1bda849dd125142cb68a80fede694b705603015.png)

-----

## 组合（3）

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/combine-class-3-a1e379c6e97826d412bbd52a41a9ede8d185b1d5c35d9c73220cdd8b724a6c89.png)

-----

## Class命名 - quiz

哪个名称更**明确**？ 更清楚？

- `.btn-red` 或者`.btn-signup`?
- `.background-blue` 或者 `.background-home`?
- `.img-user` 或者 `.img-circle`?



改变你的思维 => **以图形方式思考**

-----

## Class命名规则

```
.component-shape
/* Examples*/
.text-center
.text-justify
.btn-red
.btn-green
.btn-big
.list-inline
.form-horizontal
.img-rounded
.img-circle
```

------

## CSS选择器总结

-----

## 元素选择器

```
<!-- index.html -->
[...]
<body>
  <h1>Hello World</h1>
</body>
```

加上`css/* style.css */h1 {color: red;font-weight: bold;}`
使`h1`元素变成红色和粗体

-----

## Class选择器

```
<!-- index.html -->
[...]
<body>
  <p>This paragraph is not justified</p>
  <p class="text-justify">This one is</p>
  <p class="text-justify">This one also</p>
</body>
```

加上

```
/* style.css */
.text-justify {
  text-align: justify;
}
```

只会使第二和第三段两端都对齐

-----


## Id选择器

```
<!-- index.html -->
<body>
  <div id="banner">
    <h1>Le Wagon</h1>
    <p>We bring tech skills to creative people</p>
  </div>
</body>
```

加上

```
/* style.css */
#banner {
  background-image: url("example.jpg");
  background-size: cover;
}
```

`id="banner"将向**unique** div添加一个背景图片

-----

## 子选择器

```
<!-- index.html -->
<body>
  <div id="banner">
    <h1>Le Wagon</h1>
    <p>We bring tech skills to creative people</p>
  </div>
</body>
```

加上

```
/* style.css */
#banner h1 {
  color: white;
}
```

`id="banner"`的`h1`**子元素**将变成白色

-----

## 直接子元素

```
<!-- index.html -->
<body>
  <ul id="navigation">
    <li><a href="#">Home</a></li>
    <li><a href="#">Team</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</body>
```

加上

```
/* style.css */
#navigation > li > a {
  color: blue;
}
```

`id="navigation"`的`li`**子元素**的`a`**子元素**将编程蓝色

-----

## 组合

```
/* style.css */
h1, h2, h3 {
  font-weight: bold;
}
```

是一种快捷语法

```
/* style.css */
h1 {
  font-weight: bold;
}
h2 {
  font-weight: bold;
}
[...]
```

-----


## 伪类

```
/* style.css */
a {
  color: red;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
```

鼠标移动到链接上将使链接下划线

其它[伪类](https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes)

-----

## Quiz #1

```
<!-- index.html -->
<body>
  <p class="text-red">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</body>
```

加上

```
/* style.css */
p {
  color: black;
}
.text-red {
  color: red;
}
```

-----

## Quiz #2

```
<!-- index.html -->
<body>
  <p id="bio" class="text-red">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</body>
```

加上

```
/* style.css */
.text-red {
  color: red;
}
#bio {
  color: green;
}
```

-----

## 选择器Specificity特性

```
p {                 /* least specific */
  color: black;
}
.text-red {         /*        ↓       */
  color: red;
}
#bio {              /* most specific  */
  color: green;
}
```

试试该[specificity计算器](http://specificity.keegan.st/)

-----

## Live-code

接下来，我们将**完成live-code**，并获得以下[最终结果](https://papillard.github.io/my-profile/)!

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/html-css/profile_final-dfb46508b6af87d012cadf82451e6ba0d19b00ade3a9649df360611efde3a9e1.png)

-----

## 开始建立你的profile吧！
