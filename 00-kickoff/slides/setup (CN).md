
## 我们需要工具

------

## Sublime Text

一个代码编辑器，也是你的新陪伴

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/logo_sublime_text-290dfd628fd3c309532bce3d2580240904c92e478430fff680a6546d4b2e7b03.png)

------

## Terminal终端（Bash） 

不用怕命令行（command line）

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/logo_terminal-27cf949ea4803d4f0e67824f126f76d954ac2e2a6ecdc4987b870fd45f78be81.png)

------

## Git 和 GitHub

版本控制，协作

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/logo_github_waldo-f13e4c0e71b18111a6f37a1700e9579bd0ab2c827bbd0a61b5838bd9436ac8ba.png)

------

## Your turn!

上[github.com/lewagon/setup](https://github.com/lewagon/setup)

------

## 不同的命名

- 命令提示符（Command prompt）
- 控制台（Console）
- 终端（Terminal）

-----

## 基本命令

-----

### 我在哪里？

1、 在提示符之前查找目录名，`➜`之后
2、 或print当前目录的路径


```
pwd
```
------

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_pwd-7b37301040ac94fd939d73548186d32c9a45d7d7c7bf0b3d559a77874c53bc28.png)

这就是你的`$HOME`目录


------

### 显示当前目录里的内容

**ls**（或者**ll**，`ls -lh`的别名）

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_ls-833c5607267ab864f64e5d57c1cd618b5573367746302646b2a163bfb95fd235.png)

-----

### 进入目录

**cd <FOLDER_NAME>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_cd-6f41cc2f34361ed0a489f06012fdbf7ceee2c172c49592f5b1d6d5d66b351583.png)

-----

### 返回上级目录

**cd ..**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_cd_stepback-e76020864baf504b19e6e991ce0a7d53df12269e731cf592f07201a62747d297.png)

-----

### 创建目录

**mkdir <NEW_FOLDER>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_mkdir-353eee49ccb0f5787d510365fcaa4070cd3113629170ae11c91b9a57d98947d7.png)

-----

### 创建文件

**touch <FILE_NAME>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_touch-a14016812d58dc67c8a5b91df4baceb9a05b45c1406d7287671ad66d2dc38a2a.png)

-----

### 把目录或者文件移动到新的位置

**mv <FILE_NAME> <FOLDER_NAME>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_move-85887fc74ecfa18f5bf6d4efbd50daec5900177bd64b9793ff0fea4c04568b37.png)

-----

### 重命名文件或者目录

**mv <FILE_NAME> <NEW_FILENAME>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_rename-55d72ad778a2c4675f1ac45db541db90119d32c56f2be745103a70ec35402f94.png)

-----

### 使用Sublime Text打开当前目录

使用**stt**快捷键开启当前的目录

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_stt-f02f2d973b782149fdbf0ad3e7934fe5727b8efd03ae629210919feed6911a27.png)

-----

### 一次显示整个文件

**cat <FILE_NAME>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_cat-e94cfb24df273282aa224c4bb319f3043e3a01f3d9ac4b21624f526c77892a4b.png)

------

## 还有更多的命令行！

[Learn Enough Command Line to be Dangerous](https://www.learnenough.com/command-line-tutorial)

------

## 我们属于知识型员工

我们创建及编辑 **文件**（文本、图片等）

------

### 日常工作流程

1、创建文件
2、保存文件
3、编辑文件
4、再次保存文件
5、等

------

### 文件生命

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/history_tracking-3cb7e81c5eb50c061f2a0fec1ce1a362c8f9876c46928d2e06423e20cfe23b21.png)

------

### 人工版本控制

如何追踪文件的不同版本

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/manual_version_control-753d4815e47adca45320ddec16d3b8dcb4e32c0f92925ef11efb8de093bcf563.png)

------

### 如何自动化？

对于每个文档版本，需要知道：

1、文件**何时**被修改
2、修改的**内容**
3、**为何**修改

-----

### 还有：团队

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/history_tracking_team-b1abc7d2e7d3ec2679e4c40af473da23cb0c4857eda312bf767f49d76470ad73.png)

-----

### 这是另一个问题


对于每个文档版本，需要知道：

