class TimedScoresController < ApplicationController
  # before_action :authorize_request

  def index
    @timed_scores = TimedScore.order(:score).limit(5)
    @with_user = User.where(user_id: @timed_score.user_id)

    render json: @with_user, include: :timed_scores
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
