class ProductsController < ApplicationController
  layout "product"

  def show
    @product = Product.includes(:product_images).find_by(slug: params[:slug])
    @image = @product.product_images.first.image.url
    @description = @product.description.split("\n")
    @whatsapp_message = "https://api.whatsapp.com/send?phone=573175987665&text=¡Hola! deseo información de *#{@product.name}*, muchas gracias. 😊"
    @label = params[:label]
    @slug = params[:slug]
  end
end
