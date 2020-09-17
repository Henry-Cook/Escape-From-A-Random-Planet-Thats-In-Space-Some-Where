class RemoveColumnTimedScores < ActiveRecord::Migration[6.0]
  def change
    remove_column :timed_scores, :score, :string
    add_column :timed_scores, :score, :integer
  end
end
