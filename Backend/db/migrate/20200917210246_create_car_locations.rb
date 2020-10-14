class CreateCarLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :car_locations do |t|
      t.string :name
      t.references :car


      t.timestamps
    end
  end
end
