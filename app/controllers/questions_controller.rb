class QuestionsController < ApplicationController
  # before_action :authorize_request

  def index
    @questions = Question.all

    render json: @questions
  end

  def create
    @question = Question.create(params)

    render json: @question
  end

end
