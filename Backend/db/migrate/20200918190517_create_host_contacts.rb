class CreateHostContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :host_contacts do |t|
      t.string :address1
      t.string :address2
      t.string :city
      t.string :state
      t.string :country
      t.integer :zip
      t.integer :phone_number
      t.references :host

      t.timestamps
    end
  end
end
