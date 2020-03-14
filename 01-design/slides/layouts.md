## Today's topics

1. Discover [Bootstrap](https://getbootstrap.com/docs/4.1/getting-started/introduction/)
2. Build **advanced layouts** (with [CSS grid](https://css-tricks.com/snippets/css/complete-guide-grid/) & [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/))

---

## Lecture Boilerplate

https://github.com/lewagon/layouts-demo

```bash
cd ~/code/$GITHUB_USERNAME
git clone git@github.com:lewagon/layouts-demo.git
cd layouts-demo
rm -rf .git
stt
serve
```


---

## Bootstrap (v4.2)

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-45fb23e590c7147ea78bdee4215461672a156e2d3facd7cd695e6be6853759ca.png)


---

## Bootstrap basics

Buttons, Utility classes & Forms

---

## Semantic scheme

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/five-colors-78f6f03ba32ad45503dbdae28fdc56d5925a8bbf04a67fa139980aee7d15cf21.png)

---

## [Buttons](https://getbootstrap.com/docs/4.2/components/buttons/)

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-btn-7c06e1cb4e5ad209a2cc5676a46ef49749c8f2018d00b44af55fca1040677247.png)

```html
<a href="..." class="btn btn-primary">Click me</a>
<a href="..." class="btn btn-sucess">Click me</a>
<a href="..." class="btn btn-danger">Click me</a>
<a href="..." class="btn btn-warning">Click me</a>
```

---

## Utility ([text](https://getbootstrap.com/docs/4.2/utilities/text/))

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/text-align-b876ed9bcfefadf0265184715b642dfc286a04c1d2afc43acf52f7cb2c933e80.png)

---

## Utility ([Flexbox](https://getbootstrap.com/docs/4.2/utilities/flex/))

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-flex-8bdadd3e339e60e7c0545a03148bf917133e7428f58c6dd48b5cee66162d5328.png)

---

## Utility ([border](https://getbootstrap.com/docs/4.2/utilities/borders/#border-radius))

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-border-ba54e837431082aa9fc2cef3c69469eca98472ceb8a39ec26acd888637620437.png)

```html
<img src="..." alt="..." class="rounded">

<img src="..." alt="..." class="rounded-circle">

<div class="border-bottom"></div>
```

And more in [the documentation](https://getbootstrap.com/docs/4.2/utilities/borders)

---

## [Forms](https://getbootstrap.com/docs/4.2/components/forms/) with label

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/form-80d8a7c998b2bac7e4e76f9823a142672e75e2c2a255e679ad91759a914c7ed7.png)

---

## [Forms](https://getbootstrap.com/docs/4.2/components/forms/) without label

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/form-without-label-796f273debca04106824c6e9f8547afcaa26ffefa287aeaa402a81507737ae96.png)

---

## Bootstrap only challenge

Let's code a **airbnb like flat page** writing zero CSS 😅

---

This is what your product designer sent you, now let's code it!

---

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/airbnb-show-sketch-simple-f65c6d8ad2d929b1298f584e38e2fe6b87ac50e90bd601551ccc689496dc731b.png)


---

## Bootstrap dynamic libary

How to use dynamic components like [carousels](https://getbootstrap.com/docs/4.2/components/carousel/), [dropdowns](https://getbootstrap.com/docs/4.2/components/dropdowns/), [modals](https://getbootstrap.com/docs/4.2/components/modal/), and many more! 😎

---

Lets add a [carousel](https://getbootstrap.com/docs/4.2/components/carousel/) to our airbnb page!

---

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/airbnb-show-sketch-carousel-53e68e97f7aa7a546ea743ddc898886d2898a0dc328cefc2ec60db6df4e87602.png)


---

## Bootstrap grid

How to make responsive layouts using the [Bootstrap grid](https://getbootstrap.com/docs/4.2/layout/grid/)

---

## Definition

Bootstrap’s grid system uses a series of **containers**, **rows**, and **columns** to layout and align content. It’s built with flexbox and is fully responsive.

---

## Responsive

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-responsive-c0ba7542eb335de6c0079739c7d9f763086a05a053ba1713233e1ceaae4eedf3.png)

---

## Mobile-first

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/bootstrap-mobile-first-4b8541bda4cd7946ce4db1214f84a02aaea5525585c44d64857c84c036249fdd.png)

---

## How does the grid work?

---

Start with a `container` **as usual**.

---

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/grid-step-1-4f571b26cb7c3330cf7ee28eca3cd8514a9d7a40e3becfb26703f072570497f2.png)

```html
<div class="container">
 <!-- Inject the grid here -->
</div>
```

---

Add the **rows** you need.

---

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/grid-step-2-0ce113a4ef51e8187b74915ce7a739cf6c736d5d7541c812d07ffd4cb4c8e8e9.png)

```html
<div class="container">
  <div class="row"></div>
  <div class="row"></div>
  <div class="row"></div>
</div>
```

---

Then the **columns**.

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/grid-step-3-7fe29801fc0d66e7e5af7e686dd2d1b7e3fd2b28e1aeacc82a427f5fa8caf73c.png)

---

## What's a column?

```html
<div class="col-sm-6">
</div>
```

- **col**: because it fits a number of columns
- **sm**: screen width
- **6**: number of columns taken by the block (**max 12**)

---

## Responsive breakpoints

