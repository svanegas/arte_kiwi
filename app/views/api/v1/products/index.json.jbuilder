json.products @products do |product|
  # json.call(product, :id, :name, :description)
  json.(product, :id, :gtm_id, :name, :slug, :quantity, :price, :template)
  json.category product.category.name
  json.label product.category.label
  json.description product.description.split("\n")
  json.imageUrl product.product_images.first.image_url
  json.whatsappMessage "¡Hola! deseo información de *#{product.name}*, muchas gracias. 😊"
  if product.data.dig("physical_price")
    json.physical_price product.data.dig("physical_price")
  end
end
