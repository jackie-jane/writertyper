class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.string :username
      t.integer :word_per_minute
      t.decimal :accuracy
      t.integer :estimate
      t.integer :score
    end
  end
end
