# Setup instructions

The following instructions will help you to get ready for the camp:

- Grab a text editor, where you'll spend your day and nights
- Pimp your Terminal
- Setup git and GitHub

Take your time to read the instructions **carefully**. Copy and paste just one line at a time

Wait for the command to finish and read the results of each output **in detail**. Any `errors`, `fatal`, `fail` keywords? That means something is wrong if it says "success" at the end. 

If failures happen, read the reason why in the output. Perhaps it's a mistake in username or password. Tell the teacher and stop - **don't skip over it**!



Let's get started by installing both a command line and git at the same time!



## Git bash - Command Line Tools

Download [Git for Windows](http://git-scm.com/downloads) if you don't already have a command line tool. 

We will use Git Bash once you've installed Git for Windows. For this course, we don't need any super fancy shell. 

However if you have command line background and want a challenge, you can try [Console](http://sourceforge.net/projects/console/). 

Once you're all set with a git bash command line for Windows, we can find or create the file where we will store git shortcuts.

Go to your root directory `~/` (you know, the one with your profile name as the folder name). I'm **not** talking about your `C:\` drive. 

Remember, you can show your hidden files in Windows 7 by [going here](http://www.bleepingcomputer.com/tutorials/show-hidden-files-in-windows-7/). 

At the command line, type:
```bash
cd ~/
```

Download this git [configuration](https://raw.githubusercontent.com/lewagon/dotfiles/master/gitconfig) and put it into `.gitignore`

We can also find or create a file where we will store command line shortcuts, which are called aliases. This will come in handy as you follow the next section: your text editor.

***From now on, we will always use GIT BASH.***

## Sublime Text 3 - Your text editor

### Step 1

A text editor is one of the most important tools of a developer. Go to [this page](http://www.sublimetext.com/3) and download **Sublime Text 3** for Windows. Install it (double click the downloaded file and install to "Program Files" **don't skip this**). 

Sublime Text is free without any time limitation but a popup will appear every ten saves to remind you there is a license to buy. You can hit `Esc` when this happens, but feel free to buy Sublime Text if you really like this one (there are alternatives).

Again, make sure that Sublime Text is there, not in the disk image you downloaded. To make sure it's correct, once Sublime Text is installed, unmount the "Sublime Text 3" disk in the left panel of Finder. Finder will complain if something went wrong. Ask a teacher.

### Step 2

Again go to your root directory `~/` (you know, the one with your profile name as the folder name).

Depending on your situation, you may already have the file we want to find or create: `.bashrc` 

If you don't see a file called ".bashrc" in your root directory, create one using Sublime Text and save as ".bashrc", then put it in your root directory.

### Step 3

Now for the moment of truth. Here's the line of code you want to add to your `.bashrc` file:

```
alias st='"/c/Program Files/Sublime Text 3/sublime_text.exe"'
```

The `alias st` is pretty clear, right? `alias` tells the the CLI what it is that you're making, and the `st` is the text that you want to type to automatically launch Sublime Text. 

The part that is tricky is the file path. You have to tell the CLI where the file is that you want to launch when that alias is typed. 

The installer should put the Sublime Text file `.exe` in `Program Files` (not the `(x86)` one). If you snoop around in your Program Files in the `C:\` drive you will hopefully find the Sublime Text folder there as well. If not, look around for it and copy the file path. Then use this path in `.bashrc` .

It can be tricky because you have to put single quotes around the code that comes after `alias st=`, but in this case you also have to put double quotes around that file path. So take note of that: double quotes inside of single quotes.


### Step 4

We can also add some helper tools to sublime.

Run these lines in your terminal:

```bash
SUBL_PATH=/c/Program Files/Sublime Text 3
mkdir -p $SUBL_PATH/Packages/User $SUBL_PATH/Installed\ Packages
backup "$SUBL_PATH/Packages/User/Preferences.sublime-settings"
curl -k https://sublime.wbond.net/Package%20Control.sublime-package > $SUBL_PATH/Installed\ Packages/Package\ Control.sublime-package
ln -s $PWD/Preferences.sublime-settings $SUBL_PATH/Packages/User/Preferences.sublime-settings
ln -s $PWD/Package\ Control.sublime-settings $SUBL_PATH/Packages/User/Package\ Control.sublime-settings
ln -s $PWD/SublimeLinter.sublime-settings $SUBL_PATH/Packages/User/SublimeLinter.sublime-settings
```



And that's it! Sublime is ready to go. 



## GitHub

We need to generate SSH keys which are going to be used by GitHub and Heroku to authenticate you. Think of it as a way to log in, but different from the well known username/password couple. If you already generated keys that you already use with other services, you can skip this step.

Open a terminal and type this, replacing the email with **yours** (the same one you used to create your GitHub account). It will prompt for information. Just press enter until it asks for a **passphrase**. 

```bash
mkdir -p ~/.ssh && ssh-keygen -t ed25519 -o -a 100 -f ~/.ssh/id_ed25519 -C "TYPE_YOUR_EMAIL@HERE.com"
```

**NB:** when asked for a passphrase, just press `Enter`. We don't need to set one. Press enter again to confirm. 

Then you need to give your **public** key to GitHub. Run:

```bash
cat ~/.ssh/id_ed25519.pub
```

It will prompt on the screen the content of the `id_ed25519.pub` file. Copy that text, then go to [github.com/settings/ssh](https://github.com/settings/ssh). Click on **Add SSH key**, fill in the Title with your computer name, and paste the **Key**. Finish by clicking on the **Add key** green button.

To check that this step is completed, in the terminal run this. You will be prompted a warning, type `yes` then `Enter`.

```bash
ssh -T git@github.com
```

If you see something like this, you're done!

```bash
# Hi --------! You've successfully authenticated, but GitHub does not provide shell access
```

If it does not work, try running this before trying again the `ssh -T` command:

```bash
ssh-add ~/.ssh/id_ed25519
```

### Git Configurations


With Sublime, open `.gitconfig` by typing at the terminal:

``` bash
stt ~/.gitconfig
```

Then paste the following into the file and save.

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
