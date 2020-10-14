class FavoriteCar < ApplicationRecord
    belongs_to :user, dependent: :destroy
end
