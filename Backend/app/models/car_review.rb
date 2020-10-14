class CarReview < ApplicationRecord
    belongs_to :car, dependent: :destroy
    belongs_to :renter
    
end
