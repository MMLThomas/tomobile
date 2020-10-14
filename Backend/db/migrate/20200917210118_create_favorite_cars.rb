class CreateFavoriteCars < ActiveRecord::Migration[6.0]
  def change
    create_table :favorite_cars do |t|
      t.references :renter
      t.references :car


      t.timestamps
    end
  end
end
