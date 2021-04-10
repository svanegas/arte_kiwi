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

  accepts_nested_attributes_for :product_images, allow_destroy: true

  def self.to_csv
    image_host = "https://arte-kiwi.s3.amazonaws.com" # Hardcoded, this shouldn't be like that...
    header = ["Handle", "Title", "Body (HTML)", "Vendor", "Type", "Tags", "Published", "Option1 Name", "Option1 Value", "Option2 Name", "Option2 Value", "Option3 Name", "Option3 Value", "Variant SKU", "Variant Grams", "Variant Inventory Tracker", "Variant Inventory Qty", "Variant Inventory Policy", "Variant Fulfillment Service", "Variant Price", "Variant Compare At Price", "Variant Requires Shipping", "Variant Taxable", "Variant Barcode", "Image Src", "Image Position", "Image Alt Text", "Gift Card", "SEO Title", "SEO Description", "Google Shopping / Google Product Category", "Google Shopping / Gender", "Google Shopping / Age Group", "Google Shopping / MPN", "Google Shopping / AdWords Grouping", "Google Shopping / AdWords Labels", "Google Shopping / Condition", "Google Shopping / Custom Product", "Google Shopping / Custom Label 0", "Google Shopping / Custom Label 1", "Google Shopping / Custom Label 2", "Google Shopping / Custom Label 3", "Google Shopping / Custom Label 4", "Variant Image", "Variant Weight Unit", "Variant Tax Code", "Cost per item", "Status"]
    CSV.generate(headers: true) do |csv|
      csv << header

      all.each do |product|
        values = [
          product.slug, # Handle
          product.name, # Title
          product.description, # Body (HTML)
          "", # Vendor
          "", # Type
          "", # Tags
          product != 'inactive' ? 'TRUE' : 'FALSE', # Published
          "Title", # Option1 Name
          "Default Title",  # Option1 Value
          "", # Option2 Name
          "", # Option2 Value
          "", # Option3 Name
          "", # Option3 Value
          "", # Variant SKU
          0, # Variant Grams
          "shopify", # Variant Inventory Tracker
          "", # Variant Inventory Qty
          "deny", # Variant Inventory Policy
          "manual", # Variant Fulfillment Service
          product.price.to_i, # Variant Price
          "", # Variant Compare At Price
          "", # Variant Requires Shipping
          "", # Variant Taxable
          "", # Variant Barcode
          image_host + product.product_images.first.image.url, # Image Src
          1, # Image Position
          product.name, # Image Alt Text
          'FALSE', # Gift Card
          "", # SEO Title
          "", # SEO Description
          "", # Google Shopping / Google Product Category
          "", # Google Shopping / Gender
          "", # Google Shopping / Age Group
          "", # Google Shopping / MPN
          "", # Google Shopping / AdWords Grouping
          "", # Google Shopping / AdWords Labels
          "", # Google Shopping / Condition
          "", # Google Shopping / Custom Product
          "", # Google Shopping / Custom Label 0
          "", # Google Shopping / Custom Label 1
          "", # Google Shopping / Custom Label 2
          "", # Google Shopping / Custom Label 3
          "", # Google Shopping / Custom Label 4
          "", # Variant Image
          "", # Variant Weight Unit
          "", # Variant Tax Code
          "", # Cost per item
          "active", # Status
        ]
        csv << values
      end
    end
  end
end
