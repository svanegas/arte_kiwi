class ProductsController < ApplicationController
  layout "product"

  def show
    product = Product.includes(:product_images).find_by(slug: params[:slug])
    @presenter = ProductPresenter::Show.new(product).process
  end
end
