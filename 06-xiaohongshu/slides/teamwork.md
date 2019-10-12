## Working as a team

### Think of features (user stories)

```
As a <ROLE>
I can <ACTION>
So that <VALUE>
```

### Problems

- Overlap (we both need to change the `RestaurantsController`)
- Dependency (I need your feature done to start mine)

### Solutions

- Technical (`git` branching)
- Human (communication)

### Git Branching

When cloning a repository, you're by default on a branch, `master`.

One rule: one feature == one branch.

![img](https://github.com/dounan1/china-product/raw/master/06-xiaohongshu/slides/images/git-branching-f3a62f547ce5426330e1c7905d0a3e7bbe249a0d19ceed4d89f9caaf187a85a2.png)

### Listing local branches

```
git branch
```

### Working on a new branch

```
git checkout -b customize-navbar
git branch
```

We've created a new local branch called **customize-navbar**.

Any new commit will only be applied to this branch.

### Pushing a branch to GitHub

```
git branch -a
git push origin customize-navbar
git branch -a
```

### Finishing a feature

Using branches, we work on different parts of a project at the same time.

When a feature is finished, we'd like to **merge** commits back in `master`.

**How?**

------

## GitHub Pull Requests

### Usage

- Get feedback on code written in a given branch (code review)
- Merge the branch back into master

### A Pull Request is a conversation

Example: [rails/rails#30067](https://github.com/rails/rails/pull/30067).

### Creating a Pull Request (1)

As soon as you push a new branch, a pull request button appears on your GitHub repository page.

Just click on this button, review the diff and add clear title and description.

![img](https://github.com/dounan1/china-product/raw/master/06-xiaohongshu/slides/images/compare-and-pull-request-button-easy-way-e631578b3fa9bd8d2d31be3f9c5f022b44675f7319e5306242e40107430854c1.png)

### Creating a Pull Request (2)

- Take some time to write a proper **title** and **description**
- Explain what you did on the branch (gem added, code tricks, etc...)
- Ease the reviewer's job
- You can poke people with `@...`, like `@ssaunier` or `@papillard` to get their feedback

### Reviewing a Pull Request

- Look at the diff, comment on errors (indentation, style, useless code, etc.)
- Comment **inline** or at the pull request level
- When done:
  - If code is fine, click on "Merge Pull Request" then "Delete Branch"
  - If not, add a general comment "Review done"

### Using Github Review feature (1)

Add a comment to a specific line

![img](https://github.com/dounan1/china-product/raw/master/06-xiaohongshu/slides/images/github_review_feature_1-81928bd04a1887ec7aa2bbdbe6cc2495a3090921aa0ca6445c17c1ca30038802.png)

### Using Github Review feature (2)

Submit all your comments and add a summary

![img](https://github.com/dounan1/china-product/raw/master/06-xiaohongshu/slides/images/github_review_feature_2-106bb31f89d38fdb75976c7f2bad977ca9c2302e062c7e9bf57dc2f059d97f30.png)

![img](https://github.com/dounan1/china-product/raw/master/06-xiaohongshu/slides/images/github_pull_request-8f8efe4c1e3c0aea104f4fab4193176b46d730641f958e09bb079a1cbd32622b.png)

------

## Looping over

### Getting `master` up to date

When a Pull Request is **merged**, a new commit is created on `master`.

You need to fetch it on your **local** repository.

### Be **very** careful

First, you need a **CLEAN** git status.

```
git status
# On branch master
# Your branch is up-to-date with 'origin/master'.
# nothing to commit, working directory clean
```

### Get the latest `master`

```
# Remember! You must have a **clean** git status
git checkout master
git pull origin master
```

Then you can clean up local unused branches

```
git sweep
```

### Merging `master` in your branches

Do you need something in `master` back into your current branch?

```
git status
# MAKE SURE THIS IS CLEAN
git checkout add-description-to-restaurant
git merge master
```

### 2 rules

- **Never** commit directly to `master`. Use feature branches
- **Always** make sure `git status` is **clean** before `pull`, `checkout` or `merge`.

### In case of conflict (1)

Sometimes a Pull Request won't be mergeable.

Why? `master` changed between the time you created the branch and now.

```
git status # ⚠️ ⚠️ ⚠️ Make sure it's clean before proceeding
git checkout master
git pull origin master          # pull the latest changes
git checkout unmergeable-branch # switch back to your branch
git merge master                # merge the new changes from master into your branch

# 😱 Conflicts will appear. It's normal!
# 👌 Open sublime and solve conflicts (locate them with cmd + shift + f `<<<<<`)
# When solved, we need to finish the merge

git add .                           # add the files in conflict
git commit --no-edit                # commit using the default commit message
git push origin unmergeable-branch  # push our branch again
```

### In case of conflict (2)

You can also solve conflicts on Github. Click on `Resolve conflicts`.

![img](https://github.com/dounan1/china-product/raw/master/06-xiaohongshu/slides/images/github_resolve_conflict_1-85d1722f517cf0559131d4cd47ba8744ca67d0c0e02b9f06bdbd1642e8fb9370.png)

Keep only the code you want to keep, and remove the special characters that highlighted the conflict

![img](https://github.com/dounan1/china-product/raw/master/06-xiaohongshu/slides/images/github_resolve_conflict_2-fd8707898e0c73b3cf515cd7bbc2fafe9d6968b26e6522fc420fa72b499d823e.png)

![img](https://github.com/dounan1/china-product/raw/master/06-xiaohongshu/slides/images/github_resolve_conflict_3-83efe8279930db8a16a980d0308459140a3fa40df98b28a480a978d64fe1f4d9.png)

When it's done, click on `Mark as resolved` and `Commit merge`.

------

## Happy Collaborating!