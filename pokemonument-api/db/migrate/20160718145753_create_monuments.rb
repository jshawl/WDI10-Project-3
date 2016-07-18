class CreateMonuments < ActiveRecord::Migration[5.0]
  def change
    create_table :monuments do |t|
      t.string :site
      t.integer :site_id
      t.integer :address
      t.integer :zip
      t.text :description
      t.integer :photo_url

      t.timestamps
    end
  end
end
