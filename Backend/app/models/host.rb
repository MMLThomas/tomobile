class Host < ApplicationRecord
    has_many :cars
    has_many :bookings
    has_many :host_comments 
    has_many :host_locations
    has_many :renters, through: :bookings
    has_many :trips
    has_one :contact

end
