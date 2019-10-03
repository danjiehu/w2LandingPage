## What we'll use

**Devise** An authentication gem for Rails

https://github.com/plataformatec/devise/

### Start with a rails minimal template

Le Wagon's [Rails Minimal Template](https://github.com/lewagon/rails-templates#minimal)

------

## How-to

### Installation

```
# Gemfile
gem 'devise'
bundle install
rails generate devise:install
```

### Configuration

```
Some setup you must do manually if you haven't yet:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>
```

## Initializer

```
# config/initializers/devise.rb

# ==> Mailer Configuration
# Configure the e-mail address which will be shown in Devise::Mailer,
# note that it will be overwritten if you use your own mailer class
# with default "from" parameter.
config.mailer_sender = 'please-change-me-at-config-initializers-devise@example.com'
```

\--

### User Model

Generate the `User` model with the **devise** generator (not `model` nor `scaffold`).

```
rails generate devise User
#      invoke  active_record
#      create    db/migrate/TIMESTAMP_devise_create_users.rb
#      create    app/models/user.rb
#      insert    app/models/user.rb
#       route  devise_for :users
```

This **creates** the `User` model and its migration. So run:

```
rails db:migrate
```

## Look! (1)

```
# app/models/user.rb

class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
```

## Look! (2)

```
rails routes
rails routes | grep new_
```

Let's sign up!

```
rails s
```

