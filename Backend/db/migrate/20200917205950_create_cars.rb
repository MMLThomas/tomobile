class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.string :make
      t.string :model
      t.string :doors
      t.string :seats
      t.string :fuel
      t.string :description
      t.string :profile_pic
      t.integer :mpg
      t.integer :year
      t.integer :price
      t.integer :average_rating
      t.integer :trips_total
      t.references :host

      

      t.timestamps
    end
  end
end
