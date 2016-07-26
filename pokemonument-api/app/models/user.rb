class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  # In the future, consider making more progress on whole
  # application before integrating user authentication,
  # but nice attempt!
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
end
