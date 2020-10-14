class CreateCarRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :car_ratings do |t|
      t.float :score
      t.references :car
      t.references :trip
      t.references :renter

      t.timestamps
    end
  end
end
