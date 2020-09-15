class TimedScoresController < ApplicationController
  # before_action :authorize_request

  def index
    @timed_scores = TimedScore.all

    render json: @timed_scores
  end

  def create
    @timed_score = TimedScore.create(params)

    render json: @timed_score
  end

end
