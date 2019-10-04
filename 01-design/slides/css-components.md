## Today's objectives

- Adopt a Pro CSS organization
- Code your own [UI Kit](https://uikit.lewagon.com/)

## Lecture Boilerplate

https://github.com/lewagon/components-demo

```
cd ~/code/$GITHUB_USERNAME
git clone git@github.com:lewagon/components-demo.git
cd components-demo
rm -rf .git
stt
```

------

## What's a component?

## Components = lego bricks

## Simple components

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/simple-components-57a5bb471c94ebc54d795830e05990f304def9fd936ee53e8bdd17523976b8ea.png)

## Advanced components

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/advanced-components-ebfd05e6e227cee34b96a4871ec66fb559f02eaee47441d325ad46222bef2650.png)

## Combined them to build pages!

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/combining-components-5b68786b1767b12677d7bd9d71bf8232bf7a4edcb106f71963347fd297b35ef2.png)

## 10 components = 90% of your app design

That's the secret of frontend developers 😎

------

## Pro CSS organization 😎

Before we start, let's see how to organize our code like a real frontend developer.

## Organize CSS by components

- Yesterday 👉 one file `style.css`
- Today 👉 one file **per component**

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/css-components-organisation-286e5b2462df890d302b823d777e19ceca888457e7a997efb5cafdaa364f10dc.png)

**style.css** imports all other stylesheets

```
/* style.css */

/* --- Import Components stylesheets --- */
@import url("components/avatar.css");
@import url("components/container.css");
@import url("components/button.css");

/* [...] */
```

Then **one CSS link only** in the HTML page 😍

```
<link rel="stylesheet" href="css/style.css">
```

------

## Our first components

### Let's code simple components (atoms)

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/simple-components-57a5bb471c94ebc54d795830e05990f304def9fd936ee53e8bdd17523976b8ea.png)

### let’s combine atoms (molecules)

To build structured components

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/banner-structure-30e89ea5402907233254a1053b289297cdadcc5b55e989bb1a1718428d1af812.png)

------

## Flexbox components

## Flexbox

**95% of components are coded with flexbox 💪**

## Flexbox - vocabulary

```
.flexbox {
  display: flex;
}
```

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/flex-vocabulary-b67ac84fdb99b120cbdfda19165762fcae5357d98cad1d33885b3a59fae7cb40.png)

## Flexbox - justify content (1)

```
.flexbox {
  display: flex;
  justify-content: space-evenly;
}
```

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/flex-justify-f02ed501a0c97c7d7a978b7db32587993c72a6e65efee557f50b4da34ac6341f.png)

## Flexbox - justify content (2)

```
.flexbox {
  display: flex;
  justify-content: space-between;
}
```

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/flex-justify-2-9b34bd3a0c6e9ad4ff33ea4281f4e8d909b10726d8c57d910c818c932e06391f.png)

## Flexbox - align items (1)

```
.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
```

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/flex-align-7eb6fee57364370ec0ee54343d1cb3955a04909e1804a8ef6bc51b970c3570a4.png)

## Flexbox - align items (2)

```
.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
```

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/flex-align-2-2cfbab1c129a516d473ad2073a74d06038114e5dcd1d0136776e092dfae26b48.png)

## Flexbox - align items (3)

```
.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/flex-align-3-816e7672fc429c1858f66656105469874b841bc7e7e8490d313433d831065f5d.png)

## Flex item - flex grow

```
.flexbox {
  display: flex;
  align-items: center;
}

.item {
  flex-grow: 1;
}
```

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/flex-item-0a9e08ae11b121f58816d2cd57c4e7d67760923a89b36e1f17d9489699715b85.png)

How do you code a **category card**?

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/card-category-structure-0180b8d23fc791495fe22542ba061d93d7a1b5010da5c0014486667684b150e6.png)

How do you code a **product card**?

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/card-product-structure-fa22ca13cb0bcecb02dac79f5edda42ece3baeea85327651425051067c1920d8.png)

**Flex quiz** - How do you code this **trip card**?

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/card-trip-structure-aba2c73ef6c28b439685fb0eae5ab608aa96c1a414a4423ffd144aaa76c7f1de.png)

## Let's code more components using flexbox

- a [category card](https://uikit.lewagon.com/documentation#cards)
- a [product card](https://uikit.lewagon.com/documentation#cards)
- a [trip card](https://uikit.lewagon.com/documentation#cards)

------

## How to build pages?

## Just combine your components into a page 😎

![img](https://github.com/dounan1/china-product/raw/master/01-design/slides/css-components/page-with-components-b0394dd137267b31833c26e17fd3780d6a8e5a54290b843117afe72dfe24f60b.png)

------

## Let's build awesome components 🚀
