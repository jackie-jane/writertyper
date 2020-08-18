class ScoresController < ApplicationController
  before_action :set_text, only: [:show, :update, :destroy]
  before_action :set_score, only: [:show, :update, :destroy]
  def index
    @text = Text.find(params[:text_id])
    @score = Score.where(text_id: @text.id)
    render json: @score, include: :text, status: :ok
  end

  def show
    render json: @score
  end

  def create
    render json: @score
  end

  def update
    @score.update(score_params)

    render json: @score
  end

  def destroy
    @score.destroy
  end

  private

  def set_text
    @text = Text.find(params[:text_id])
  end

  def set_score
    @score = Score.where(text_id: @text.id)
  end
end