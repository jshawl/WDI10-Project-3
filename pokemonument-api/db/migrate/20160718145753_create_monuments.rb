class CreateMonuments < ActiveRecord::Migration[5.0]
  def change
    create_table :monuments do |t|
      t.char :[site
      t.numberic :site_id
      t.char :address
      t.char :zip
      t.text :description
      t.char] :photo_url

      t.timestamps
    end
  end
end