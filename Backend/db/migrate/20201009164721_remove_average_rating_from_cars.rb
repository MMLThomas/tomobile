class RemoveAverageRatingFromCars < ActiveRecord::Migration[6.0]
  def change
    remove_column :cars, :average_rating, :integer
  end
end
