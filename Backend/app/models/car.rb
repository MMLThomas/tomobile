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
    

end
