class CreateRenterContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :renter_contacts do |t|
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state
      t.string :country
      t.integer :zip
      t.integer :phone_number
      t.references :renter

      t.timestamps
    end
  end
end
