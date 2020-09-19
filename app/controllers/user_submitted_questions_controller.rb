class UserSubmittedQuestionsController < ApplicationController
  before_action :authorize_request, except: :create
  def index
    @questions = UserSubmittedQuestion.all

    render json: @questions
  end

  def create
    @question = UserSubmittedQuestion.create(user_params)

    render json: @question
  end

  def users_questions
    @questions = UserSubmittedQuestion.where(user_id: @user.id)

    render json: @questions
  end

  private

  def user_params
    params.require(:user_submitted_question).permit(:question, :answer, :prompt)
  end
end
