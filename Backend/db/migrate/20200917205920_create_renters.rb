class CreateRenters < ActiveRecord::Migration[6.0]
  def change
    create_table :renters do |t|
      t.string :name
      t.string :email
      t.string :username
      t.string :profile_pic
      

      t.timestamps
    end
  end
end
