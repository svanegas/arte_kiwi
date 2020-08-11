module Api
  module V1
    class ProductsController < Api::BaseController
      before_action :set_default_format

      def index
        @products = Product.includes(:category, :product_images).all
      end
    end
  end
end