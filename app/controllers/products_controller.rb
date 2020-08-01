class ProductsController < ApplicationController
  layout "product"

  def show
    @label = params[:label]
    @slug = params[:slug]
  end
end
