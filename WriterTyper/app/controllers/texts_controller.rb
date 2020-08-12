class TextsController < ApplicationController
  before_action :set_text, only: [:show, :update, :destroy]

  def index
    @author = Author.find(params[:author_id])
    @texts = Text.where(author_id: @author.id)

    render json: @texts, include: :author, status: :ok
  end

  def show
    render json: @text
  end

  # POST /users
  def create
    @text = Text.new(text_params)

    if @text.save
      render json: @text, status: :created
    else
      render json: @text.errors, status: :unprocessable_entity
    end
  end

  def update
    if @text.update(text_params)
      render json: @text
    else
      render json: @text.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @text.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_text
      @text = Text.find(params[:id])
    end
    def text_params
      params.require(:text).permit(:title, :words, :characters, :content)
    end
end
