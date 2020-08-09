class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :gtm_id, default: ""
      t.integer :quantity, default: 0
      t.float :price, default: 0
      t.string :template
      t.jsonb :data, default: {}
      t.integer :product_state, default: 0
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end