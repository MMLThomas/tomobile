class AddHostIdToBookings < ActiveRecord::Migration[6.0]
  def change
    add_column :bookings, :host_id, :integer
  end
end
