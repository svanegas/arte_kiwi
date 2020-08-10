# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


p "-------------------------- Init seeds --------------------------"

products_file = File.open("#{Rails.root}/app/javascript/views/search/products.json")
products = JSON.load(products_file).dig("raw_products")
products_file.close

products.each do |pro|
  category = Category.find_or_create_by(name: pro.dig("category"), label: pro.dig("label"))
  product = Product.create(
    name: pro.dig("name"),
    gtm_id: pro.dig("id"),
    quantity: pro.dig("quantity").to_i,
    price: pro.dig("price"),
    template: pro.dig("marker"),
    data: {},
    product_state: 1,
    description: pro.dig("description").join("\n"),
    category: category,
  )
end



p "-------------------------- End seeds --------------------------"