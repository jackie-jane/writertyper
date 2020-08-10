class RemoveTextRefFromAuthor < ActiveRecord::Migration[6.0]
  def change
    remove_column :authors, :text_id, :string
  end
end
