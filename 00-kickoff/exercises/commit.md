## Commit to Git

## Let’s talk about commitment! (with Git).

In the `tmp` directory from your previous exercise. Let's make it permanent on the web!

### Create a git repo with the folder:

`git init`

### Commit the files with Git! Remember the three steps:
1. status
2. add
3. commit

> Tip: Use a simple but precise commit message to describe your work! You should always be able to tell what work was done by the messages alone.

### Finally, create a new repo on Github.

Let's install the `hub` to create a Github repo from your terminal without opening your browser (very useful when you are lazy 😉)

- You can find and install from its [repo](https://github.com/github/hub/releases)

<span style="text-decoration:underline">Follow the instructions for installation</span>

- On Mac, in the **terminal**, `cd` to the downloaded hub folder (usually in `~/Downloads/hub-NUMBER_WITH_RELEASE_DATES` ), and type in this command:

```bash
sudo sh install
```

- On Windows, in the terminal, find the downloaded hub folder (usually `~/Downloads/hub-NUMBER_WITH_RELEASE_DATES` ). Then copy `hub.exe` from `bin` folder to `c:/Program Files`

- Finally open and edit your `~/.bashrc` file.  Add in this line and save.

```bash
alias hub = '"/c/Program Files/hub.exe"'
```

### Now you can **init**(ialize) a git repository, commit your changes, and create the associated Github repo:

```bash
hub create # this creates the associated repo on Github!
```

To open the Github repo from your browser you can run:

```bash
hub browse
```

After you've created the repo, you can push up the code with git! Then refresh the github page to see if the files are there!
