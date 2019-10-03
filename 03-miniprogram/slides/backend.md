## Mini Programs 小程序

BACK-END WITH RAILS API

## OUR BACKEND AND FRONTEND SO FAR

![backend_frontend_rails](https://kitt.lewagon.com/karr/assets/china/wx-mp/backend_frontend_rails-576fd700cf6432dfcc04f7c82cd42a1d4f2f490300f2c089fff832c02b605f73.png)

## OUR BACKEND AND FRONTEND TODAY

![backend_rails_frontend_wx](https://kitt.lewagon.com/karr/assets/china/wx-mp/backend_rails_frontend_wx-520f9b2fc6f2a3a9fb968a8a6d646559fa7b7093c842dad526d4bffbd573912a.png)

------

## ALLOWS YOU TO:

- Build a client app: web, native, Wechat Mini Program
- Provide service to customers
- Build a platform
- etc.

### NO BIG DEAL

It's just a new set of **Controllers**...

...which return **JSON** instead of HTML (the `.html.erb` views).

### THEN JSON => Mini Program

Mini Program makes **API Requests**...

…and uses **API JSON** instead of static data (e.g globalData in app.js)

------

## STARTING FROM A TEMPLATE

Without **users**

```
rails new \
  --database postgresql \
  stories-api
cd stories-api
git add .
git commit –m “Initial commit”
rails g model story name text
rails g model comment name content:text story:references
# Add associations to models - a story has many comments
# Add some validations
```

### DON'T FORGET TO

- make your initial commit on git
- create and migrate your database
- add validations in your models

### SEED

```
stories = [
  { name:'Mo', text: 'Hello World' },
  { name:'Fabien', text: 'Hello Python' },
  { name:'Brian', text: 'Hello JS' },
  { name:'Forrest', text: 'Hello Rails' }
]
Story.create(stories)
rails db:seed
```

### API SETUP

```
mkdir -p app/controllers/api/v1
touch app/controllers/api/v1/base_controller.rb
# app/controllers/api/v1/base_controller.rb
class Api::V1::BaseController < ActionController::Base

  rescue_from StandardError,                with: :internal_server_error
  rescue_from ActiveRecord::RecordNotFound, with: :not_found

  private

  def not_found(exception)
    render json: { error: exception.message }, status: :not_found
  end

  def internal_server_error(exception)
    if Rails.env.development?
      response = { type: exception.class.to_s, error: exception.message }
    else
      response = { error: "Internal Server Error" }
    end
    render json: response, status: :internal_server_error
  end
end
```

------

## REST-FUL API

```
Prefix        Verb      URI Pattern                 Controller#Action
stories       GET       /stories(.:format)          stories#index
              POST      /stories(.:format)          stories#create
new_story     GET       /stories/new(.:format)      stories#new
edit_story    GET       /stories/:id/edit(.:format) stories#edit
story         GET       /stories/:id(.:format)      stories#show
              PATCH     /stories/:id(.:format)      stories#update
              PUT       /stories/:id(.:format)      stories#update
              DELETE    /stories/:id(.:format)      stories#destroy
```

GET, POST, PATCH, PUT, DELETE

------

## `INDEX`: 1ST ENDPOINT

```
GET /api/v1/stories
```

### ADD ROUTES

```
# config/routes.rb
Rails.application.routes.draw do
  # [...]
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :stories, only: [ :index ]
    end
  end
end
```

### CREATE CONTROLLER

```
touch app/controllers/api/v1/stories_controller.rb
```

### ADD INDEX ACTION

```
# app/controllers/api/v1/stories_controller.rb
class Api::V1::StoriesController < Api::V1::BaseController
  def index
    @stories = Story.all
    render json: @stories #Just for testing
  end
end
```

### TEST INDEX ENDPOINT

![image-20190605133710289](https://kitt.lewagon.com/karr/assets/china/wx-mp/insomnia-16362aaee683e89c76923b803287a793f7855f13f22d5497fd4ac52f09990be0.png)

Tools: You can use [Postman](https://www.getpostman.com/downloads/) or [Insomnia](https://insomnia.rest/download/)

### BETTER RENDERING: JSON VIEW

The view now renders **json** and is built using the **jbuilder** gem.

```
mkdir -p app/views/api/v1/stories
touch app/views/api/v1/stories/index.json.jbuilder
# app/views/api/v1/stories/index.json.jbuilder
json.stories do
  json.array! @stories do |story|
    json.extract! story, :id, :name, :text
  end
end
# app/controllers/api/v1/stories_controller.rb
class Api::V1::StoriesController < Api::V1::BaseController
  def index
    @stories = Story.all
  end
end
rails s
```

In browser: http://localhost:3000/api/v1/stories

### MINI PROGRAM: List stories

```
// /pages/index/index.js

Page({
  //...
  onLoad: function (options) {
    // Save reference to page
    let page = this;
    ...

    // Get api data
    wx.request({
      url: "http://localhost:3000/api/v1/stories",
      method: 'GET',
      success(res) {
        const stories = res.data.stories;

        // Update local data
        page.setData({
          stories: stories
        });

        wx.hideToast();
      }
    });
  }
  //...
```

------

## 2ND ENDPOINT: `SHOW`

```
GET /api/v1/stories/:id
```

### ROUTES

```
# config/routes.rb
Rails.application.routes.draw do
  # [...]
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :stories, only: [ :index, :show ]
    end
  end
end
```

### CONTROLLER

```
# app/controllers/api/v1/stories_controller.rb
class Api::V1::StoriesController < Api::V1::BaseController
  before_action :set_story, only: [ :show ]

  def show
  end

  private

  def set_story
    @story = Story.find(params[:id])
  end
end
```

### VIEW (JSON)

```
# app/views/api/v1/stories/show.json.jbuilder
json.extract! @story, :id, :name, :text
json.comments @story.comments do |comment|
  json.extract! comment, :id, :content, :name
  json.date comment.created_at.strftime("%m/%d/%y")
end
```

More on date and time formatting: https://apidock.com/ruby/DateTime/strftime

### MINI PROGRAM: Show Story

```
// /pages/show/show.js
Page({
  //...

  onLoad: function (options) {

    let page = this;

    // Get api data
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${options.id}`,
      method: 'GET',
      success(res) {
        const story = res.data;

        // Update local data
        that.setData(
          story
        );

        wx.hideToast();
      }
    });
  }
  //...
```

------

## 3RD ENDPOINT: `UPDATE`

```
PUT /api/v1/stories/:id 
```

### ROUTES

```
# config/routes.rb
Rails.application.routes.draw do
  # [...]
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :stories, only: [ :index, :show, :update ]
    end
  end
end
```

### CONTROLLER

```
# app/controllers/api/v1/stories_controller.rb
class Api::V1::StoriesController < Api::V1::BaseController
  before_action :set_story, only: [ :show, :update ]

  def update
    if @story.update(story_params)
      render :show
    else
      render_error
    end
  end

  private

  #...

  def story_params
    params.require(:story).permit(:name, :text)
  end

  def render_error
    render json: { errors: @story.errors.full_messages },
      status: :unprocessable_entity
  end
end
```

### MINI PROGRAM: Edit Story Form

```
// pages/edit/edit.js

Page({
  //...

  // Retrieve user info
  onLoad: function (options) {
    let page = this;

    wx.showToast({
      title: 'Loading...',
      icon: 'loading',
      duration: 1500
    });


    // Get story data from server (to show in form)
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${options.id}`,
      method: 'GET',
      success(res) {
        var story = res.data;

        // Update local data
        page.setData(
          story
        );

        wx.hideToast();
      }
    });
  }
  //...
```

### MINI PROGRAM: Submit Edit

```
// pages/edit/edit.js

Page({
  //...

  // Retrieving data from the view
  bindSubmit: function (e) {

    //...

    let name = e.detail.value.name;
    let text = e.detail.value.text;
    let id = this.data.id;

    let story = {
      name: name,
      text: text
    }

    // Update api data
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${id}`,
      method: 'PUT',
      data: story,
      success() {
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  }
  //...
```

------

## 4TH ENDPOINT: `CREATE`

```
POST /api/v1/stories 
```

### ROUTES

```
# config/routes.rb
Rails.application.routes.draw do
  # [...]
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :stories, only: [ :index, :show, :update, :create ]
    end
  end
end
```

### CONTROLLER

```
# app/controllers/api/v1/stories_controller.rb
class Api::V1::StoriesController < Api::V1::BaseController
  def create
    @story = Story.new(story_params)
    if @story.save
      render :show, status: :created
    else
      render_error
    end
  end
end
```

### MINI PROGRAM: New Story

```
// pages/new/new.js

Page({
  //...

  // New Story Submission
  bindSubmit: function (e) {
    //...

    let name = e.detail.value.name;
    let text = e.detail.value.text;

    let story = {
      name: name,
      text: text
    }

    // Post data to API
    wx.request({
      url: `http://localhost:3000/api/v1/stories`,
      method: 'POST',
      data: story,
      success() {
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  }
  //...
```

------

## 5TH ENDPOINT: `DESTROY`

```
DELETE /api/v1/stories/:id 
```

### ROUTES

```
# config/routes.rb
Rails.application.routes.draw do
  # [...]
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :stories, only: [ :index, :show, :update, :create, :destroy ]
    end
  end
end
```

### CONTROLLER

```
# app/controllers/api/v1/stories_controller.rb
class Api::V1::StoriesController < Api::V1::BaseController
  before_action :set_story, only: [ :show, :update, :destroy ]  # Re-use this.

  def destroy
    @story.destroy
    head :no_content
    # No need to create a `destroy.json.jbuilder` view
  end
end
```

### MINI PROGRAM: Delete Button

```
// pages/show/show.js

Page({
  //...

  // binded to delete button
  deleteStory(e) {
    const data = e.currentTarget.dataset;

    // make a DELETE request
    wx.request({
      url: `http://localhost:3000/api/v1/stories/${data.id}`,
      method: 'DELETE',
      success() {
        // redirect to index page when done
        wx.redirectTo({
          url: '/pages/index/index'
        });
      }
    });
  }
  //...
```

------

## Mini Program Frontend

Read more about Mini Programs as a frontend

- [Wechat Doc on Network Requests (English)](http://open.wechat.com/cgi-bin/newreadtemplate?t=overseas_open/docs/mini-programs/development/api/network-request)
- [Le Wagon Wechat Doc](https://github.com/apelegri/wechat-miniprogram-wiki)

------

## HAPPY API-ING!