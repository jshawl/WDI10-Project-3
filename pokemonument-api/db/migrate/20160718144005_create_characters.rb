class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.character :[name
      t.character :kdex
      t.character] :ndex

      t.timestamps
    end
  end
end
