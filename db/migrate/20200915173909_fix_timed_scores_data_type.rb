class FixTimedScoresDataType < ActiveRecord::Migration[6.0]
  def change
    change_column :timed_scores, :score, :string
  end
end
