class CreateEncounters < ActiveRecord::Migration[5.0]
  def change
    create_table :encounters do |t|
      t.string :user
      t.integer :character_id
      t.integer :monument_id
      t.text :comment

      t.timestamps
    end
  end
end
