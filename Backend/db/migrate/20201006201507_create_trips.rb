class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.references :renter, null: false, foreign_key: true
      t.references :car, null: false, foreign_key: true
      t.date :start_date
      t.date :end_date
      t.references :host, null: false, foreign_key: true

      t.timestamps
    end
  end
end