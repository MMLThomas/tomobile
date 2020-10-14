class Renter < ApplicationRecord
    has_many :trips
    has_many :host_comments
    has_many :car_reviews
    has_many :favorites
    has_many :car_ratings
    has_many :host_ratings
    has_many :cars, through: :bookings
    has_one :renter_contact


end