1、文件何时被修改
2、修改的内容
3、为何修改
4、**谁**在修改

-----

### 简而言之

我们需要一个工具，能够：

- 追踪文档版本
- 保存文档更改的历史
- 促进团队合作

-----

### 该工具是

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/git_logo-e820291d71f2c2da641c028b29025846c9f2ceefebdb25c9d4d9f5916ce4c547.png)

------

## Git常用命令

----

### 从哪里开始？


```
# 从现有的repository (例如：GitHub上）开始
git clone <github_ssh_clone_url>

# 或从头开始
mkdir new_project
cd new_project
git init
```

-----

### Status

git可以显示工作目录和暂存区的**状态**，文件是否有更改

```
git status
```

-----

### Commit

`commit`（类似于文件夹的快照）有3个步骤

```

# 首先，查看哪些文件已被更改过
git status

# 其次，将文件内容添加到索引（将修改添加到暂存区）
git add <file_1_which_has_been_modified>
git add <file_2_which_has_been_modified>

# 可以再次查看暂存区
git status

# 最后，更改记录（提交）到存储库
git commit --message "A meaningful message about this change"
```

------

### Diff

显示更改记录（提交）到存储库，此命令比较的是工作目录中当前文件和暂存区域快照之间的差异

```
git diff
git diff <a_specific_file_or_folder>
```
-----

### Log

显示提交日志信息

```
git log

# 在~/.gitconfig中有更多fancy的命令
git lg
```

-----

### Live-code：git init

接下来，我们将创建一个项目并追踪该项目

```
mkdir -p ~/code/$GITHUB_USERNAME/git-101 && cd $_
git init
ls -a # 创建了一个.git隐藏文件夹
```

-----

### Live-code：第一个commit

接下来，我们将创建一个`index.html` 文件并编写一些HTML代码

```
touch index.html
stt # 编写一些HTML代码
```

然后再commit！

```
git status # 查看仓库状态
git add index.html
git status # 将文件添加到暂存区，可以commit了
git commit -m "Basic HTML content for home page"
git status
```

-----

### Live-code：第二个commit

接下来，我们在项目中添加一个图片

```
curl https://raw.githubusercontent.com/lewagon/karr-images/master/white_logo_red_circle.png > logo.png
stt # 添加<img src="logo.png">到HTML代码中
```

然后再commit！

```
git status
git diff index.html # 哪些内容已被更改过？
git add index.html
git add logo.png
git status
git commit -m "Adding logo to home page"
git status
git log # 查看commit历史
```

------

## Remote

-----

### Fork和clone

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/fork-clone-1-d3f06b6237b4aeb3e98a1c8605581853682b5787629a4ae9ee7f807c50a84853.png)

-----

### Fork和clone

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/fork-clone-2-0dae48cfc58a7187e23ebcb5c651de31be55c633b553424f30908400a2de1e85.png)

-----

### Fork和clone

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/fork-clone-3-f7f54eee8a60d768f961be3c1e5150aeaa6fbc535aa181d4bed6074b1edb9bee.png)

-----

### 将本地分支的更新，推送到远程主机 

一旦完成commit，把更改的内容推送（push）到Github上


```
# 常规的命令
git push <remote> <branch>

# 我们将使用
git push origin master
```

-----

### Live-code: fork并clone一个remote

1. 首先，fork [Le Wagon's git 101 boilerplate](https://github.com/lewagon/git-101-boilerplate)
2. 其次，clone到本地，使用以下代码：

```
cd ~/code/$GITHUB_USERNAME
git clone git@github.com:$GITHUB_USERNAME/git-101-boilerplate.git
git status # git已进行追踪
```

-----

### Live-code: commit并push

接下来，我们将更改一些内容，commit，和**push**

```
stt # 更改HTML代码
git add index.html
git commit -m "adding some custom text"
git status
git push origin master # Push到 Github上
```

检查**该项目已在Github上已被更新过**

------

## 高级Git

在接下来的课程中，我们将学到git如何:

- 解决冲突（conflicts）
- 帮助协作（通过使用branches）
- 生产环境部署（production deployment）（使用多个 remote）

------

## Learn.lewagon.com Demo

- 课程系列
- 课程
- 视频
- 同班同学
- 当天的buddy
- Exercises
