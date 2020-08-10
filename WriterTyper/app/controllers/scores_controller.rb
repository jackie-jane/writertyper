class ScoresController < ApplicationController
  before_action :set_text, only: [:show, :update, :destroy]
  before_action :aet_score, only: [:show, :update, :destroy]

  def index
    @author = Text.find(params[:text_id])
    @score = Score.where(text_id: @text.id)
    render json: @score, include: :texts, status: :ok
  end

  def show
    render json: @score
  end

  def create
    render json: @score
  end

  def update
    @score.update(params)

    render json: @score
  end

  def destroy
    @score.destroy
  end

  private

  def set_text
    @text = Text.find(params[:id])
  end

  def set_score
    @score = Score.where(text_id: @text.id)
  end
end