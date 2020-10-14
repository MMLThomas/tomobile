class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.date :start_time
      t.date :end_time
      t.string :cost
      t.references :host
      t.references :renter
      t.references :car


      t.timestamps
    end
  end
end
