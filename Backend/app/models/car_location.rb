class CarLocation < ApplicationRecord
    belongs_to :car, dependent: :destroy
    has_many :coordinates
    
end
