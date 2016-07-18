class Monument < ApplicationRecord
  has_many :encounters
  has_many :characters, through: :encounters
end
