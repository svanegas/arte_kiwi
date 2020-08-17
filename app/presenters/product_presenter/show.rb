module ProductPresenter
  class Show
    attr_accessor :product

    include ActionView::Helpers::NumberHelper

    def initialize(product)
      @product = product
    end

    def process
      {
        image: image,
        description: description,
        whatsapp_message: whatsapp_message,
        name: name,
        quantity: quantity,
        gtm_id: gtm_id,
        prices: prices
      }
    end

    def image
      @product.product_images.first.image.url
    end

    def description
      @product.description.split("\n")
    end

    def whatsapp_message
      "https://api.whatsapp.com/send?phone=573175987665&text=¡Hola! deseo información de *#{@product.name}*, muchas gracias. 😊"
    end

    def name
      @product.name
    end

    def quantity
      # TODO make the migration to transform this field to a STRING
      return "<span class='font-size-md pt-3'>Cantidad: #{@product.quantity}</span>" if @product.quantity
      ""
    end

    def gtm_id
      @product.gtm_id
    end

    def prices
      if @product.data.dig("physical_price")
        [
          {
            label: "<span class='font-family-work-sans font-size-md pt-3'>Precio físico</span><br>",
            price: "<span class='font-family-work-sans font-size-md pt-3'>#{number_to_currency(@product.data.dig("physical_price"), unit: "COP ", precision: 0)}</span>"
          },
          {
            label: "<span class='font-family-work-sans font-size-md pt-3'>Precio virtual</span><br>",
            price: "<span class='font-family-work-sans font-size-md pt-3'>#{number_to_currency(@product.price, unit: "COP ", precision: 0)}</span>"
          }
        ]
      else
        [
          {
            label: "",
            price: "<span class='font-family-work-sans font-size-md pt-3'>#{number_to_currency(@product.price, unit: "COP ", precision: 0)}</span>"
          }
        ]
      end
    end
  end
end