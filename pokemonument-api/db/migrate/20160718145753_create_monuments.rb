class CreateMonuments < ActiveRecord::Migration[5.0]
  def change
    create_table :monuments do |t|
      t.string :name
      t.string :address
      t.string :zip
      t.text :description
      t.string :photo_url

      t.timestamps
    end
  end
end
