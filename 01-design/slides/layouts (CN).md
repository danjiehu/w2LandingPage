## 今天的课题

1. 学习[Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
2. 如何设置**网络布局**（通过[CSS网格](https://css-tricks.com/snippets/css/complete-guide-grid/)和[Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/）

-----

## 课程模板

https://github.com/lewagon/layouts-demo

```
cd ~/code/$GITHUB_USERNAME
git clone git@github.com:lewagon/layouts-demo.git
cd layouts-demo
rm -rf .git
stt
serve
```

------

## Bootstrap（v4.2）

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-45fb23e590c7147ea78bdee4215461672a156e2d3facd7cd695e6be6853759ca.png)

------

## Bootstrap基础

按钮、表单、工具类

-----

## Semantic scheme

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/five-colors-78f6f03ba32ad45503dbdae28fdc56d5925a8bbf04a67fa139980aee7d15cf21.png)

-----

## [按钮](https://getbootstrap.com/docs/4.2/components/buttons/)

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-btn-7c06e1cb4e5ad209a2cc5676a46ef49749c8f2018d00b44af55fca1040677247.png)

```
<a href="..." class="btn btn-primary">Click me</a>
<a href="..." class="btn btn-sucess">Click me</a>
<a href="..." class="btn btn-danger">Click me</a>
<a href="..." class="btn btn-warning">Click me</a>
```

-----

## 工具类（[文本](https://getbootstrap.com/docs/4.2/utilities/text/)）

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/text-align-b876ed9bcfefadf0265184715b642dfc286a04c1d2afc43acf52f7cb2c933e80.png)

-----

## 工具类（[Flexbox](https://getbootstrap.com/docs/4.2/utilities/flex/)）

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-flex-8bdadd3e339e60e7c0545a03148bf917133e7428f58c6dd48b5cee66162d5328.png)

-----

## 工具类（[边框](https://getbootstrap.com/docs/4.2/utilities/borders/#border-radius)）

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-border-ba54e837431082aa9fc2cef3c69469eca98472ceb8a39ec26acd888637620437.png)

```
<img src="..." alt="..." class="rounded">

<img src="..." alt="..." class="rounded-circle">

<div class="border-bottom"></div>
```
-----

请仔细阅读[bootstrap文档](https://getbootstrap.com/docs/4.2/utilities/borders)

-----

## [表单](https://getbootstrap.com/docs/4.2/components/forms/)与标签

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/form-80d8a7c998b2bac7e4e76f9823a142672e75e2c2a255e679ad91759a914c7ed7.png)

-----

## [表单](https://getbootstrap.com/docs/4.2/components/forms/)无标签

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/form-without-label-796f273debca04106824c6e9f8547afcaa26ffefa287aeaa402a81507737ae96.png)

-----

## Bootstrap唯一的挑战

接下来，我们将编写一个类似于**airbnb的民宿页面**，不需要任何CSS😅

-----

以下是产品设计师brief给你的设计稿，我们开始来编写吧！

------

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/airbnb-show-sketch-simple-f65c6d8ad2d929b1298f584e38e2fe6b87ac50e90bd601551ccc689496dc731b.png)

------

## Bootstrap动态UI库

如何应用Bootstrap动态组件，例如[轮播](https://getbootstrap.com/docs/4.2/components/carousel/)、[下拉菜单](https://getbootstrap.com/docs/4.2/components/dropdowns/)、[模态框](https://getbootstrap.com/docs/4.2/components/modal/)、还有更多!😎

------

在我们airbnb页面中加一个[轮播](https://getbootstrap.com/docs/4.2/components/carousel/)吧！

-----

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/airbnb-show-sketch-carousel-53e68e97f7aa7a546ea743ddc898886d2898a0dc328cefc2ec60db6df4e87602.png)

------

## Bootstrap网格系统

如何使用[Bootstrap网格系统](https://getbootstrap.com/docs/4.2/layout/grid/)来创建响应式布局（responsive layout）

-----

## 定义

Bootstrap网格系统应用一系列的**containers**、**行**和**列**来布局和对齐内容。Flexbox能够解决1、网页布局的问题 2、网页响应式的问题

-----

## 网页响应式

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-responsive-c0ba7542eb335de6c0079739c7d9f763086a05a053ba1713233e1ceaae4eedf3.png)

-----

## 移动优先

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-mobile-first-4b8541bda4cd7946ce4db1214f84a02aaea5525585c44d64857c84c036249fdd.png)

-----

## 如何使用平面设计中的网格系统？

-----

首先，添加一个`container`


![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/grid-step-1-4f571b26cb7c3330cf7ee28eca3cd8514a9d7a40e3becfb26703f072570497f2.png)

-----

```
<div class="container">
 <!-- 添加网格 -->
</div>
```

-----

第二，添加几**行**


![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/grid-step-2-0ce113a4ef51e8187b74915ce7a739cf6c736d5d7541c812d07ffd4cb4c8e8e9.png)

-----

```
<div class="container">
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
</div>
```

-----

最后，添加几**列**


![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/grid-step-3-7fe29801fc0d66e7e5af7e686dd2d1b7e3fd2b28e1aeacc82a427f5fa8caf73c.png)

-----

## 列是什么？

```
<div class="col-sm-6">
</div>
```

- **col**：该系统是基于12列的布局
- **sm**：对应着小型设备的屏幕
- **6**：对列数进行定义（**12列最多**）

-----

## 网格类

- **默认**：极小设备 👉 小于576px
- **sm**：小型设备（平板 👉 576px及以上）
- **md**：中型设备（桌面显示器 tablet 👉 768px及以上）
- **lg**：大型设备（大桌面显示器 desktop 👉 992px及以上）
- **xl**：超大设备（超大桌面显示器 large desktop 👉 1200px及以上）

