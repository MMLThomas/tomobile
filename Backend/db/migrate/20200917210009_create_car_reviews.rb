class CreateCarReviews < ActiveRecord::Migration[6.0]
  def change
    create_table :car_reviews do |t|
      t.text :content
      t.date :date
      t.references :renter
      t.references :car


      t.timestamps
    end
  end
end
