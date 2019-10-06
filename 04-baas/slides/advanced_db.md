# Advanced Backend as a Service (BaaS)


Today  we will try building Dianping (or Meituan - both are review apps). 

Consider reviews:

![7121570232716_.pic](/Users/dounanhu/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/6a4b5887054cf04461590f2613ad3df3/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/7121570232716_.pic.jpg)

Users can post reviews on restaurants. So relationship-wise, each restaurant can be reviewed by many users, and each user can review many restaurants: a many-to-many relationship.



## Many to many relationships

## Excel++

Let's go further

![img](https://kitt.lewagon.com/karr/assets/db/01-excel-patients-c4e1fb0b83e8969be3df02feef1ad117b5adcaac032d0bd05105dd81720e2ad2.png)

![img](https://kitt.lewagon.com/karr/assets/db/02-excel-doctors-f1a80607fedc28798277a87517bd549c79e9404ce03372d25cec62259f9fbc20.png)

## Consultations ?

- **One** doctor can have **many** patients
- **One** patient can see **many** doctors

![img](https://kitt.lewagon.com/karr/assets/db/03-excel-consultations-01-e5bb821b109b36128c9730674f760a4c4120e56d451bd77df9213eb53c214f3d.png)

![img](https://kitt.lewagon.com/karr/assets/db/03-excel-consultations-02-4c795baa7ae137674c441e0171142c96ae04b78112c330d1fba140c9c9929ff0.png)

![img](https://kitt.lewagon.com/karr/assets/db/04-excel-patients-with-id-01-45eaacad823344bab38b9c2cd52a9689a32de5242ff091c728ae3c7a4604944f.png)

![img](https://kitt.lewagon.com/karr/assets/db/04-excel-patients-with-id-02-57560b06f2932beda21e7240b13a1911941388842b97be41a787f31edaff0d8a.png)

![img](https://kitt.lewagon.com/karr/assets/db/05-excel-doctors-380a8bf386286ee409f854ab4015ad30a41cbb5ed45121629d297b5efee831ef.png)

![img](https://kitt.lewagon.com/karr/assets/db/03-excel-consultations-02-4c795baa7ae137674c441e0171142c96ae04b78112c330d1fba140c9c9929ff0.png)

George Abitbol (**id = 1**) has seen Doctor John Doe (**id = 3**)

![img](https://kitt.lewagon.com/karr/assets/db/06-excel-first-scenario-5319df9f04608e950c494ae8b413c9e3662563c4486d380c7208a87347bf8e2d.png)

## n:n relation (many to many)

A patient **has many** doctors and a doctor **has many** patients.

You can download this example: [consultations.xslx](https://kitt.lewagon.com/karr/assets/patients-doctors-56eaccffe9a741fbebec5b9c09922abdfd39055dcd1880eb5e0bbdc547e558b6.xlsx)

------

## Relational Database

### 1:n

![img](https://kitt.lewagon.com/karr/assets/db/cities-inhabitants-bc284f89232fc38d4fae055a64be4fdb18aeeca7e2c127c073ff516bb837d8db.png)

### n:n ?

![img](https://kitt.lewagon.com/karr/assets/db/01-db-consultations-5cde6e3d404cce34134d0d4b97f476fc7bb99e70c9e247e1e5fd56a218bde9ed.png)

### n:n

![img](https://kitt.lewagon.com/karr/assets/db/02-db-consultations-full-6bb7c262be8c6cbc3e55fd0cdb0334c60d7dd4241f244df932efef69a88fa44a.png)

## Vocabulary

- A schema is composed of **tables**.
- Each table has a set of **columns**.
- When inserting data in a table, you create a **record** in a new **row**.

## DB Schema Composer

[db.lewagon.com](http://db.lewagon.com/)

You can save/load schemas. Try with
[patients-doctors.xml](https://kitt.lewagon.com/karr/assets/patients-doctors-9aba2b9307abcf0650388a7cdfad252452ac4cb388234c0e9b0acfb8fa7e1f8b.xml)



## Dianping Core User Journey

### Restaurant Index

![7111570232715_.pic](/Users/dounanhu/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/6a4b5887054cf04461590f2613ad3df3/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/7111570232715_.pic.jpg)

A restaurant has name, photo, overall rating, number of reviews, and description

### Restaurant Page

Restaurant page shows individual reviews


![7091570232711_.pic](/Users/dounanhu/Library/Containers/com.tencent.xinWeChat/Data/Library/Application Support/com.tencent.xinWeChat/2.0b4.0.9/6a4b5887054cf04461590f2613ad3df3/Message/MessageTemp/9e20f478899dc29eb19741386f9343c8/Image/7091570232711_.pic.jpg)

Each review has name, content, rating



## Dianping Data Schema

Review relationship is many-to-many



![image-20191005084037398](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191005084037398.png)



So review's relationship is its own (joint) table:



![image-20191005084145536](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191005084145536.png)



Schema:

![image-20191005084833734](/Users/dounanhu/Library/Application Support/typora-user-images/image-20191005084833734.png)

 



## I Go, then Your Turn

For your **Exercise**, you will be making Dianping.

As with Toutiao, you can connect the backend to your Mini Program through using SDK!

Tip: Use your Toutiao frontend as starting point to save time. It is also similar! 

### User login

For us to know who the user is, we need 

### Restaurant Index

Request



Average Restaurant Rating:

= sum of ratings / number of reviews





### Restaurant Page



### Reviews

