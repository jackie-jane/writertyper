class AddTextRefToScores < ActiveRecord::Migration[6.0]
  def change
    add_reference :scores, :text, null: false, foreign_key: true
  end
end
