# 微信小程序用户界面



# **1. 设计你的小程序用户界面为简单的任务和理解

小程序旨在“使用即忘”。绝大多数情况下，你并没有机会让用户重复使用学习所有的功能，尤其是在 O2O 的情景中。 要牢记 [临时用户](https://www.nngroup.com/articles/wechat-mini-programs/) 在设计你的微信小程序时. [方便和效率](https://uxspot.com/blog/why-and-when-users-like-using-wechat-mini-programs)是主要的激励因素, 你需要尽可能使你的保持界面保持整洁，并专注于上面的任务. 
进入微信小程序的头几秒钟对于用户了解其功能以及如何与它交互相当关键，每个页面都应该有个清晰的重点和流程大纲。



![图片](https://miro.medium.com/max/742/1*FuaOATnz_HrmMjrNNx7Xnw.png)



*左: Fapiao Ma发票吗, 一个发票数据管理小程序用了一个极简的界面。右边：沃尔玛的自助结账小程序 - 旨在方便使用，并强调扫描产品。*

通常规则, 尽量远离任何需要用户返回小程序完成任务的设计：他们很可能不会。 

# **2. 设计小程序时流程时考虑以功能优先或用户导向**

[实际操作中, 50% 的最佳微信小程序也有相应的原生App](https://walkthechat.com/wechat-mini-programs-simple-introduction/). 但是, [研究](https://uxspot.com/blog/why-and-when-users-like-using-wechat-mini-programs) 显示复制一个原生app不是一个好主意，因为有时由于小程序的大小限制，你需要删减一些内容。最佳做法是选取一些App的核心功能放在你的小程序内。

![图片](https://miro.medium.com/max/822/1*kwZFEK41k7_o0kg1tV4hNw.png)



*Qunar 酒店预订页面: 它的小程序非常侧重在预定本身，它的很多其他功能（机票，会员区）有被移除。t

同时也考虑把你的核心功能拆解为多个专门的小程序：它们可以被单独收藏，服务于不同的目标受众和使用环境 (O2O,  赠送vs. 直接购买, 等等)。





# **3. 有App吗? 考虑把小程序当作诱饵吸引用户之后使用你的App**

在中国Apps和小程序不一定是冲突的，小程序有时候反而可以很好与Apps相辅相成。你可以考虑把App上的核心功能在小程序上呈现，然后留一些高价值的功能继续在App上面。以中国快递公司顺丰为例：他们的小程序复制了App的核心，除了两项增值功能：索取发票和订购国际包裹。这可确保它们把最有价值的板块，商业部分，继续吸引在APP内。

另外一个例子是Meitu美图 App: they use their Mini Program as a shortcut and a teaser by offering the 3 most popular filters, and inviting the user to download the app for more:
他们只在其小程序内提供3个最流行的滤镜，以此吸引用户并邀请他们下载App. 


![图片](https://miro.medium.com/max/2128/1*x6mIHeEaBZDNWE4KLtOuEQ.png)

“ *Our users wanted an easy registration interface. By launching a Mini Program, not only the DAU traffic has increased exponentially, but the organic downloads of the App have gone up as well*! ”
我们的用户想要一个简单的注册界面。通过发行小程序，不仅每日用户流量呈指数级增长，而且App的的自然下载量也有所上升*！

> *Andrea Sperenza, YEYU App的CEO*




# **4. 确保你的小程序内有返回功能**

尽管超过6亿微信用户已经使用过小程序，但普通用户可能并不完全熟悉他们的一些主要功能，例如在顶部栏的返回主页功能。 你在进行小程序设计的时候，也最好将主页返回功能考虑在内。

![图片](https://miro.medium.com/max/1624/1*HU4quV3uCiBemAsdfClXaw.png)



始终考虑分享情景: 

​
从打开共享链接到登录小程序，它的后退按钮并不总是在顶部栏上显示。

如果你不提供任何导航功能，这可能会导致一些用户感到抓狂。


![图片](https://miro.medium.com/max/1134/1*-zph3RSeXEgb5L7bWEkqjg.png)



# **5. 只在万不得已时再显示登入墙**

很常见的是许多小程序会在用户同意授权前阻止用户登入。取而代之，你可以使用 wx.login API 在后端悄悄地让用户注册，然后只在必须需要用户授权信息的功能上（例如，我的帐户）显示一个登录页面。



![图片](https://miro.medium.com/max/681/1*7rU28qEHRebSQnG1wgTK8w.png)

*hey麦当劳，我知道你非常希望我成为你的忠诚用户。但我真的需要登录才能做任何事情吗？拜托!*



# **6. 利用小程序 API 将输入复杂性降至最低**

您可以利用微信 API 自动填写用户信息（地址、电话号码、发票信息）。这可以节省大量时间，并避免容易出错的数据输入。



![图片](https://miro.medium.com/max/1076/1*IWaAjTmcoNfA5447cZTXkA.png)



*从地理位置自动提取地址 vs. 必须手动输入。*



![图片](https://miro.medium.com/max/1074/1*e3g9x3ordpzOW5wy6Gr2tA.png)

*经过用户允许，从用户profile获取电话号码和地址*



![图片](https://miro.medium.com/max/1804/1*iaGjr_wCilaiMoD37gS3XQ.png)

# **7. 更新迭代你的设计**

设计一个高度吸引人的用户界面并不是一步到底的工作，小程序也不例外。它们比传统的Apps具有更大的优势，能够自动更新并创建一个完美的sandbox，用于测试用户体验和界面设计的多个版本。甚至它的一些新功能也可以在之后集成到你的App上面。

任何小程序项目都应该不断改进！

![图片](https://miro.medium.com/max/1386/1*LdfPHTujRTGKena5uIh3pw.png)





## 示例 电子商务的微信UI


WeUI:



网格组件



电子商务




