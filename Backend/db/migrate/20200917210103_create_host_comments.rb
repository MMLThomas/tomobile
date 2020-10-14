class CreateHostComments < ActiveRecord::Migration[6.0]
  def change
    create_table :host_comments do |t|
      t.text :content
      t.date :date
      t.references :host
      t.references :renter
  


      t.timestamps
    end
  end
end
