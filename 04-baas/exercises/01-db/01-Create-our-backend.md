## Background & Objectives

The goal of this first exercise is to understand the basic structure of your cloud-service backend (BaaS). You will practice connecting your frontend <--> backend, giving you access to the BaaS SDK.

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
1. Authorize your MiniApp by following the instructions. Scan the QR code to link your MiniApp to your WeChat account. 
*You should already have a WeChat account 😉*
2. Permit access to the plugin SDK, by clicking "Next"

You should now be on the 3rd and final step: **Complete initialization**
<p align="center">
<img src="https://github.com/lewagon/china-product/raw/master/04-baas/slides/images/image-20190918005356038.png" alt="#" style="border: 1px solid rgb(240, 240, 240)" width="700"/>
</p>

### 2. Install SDK

#### Here comes the fun part!

Open your Toutiao mini-program from Saturday and follow the initialization process.

- **Step 1** replace your tourist or test AppID with your newly registered AppID 
❗ **Important**: Without this step, you won't have access to your database!

- Go back to your MiniApp and follow **step 2**.  This step links your mini-program to the backend and vice versa. 
> Hint: Be careful where you're pasting the block of code! And don't forget to add a `,` somewhere... 

- Now, configure the [SDK](https://doc.minapp.com/js-sdk/wechat/) by following **step 3** on your MiniApp
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
1. `stories` 
2. `comments`

#### Create a `stories` table
 It should have at least the following columns:
 - `content`, as a `string`
 - `name`, as a `string`
 - **Bonus Action:** Add a `photo` column for each story! 
   - What data type should photos be? Hint: We'll be using a **url** for each story's photo (e.g. https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg)
   - Images are **not** a required field

#### Create a `comments` table in the same way
Add the required fields: 
- `name`, as a `string`, 
- `content`, as a `string`
-  `votes`,  what data type should votes be? 
*Hint: Is it countable?*
- Don't forget the `foreign key`, this requires an extra step
Why is the **required** field checked? Comments cannot exist as a unique entity i.e. we don't want comments on nothing!

### 4. Finally, Add Some Data!
- Add three or more stories, and then some comments. They can be anything you like 😉
- Remember to add the story's `id` to the comment's `story_id` field!