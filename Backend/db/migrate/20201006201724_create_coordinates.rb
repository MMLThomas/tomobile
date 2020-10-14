class CreateCoordinates < ActiveRecord::Migration[6.0]
  def change
    create_table :coordinates do |t|
      t.float :lng
      t.float :lat
      t.references :car_location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
