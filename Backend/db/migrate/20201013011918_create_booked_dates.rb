class CreateBookedDates < ActiveRecord::Migration[6.0]
  def change
    create_table :booked_dates do |t|
      t.date :date
      t.references :booking

      t.timestamps
    end
  end
end
