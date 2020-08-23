class Product < ApplicationRecord
  belongs_to :category
  has_many :product_images, dependent: :destroy

  extend FriendlyId
  friendly_id :name, use: [:slugged, :finders]

  enum product_state: {
    inactive: 0,
    active: 1,
    discount: 2,
    few_stock: 3
  }

  validates_presence_of :name, :price
end
