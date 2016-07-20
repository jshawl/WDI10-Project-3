class Monument < ApplicationRecord
  has_many :encounters, dependent: :destroy
  has_many :characters, through: :encounters
end