-----

## 案例 1

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/half-half-bootstrap-5553122913553152a9f96bdb95ae762e4c99eeff0d70292f138def1f774dd741.png)

-----

## 代码

```
<div class="container">
  <div class="row">

    <div class="col-6">
    </div>

    <div class="col-6">
    </div>

  </div>
</div>
```
-----

## 移动优先

- 如果设定为`.col-X`类
- 它将适用于所有较大的屏幕

-----

## 案例 2

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/columns-bootstrap-6de08c570a20db5fe49ef8c8dc9084c6050ac57ef71a6c4b28fad41e0d933ae2.png)

-----

## 代码

```
<div class="container">
  <div class="row">

    <div class="col-12 col-lg-8">
    </div>

    <div class="col-12 col-lg-4">
    </div>

  </div>
</div>
```

------

## 案例 3

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/centered-bootstrap-96c207d2302448093d5eab431fb47e6927a5ce8ae11627d64921f0f335143a16.png)

可以这样做吗？🤔

------

## 当然！

`.row`是默认值，还可以设置不同的[排列类](https://getbootstrap.com/docs/4.2/layout/grid/#alignment)
`html<div class="container"><div class="row justify-content-center"><div class="col-12 col-lg-6"><!-- This div is centered and takes 6 columns --></div></div></div>`

可参考[网页响应式设计](https://lewagon.github.io/bootstrap-challenges/10-Login-form/)的案例

------

## ⚠️ Don't break the grid ⚠️

**千万**不要添加自己的CSS规则到Bootstrap网格元素中！

-----

接下来， 如何让我们airbnb页面快速**响应式**屏幕呢！

------

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/airbnb-show-sketch-fbca703c852cfeab3b375729891deebe39b46a74b108427d20243475f2c1d069.png)

------

## Bootstrap结论（1）

**什么时候需要Bootstrap？👍**

- **原子** 如：[按钮](https://getbootstrap.com/docs/4.2/components/buttons/)和[输入](https://getbootstrap.com/docs/4.2/components/forms/).
- 动态组件 如：[下拉菜单](https://getbootstrap.com/docs/4.2/components/dropdowns/)或[轮播](https://getbootstrap.com/docs/4.2/components/carousel/).
- 无media query的响应式布局

-----

## Bootstrap结论（2）

**什么时候不应该用Bootstrap？👎**

- **分子** 如：卡片、banner等 👉 **自定义设计**
- 高级布局 👉 **使用flexbox或CSS网格**

-----

## Bootstrap文档

http://getbootstrap.com/docs/4.2

------

## 高级布局

-----

## CSS组织

```
.
├── css
│   ├── components
│   │   ├── avatar.css
│   │   └── card.css
│   ├── pages
│   │   ├── campuses.css
│   │   └── homepage.css
│   └── style.css
└── index.html
```

------

### 由卡片构成的网格

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/cards-grid-layout-961e60db5622cfe615bf1bdb07d99f325c89e6bd560ff16e00df510ad1a5c546.png)

------

## 如何建造以上网格？

⛔️ 如果网格是由卡片构成的，**bootstrap网格系统将过于复杂**

📐 反而，我们可以应用[**CSS网格布局**](https://css-tricks.com/snippets/css/complete-guide-grid/)！😎

------

## 如何应用CSS网格布局

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/css-grid-1-25653ab7c956bfba52e13224dbf852476f2b34e2b160ae39f96537113eb98a32.png)

-----

## 添加几列

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/css-grid-2-391c477d72ecb9cc00c3e293e91a9d87a45164f87706402742fe16a18b8b98ef.png)

------

## 网格内的卡片有任何变化吗？

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/css-grid-3-71f976c6436a243ac13e75cfa2b8f604c154ce04737d6a378edf80fa4b05fc51.png)

-----

## Media queries

```
@media(max-width: 992px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}

@media(max-width: 768px) {
  .cards {
    grid-template-columns: 1fr;
  }
}
```
-----

接下来，我们将编写以下响应式的 **卡片布局**!

-----

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/cards-layout-example-422c6792ac3926ea3723f581d31e3e43f5c0e04c1671f6c1f744226966a60059.png)

------

## 多列布局

使用flexbox将页面分成多个列（e.g. 边栏、地图）)

------

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/basic-layout-6bf13ba39e380ca40e28a034f4c46abd77af952b6d4a4a76e10044632ffdf673.png)

------

## 接下来，我们将编写以下布局

-----

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/map-example-874716c2105bcc421399589c9ec6ee6f03ef508179d6478292abc398f2d078bc.png)

------

## 添加个人的Mapbox令牌（token）

https://www.mapbox.com/account/access-tokens/

```
<!-- campuses-with-map.html -->

<img id="map" src='https://api.mapbox.com/[...]?access_token=YOUR-TOKEN-HERE'>
```

------

## 如何编写该布局呢？

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/basic-layout-1-465c6641218b4647ab799f2234d824370197bfb92109581dc27db2fd9ac6c00a.png)

-----

### 还需要任何CSS吗？🤔

```
.main-container {
  display: flex;
}

#map {
  height: 100vh;
}

.cards {
  flex-grow: 1;
}
```

-----

## Live-code

在**campuses-with-map.html**文件中我们将编写该布局

如果下移动的话，地图就会消失😢

------

## No problem

```
#map {
  height: 100vh;
  position: sticky;
  top: 0;
}
```

------

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/basic-layout-2-4c6bad93bc57c76af6efa0a7284bebc52e0fccafec3c259cd67d8ed5d058a6e9.png)

------

## Live-code

在**campuses-with-map.html**文件中加上`position: sticky`

-------

## 让我们来创建布局吧！😎
