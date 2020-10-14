class Booking < ApplicationRecord
    belongs_to :car
    belongs_to :host
    has_many :images, through: :car
    has_many :booked_dates
    
end
