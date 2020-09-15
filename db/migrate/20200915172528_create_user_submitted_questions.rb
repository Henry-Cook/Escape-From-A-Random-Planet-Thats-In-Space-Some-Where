class CreateUserSubmittedQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :user_submitted_questions do |t|
      t.string :question
      t.string :answer
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
