class AddContentToTexts < ActiveRecord::Migration[6.0]
  def change
    add_column :texts, :content, :string
  end
end
