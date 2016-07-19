class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :kdex
      t.string :ndex

      t.timestamps
    end
  end
end
