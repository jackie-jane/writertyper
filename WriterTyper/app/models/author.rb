class Author < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  has_many :texts, dependent: :destroy
end
