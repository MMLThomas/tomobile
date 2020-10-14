class RemoveHostIdFromBookings < ActiveRecord::Migration[6.0]
  def change
    remove_column :bookings, :host_id, :integer
  end
end
