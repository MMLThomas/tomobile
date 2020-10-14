class RemoveAverageRatingFromHosts < ActiveRecord::Migration[6.0]
  def change
    remove_column :hosts, :average_rating, :integer
  end
end
