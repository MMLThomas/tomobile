class HostLocation < ApplicationRecord
    belongs_to :host, dependent: :destroy
end
