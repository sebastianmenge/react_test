class PostsController < ApplicationController
  def index
    @posts = Post.all

    gon.posts = @posts
    respond_to do |format|
      format.html
      format.json { render json: @posts}
    end
  end
end
