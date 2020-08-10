class AddTextRefToAuthor < ActiveRecord::Migration[6.0]
  def change
    add_reference :authors, :text, null: false, foreign_key: true
  end
end
