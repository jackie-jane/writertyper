class CreateTexts < ActiveRecord::Migration[6.0]
  def change
    create_table :texts do |t|
      t.string :title
      t.integer :words
      t.integer :characters
      t.string :author
    end
  end
end
