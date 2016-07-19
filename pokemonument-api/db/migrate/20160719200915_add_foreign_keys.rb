class AddForeignKeys < ActiveRecord::Migration[5.0]
  def change
    add_foreign_key :encounters, :monuments
    add_foreign_key :encounters, :characters
  end
end
