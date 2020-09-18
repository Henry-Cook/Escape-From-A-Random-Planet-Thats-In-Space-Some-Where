class TimedScoresController < ApplicationController
  # before_action :authorize_request

  def index
    @timed_scores = TimedScore.order(:score).limit(5)

    render json: @timed_scores
  end

  def create
    @timed_score = TimedScore.create(params)

    render json: @timed_score
  end

  def get_users_scores
    @time_scores = TimedScore.find()
    @user_scores = @timed_scores.where(:user_id == current_user)
  end

end
