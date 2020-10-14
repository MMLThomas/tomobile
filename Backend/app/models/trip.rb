class Trip < ApplicationRecord
  belongs_to :renter
  belongs_to :car
  belongs_to :host
end
