class CarSerializer
  include FastJsonapi::ObjectSerializer
  attributes :id, :make, :model, :year, :fuel, :mpg, :doors, :seats, :trips_total, :average_rating, :description, :price, :images, :host, :car_locations, :coordinates



    
    
end
