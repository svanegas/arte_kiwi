class CreateProductImages < ActiveRecord::Migration[6.0]
  def change
    create_table :product_images do |t|
      t.references :product, null: false, foreign_key: true
      t.boolean :main, default: false
      t.string :image

      t.timestamps
    end
  end
end
