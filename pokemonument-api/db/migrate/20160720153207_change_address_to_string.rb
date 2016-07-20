class ChangeAddressToString < ActiveRecord::Migration[5.0]
  def change
    change_column :monuments, :address, :string
    change_column :monuments, :zip, :string
    add_column :monuments, :city, :string
  end
end