- **default**: Extra small devices (Portrait phone 👉 less than 576px)
- **sm**: Small devices (Landscape phone 👉 576px and up)
- **md**: Medium devices (Tablet 👉 768px and up)
- **lg**: Large devices (Desktops 👉 992px and up)
- **xl**: Extra large devices (Large desktops 👉 1200px and up)

---

## Let's see some real-life examples

---

## Example 1

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/half-half-bootstrap-5553122913553152a9f96bdb95ae762e4c99eeff0d70292f138def1f774dd741.png)

---

## Code

```html
<div class="container">
  <div class="row">

    <div class="col-6">
    </div>

    <div class="col-6">
    </div>

  </div>
</div>
```

---

## Mobile first

- if you just give the `.col-X` classes
- it will apply on all larger screens

---

## Example 2

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/columns-bootstrap-6de08c570a20db5fe49ef8c8dc9084c6050ac57ef71a6c4b28fad41e0d933ae2.png)

---

## Code

```html
<div class="container">
  <div class="row">

    <div class="col-12 col-lg-8">
    </div>

    <div class="col-12 col-lg-4">
    </div>

  </div>
</div>
```

---

## Example 3

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/centered-bootstrap-96c207d2302448093d5eab431fb47e6927a5ce8ae11627d64921f0f335143a16.png)

Can we do this? 🤔

---

## Of course we can

The `.row` is a flexbox by default and has [alignment classes](https://getbootstrap.com/docs/4.2/layout/grid/#alignment)

```html
<div class="container">
  <div class="row justify-content-center">
    <div class="col-12 col-lg-6"> 
   <!-- This div is centered and takes 6 columns -->
    </div>
  </div>
</div>`
```

Useful technique for [responsive form](https://lewagon.github.io/bootstrap-challenges/10-Login-form/)

---

## ⚠️ Don't break the grid ⚠️

**Never** add your own CSS rules to the bootstrap grid elements!

---

Let's make our airbnb page **responsive**!

---

## Bootstrap conclusion

**When do we need Bootstrap? 👍**

- **Atoms** like [buttons](https://getbootstrap.com/docs/4.2/components/buttons/) and [inputs](https://getbootstrap.com/docs/4.2/components/forms/).
- Dynamic components like [dropdowns](https://getbootstrap.com/docs/4.2/components/dropdowns/) or [carousels](https://getbootstrap.com/docs/4.2/components/carousel/).
- Responsive layouts without media queries.

---

## Bootstrap conclusion (2)

**When not to use Bootstrap? 👎**

- **Molecules** like cards, banner, etc... 👉 **use your own design**.
- Advanced layouts 👉 **use flexbox or CSS grid**.

---

## Documentation

http://getbootstrap.com/docs/4.2


---

## Advanced layouts

---

## New CSS organization

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

---

### Cards grid layout

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/cards-grid-layout-961e60db5622cfe615bf1bdb07d99f325c89e6bd560ff16e00df510ad1a5c546.png)

---

## What do we build the grid with?

⛔️ When you have a grid of cards, **bootstrap grid is too complicated**

📐 Instead we can use the [**CSS grid**](https://css-tricks.com/snippets/css/complete-guide-grid/)! 😎

---

## How does the grid work?

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/css-grid-1-25653ab7c956bfba52e13224dbf852476f2b34e2b160ae39f96537113eb98a32.png)

---

## Then add your columns

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/css-grid-2-391c477d72ecb9cc00c3e293e91a9d87a45164f87706402742fe16a18b8b98ef.png)

---

## What happens to the cards inside the grid?

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/css-grid-3-71f976c6436a243ac13e75cfa2b8f604c154ce04737d6a378edf80fa4b05fc51.png)

---

## Media queries

You can easily **re-write your grid** on phone / tablet!

```css
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
---

Let's code this responsive **cards layout**!

---

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/cards-layout-example-422c6792ac3926ea3723f581d31e3e43f5c0e04c1671f6c1f744226966a60059.png)


---

## Column layouts

Split your page in columns with **flexbox** (e.g. a sidebar, a map)

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/basic-layout-6bf13ba39e380ca40e28a034f4c46abd77af952b6d4a4a76e10044632ffdf673.png)

---

## Let's code this layout

---

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/map-example-874716c2105bcc421399589c9ec6ee6f03ef508179d6478292abc398f2d078bc.png)

---

## Add your Mapbox token

https://www.mapbox.com/account/access-tokens/

```html
<!-- campuses-with-map.html -->
<img id="map" src='https://api.mapbox.com/[...]?access_token=YOUR-TOKEN-HERE'>
```

---

## How do we code this layout?

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/basic-layout-1-465c6641218b4647ab799f2234d824370197bfb92109581dc27db2fd9ac6c00a.png)

---

### What CSS do we need for this layout? 🤔

```css
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

---

## Live-code

Let's live code this layout in **campuses-with-map.html**

---

If we scroll the map disappears 😢

---

## No problem

```css
#map {
  height: 100vh;
  position: sticky;
  top: 0;
}
```

---

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/layouts/basic-layout-2-4c6bad93bc57c76af6efa0a7284bebc52e0fccafec3c259cd67d8ed5d058a6e9.png)

---

## Live-code

Let's live code `position: sticky` in **campuses-with-map.html**

---

## Let's build cool layouts 😎
