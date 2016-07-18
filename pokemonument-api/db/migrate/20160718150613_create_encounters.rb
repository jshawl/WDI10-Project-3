class CreateEncounters < ActiveRecord::Migration[5.0]
  def change
    create_table :encounters do |t|
      t.integer :character_id
      t.integer :site_id
      t.text :comments

      t.timestamps
    end
  end
end
