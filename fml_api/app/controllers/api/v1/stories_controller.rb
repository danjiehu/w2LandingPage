class Api::V1::StoriesController < ApplicationController
  before_action :set_story, only: [ :show, :update, :destroy ]  # Re-use this.

  def index
    @stories = Story.all
    render json: @stories
  end

  def show
    render json: @story
  end

  def destroy
    @story.destroy
    head :no_content
    # No need to create a `destroy.json.jbuilder` view
  end

  def create
    @story = Story.new(story_params)
    if @story.save
      render :show, status: :created
    else
      render_error
    end
  end

  def update
    if @story.update(story_params)
      render :show
    else
      render_error
    end
  end

  private

  def set_story
    @story = Story.find(params[:id])
  end

  def story_params
    params.require(:story).permit(:name, :text)
  end

  def render_error
    render json: { errors: @story.errors.full_messages },
      status: :unprocessable_entity
  end
end
