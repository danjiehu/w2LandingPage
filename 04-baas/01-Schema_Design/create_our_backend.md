## Background & Objectives

The goal of this first exercise is to understand the basic structure of your cloud backend-as-a-service (BaaS). You will practice connecting your frontend <--> backend, giving you access to the BaaS SDK.

## Specs

To create your backend, you will need to complete the following steps as we did in the lecture:
1. Setup BaaS 
2. Install SDK
3. Create Tables
4. Add Data

### 1. Setup BaaS 

- Create a "New team" by clicking on the "All enterprises" dropdown menu. For now, you'll be working as a one-man team!
- Click on "[your enterprise name]'s first MiniApp" display card
- Click "继续接入" (continue access) in the WeChat MiniApp guide section

🙋‍♀️ Ask a teacher if you need help 

Now follow the instructions:
1. Authorize your mini program by following the instructions. Scan the QR code to link your Minapp to your WeChat account. 
*At this point you will need an AppID that you can get inside the WeChat Developer Account dashboard 😉*
2. Permit access to the plugin SDK, by clicking "Next"

You should now be on the 3rd and final step: **Complete initialization**
<figure style="width: 100%">
  <p align="center">
  <img alt="backend 1.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/esnNyXcFqX5YQfW3uK2AmRid" />
    </p>
</figure>

### 2. Install SDK

#### Here comes the fun part!

Time to start a new mini program! You'll be working on your own Dianping this week. 

❗ **Important**: Make sure to start the mini program with a real AppID this time, not a tourist/test AppID.

<figure style="width: 100%">
  <img alt="Screen Shot 2020-09-17 at 9.24.15 AM.png" src="https://wagon-rc3.s3.eu-west-1.amazonaws.com/iMT1c1JME6BZnLaPeyDsxiqx" />
<figcaption>You can also change the AppID on an existing mini program! Click on the ">>", then on "Details"
</figcaption>
</figure>

- In your mini program, follow **step 2**.  This step links your mini-program to the backend and vice versa. 
> Hint: Be careful where you're pasting the block of code! And don't forget to add a `,` somewhere... 

- Now, configure the [SDK](https://doc.minapp.com/js-sdk/wechat/) by following **step 3** on your mini program
> Instead of copy and pasting, try typing out the code yourself! 

⚠ Do **not** copy from the lecture slides, your `clientID` is unique to you

For now, comment out:
```js
// in app.js
   wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)
```
This block of code allows us to have users and request payment! We'll explore more in later classes.

- Finally, refresh or "Compile" your mini-program. Check in your console to see if there are any bugs

No bugs? Let's move on!

### 3. Create Tables

You'll be creating the same 2 tables in your backend:
1. `restaurants` 
2. `reviews`

#### Create a `restaurants` table
 It should have at least the following columns:
 - `name`, as a `string`
 - `description`, as a `string`
 - **Bonus Action:** Add a `photo` column for each restaurant! 
   - What data type should photos be? Hint: We'll be using a **url** for each restaurants's photo (e.g. https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg)
   - Photo should **not** be a required field

#### Create a `reviews` table in the same way
Add the required fields: 
- `content`, as a `string`
- and `rating`,  what data type should ratings be? 
*Hint: Is it countable?*
- Don't forget the `foreign key`
Why is the **required** field checked when we add a foreign key? Reviews cannot exist as a unique entity i.e. reviews need to belong to a restaurant!

### 4. Finally, Add Some Data!
- Add three or more restaurants, and then some reviews. They can be anything you like 😉
- Remember to add the restaurant's `id` to the reviews' `restaurant_id` field!

