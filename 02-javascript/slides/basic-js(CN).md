## 介绍

### The Client-side Programming Language

### 名称

JavaScript != Java

## 今天的目标

- 熟悉语法
- 学习JavaScript基础知识


今天我们将在浏览器里操作



### JavaScript版本

我们将用ES6来编写代码

- ECMAScript Edition 6
- 2015年发布的（ECMAScript 2015 Language）
- [~90%浏览器](httpscaniuse.com#search=ES6)支持

------

## 在浏览器上如何编写JavaScript


### 文件中


JavaScript

```
 hello.js
console.log(Hello Le Wagon);
➜ ~ node hello.js
Hello Le Wagon
```

------

## 数据类型

JavaScript

```
Hello Le Wagon             字符串（String）

42                           数字 （Number）
3.14                         数字（Number）

true                         布尔型（Boolean）
```

### 检查数据类型（Data Type）

JavaScript

```
typeof(Boris);
 = 'string'

typeof(42);
 = 'number'
```

### 转换数据类型

JavaScript

```
Number.parseInt('42', 10);
 = 42

(42).toString();
 = '42'
```

### 数据结构（Data Structure）

JavaScript

```
[ 'Hello', 'Le', 'Wagon', 42 ]     数组（Array）

{ name 'bob', age 42 }           对象（Object）
{ 'name' 'bob', 'age' 42 }       对象（Object）
```

### Null和Undefined

```
let age;  undefined
let name = null;
```

------

## 变量（Variables）

### JavaScript

之前JS使用的`var`.

ES6用`let`和`const`来替代`var`

### `let`

定义的变量可以任意更改

```
let counter = 1;
console.log(counter);

counter = counter + 1;
console.log(counter);
```

### `const`

定义的变量都不可变



```
const firstName = John;
console.log(firstName);

firstName = Paul;  TypeError Assignment to constant variable.
```

### 命名规则

JavaScript

```
const firstName = Ringo;
 lowerCamelCase
```

------

## 字符串

让我们更深入地研究这种类型

参考[String on MDN web docs](httpsdeveloper.mozilla.orgen-USdocsWebJavaScriptReferenceGlobal_ObjectsString)

### Length属性

```
const firstName = Paul;
firstName.length;
 = 4
```

### 字符提取

```
const firstName = John;
firstName[0];
 = J

从终点index 1开始往后的字符串不被截取
firstName.substring(1);
```

### 字母大小写转换

```
const firstName = Paul;
firstName.toUpperCase();
 = PAUL

firstName.toLowerCase();
 = paul
```

### Split方法

```
const monthString = Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec;

const months = monthString.split(,);
 = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ]
months.length;
 = 12
```

### 字符串内插（Interpolation）

JavaScript

```
const firstName = Ringo;
const lastName = Starr;

const message = `${firstName} ${lastName} is a drummer`;
 = Ringo Starr is a drummer;
```

[样板字面值](httpsdeveloper.mozilla.orgendocsWebJavaScriptReferenceTemplate_literals)

------

## 数组（Array）

参考[数组](httpsdeveloper.mozilla.orgen-USdocsWebJavaScriptReferenceGlobal_ObjectsArray)

### CRUD

JavaScript

```
const fruits = [];
fruits.push(Apple);  增加对应 Create
fruits[0];             查询 Read
fruits[0] = Banana;  修改 Update
fruits.splice(0, 1);   删除(0 index的一个项) Delete
```

### `forEach`

JavaScript

```
const beatles = [paul, john, ringo, george];
beatles.forEach((beatle) = {
  console.log(beatle.toUpperCase());
});
```

[Array.forEach](httpsdeveloper.mozilla.orgen-USdocsWebJavaScriptReferenceGlobal_ObjectsArrayforEach)

------

## 流程控制（Control Flow）

### `if`  `else`

JavaScript

```
const age = 14;

if (age = 18) {
  console.log(You can vote);
} else {
  console.log(You can't vote);
}
```

### 错误值（Falsy Values）

JavaScript

```
false
undefined
null
0
NaN

```

### 三元运算符（Ternary Operator）

JavaScript

```
const raining = true;
const accessory = (raining  umbrella  sunglasses);
 = umbrella
```

JavaScript

```
if (digit === 0) {
  console.log('Zero');
} else if (digit === 1) {
  console.log('One');
} else {
  console.log(I don't know this digit, sorry!);
}
```

理解JS中的[等值比较规则](httpsdeveloper.mozilla.orgen-USdocsWebJavaScriptEquality_comparisons_and_sameness)及`==`和`===`的区别。

------

## 对象（Objects）

[JS对象指南](httpsdeveloper.mozilla.orgen-USdocsWebJavaScriptGuideWorking_with_Objects)

### 简单对象（Simple Object）

```
const student = {
  firstName Boris,
  lastName Paillard
};

console.log(typeof student);
 = object

console.log(student);
```

### 读取和设置属性

可用点操作符（dot notation）去访

```
console.log(student.firstName);
 = Boris
console.log(student['firstName']);  Another way
 = Boris
student.firstName = Romain;
console.log(student.firstName);
 = Romain
```

------

## 函数（Functions）

阅读[函数指南](httpsdeveloper.mozilla.orgen-USdocsWebJavaScriptGuideFunctions)

### 定义函数（Define）

JavaScript（老方式）

```
function square(x) {
  return x  x;
}
```

Note the explicit `return`

### 调用函数（Calling）

JavaScript

```
square(10);
 = 100
```

### 箭头函数（Arrow Function）

```
const square = (x) = {
  return x  x;
};

更短的语法，与隐式返回（implicit return）
const square = x = x  x;
用函数，与前面提到的一样
square(10);
```

### 应该用什么？

[箭头函数](httpsdeveloper.mozilla.orgen-USdocsWebJavaScriptReferenceFunctionsArrow_functions) 更短的语法，完全相同的函数可以被表示为只有一行代码的箭头函数。 课程中，请使用箭头函数。

### Capitalize example

Let's livecode an arrow function and store it into `capitalize`.

```
touch libcapitalize.js
const capitalize = (word) = {
  const firstLetter = word[0].toUpperCase();
  const restOfTheWord = word.substring(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
};
```

------

## Debugging

### Poor man's debugger `console.log()`

```
const capitalize = (word) = {
  const firstLetter = word[0].toUpperCase();
  console.log(firstLetter);
  const restOfTheWord = word.substring(1).toLowerCase();
  return `${firstLetter}${restOfTheWord}`;
};

capitalize(wagon);
```

### Attaching to Chrome (1)

Open up a webpage in chrome

Go to [`chrome://inspect`](chrome://inspect/)
- Click on "Inspect" for the file you are debugging

![img](https://kitt.lewagon.com/karr/assets/javascript/chrome-inspect-d6880823534458f14153fd088a24f365f321eebf0a0466792a29d3595b8f2860.png)

### Attaching to Chrome (3)

- Underneath the **Sources / Filesystem** tabs, click on **+ Add folder to workspace**
- Find and select your project in your filesystem
- Click on the "Allow" blue button to give Chrome access to your filesystem

### Attaching to Chrome (4)

You are **ready**! You can now **click in the gutter** to add **breakpoints** to your code.

![img](https://kitt.lewagon.com/karr/assets/javascript/chrome-inspect-debug-640b7e725d69a48127b6ae4e46e36ec75e8e1cb08e231440fa79c1c84dff2641.png)

------

## One more thing

[![img](httpskitt.lewagon.comkarrassetsjavascriptcodetogo-44c75768b4063c14ee576566e8e468fea57fe74612043e5872ea87c90e0f37dc.png)](httpscodetogo.io)

By [Jad](httpskitt.lewagon.comalumnijadjoubran) & [Nicole](httpskitt.lewagon.comalumninicolesaidy) 💪

------

## Happy (Back-end) JavaScripting!
