class CreateHosts < ActiveRecord::Migration[6.0]
  def change
    create_table :hosts do |t|
      t.string :name
      t.string :email
      t.string :username
      t.integer :average_rating
      t.integer :trips_total
      t.string :profile_pic
      t.timestamps
    end
  end
end
