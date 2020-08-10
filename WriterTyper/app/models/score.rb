class Score < ApplicationRecord
  validates :username, uniqueness: true, presence: true
  belongs_to :text
end
