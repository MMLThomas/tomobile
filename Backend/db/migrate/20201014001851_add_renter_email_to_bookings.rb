class AddRenterEmailToBookings < ActiveRecord::Migration[6.0]
  def change
    add_column :bookings, :renter_email, :string
  end
end
