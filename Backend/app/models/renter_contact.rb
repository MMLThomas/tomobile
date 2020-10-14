class RenterContact < ApplicationRecord
    belongs_to :renter, dependent: :destroy
end
