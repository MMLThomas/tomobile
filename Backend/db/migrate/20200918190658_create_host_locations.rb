class CreateHostLocations < ActiveRecord::Migration[6.0]
  def change
    create_table :host_locations do |t|
      t.references :host

      t.timestamps
    end
  end
end
