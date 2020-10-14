class RemoveRenterIdFromBookings < ActiveRecord::Migration[6.0]
  def change
    remove_column :bookings, :renter_id, :integer
  end
end
