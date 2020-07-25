class ProductsController < ApplicationController
  layout "product"

  def show
    @category = params[:category]
    @slug = params[:slug]
  end
end
