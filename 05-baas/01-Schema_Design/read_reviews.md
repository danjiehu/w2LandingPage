## Background & Objectives

The goal of this exercise is to practice implementing the READ feature of CRUD with the SDK, where:
- As a user, I can view reviews of one restaurant

## Specs 
- It makes sense to show the reviews together with the restaurant's details. No need for a new page.
- Use a filter to find reviews for just one restaurant like we did in the weekend Toutiao challenge!
- What is the **query** for comparing `restaurant_id`? Remember to check the [docs](https://doc.minapp.com/js-sdk/schema/query.html) often! The syntax for your query should look something like this:

```js
 // creating a query object and then...
 query.compare('some_column_name', '=', some_unique_identifier) // these variables need to be replaced ;)
 Restaurant.setQuery(query).find().then(dosomething)
```

At this point your mini program should have three features:
  - viewing all restaurants
  - viewing one restaurant
  - viewing all reviews for one restaurant

Now it's time to make it pretty! 🎨 