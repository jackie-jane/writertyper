class CreateAuthors < ActiveRecord::Migration[6.0]
  def change
    create_table :authors do |t|
      t.string :name
      t.string :biography
      t.string :controversy
    end
  end
end
