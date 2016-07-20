class Encounter < ApplicationRecord
  belongs_to :character
  validates :character_id, :presence => true
  belongs_to :monument
  validates :monument_id, :presence => true
end
