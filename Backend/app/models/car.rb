class Car < ApplicationRecord
    belongs_to :host, dependent: :destroy
    has_many :renters, through: :bookings
    has_many :bookings
    has_many :trips
    has_many :images
    has_many :car_categories
    has_many :car_features
    has_many :car_reviews
    has_many :car_ratings
    has_many :car_locations
    has_many :coordinates, through: :car_locations
    has_many :booked_dates, through: :bookings

    
    self.models = {
        'Model 3': [{name: 'Car'}, {name: 'Electric'}, {name: 'Fuel Saver'}],
        'R8': [{name: 'Sport'}, {name: 'Car'}, {name: 'Exotic'}],
        'Accord': [{name: 'Car'}],
        'Jetta': [{name: 'Car'}, {name: 'Fuel Saver'}],
        'Altima': [{name: 'Car'}],
        'Challenger': [{name: 'Sport'}, {name: 'Car'}],
        'ATS': [{name: 'Car'}, {name: 'Sport'}],
        'Q7': [{name: 'Truck'}],
        'Stelvio': [{name: 'Car'}, {name: 'Exotic'}],
        'Fusion': [{name: 'Car'}, {name: 'Fuel Saver'}],
        'FJ Cruiser': [{name: 'Truck'}],
        'Wrangler Unlimited': [{name: 'Truck'}, {name: 'Sport'}],
        '4Runner': [{name: 'Truck'}],
        'Suburban': [{name: 'Truck'}],
        'Corvette': [{name: 'Sport'}, {name: 'Car'}, {name: 'Exotic'}],
        'Corolla': [{name: 'Car'}, {name: 'Fuel Saver'}],
        'Tucson': [{name: 'Truck'}],
        'Rio': [{name: 'Car'}, {name: 'Fuel Saver'}],
        'Tundra': [{name: 'Truck'}],
        'Pa{namera': [{name: 'Sport'}, {name: 'Car'}, {name: 'Exotic'}],
        'C-HR': [{name: 'Truck'}],
        'C 10 super cheyenne': [{name: 'Truck'}],
        'Model Y': [{name: 'Car'}, {name: 'Family'}, {name: 'Electric'}, {name: 'Fuel Saver'}],
        '300': [{name: 'Car'}],
        'Town Car': [{name: 'Car'}, {name: 'Family'}],
        'ILX': [{name: 'Car'}],
        '911': [{name: 'Sport'}, {name: 'Car'}, {name: 'Exotic'}],
        'Accent': [{name: 'Car'}, {name: 'Fuel Saver'}],
        'Sien{na': [{name: 'Sport'}, {name: 'Car'}, {name: 'Exotic'}],
        'C-Class': [{name: 'Sport'}, {name: 'Car'}],
        'G-Class': [{name: 'Truck'}, {name: 'Exotic'}],
        };

            
        def self.update_cat
            self.all.each do |car|
                cats = self.models[car.model]
                car.car_categories.create(cats)
            end
        end
    

end
