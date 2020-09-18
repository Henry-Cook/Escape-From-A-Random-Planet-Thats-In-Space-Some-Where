class UserSubmittedQuestionsController < ApplicationController
  before_action :authorize_request, except: :create
  def index
    @questions = UserSubmittedQuestion.all

    render json: @questions
  end

  def create
    @question = UserSubmittedQuestion.create(params)

    render json: @question
  end

  def users_questions
    @questions = UserSubmittedQuestion.where(user_id: @user.id)

    render json: @questions
  end
end
