class Character < ApplicationRecord
  has_many :encounters
  has_many :monuments, through: :encounters
end
