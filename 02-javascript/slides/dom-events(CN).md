## 课程Setup

## 打开浏览器

### 你的浏览器不仅仅是一个浏览器，它还是一个**集成开发环境**（IDE）

![img](https://kitt.lewagon.com/karr/assets/front/chrome_ide-f99e86a66147330bb4c3295725c3653b43ae11ee7a68c9d84945c972ed0f1270.png)

### 使用JavaScript和HTML

```
<!DOCTYPE html>
<html>
  <head>

  </head>
  <body>
    <!-- Your content -->

    <!-- Your script tags here -->
    <!-- <script src="first_file.js"></script> -->
    <!-- <script src="other_file.js"></script> -->
  </body>
</html>
```

加载JS文件将阻塞渲染 => 把JS放在最后

------

## DOM

文档对象模型（Document Object Model）

[wikipedia.org/Tree*(data*structure)](https://en.wikipedia.org/wiki/Tree_%28data_structure%29)

![img](https://kitt.lewagon.com/karr/assets/jquery/tree-19f69a6b9530a0f903f8478c222212e9b4bf5b9b38cf102e0a11cf3c0a389fce.png)

![img](https://kitt.lewagon.com/karr/assets/jquery/dom_example-6f443f2807d9a07d37054c1e5eeba85241566eddae43a02d184d9e0469646417.png)

![img](https://kitt.lewagon.com/karr/assets/jquery/request_0-d70abe5e37c3906d418a4025df9862c3753f584703202e3dce78025481ec1323.png)

![img](https://kitt.lewagon.com/karr/assets/jquery/request_1-0d275df3528992ab362d1c17f63ba682e0566f217c89c2963f897bc726f977b2.png)

浏览器将**解析（parse）**HTML文档**生成（creates）**DOM树

通过Chrome检查器的**Elements**选项卡可查看DOM树

![img](https://kitt.lewagon.com/karr/assets/jquery/inspect-ab4ecf094a00098dd06106681aad08df267b7350004636de1f35b86c670d4461.png)

### 参考

Please keep a tab open with the [DOM Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)

------

## 与DOM树交互

### 最重要的[方法](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector)

```
document.querySelector(CSS_SELECTOR);
```

### 返回匹配指定选择器的元素
```
<ul id="players"></ul>
const list = document.querySelector("#players"); // CSS id选择器
// or
const list = document.getElementById("players");
```

🤔 无`id`的元素如何获取？

### 基本CSS选择器

提示

```
p               /* Type选择器  */
.red            /* Class选择器 */
#players        /* ID选择器    */
```

### 高级CSS选择器

提示

```
ul .active     /* 后代组合选择器（descendant selectors) */
ul > .active   /* 子元素组合选择器（child selectors） */
```

结合以上选择器将获取**特定**的CSS选择器
`jsdocument.querySelector('ul#players > .active a.btn');`

我们成功地选择了一个元素! 💪





下一步我们能做些什么呢？🤔

### 附加内容

我们将使用[Element#insertAdjacentHTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)方法

```
list.insertAdjacentHTML("beforeend", "<li>Luke</li>");
list.insertAdjacentHTML("beforeend", "<li>Anakin</li>");
```

可以阅读[ParentNode#append](https://developer.mozilla.org/en-US/docs/Web/API/ParentNode/append).

### 如何选择从DOM树的子集中进行选择

🎩 通过`querySelector`可以调用任何元素！

```
<p class="red">A red paragraph</p>

<ul id="players">
  <li class="green">Luke</li>
  <li class="red">Anakin</li>
</ul>
const list = document.querySelector("#players");
const element = list.querySelector(".red");
console.log(element.innerText);
// => ?
Anakin
```

### 如何选择多个元素

我们想选择所有的winners

```
<ol id="fifa-wins">
  <li>Brazil (5 wins)</li>
  <li>Germany (4 wins)</li>
  <li>Italy (4 wins)</li>
  <li>Argentina (2 wins)</li>
  <li>Uruguay (2 wins)</li>
</ol>
```

使用[`Element.querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll)!



```
const countries = document.querySelectorAll("#fifa-wins li");
countries.forEach((item) => {
  console.log(item.innerText);
});
```

`countries` is a [节点的集合（`NodeList`）](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) variable.

### 实施正确的方法

```
const countries = document.querySelector("#fifa-wins li");
// => <li>Brazil (5 wins)</li>
```

`querySelector`返回文档中匹配指定CSS选择器的**一个**元素！

```
const countries = document.querySelectorAll("#fifa-wins li");
// => NodeList(5) [li, li, li, li, li]
```

`querySelectorAll`返回文档中匹配指定CSS选择器的**所有**元素！

Your turn! 如何附加`"France (2 wins)"`到表单中？ 🤔

```
const list = document.querySelector('#fifa-wins');
list.insertAdjacentHTML('beforeend', '<li>France (2 wins)</li>');
```

------

## 高级DOM数操作

### Show / Hide

使用[HTMLElement.style](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style)

```
const element = document.querySelector(CSS_SELECTOR);

// 隐藏对象（Hide）
element.style.display = "none";

// 显示对象（Show）
element.style.display = "";
```

### 添加或移除元素

使用[`classList`](https://developer.mozilla.org/en/docs/Web/API/Element/classList)



```
element.classList.add("red");
element.classList.remove("red");
element.classList.toggle("red");
```

### 读写输入

```
<!-- Some HTML -->
<input name="email" id="email" value="paul@gmail.com" />
const emailInput = document.getElementById("email");

// 读取模式
console.log(emailInput.value);

// 写入模式
emailInput.value = "john@gmail.com";
```

### 提取文本或HTML

```
<a href="https://www.lewagon.com" id="home">Le Wagon <em>rocks</em></a>
const home = document.getElementById("home");
console.log(home.innerText);
console.log(home.innerHTML);
console.log(home.attributes.href.value);

home.innerHTML = "Le Wagon <strong>rocks</strong>!"; // 更改HTML
```

### Dataset

使用[HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)

```
<div id="user" data-uid="2471555" data-github-nickname="Papillard">
  Boris Paillard
</div>
const boris = document.getElementById('user');
console.log(boris.dataset.uid);
console.log(boris.dataset.githubNickname);
```

------

## 事件对象（Events）

[参考](https://developer.mozilla.org/en-US/docs/Web/Events)

### HTML DOM事件对象

```
DOMContentLoaded
blur
click
change
focus
keyup
mouseover
resize
scroll
submit
touchstart
```

### 事件将在特定的对

```
DOMContentLoaded  # 用于document
blur              # 当输入时或用于文本框
click             # 用于任何元素
change            # 仅适用于文本域（text field），以及textarea和 select元素
focus             # 当任何元素获得焦点时
keyup             # 用于window对象或任意元素
mouseover         # 当鼠标指针位于元素上方时时
resize            # 用于window对象
scroll            # 用于所有可滚动的元素和window对象
submit            # 用于表单
touchstart        # 用于手指触摸屏幕
```

### 事件监听器（Event Listener）

使用[`addEventListener`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) 将侦听事件并处理相应的函数
```
element.addEventListener(eventType, (event) => {
  // Do something（回调 callback）
});
```

### 什么是回调（callback）？

![img](https://kitt.lewagon.com/karr/assets/jquery/hollywood_principle-b1f66847502a940420e4a275691f811652a60ea31a87f5fa4eb5cfaf96e22ce8.png)

### Click事件

```
<img src="https://kitt.lewagon.com/placeholder/users/monsieurpaillard"
     id="romain" height="200" alt="Romain Paillard" />
const romain = document.getElementById("romain");
romain.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
});
```



深度阅读[Event.currentTarget](https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget)

UX提示：改变默认的光标（cursor），如果图像是可点击的

### Live-code

点击图片时绑定`img-circle` CSS class

```
.img-circle {
  border-radius: 50%;
}
```

### 如果有多个元素？

```
<img src="https://kitt.lewagon.com/placeholder/users/monsieurpaillard"
     id="romain" height="200" alt="Romain Paillard" />
<img src="https://kitt.lewagon.com/placeholder/users/Papillard"
     id="boris" height="200" alt="Boris Paillard" />
```



```
document.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("img-circle");
  });
});
```

------

## 调试（Debugging）

添加debugger到JS文件中并打开浏览器的**检查器**。 Enjoy

```
debugger
```

------

## Happy JavaScripting!
