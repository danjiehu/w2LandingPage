# Challenge: Xiaohongshu Landing Page

![img](https://pic2.zhimg.com/50/v2-a4f747289787253a99ba4f1f2d4fcbb9_hd.jpg)



## Xiaohongshu: The China Phenomenon

Xiaohongshu (小红书) also known as “Little Red Book” or “RED” is one of the **largest and fastest growing** social e- commerce apps in China. 

Xiaohongshu describes itself as “a sharing platform for **young people's lifestyles** through deep-rooted UGC shopping sharing community  

The platform is designed to help users **discover and purchase products**, share recommendations, and provide helpful tips. 

Users often go on Xiaohongshu to investigate products and look for in-depth reviews and tutorials created by other users. 

Think of Xiaohongshu as **a combination of Instagram and Pinterest**. Just like both platforms, you can save posts you like, interact with content and other users, create your own content, connect with brand pages etc. But with Xiaohongshu, you get the **added bonus of in-app purchasing**, a stronger sense of community, and more lengthy, detailed blog-post type content. 

## Your Task

Today's exercise will be to create **your own** social ecommerce landing page based on Xiaohongshu. 

It will be responsible and mobile friendly! So use [mobile design packs](https://kitt.lewagon.com/knowledge/tutorials/wechat_mini_program_UI) if you can. They are like Bootstrap, but for mobile apps!

Take your inspiration from the pages below. Note the social elements in the cards, namely the likes and the author (KOL or key opinion leader are the bread and butter of social apps).

### Xiaohongshu Web Landing

![2351567793533_.pic_hd](images/2351567793533_.pic.jpg)

### Xiaohongshu Mobile Landing

![6771567794775_.pic](images/6771567794775_.pic.jpg)


##  Instructions

Start with designing one card. It should have:

- Cover image

- Title or caption

- Author name and avatar

- A social element: e.g. follow, like, star, votes... with the number

But don't stop there! Have an idea that's better than Xiaohongshu? Now's your chance to make it. Try your own elements with your frontend skills.



### Layout



#### Masonary has gone digital too

The layout of the cards are done in **masonary** style.

To make that, we use the [CSS multi-column layout module](https://www.w3.org/TR/css-multicol-1/). 

This module allows us to present blocks as part of virtual columns. Multi-column properties `column` and `column-count` collectively lay down the foundation of our masonry.

After that, we will also be adding gutter to our masonry with  `column-gap`, its another property.

Hint: Gutter is the space between the masonry items.



#### The column-count property

CSS `column-count` allows you to add a specific number of adjacent columns to any block element. The child elements inside the block get aligned as per the specified number of columns.

And this gives an effect of a masonry layout, without any involvement of JavaScript. Read more on column-count [here](https://developer.mozilla.org/en-US/docs/Web/CSS/column-count).

What about spacing between the grid items? The `column-gap` property solved the gutter problem.



![A wireframe for CSS Masonry](https://w3bits.com/wp-content/uploads/css-masonry-wireframe-1x.png)



#### HTML

Let’s start with the markup. 

```html
<div class="masonry">
  <div class="item">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
  <div class="item">...</div>
  ...
  ...
  <div class="item">...</div>
</div>
```

As you can see above, the `.masonry` division acts as the masonry container and each `.item` acts as the masonry item.



#### CSS

Now comes the most fun and important part, the CSS.

```css
.masonry { /* Masonry container */
  column-count: 4;
  column-gap: 1em;
}

.item { /* Masonry bricks or child elements */
  background-color: #eee;
  display: inline-block;
  margin: 0 0 1em;
  width: 100%;
}
```

We perform the following tasks with the above CSS:

1. Apply the `column-count` property to the container. Because we want to automatically arrange the items in a masonry-fashion.
2. Set the items as inline blocks with 100% width. Because we want to fit the items properly inside the masonry columns.

That’s the basic idea. We end up getting [something like this demo](https://w3bits.com/demo/css-masonry/) consequently.



#### Responsive CSS masonry

Responsiveness means a sensible layout across different device sizes. To achieve this, modify the column-count for different screen breakpoints with the help media queries.

Some improvements also to the look of the cards.

Note the use of [box-sizing reset](https://w3bits.com/box-sizing-reset/) 



```css
/* Box-sizing reset: //w3bits.com/?p=3225 */
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

/* The Masonry Container */
.masonry {
  margin: 1.5em auto;
  max-width: 768px;
  column-gap: 1.5em;
}

/* The Masonry Brick */
.item {
  background: #fff;
  padding: 1em;
  margin: 0 0 1.5em;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .masonry {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .masonry {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .masonry {
    column-count: 2;
  }
}
```



### Next Steps

If you have time, add a header! It should have the logo, plus a menu (see the web landing screenshot above). 

A very simple menu is just categories for different cards. The menu and the logo should be responsive and look good on mobile (see mobile landing page screenshot)



### Advanced

Animate the cards so that they turn or move when you hover over them! 

Follow the tutorials from [Animate.css](https://daneden.github.io/animate.css/)

Find inspirations from [codepen](http://codepen.com) and [freefrontend](http://freefrontend.com) (search for "cards"), eg:



<https://freefrontend.com/css-card-hover-effects/>

<https://freefrontend.com/css-flip-cards/>

![img](https://freefrontend.com/assets/img/css-flip-cards/Pure-CSS-Flip-Card.gif)



<https://codepen.io/search/pens?q=hover%20cards&page=1&order=popularity&depth=everything>

![image-20190914024150805](/Users/dounanhu/Library/Application Support/typora-user-images/image-20190914024150805.png)