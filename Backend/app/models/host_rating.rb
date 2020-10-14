class HostRating < ApplicationRecord
    belong_to :host, dependent: :destroy
    belong_to :renter
end
