# 设置说明

以下说明将帮助你为接下来的产品开发课程做好准备：

- 找一个文本编辑器，你之后会一直使用

- 美化你的Terminal

- 设置 git and GitHub

---

花点时间**仔细**阅读说明。注意：一次只能复制和粘贴一行代码!!

等待命令完成并仔细读取每个输出的结果。如果出现任何`errors`, `fatal`, `fail`这样关键字，这意味着，它中间出现了错误，即使最后有显示“success".


如果发生中间有出现失败，请阅读它给出的原因。这有可能是用户名或密码上的错误。这个时候停下来询问老师 - **不要直接跳过它**！


让我们开始同时安装命令行和 git！



##  命令行工具（与 Git 一起）

打开你的 Terminal (点击右上角的放大镜标志，并输入`Terminal`):

![](images/open-terminal.png)

复制黏贴以下命令行，然后点击回车键 Enter.

```bash
xcode-select --install
```

如果你收到以下消息，你可以跳过此步骤接着下一步。

```
# command line tools are already installed, use "Software Update" to install updates
```

否则，它会跳出一个窗口，询问你是否要安装一些软件。这时你要接受并等待。如果操作失败的话，请重试上面的命令行，有时可能由于Apple 服务器过载的原因导致。

![](images/xcode-select-install.png)

在下载的同时，你可以继续配置 GitHub 帐户，但在 Homebrew 之前 **停止**。该步骤会需要你已安装命令行工具。


## GitHub 账户

你注册GitHub账户了吗? 如果没有, [立刻注册](https://github.com/join).

:point_right: **[上传照片](https://github.com/settings/profile)** and put your name correctly on your GitHub account. This is important as we'll use an internal dashboard with your avatars. Please do it **now**.


## Sublime Text 3 - 你的文本编辑器

文本编辑器是开发人员最重要的工具之一。前往[该页面](http://www.sublimetext.com/3) 并下载 OS X 的 **Sublime Text 3** . 安装 (双击下载文件并把这个app拖到`应用程序` , **不要跳过这一步**). 

Sublime Text 是免费的，但有时会出现弹窗，这时你点击`退出`就可以了。




## Oh-my-zsh - 美化你的Terminal

我们将使用zsh代替默认的bash？

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

输入 "Y" 当它问你是否要更改默认. 

注意，在脚本的最后，它会再次提示输入你的笔记本电脑密码。你必须正确输入（你输入时是看不见自己在打字的），输入完成后点击"回车Enter"。你会看到类似下面的图片:

```bash
         __                                     __
  ____  / /_     ____ ___  __  __   ____  _____/ /_
 / __ \/ __ \   / __ `__ \/ / / /  /_  / / ___/ __ \
/ /_/ / / / /  / / / / / / /_/ /    / /_(__  ) / / /
\____/_/ /_/  /_/ /_/ /_/\__, /    /___/____/_/ /_/
                        /____/                       ....is now installed!
```

现在退出 Terminal (`⌘` + `Q`), 然后再次启动

你应该会看到这样的内容:

![img](/Users/dounanhu/Code/wg/china-product/00-kickoff/exercises/images/on-my-zsh.png)


## GitHub

我们需要生成 SSH keys, 这个将在 GitHub 和 Heroku 上验证你的身份。把它看作是一种登录方式，但与我们所熟悉的用户名/密码不同。

打开一个 terminal 然后输入这个, 把邮箱地址换成你**自己**的 (这与你GitHub 的账户邮箱一致)。它将提示你信息，一直按回车键，直到它要求你输入**密码** 。

```bash
mkdir -p ~/.ssh && ssh-keygen -t ed25519 -o -a 100 -f ~/.ssh/id_ed25519 -C "TYPE_YOUR_EMAIL@HERE.com"
```

**NB:** 当被要求输入密码时，直接按回车键就好。这里不需要我们输入密码。再次按回车键确认。

把你的**公共**key给GitHub。运行:

```bash
cat ~/.ssh/id_ed25519.pub
```

它将在屏幕上提示`id_ed25519.pub` 的文件内容. 复制该文本, 然后去到 [github.com/settings/ssh](https://github.com/settings/ssh). 单击 **添加 SSH key**, 在标题上输入你的电脑名称，然后粘贴 **Key**. 单击绿色按钮 **Add key** 完成.

检查此步骤是否完成，在Terminal运行此步骤。这时候会出现警告, 输入 `yes` 然后`回车Enter`.

```bash
ssh -T git@github.com
```

如果看到以下提示，这说明你成功啦!

```bash
# Hi --------! You've successfully authenticated, but GitHub does not provide shell access
```

如果没有成功，在重试 `ssh -T` 命令前，先尝试运行此命令:

```bash
ssh-add ~/.ssh/id_ed25519
```




## Dotfiles (标准配置)

黑客们很喜欢完善他们的外壳和工具。我们可以从由 [Le Wagon](http://github.com/lewagon/dotfiles) 提供的一个超棒的默认配置开始。由于你的配置是个人的，因此你需要自己的存储库来存储它，所以首先你需要fork存储库到 GitHub 帐户。

:arrow_right: [点击这边 **fork**](https://github.com/dounan1/dotfiles/fork) `dotfiles` 存储库到你的帐户。 Forking 意味着它将在 GitHub 帐户中创建一个新存储库，与原来的存储库相同。你会有一个新的存储库在你的GitHub账号上, `your_github_username/dotfiles`。

打开你的 terminal。**不要闭眼复制**, 将`replace_this_with_your_github_username`替换成 *你自己* 的github 用户名。

```bash
export GITHUB_USERNAME=replace_this_with_your_github_username

# 例如:
#   export GITHUB_USERNAME=ssaunier
```

现在在terminal内复制黏贴这句话。这句话不需要修改！

```bash
mkdir -p ~/code/$GITHUB_USERNAME && cd $_ && git clone https://github.com/$GITHUB_USERNAME/dotfiles.git
```

运行 `dotfiles` installer.

```bash
cd ~/code/$GITHUB_USERNAME/dotfiles
zsh install.sh
```

然后运行 git installer:

```bash
cd ~/code/$GITHUB_USERNAME/dotfiles
zsh git_setup.sh
```

:point_up: 接下来会让你输入自己的名字  (`Firstname Lastname`) 和你的邮箱.

注意，你必须输入和你GitHub邮箱**一样**的邮箱地址。

现在请 **退出** 你所有打开的 terminal 窗口. 可以使用快捷键 (`⌘` + `Q`).

### Sublime Text 自动配置

打开一个新的 terminal 然后输入:

```bash
stt
```

它将 **在当前文件夹的环境中打开 Sublime Text**. 

**关闭Sublime text** 然后再次打开:

```bash
stt
```

**等待一分钟** 让它自动安装其他程序包。想要查看程序包安装进程，你可以去 `View > Show console`.

要检查插件是否安装, 打开 Command Palette (`⌘` + `shift` + `P` on OSX, `Ctrl` + `shift` + `P` on Linux), 输入 `Packlist` 然后点击 `回车Enter`, 你会看到已安装的程序包 (like [Emmet](http://emmet.io/)).

如果你看不到，也不是什么大问题！他们只是一些小帮手，需要一些时间安装。现在你可以关闭Sublime Text了。

