# WeChat Mini Program UI



# **1. Design your MP interface for simple tasks and instant understanding**

Mini Programs are meant for “use and forget”. For the majority of them, you don’t get the opportunity for users to learn all the features from repeat usage, especially within an O2O context. Have [occasional users](https://www.nngroup.com/articles/wechat-mini-programs/) in mind when you design your MP. [Convenience and efficiency](https://uxspot.com/blog/why-and-when-users-like-using-wechat-mini-programs) being leading motivating factors, you need to keep your interface as clutter free as possible and focused on the task at hand. The first few seconds of entering a Mini Program are crucial to understand its functionalities and how to interact with it, and each screen should have a clear focus and flow outline.



![img](https://miro.medium.com/max/742/1*FuaOATnz_HrmMjrNNx7Xnw.png)



*Left: Fapiao Ma发票吗, an invoice data management MP uses a minimalistic interface. Right: Walmart’s self-checkout MP is meant for ease-of-use and puts the emphasis on product scanning.*

As a general rule, try to stay away from anything that requires users to remember to go back to the Mini Program to complete tasks: they most likely won’t.

# **2. Consider breaking down your Mini Program footprint over functionality or audience-focused MPs**

[In practice, 50% of the top WeChat Mini-programs also have a corresponding Native App](https://walkthechat.com/wechat-mini-programs-simple-introduction/). However, [research](https://uxspot.com/blog/why-and-when-users-like-using-wechat-mini-programs) shows replicating a native app is not a good idea if it means trimming functions due to the size constraints of the MP. A best practice is to offer a set of the core features of your App in focused Mini Programs instead.

![img](https://miro.medium.com/max/822/1*kwZFEK41k7_o0kg1tV4hNw.png)



*Qunar hotel booking page: the Mini Program is a lot more focused on the booking itself, with entry points to the other functions (plane tickets, member area etc.) removed.*

Consider also breaking down your core functions into multiple dedicated Mini Programs: they can be favorited individually, and serve different target audiences and contexts of use (O2O, gifting vs. direct purchases, etc.).





# **3. Have an App? Consider using a Mini Program as a teaser to onboard users to the App**

Apps and Mini Programs do not have necessarily to be opposed in China. While MPs are much lower friction than Apps, especially for infrequent use, they can also nicely complement an App. You can consider offering your core App features as a Mini Program and leave high-value tasks in the App. Take for example Chinese courier leader Shunfeng顺丰: their MP mirrors the App regarding functionalities, except for the two value-added tasks: asking for a Fapiao发票 and order international parcels. This ensures they capture their highest value segment, businesses, into the App.

Another example is popular photo filter App Meitu美图: they use their Mini Program as a shortcut and a teaser by offering the 3 most popular filters, and inviting the user to download the app for more:

![img](https://miro.medium.com/max/2128/1*x6mIHeEaBZDNWE4KLtOuEQ.png)

“ *Our users wanted an easy registration interface. By launching a Mini Program, not only the DAU traffic has increased exponentially, but the organic downloads of the App have gone up as well*! ”

> *Andrea Sperenza, CEO of YEYU App*





# **4. Make navigation self-evident**

Although more than 600 million WeChat users have already used Mini Programs before, the average user may not be entirely familiar with their common core features, such as the top bar’s back button for navigation. Whenever offering a navigation depth superior to two levels, consider leveraging the MP bottom menu to enable horizontal navigation between your sections. You may display it only on the deepest navigation levels: users should intuitively feel where they are in the service workflow. And the navigation menu has the added benefit of not diverting attention from using the back button on Android phones, which entirely closes the Mini Program.

![img](https://miro.medium.com/max/1624/1*HU4quV3uCiBemAsdfClXaw.png)





And always keep in mind the sharing scenario: 

​	landing on a Mini Program from opening a shared link does not always show a back button on the top bar. 



If you do not provide any navigation this can lead to frustrated users.



![img](https://miro.medium.com/max/1134/1*-zph3RSeXEgb5L7bWEkqjg.png)



# **5. Only show a login wall when you really need it**

It’s far too common to see Mini Programs showing users a login prompt that prevents them from doing anything with the MP before they give their consent. Instead, use the wx.login API to register the user in your backend quietly, and only show a login page for features where you absolutely need their user information (e.g., my account/profile section).



![img](https://miro.medium.com/max/681/1*7rU28qEHRebSQnG1wgTK8w.png)

*I get it McDonald’s, you badly want me in your loyalty program. But do I really need to login before I can do anything? C’mon!*



# **6. Take advantage of Mini Program APIs to minimize input complexity**

You can have your Mini Program autofill users’ information in against their consent (address, telephone number, Fapiao information) by tapping into the WeChat API. This can save significant time, and avoid error-prone data entry.



![img](https://miro.medium.com/max/1076/1*IWaAjTmcoNfA5447cZTXkA.png)



*Automatic address fetching from geolocation vs. having to type it in.*



![img](https://miro.medium.com/max/1074/1*e3g9x3ordpzOW5wy6Gr2tA.png)

*Retrieving a phone number and address from a WeChat user’s profile with a consent prompt.*



![img](https://miro.medium.com/max/1804/1*iaGjr_wCilaiMoD37gS3XQ.png)

# **7. Iterate with your design**

Designing a highly engaging digital interface is not an exact science, and Mini Programs are no exception. They have an enormous edge over typical Apps by being able to auto-update and create a perfect sandbox for testing out multiple variations with user experience or interface design. Or even for new features to be later integrated into your App.

Any MP project should plan for continuous improvement!

![img](https://miro.medium.com/max/1386/1*LdfPHTujRTGKena5uIh3pw.png)





## Example WeChat UI with Ecommerce



WeUI:



Grid component



Ecommerce





