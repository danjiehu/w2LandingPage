## 今天的目标

- 如何组织CSS
- 设定个人的[UI设计规范（UI Kit）](https://uikit.lewagon.com/)

![bg](background.png)

------

## 课程模板

https://github.com/lewagon/components-demo

```
cd ~/code/$GITHUB_USERNAME
git clone git@github.com:lewagon/components-demo.git
cd components-demo
rm -rf .git
stt
```

![bg](background.png)

------

## 什么是组件（component）？

![bg](background.png)

------

## 组件 = 乐高积木

![bg](background.png)

------

## 基础组件

![img](css-components/simple-components-57a5bb471c94ebc54d795830e05990f304def9fd936ee53e8bdd17523976b8ea.png)

![bg](background.png)

------

## 高级组件

![img](css-components/advanced-components-ebfd05e6e227cee34b96a4871ec66fb559f02eaee47441d325ad46222bef2650.png)

![bg](background.png)

------

## 可以合并成一个网页！

![img](css-components/combining-components-5b68786b1767b12677d7bd9d71bf8232bf7a4edcb106f71963347fd297b35ef2.png)

![bg](background.png)

------

## 10个组件 = 90%的应用app设计

这是前端开发人员的秘密 😎

![bg](background.png)

------

## 专业CSS组织 😎

开始前，我们先了解一下如何像真正的前端开发人员那样组织代码

![bg](background.png)

------

## 根据组件组织CSS

- 昨天 👉 一个文件`style.css`
- 今天 👉 **每个组件**都有各自的文件

![bg](background.png)

------

![img](css-components/css-components-organisation-286e5b2462df890d302b823d777e19ceca888457e7a997efb5cafdaa364f10dc.png)

![bg](background.png)

------

**style.css**将引入所有外部样式表（stylesheets）

```
/* style.css */

/* ![bg](background.png)

------ 如何引入组件的样式表 ![bg](background.png)

------ */
@import url("components/avatar.css");
@import url("components/container.css");
@import url("components/button.css");

/* [...] */
```

在HTML中用**一个link标签**来引用所有CSS😍

```
<link rel="stylesheet" href="css/style.css">
```

![bg](background.png)

------

## 第一个组件

![bg](background.png)

------

### 基础组件（原子）

![img](css-components/simple-components-57a5bb471c94ebc54d795830e05990f304def9fd936ee53e8bdd17523976b8ea.png)

![bg](background.png)

------

### 结合原子 （分子）

构建结构化的组件

![img](css-components/banner-structure-30e89ea5402907233254a1053b289297cdadcc5b55e989bb1a1718428d1af812.png)

![bg](background.png)

------

## Flexbox组件

![bg](background.png)

------

## Flexbox

**95%的组件都是用flexbox来构建的💪**

![bg](background.png)

------

## Flexbox - 词汇

```
.flexbox {
  display: flex;
}
```

![img](css-components/flex-vocabulary-b67ac84fdb99b120cbdfda19165762fcae5357d98cad1d33885b3a59fae7cb40.png)

![bg](background.png)

------

## Flexbox - 内容对齐 (1)

```
.flexbox {
  display: flex;
  justify-content: space-evenly;
}
```

![img](css-components/flex-justify-f02ed501a0c97c7d7a978b7db32587993c72a6e65efee557f50b4da34ac6341f.png)

![bg](background.png)

------

## Flexbox - 内容对齐 (2)

```
.flexbox {
  display: flex;
  justify-content: space-between;
}
```

![img](css-components/flex-justify-2-9b34bd3a0c6e9ad4ff33ea4281f4e8d909b10726d8c57d910c818c932e06391f.png)

![bg](background.png)

------

## Flexbox - 元素对齐 (1)

```
.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
```

![img](css-components/flex-align-7eb6fee57364370ec0ee54343d1cb3955a04909e1804a8ef6bc51b970c3570a4.png)

![bg](background.png)

------

## Flexbox - 元素对齐 (2)

```
.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
```

![img](css-components/flex-align-2-2cfbab1c129a516d473ad2073a74d06038114e5dcd1d0136776e092dfae26b48.png)

![bg](background.png)

------

## Flexbox - 元素对齐 (3)

```
.flexbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
```

![img](css-components/flex-align-3-816e7672fc429c1858f66656105469874b841bc7e7e8490d313433d831065f5d.png)

![bg](background.png)

------

## Flex item - 弹性增长

```
.flexbox {
  display: flex;
  align-items: center;
}

.item {
  flex-grow: 1;
}
```

![img](css-components/flex-item-0a9e08ae11b121f58816d2cd57c4e7d67760923a89b36e1f17d9489699715b85.png)

![bg](background.png)

------

如何创建**类别卡片**样式

![img](css-components/card-category-structure-0180b8d23fc791495fe22542ba061d93d7a1b5010da5c0014486667684b150e6.png)

![bg](background.png)

------

如何创建**产品卡片**样式

![img](css-components/card-product-structure-fa22ca13cb0bcecb02dac79f5edda42ece3baeea85327651425051067c1920d8.png)

![bg](background.png)

------

**Flex quiz** - 如何创建以下**旅行卡片**的样式呢?

![img](css-components/card-trip-structure-aba2c73ef6c28b439685fb0eae5ab608aa96c1a414a4423ffd144aaa76c7f1de.png)

![bg](background.png)

------

## 接下来，我们将使用flexbox来构建更多的组件

- 一个[类别卡片](https://uikit.lewagon.com/documentation#cards)
- 一个[产品卡片](https://uikit.lewagon.com/documentation#cards)
- 一个[旅行卡片](https://uikit.lewagon.com/documentation#cards)

![bg](background.png)

------

## 如何建设一个网页

![bg](background.png)

------

## 将组件组合到一个页面中😎

![img](css-components/page-with-components-b0394dd137267b31833c26e17fd3780d6a8e5a54290b843117afe72dfe24f60b.png)

![bg](background.png)

------

## 让我们来创建一些组件吧！🚀
