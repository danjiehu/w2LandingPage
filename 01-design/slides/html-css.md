## Today's objectives

- Learn HTML / CSS basics
- Code your profile page [like this](https://papillard.github.io/my-profile/)
- Put it online with [Github Pages](https://pages.github.com/)

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

## Front-end languages

The languages **your browser speaks**

![img](html-css/front-languages-24d3a355bfc2e8758518763bff78bab685d96644f56b94155c4e42a014270203.png)

------

![img](html-css/html5-logo-b1dcae04056e918ace39b2a6e15ee848b658f28d2a1bba6cb7c63731d521c785.png)

It's a **markup** language (== structure)

\--

## HTML

Your page has different contents

![img](html-css/content-68d2a1782391be808a207de804572c3f2a559d0331ce7e61681b082e07f50ab9.png)

## HTML

HTML tags help you **identify** content

![img](html-css/content-with-tags-414c7ab318d111663bf5454c60737d240488c7dc8f25276f736da6fe504e56b7.png)

## HTML

Hence, **browser default styles** will apply

![img](html-css/content-with-tags-html-4e57417cc0d56394fb4b3ad1c77d7239da5f9bf5b5c592b3718c5da2a3ca6c77.png)

## HTML

And you will also be able to apply **your own style rules** if you want

![img](html-css/content-tags-css-6971d60a88bf6fb3290482393b3b31675a5eadea7c27bbdd0d16354c1ad7c651.png)

## HTML Skeleton

```
<!DOCTYPE html>










<!-- end of file -->
```

## HTML Skeleton

```
<!DOCTYPE html>
<html>







</html>
<!-- end of file -->
```

## HTML Skeleton

```
<!DOCTYPE html>
<html>
  <head>

    <!-- Page's intelligence = meta tags -->

  </head>
  <body>

    <!-- Page's content = displayed on the page -->

  </body>
</html>
<!-- end of file -->
```

## HTML Skeleton - head

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

## HTML Skeleton - head & Google

```
<head>
  <!-- Google result text-->
  <title>Coding Bootcamp Le Wagon | Europe's Best Coding Bootcamp</title>
  <!-- Google result description-->
  <meta name="description" content="Le Wagon is Europe’s best coding bootcamp for creative people & entrepreneurs. Learn to code in 9 weeks with our fullstack coding bootcamp.">
</head>
```

![img](html-css/google-card-a361304b30e0875e1e06a6ee20b7f3f8acc14e9c3b2cf74f1044802c5a737310.png)

## HTML Skeleton - head & Facebook

```
<head>
  <meta property="og:title" content="Le Wagon - The French innovative coding school">
  <meta property="og:image" content="facebook-card.jpg">
  <meta property="og:description" content="Le Wagon is the best French coding school for entrepreneurs. Checkout by yourself the projects of our students. You will be impressed.">
  <meta property="og:site_name" content="Le Wagon"/>
</head>
```

![img](html-css/fb-card-f68955dc612031b453e44657ce1a225d26d8b9cfad60bfde829d7b6ee568c295.png)

## HTML Skeleton - head & Twitter

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

## HTML Skeleton - body

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

## Basic syntax

![img](html-css/element-syntax-0a692d495a6c0df2d59fe46662c2855a0b704a8d30ed8378910e15e0e4506c72.png)

## Example

```
<a href="https://www.lewagon.com" target="_blank">
  Le Wagon
</a>
```

Result: [Le Wagon](https://www.lewagon.com/)

### Quizz

- What is the name of the tag?
- What is the content?
- What are the 2 attributes (name and value)?

## Titles

```
<h1>[...]</h1>  <!-- Only one per page! SEO important -->

<h2>[...]</h2>
<h3>[...]</h3>
<h4>[...]</h4>
<h5>[...]</h5>
<h6>[...]</h6>
```

## Paragraphs

```
<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  Veritatis laboriosam mollitia autem at ab omnis iure quis
  asperiores inventore eos nam aut iusto officiis deserunt
  nihil, sequi tempore impedit quae?
</p>
```

## Emphasize

```
<p>
  You can emphasize <em>some words</em>,
  and even <strong>more if needed</strong>
</p>
```

## Lists

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

## Images

```
<img src="logo.png" alt="Le Wagon logo">
```

## Forms

```
<form>
  <input type="email">
  <input type="password">
  <input type="submit" value="Log in">
</form>
```

## Much more

- [codeguide.co](http://codeguide.co/)
- [MDN reference](https://developer.mozilla.org/en/docs/Web/HTML/Element)

## Live-code

Let's add some HTML content to our profile page!

![img](html-css/profile_html-f5630480d2ba69e6707bdeef20fce4993c15b1bc44c69315a64217dfe37fbafe.png)

------

![img](html-css/css3-logo-195ecfeee1639c0cd00bcc4cfc85a548d6a7fa900eeed2707a75548798f89733.png)

## Web without CSS ?

- Cut the `<head>` on [medium.com](https://medium.com/) with Chrome dev tool.
- This is how a website looks like without CSS 😬

## Linking stylesheet to HTML page

![img](html-css/linking-css-93a0e35c150df4ec377c3b2b8045c22fcfb74e47c166758e92dfac4949907682.png)

\--

## CSS syntax

![img](html-css/css-syntax-3633232082c8f9b84ebde51ead6472ccfe80c1af4bf1cdb4140b94f79dcf0400.png)

\--

## CSS vocabulary

![img](html-css/css-vocabulary-54709fcfe49b81165cc66c5cda5d78cc0c5b5eec7d8bbcf879b3b263fedf1145.png)

\--

## Example

![img](html-css/css-syntax-example-19d14b8f80d0d2d7af3a579fab48716f0da8a148f9eee5dd2b3c45ac38085f09.png)

## Colors

```
color: #FF530D;
color: rgb(255, 83, 13);
color: rgba(255, 83, 13, 1.0);
```

x

## Colors - Tips

```
body {
  color: rgb(10, 10, 10);
}
```

- **RGB** stands for **R**ed **G**reen **B**lue
- each value is between 0 and 255
- for same values of R, G and B, you are on the grey scale

![img](html-css/grey-scale-efaa01b8c08d4a90505ef417a86fdffe7bed8e670e3fab84ae8f5dce203e0931.png)

\--

## Text vs Background

## ![img](html-css/text-vs-bg-5f4f366955757d5bf06d93b83402c842a3abbff025950aa96670442da1d1ad98.png)

## Background image

![img](html-css/bg-image-c2a76d897059d5224827ef1f1941aab90e4c1b1fc405ef893e4b7bd693ed751d.png)

\--

## Font - family

## ![img](html-css/font-family-ca0758530f7c9d5a357b16e7402ce0511bbcf1f3a81d894f1d9e73334a5b0fdc.png)

## Fonts - size and spacing

## ![img](html-css/text-spaces-ad13823a0e1ec70a2c6a4cfc6093f5c143842ba642ee06c013262a62fcf57ed9.png)

## Fonts - decoration

## ![img](html-css/text-decoration-71fb6097fb8f9b1c821a15dd246e082163bfbef13010c03dd5277439cec07a21.png)

## Fonts - alignment

## ![img](html-css/text-align-5902740aa2f71de097abf94ec553f207ef7bef817c5ddd605b30ba6e0e2f6e28.png)

## Fonts - weight

## ![img](html-css/font-weight-ccef280d6ce99b985f3dd585fb09dd5f9bc5afa2d9f25196df93685225be691a.png)

## Fonts - Google fonts

Make your shopping on [Google fonts](http://www.google.com/fonts).

- **Open-Sans** 👉 `<body>`
- **Raleway, Montserrat, Varela Round, etc...** 👉 `<h1>`, `<h2>`, `<h3>`

## Fonts - Font Awesome

[Font Awesome](https://fontawesome.com/) is a font of icons, really useful!

```
<!-- cdn link to paste in your <head> -->
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.10/css/all.css">
```

## Small tips

Use the inspector, then copy the `css` in Sublime.

![img](html-css/profile_inspector-bc6384e4ccd1257c10b9f57c7aa3009f9cf59055d9d515b64f6816776ab82ba8.png)

## Live-code

Let's design our fonts and colors using [Google fonts](https://fonts.google.com/).

![img](html-css/profile_css-29dd6ce7fa3ce73796907f05d3af52425b251debbb7bb62aab64104ec8266091.png)

------

## Div and box model

## Real life...

![img](html-css/airbnb-02cbe138eb3e2d0f05ad8f7a05c11cce4d8f2f7d8d30128d02322939af13e992.png)

## ... is made of `<div>`

![img](html-css/airbnb-with-div-20b4ad563c8066f7035bd1bf408960003a7937d8842f3a00f093450d29336a84.png)

## Box model

![img](html-css/box_spacing-bbfa0b27d2a85ce5238029e989360fac63a09c61c304addeb8ecaafc6f1d744a.png)

## Box model - border

![img](html-css/box-model-3-c489c1980f18303347fe3a385eeac670814f7bd060c0f606a2e7235a1c5192a5.png)

## Borders

```
div {
  border: 1px solid red;
}
/* or */
div {
  border-top: 1px solid red;
  border-right: 2px dotted black;
  border-bottom: 1px dashed green;
  border-left: 2px dotted black;
}
```

![img](html-css/borders-aa6243ac7d9e4d4d902ee669c6b360d29349677f4f6cc33b8f6c7b305d8a2052.png)

## Border radius

![img](html-css/radius-1-30d42e5cc809b05bd644edc133d49984aa1ee5c47eecbd5e8e3bde356a2734c1.png)

\--

## Border radius

![img](html-css/radius-2-c631c1e6c6ce3abdd8f925e819b18625f70df7fd2b8eab52decb28ee0b034993.png)

\--

## Box shadow

![img](html-css/box-shadow-92839ef882b5e4bf0299dc7e5194c0c3c968af4d0053a9588ef56def4ec75195.png)

## Units

```
/* Absolute */
p {
  width: 50px;
}

/* Relative to parent */
p {
  width: 50%;
}

/* Relative to font size */
p {
  width: 2em;
}
```

## Div design tips

```
background: white;                         /* White background */
padding: 30px;                             /* Internal space */
border-radius: 4px;                        /* Small radius */
box-shadow: 0 10px 30px rgba(0,0,0,.1);    /* Light shadow */
```

#### Result:

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptatibus, quis iure vel aliquam veritatis architecto fugiat necessitatibus? Quidem error explicabo nemo maiores voluptatem odio delectus ad, esse reprehenderit animi.

## Div centering technique

```
width: 300px;        /* Set the width */
margin: 0 auto;      /* Set automatic margins on right/left */
```

#### Result:

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos voluptatibus, quis iure vel aliquam veritatis architecto fugiat necessitatibus? Quidem error explicabo nemo maiores voluptatem odio delectus ad, esse reprehenderit animi.

## Live-code

Let's **add some div** in our HTML and play with the box model with Chrome Dev tool.

------

## id and class

\--

## How do you style only the logo?

![img](html-css/id-dilemma-498dc8980d3e0dd3e9f40dbc53eb9bc718e937f0aedce7a88dce6ad65adf7946.png)

\--

## Name your tag with `id`

![img](html-css/id-solution-ecc142b3ca1161f17f9078effb3710bbbdb638b09a3de9625c6da65826d74da1.png)

\--

## How do you style your staff pictures?

## ![img](html-css/class-dilemma-6a3a8a6997df006eb99d5f034d86bec91360c41e563677f0148fef3b90f218b2.png)

## Name your tags with `class`

## ![img](html-css/class-solution-93d33d4c380330298ebfaa781365427efc3169359b4e07778b578af370d042fa.png)

## id or class?

## ![img](html-css/class-or-id-dc3998e0ee573a38daa186715b28934ff0560215e07262118a46c18343d05c6f.png)

## Combine (1)

## ![img](html-css/combine-class-1-52b0cca31494d55f136d68e47aa09060478005031abd233f8ec333857b4f1300.png)

## Combine (2)

## ![img](html-css/combine-class-2-9b99d83da19cbf7e494192f3b1bda849dd125142cb68a80fede694b705603015.png)

## Combine (3)

![img](html-css/combine-class-3-a1e379c6e97826d412bbd52a41a9ede8d185b1d5c35d9c73220cdd8b724a6c89.png)

\--

## Class naming - quizz

Which one is **more explicit** (tells what it does)?



- `.btn-red` or `.btn-signup`?
- `.background-blue` or `.background-home`?
- `.img-user` or `.img-circle`?



Change your mindset => **think graphical**

\--

## Class naming - convention

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

## Selectors Summary

## Element Selector

```
<!-- index.html -->
[...]
<body>
  <h1>Hello World</h1>
</body>
```

combined with
`css/* style.css */h1 {color: red;font-weight: bold;}`
makes the `h1` elements red and bold.

## Class Selector

```
<!-- index.html -->
[...]
<body>
  <p>This paragraph is not justified</p>
  <p class="text-justify">This one is</p>
  <p class="text-justify">This one also</p>
</body>
```

combined with

```
/* style.css */
.text-justify {
  text-align: justify;
}
```

will make only the second and third paragraphs justified.

## Id Selector

```
<!-- index.html -->
<body>
  <div id="banner">
    <h1>Le Wagon</h1>
    <p>We bring tech skills to creative people</p>
  </div>
</body>
```

combined with

```
/* style.css */
#banner {
  background-image: url("example.jpg");
  background-size: cover;
}
```

will put an image background on the **unique** div with `id="banner"`.

## Descendant Selectors

```
<!-- index.html -->
<body>
  <div id="banner">
    <h1>Le Wagon</h1>
    <p>We bring tech skills to creative people</p>
  </div>
</body>
```

combined with

```
/* style.css */
#banner h1 {
  color: white;
}
```

`h1` **children** of the element `id="banner"` will be white.

## Direct Children

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

combined with

```
/* style.css */
#navigation > li > a {
  color: blue;
}
```

`a` **direct children** of `li` **direct children** of `id="navigation"` will be blue.

## Grouping

```
/* style.css */
h1, h2, h3 {
  font-weight: bold;
}
```

is a shortcut syntax for

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

## Pseudo Classes

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

will make links underlined when the mouse hovers over them.



See [other pseudo classes](https://developer.mozilla.org/en/docs/Web/CSS/Pseudo-classes)

## Quizz #1

```
<!-- index.html -->
<body>
  <p class="text-red">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</body>
```

combined with

```
/* style.css */
p {
  color: black;
}
.text-red {
  color: red;
}
```

## Quizz #2

```
<!-- index.html -->
<body>
  <p id="bio" class="text-red">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
  </p>
</body>
```

combined with

```
/* style.css */
.text-red {
  color: red;
}
#bio {
  color: green;
}
```

## Specificity of Selectors

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

Check out the [specificity calculator](http://specificity.keegan.st/)

## Live-code

Let's **finish our live-code** and get this [final result](https://papillard.github.io/my-profile/)!

![img](html-css/profile_final-dfb46508b6af87d012cadf82451e6ba0d19b00ade3a9649df360611efde3a9e1.png)

## Let's build your profile!
