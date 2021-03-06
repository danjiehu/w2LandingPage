## Background & Objectives

Practice the Bootstrap grid. Learn how to build various grids with different responsive behaviors.

For ALL exercises today, start with the template that you can [download](https://github.com/lewagon/china-product/raw/master/01-design/exercises/Layouts.zip)!


## Specs

Here are [the smiley grids](http://lewagon.github.io/bootstrap-challenges/01-New-Bootstrap-grid/) that you must reproduce in this challenge. Each of these 3 grids has the same starting point:

```html
<div class="container">
  <div class="row">
    <!-- Different variants depending on responsive behavior -->
  </div>
</div>
```

After that, you'll have to add different `.col-??-??` inside the `.row` depending on the behavior you want.

⚠️ **Don't break the grid**

Do NOT add boostrap grid classes on the same level as other CSS.

```html
<div class="container">
  <div class="row">
    <!-- 👎 -->
    <div class="card bg-light col-6">
      😀
    </div>
  </div>
</div>
```

Instead build a grid around the content, and insert it inside like this:

```html
<div class="container">
  <div class="row">
    <!-- 👍 -->
    <div class="col-6">
      <div class="card bg-light">
        😀
      </div>
    </div>
  </div>
</div>
```

## Further suggestions & resources

- When coding a grid, always start with the `.col` class for the smallest resolution. Ask yourself which proportion you want on mobile. Full screen (`.col-12`)? Half screen (`.col-6`)? 25%-screen (`.col-3`)?.
- Then move on to the next resolution (`sm`) and repeat this thought process 🤔. And so on, and so on, until you get to `xl`.
- You are not obliged to write all the `sm/md/lg/xl` classes. If you don't write all of them, it's always the preceding class that applies. For instance a `<div class="col-12 col-lg-6">` will be full-screen from mobile to laptop, and then half-screen from laptop to larger screens (desktop).

NB: don't forget to **hard refresh** your browser (`cmd + shift + r`) to clear your browser's cache if your page doesn't seem to display your current code!