And go to [localhost:3000/users/sign_up](http://localhost:3000/users/sign_up)

```
rails c
[1] pry(main)> User.count
[2] pry(main)> User.last
```

------

## Views

### Helpers

```
user_signed_in?
# => true / false

current_user
# => User instance / nil
```

### Navbar

You need a Log in / Logout logic.

You can start from this [navbar template](https://github.com/lewagon/awesome-navbars/blob/master/templates/_navbar_wagon.html.erb)

```
mkdir app/views/shared
curl https://raw.githubusercontent.com/lewagon/awesome-navbars/master/templates/_navbar_wagon.html.erb > app/views/shared/_navbar.html.erb
curl https://raw.githubusercontent.com/lewagon/karr-images/master/white_logo_red_circle.png > app/assets/images/logo.png
<!-- app/views/layouts/application.html.erb -->
<%= render 'shared/navbar' %>
```

### Alerts

```
<!-- app/views/layouts/application.html.erb -->
<%= render 'shared/flashes' %>
<!-- app/views/shared/_flashes.html.erb -->
<% if notice %>
  <div class="alert alert-info alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <%= notice %>
  </div>
<% end %>
<% if alert %>
  <div class="alert alert-warning alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    <%= alert %>
  </div>
<% end %>
```

### Customize devise views

Sign in / Sign up / Forget password / [...]

```
rails g devise:views
```

And look into `app/views/devise` folder.

------

## Controller

### White-list approach

Protect **every route** by default.

```
# app/controllers/application_controller.rb
class ApplicationController < ActionController::Base
  before_action :authenticate_user!
end
```

### Skipping login for some pages

```
# app/controllers/pages_controller.rb
class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: :home

  def home
  end
end
```

### Adding attributes to `User`

What if I want to add a `first_name` and `last_name` at sign up?

```
class ApplicationController < ActionController::Base
  # [...]
  before_action :configure_permitted_parameters, if: :devise_controller?

  def configure_permitted_parameters
    # For additional fields in app/views/devise/registrations/new.html.erb
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])

    # For additional in app/views/devise/registrations/edit.html.erb
    devise_parameter_sanitizer.permit(:account_update, keys: [:username])
  end
end
```

Read more [in the documentation](https://github.com/plataformatec/devise#strong-parameters)

------

## Happy Authenticating!

### Public project

**Free** on GitHub but be aware that the project will be **visible** to everyone.

### Private project

With a **free** plan, you can set your project as private, up to 4 collaborators.

The **pro** plan ($7/month) allows you to have more than 4 collaborators on an unlimited number of private repositories

Private projects are visible only to **repo collaborators**.

### Alternatives

- [BitBucket](https://bitbucket.org/)
- [GitLab](https://gitlab.com/)



You can use multiple cloud hosting for your git repositories!

### GitHub Organization

Example: [github.com/lewagon](https://github.com/lewagon)





- [GitHub - User and organization differences](https://help.github.com/articles/what-s-the-difference-between-user-and-organization-accounts)
- [GitHub - Converting a user into an organization](https://help.github.com/articles/converting-a-user-into-an-organization)

------

## Create a repo

### Hacker's version

```
cd ~/code/YOUR_GITHUB_USERNAME
rails new \
  --webpack \
  --database postgresql \
  -m https://raw.githubusercontent.com/lewagon/rails-templates/master/minimal.rb \
  rbnb
cd rbnb
```

Reminder: the minimal template created the first commit.

You still need to create your Github repo with:

```
hub create
```

Which creates the repo on Github and adds the `origin` remote to your local repo.

### Alternative version

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_new_1-e1a6e3c397eb2d086975f04d5b6c7c755abbd8b99fcbb110c3c98318a48b7c98.png)

Then you need to add a remote:

```
git remote add origin git@github.com:ssaunier/karr-example.git
git push origin master
```

------

## Adding collaborators

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_click_on_settings-98657aff71b79f2c83131388375ad5ce67b10d2bdc9992f83d6436a3d14425df.png)

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_add_collaborator-a54c7ac4289e002ff5154d655d785cede7274b3531f4497d9adf473929121b16.png)

You gave them **push** access to the repository.

(and [other](https://help.github.com/articles/permission-levels-for-a-user-account-repository/#collaborator-access-on-a-repository-owned-by-a-user-account) rights)

Collaborators will have to accept your invitation.

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_accept_invitation-677ba5f1c5e75d8e5aefc305d5e40b7f11311cadc2d59043ff417d7ed7be43f7.png)

Now, collaborators can **clone** the project on their own computer:

```
mkdir ~/code/OWNER_GITHUB_USERNAME
cd ~/code/OWNER_GITHUB_USERNAME
git clone git@github.com:OWNER_GITHUB_USERNAME/PROJECT_NAME.git
cd PROJECT_NAME
```

Clone with **SSH**, **not** HTTPS.

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_clone_ssh_url-1d9f29cfe5a25ac604537a1ab80b36101b21c523e486bb3da8d9c720b540672e.png)

------

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

![img](https://kitt.lewagon.com/karr/assets/git-workflow/git-branching-f3a62f547ce5426330e1c7905d0a3e7bbe249a0d19ceed4d89f9caaf187a85a2.png)

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

![img](https://kitt.lewagon.com/karr/assets/git-workflow/compare-and-pull-request-button-easy-way-e631578b3fa9bd8d2d31be3f9c5f022b44675f7319e5306242e40107430854c1.png)

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

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_review_feature_1-81928bd04a1887ec7aa2bbdbe6cc2495a3090921aa0ca6445c17c1ca30038802.png)

### Using Github Review feature (2)

Submit all your comments and add a summary

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_review_feature_2-106bb31f89d38fdb75976c7f2bad977ca9c2302e062c7e9bf57dc2f059d97f30.png)

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_pull_request-8f8efe4c1e3c0aea104f4fab4193176b46d730641f958e09bb079a1cbd32622b.png)

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

Colleagues may have added gems, NPM packages or change the DB schema:

```
bundle install
yarn install
rails db:migrate
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

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_resolve_conflict_1-85d1722f517cf0559131d4cd47ba8744ca67d0c0e02b9f06bdbd1642e8fb9370.png)

Keep only the code you want to keep, and remove the special characters that highlighted the conflict

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_resolve_conflict_2-fd8707898e0c73b3cf515cd7bbc2fafe9d6968b26e6522fc420fa72b499d823e.png)

![img](https://kitt.lewagon.com/karr/assets/rails/github/github_resolve_conflict_3-83efe8279930db8a16a980d0308459140a3fa40df98b28a480a978d64fe1f4d9.png)

When it's done, click on `Mark as resolved` and `Commit merge`.

------

### Project Management

Week objective: Implement your own version of AirBnB

Teams of 3 or 4 students

### Day One

1. Write 5 to 10 user stories (week backlog) + Validate with teacher
2. Brainstorm Data Model + Validate with teacher
3. Brainstorm Routes / Draw Mockups + Validate with teacher
4. Lead Dev creates rails app, github repo, invite collaborators
5. Development starts. Pair program if too much dependencies at the beginning





Start with Pen & Paper! [Print this](https://github.com/lewagon/fullstack-images/raw/master/rails/rails-user-stories.pdf) to help you.

**DO NOT** commit to `master`. Exception, the rails app creation:

```
cd ~/code/$GITHUB_USERNAME
rails new \
  --webpack \
  --database postgresql \
  -m https://raw.githubusercontent.com/lewagon/rails-templates/master/minimal.rb \
  rbnb
cd rbnb
hub create
git push origin master
# And now, `checkout -b` a new branch BEFORE writing code.
```

------

## Happy Collaborating!