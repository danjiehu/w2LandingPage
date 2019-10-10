## We need tools

------

## Sublime Text

A text editor. Your new companion, day & night.

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/logo_sublime_text-290dfd628fd3c309532bce3d2580240904c92e478430fff680a6546d4b2e7b03.png)

------

## Terminal (Bash)

Don't fear the command line.

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/logo_terminal-27cf949ea4803d4f0e67824f126f76d954ac2e2a6ecdc4987b870fd45f78be81.png)

------

## Git & GitHub

Version Control. Collaboration.

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/logo_github_waldo-f13e4c0e71b18111a6f37a1700e9579bd0ab2c827bbd0a61b5838bd9436ac8ba.png)

------


## Your turn!

Go to [github.com/lewagon/setup](https://github.com/lewagon/setup)

## Different names

- Command prompt
- Console
- Terminal

## Basic commands

### Where am I ?

1. Look for the directory name before the prompt, after `➜`
2. Or print the path of the current directory

```
pwd
```

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_pwd-7b37301040ac94fd939d73548186d32c9a45d7d7c7bf0b3d559a77874c53bc28.png)

That's your `$HOME` directory.

### Where can I go ?

**ls** (or **ll**, an alias of `ls -lh`)

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_ls-833c5607267ab864f64e5d57c1cd618b5573367746302646b2a163bfb95fd235.png)

### Let's go there

**cd <FOLDER_NAME>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_cd-6f41cc2f34361ed0a489f06012fdbf7ceee2c172c49592f5b1d6d5d66b351583.png)

### How can I go up?

**cd ..**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_cd_stepback-e76020864baf504b19e6e991ce0a7d53df12269e731cf592f07201a62747d297.png)

### Let's create a directory

**mkdir <NEW_FOLDER>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_mkdir-353eee49ccb0f5787d510365fcaa4070cd3113629170ae11c91b9a57d98947d7.png)

### Let's create a file

**touch <FILE_NAME>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_touch-a14016812d58dc67c8a5b91df4baceb9a05b45c1406d7287671ad66d2dc38a2a.png)

### Let's move a file (or directory)

**mv <FILE_NAME> <FOLDER_NAME>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_move-85887fc74ecfa18f5bf6d4efbd50daec5900177bd64b9793ff0fea4c04568b37.png)

### Let's rename a file (or directory)

**mv <FILE_NAME> <NEW_FILENAME>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_rename-55d72ad778a2c4675f1ac45db541db90119d32c56f2be745103a70ec35402f94.png)

### Open current directory in Sublime Text

Open your current directory in Sublime with **stt**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_stt-f02f2d973b782149fdbf0ad3e7934fe5727b8efd03ae629210919feed6911a27.png)

### Let's view the content of a text file

**cat <FILE_NAME>**

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/terminal_cat-e94cfb24df273282aa224c4bb319f3043e3a01f3d9ac4b21624f526c77892a4b.png)

------

## And many more!

[Learn Enough Command Line to be Dangerous](https://www.learnenough.com/command-line-tutorial)

## We are knowledge Workers

We create and edit **files** (text, images, etc.)

### Everyday workflow

1. Create a file
2. Save it
3. Edit it
4. Save it again
5. etc.

### File life

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/history_tracking-3cb7e81c5eb50c061f2a0fec1ce1a362c8f9876c46928d2e06423e20cfe23b21.png)

### Manual Version Control

How most people keep track of different versions of a file

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/manual_version_control-753d4815e47adca45320ddec16d3b8dcb4e32c0f92925ef11efb8de093bcf563.png)

### Can we automate this?

For each document version, we need to know:

1. **When** the file was modified
2. **What** changed
3. **Why** it was modified

### There's more: Teams

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/history_tracking_team-b1abc7d2e7d3ec2679e4c40af473da23cb0c4857eda312bf767f49d76470ad73.png)

### That's one more question:

For each document version, we need to know:

1. When the file was modified
2. What changed
3. Why it was modified
4. **Who** did the change

### In a nutshell

We want a tool which:

- tracks document versions
- keeps an history of document changes
- foster team work

### That would be

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/git_logo-e820291d71f2c2da641c028b29025846c9f2ceefebdb25c9d4d9f5916ce4c547.png)

------

## Git basic commands

### Starting

```
# From existing repository (on GitHub for instance)
git clone <github_ssh_clone_url>

# Or from scratch
mkdir new_project
cd new_project
git init
```

### Status

git can tell you if your folder
has some modified files (dirty)

```
git status
```

### Commit

A `commit` (a snapshot of the folder) is a 3-steps job.

```
# First check which files have been modified
git status

# Then, add the ones you want to the staging area.
git add <file_1_which_has_been_modified>
git add <file_2_which_has_been_modified>

# You can review your staging area
git status

# Take a snapshot of what is in the staging area.
git commit --message "A meaningful message about this change"
```

### Diff

If `git status` tells you something changed, you can inspect exactly what changed:

```
git diff
git diff <a_specific_file_or_folder>
```

### Log

Show commit history with:

```
git log

# More fancy command in your ~/.gitconfig
git lg
```

### Live-code: git init

Let's create a project and start tracking it

```
mkdir -p ~/code/$GITHUB_USERNAME/git-101 && cd $_
git init
ls -a # it has created a .git hidden folder
```

### Live-code: first commit

Let's create an `index.html` file and code some basic HTML content

```
touch index.html
stt # code some basic HTML content
```

Time to commit our work

```
git status # file not staged
git add index.html
git status # file staged, ready to commit
git commit -m "Basic HTML content for home page"
git status
```

### Live-code: second commit

Let's add an image in our project

```
curl https://raw.githubusercontent.com/lewagon/karr-images/master/white_logo_red_circle.png > logo.png
stt # add <img src="logo.png"> to your HTML
```

Time to commit our work

```
git status
git diff index.html # what has changed?
git add index.html
git add logo.png
git status
git commit -m "Adding logo to home page"
git status
git log # check commits history
```

------

## Remote

### Fork and clone

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/fork-clone-1-d3f06b6237b4aeb3e98a1c8605581853682b5787629a4ae9ee7f807c50a84853.png)

### Fork and clone

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/fork-clone-2-0dae48cfc58a7187e23ebcb5c651de31be55c633b553424f30908400a2de1e85.png)

### Fork and clone

![img](https://github.com/dounan1/china-product/raw/master/00-kickoff/slides/images/fork-clone-3-f7f54eee8a60d768f961be3c1e5150aeaa6fbc535aa181d4bed6074b1edb9bee.png)

### Pushing the changes

Once you've committed your work, push it to Github.

```
# Generic command
git push <remote> <branch>

# What we'll use
git push origin master
```

### Live-code: creating an new repo

1. Let's make a new repo called git-101-practice (like you can for every exercise)
2. Then let's put stuff into it

```
cd ~/code/$GITHUB_USERNAME
mkdir git-101-practice
cd git-101-practice
git init
git status # it's already tracked by git
```

3. Then make it sync remotely, by adding the github as a remote repo called  `origin`

```
git remote add origin git@github.com:dounan1/git-101-practice.git
```

### Live-code: commit and push

Let's make a change, commit **and push**

```
stt # change the HTML code
git add index.html
git commit -m "adding some custom text"
git status
git push origin master # Pushing on Github
```

Check that **project was updated on Github**.

------

## Git advanced

In the next few weeks, we'll see how git can help us with

- Solving conflicts
- collaboration (using branches)
- production deployment (using multiple remotes)

------

## Learn.lewagon.com Demo

- Navigation
- Lectures
- Videos
- Classmates
- Buddies
- Challenges
