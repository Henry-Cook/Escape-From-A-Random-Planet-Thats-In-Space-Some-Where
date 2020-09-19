class TimedScoresController < ApplicationController
  # before_action :authorize_request

  def index
    @timed_scores = TimedScore.includes(:user).order(:score).limit(5)

    render json: @timed_scores, include: :user
  end

  def create
    @timed_score = TimedScore.create(user_params)

    render json: @timed_score
  end

  def get_users_scores
    @user_scores = TimedScore.where(user_id: params[:id]).order(:score).limit(5)
  
    render json: @user_scores
  end

  private 

  def user_params
    params.require(:timed_score).permit(:user_id, :score)
  end

end
