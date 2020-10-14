class AddAverageRatingToHost < ActiveRecord::Migration[6.0]
  def change
    add_column :hosts, :average_rating, :float
  end
end
