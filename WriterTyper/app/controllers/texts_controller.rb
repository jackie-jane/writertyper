class TextsController < ApplicationController
  before_action :set_author, only: [:show, :update, :destroy]
  before_action :set_text, only: [:show, :update, :destroy]

  def index
    @author = Author.find(params[:author_id])
    @texts = Text.where(author_id: @author.id)
    render json: @texts, include: :author, status: :ok
  end

  def show
    render json: @text
  end

  def create
    render json: @text
  end

  def update
    @text.update(params)

    render json: @text
  end

  def destroy
    @text.destroy
  end

  private

  def set_author
    @author = Author.find(params[:id])
  end

  def set_text
  @text = Text.where(author_id: @author.id)
  end
end