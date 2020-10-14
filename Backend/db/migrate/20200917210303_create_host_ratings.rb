class CreateHostRatings < ActiveRecord::Migration[6.0]
  def change
    create_table :host_ratings do |t|
      t.float :score
      t.references :host
      t.references :renter
      


      t.timestamps
    end
  end
end
