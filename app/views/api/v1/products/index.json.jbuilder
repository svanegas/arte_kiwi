json.products @products do |product|
  # json.call(product, :id, :name, :description)
  json.(product, :id, :gtm_id, :name, :slug, :quantity, :price, :template)
  json.category product.category.name
  json.label product.category.label
  json.description product.description.split("\n")
  json.imageUrl product.product_images.first.image_url
end

# {
#   "name": "Window Marker 600",
#   "id": "window-marker-600-kiwi-gtm",
#   "slug": "window-marker-600",
#   "quantity": "8",
#   "price": 28000,
#   "category": "vinyl-markers",
#   "label": "marcadores-vinilo",
#   "imageUrl": "https://arte-kiwi.s3-us-west-2.amazonaws.com/hardcoded-images/web-bann1.windowmarker600_1.JPG",
#   "whatsappMessage": "¡Hola! deseo información de *Window Marker 600*, muchas gracias. 😊",
#   "template": "marker",
#   "description": [
#     "De vinilo",
#     "Punta biselada 2-5mm",
#     "Ideales para escribir sobre vidrio, cartón, acetato, madera, papel, aluminio"
#   ]
# },


# json.content format_content(@message.content)
# json.(@message, :created_at, :updated_at)
#
# json.author do
#   json.name @message.creator.name.familiar
#   json.email_address @message.creator.email_address_with_name
#   json.url url_for(@message.creator, format: :json)
# end
#
# if current_user.admin?
#   json.visitors calculate_visitors(@message)
# end
#
# json.comments @message.comments, :content, :created_at
#
# json.attachments @message.attachments do |attachment|
#   json.filename attachment.filename
#   json.url url_for(attachment)
# end
#
# {
#   "content": "<p>This is <i>serious</i> monkey business</p>",
#   "created_at": "2011-10-29T20:45:28-05:00",
#   "updated_at": "2011-10-29T20:45:28-05:00",
#
#   "author": {
#     "name": "David H.",
#     "email_address": "'David Heinemeier Hansson' <david@heinemeierhansson.com>",
#     "url": "http://example.com/users/1-david.json"
#   },
#
#   "visitors": 15,
#
#   "comments": [
#     { "content": "Hello everyone!", "created_at": "2011-10-29T20:45:28-05:00" },
#     { "content": "To you my good sir!", "created_at": "2011-10-29T20:47:28-05:00" }
#   ],
#
#   "attachments": [
#     { "filename": "forecast.xls", "url": "http://example.com/downloads/forecast.xls" },
#     { "filename": "presentation.pdf", "url": "http://example.com/downloads/presentation.pdf" }
#   ]
# }
