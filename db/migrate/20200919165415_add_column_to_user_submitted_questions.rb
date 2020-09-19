class AddColumnToUserSubmittedQuestions < ActiveRecord::Migration[6.0]
  def change
    add_column :user_submitted_questions, :prompt, :string
  end
end
