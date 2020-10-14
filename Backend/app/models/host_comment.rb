class HostComment < ApplicationRecord
    belongs_to :host, dependent: :destroy
    belongs_to :renter
end
