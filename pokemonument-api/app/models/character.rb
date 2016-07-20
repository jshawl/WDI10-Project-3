class Character < ApplicationRecord
  has_many :encounters, dependent: :destroy
  has_many :monuments, through: :encounters
end
