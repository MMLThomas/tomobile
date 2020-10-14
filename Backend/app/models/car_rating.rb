class CarRating < ApplicationRecord
    belong_to :car, dependent: :destroy
    belongs_to :renter
    belong_to :trip

end
