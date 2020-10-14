class AddAverageRatingToCars < ActiveRecord::Migration[6.0]
  def change
    add_column :cars, :average_rating, :float
  end
end
