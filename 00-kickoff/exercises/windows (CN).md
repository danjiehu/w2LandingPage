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

## Git bash - 命令行工具

如果你还没有命令行工具，下载 [Git for Windows](http://git-scm.com/downloads) 

一旦你下载了Git for Windows，我们会使用Git Bash。因为这个原因，我们不需要再安装其他漂亮的外壳。

但是如果你的命令行有背景，你想要更换的话，也可以尝试[Console](http://sourceforge.net/projects/console/). 


我们设置好 git bash 命令行之后, 我们可以查找或创建存储git快捷方式的文件。

前往你的 root directory `~/` (the one with your profile name as the folder name). 不是你的 `C:\` 盘。 

记住, 去到[这里](http://www.bleepingcomputer.com/tutorials/show-hidden-files-in-windows-7/) 你可以看到你Windows7中的隐藏文件。

在命令行, 输入:
```bash
cd ~/
```

下载这个 git [配置](https://raw.githubusercontent.com/lewagon/dotfiles/master/gitconfig) 并把它放入 `.gitignore`

我们也可以寻找或创建新的文件，存储命令行的快捷方式，称为别名aliases. 这个会在下一节-文本编辑器中派上用场。




## Sublime Text 3 - 你的文本编辑器

### 第一步

文本编辑器是开发人员最重要的工具之一。前往 [该页面](http://www.sublimetext.com/3) 并下载Windows**Sublime Text 3**. 安装它 (双击下载文件并把这个app拖到`应用程序` , **不要跳过这一步**). 

Sublime Text 是免费的，但有时会出现弹窗，这时你点击`退出`就可以了。


### 第二步

再次前往你的 root directory `~/`(the one with your profile name as the folder name).

根据您的情况，您可能已经拥有我们想要查找或创建的文件: `.bashrc` 

如果在root directory中看不到名为".bashrc"的文件，请使用Sublime Text 创建一个文件并将其存为".bashrc"，然后将其放入root directory。

### 第三步

重要的时刻到了！在".bashrc"文件中添加这行代码：

```
alias st='"/c/Program Files/Sublime Text 3/sublime_text.exe"'
```

这个 `alias st` 很清楚，对吧? `alias` 告诉CLI 你在做什么, 然后 `st` 是自动启动Sublime Text的文本. 

文件路径是比较难以捉摸的部分。你必须告诉 CLI 你想要启动的文件在什么位置，当输入alias时。

安装器应该将Sublime Text file `.exe` 放在`Program Files` (not the `(x86)` one). 如果你在C盘的Program files中查找，你应该可以看到你的Sublime Text文档。如果没有的话，复制这个文档路径，然后在`.bashrc` 内使用这个路径。 

It can be tricky because you have to put single quotes around the code that comes after `alias st=`, but in this case you also have to put double quotes around that file path. So take note of that: double quotes inside of single quotes.
这可能很有复杂，因为你必须在`alias st=`之后的代码周围加上单引号，但在这种情况下，你还必须在该文件路径周围加上双引号。因此注意：双引号在单引号内。


### 第四步

我们也可以给sublime加一些小助手工具。

在你的terminal里运行这些代码:

```bash
SUBL_PATH=/c/Program Files/Sublime Text 3
mkdir -p $SUBL_PATH/Packages/User $SUBL_PATH/Installed\ Packages
backup "$SUBL_PATH/Packages/User/Preferences.sublime-settings"
curl -k https://sublime.wbond.net/Package%20Control.sublime-package > $SUBL_PATH/Installed\ Packages/Package\ Control.sublime-package
ln -s $PWD/Preferences.sublime-settings $SUBL_PATH/Packages/User/Preferences.sublime-settings
ln -s $PWD/Package\ Control.sublime-settings $SUBL_PATH/Packages/User/Package\ Control.sublime-settings
ln -s $PWD/SublimeLinter.sublime-settings $SUBL_PATH/Packages/User/SublimeLinter.sublime-settings
```



就这样！Sublime 已经好了哟！



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

它将在屏幕上提示`id_ed25519.pub` 的文件内容。复制该文本, 然后前往  [github.com/settings/ssh](https://github.com/settings/ssh). 单击 **添加 SSH key**, 在标题上输入你的电脑名称，然后粘贴 **Key**. 单击绿色按钮 **Add key** 完成。

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

### Git 配置


在terminal输入以下口令，打开`.gitconfig`:
 
``` bash
stt ~/.gitconfig
```

然后将以下内容粘贴到文件中并保存。

```
[color]
  branch = auto
  diff = auto
  interactive = auto
  status = auto
  ui = auto

[color "branch"]
  current = green
  remote = yellow

[core]
  pager = less -FRSX
	editor = '/c/Program Files/Sublime Text 3/sublime_text.exe' -n -w

[alias]
  co = checkout
  st = status -sb
  br = branch
  ci = commit
  fo = fetch origin
  d = !git --no-pager diff
  dt  = difftool
  stat = !git --no-pager diff --stat

  # Clean merged branches
  sweep = !git branch --merged master | grep -v 'master$' | xargs git branch -d && git remote prune origin

  # http://www.jukie.net/bart/blog/pimping-out-git-log
  lg = log --graph --all --pretty=format:'%Cred%h%Creset - %s %Cgreen(%cr) %C(bold blue)%an%Creset %C(yellow)%d%Creset'

  # Serve local repo. http://coderwall.com/p/eybtga
  # Then other can access via `git clone git://#{YOUR_IP_ADDRESS}/
  serve = !git daemon --reuseaddr --verbose  --base-path=. --export-all ./.git

  m = checkout master

  # Removes a file from the index
  unstage = reset HEAD --

[help]
  autocorrect = 1

[push]
	default = simple

[branch "master"]
  mergeoptions = --no-edit
```
