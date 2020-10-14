class HostContact < ApplicationRecord
    belongs_to :host, dependent: :destroy
end
