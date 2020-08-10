class Text < ApplicationRecord
  validates :title, uniqueness: true, presence: true
  validates :content, presence: true
  has_many :scores, dependent: :destroy
  belongs_to :author
end
