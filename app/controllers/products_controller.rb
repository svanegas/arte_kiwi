class ProductsController < ApplicationController
  layout "product"

  def show
    product = Product.includes(:product_images).find_by(slug: params[:slug])
    return render_404 if product.nil?

    @presenter = ProductPresenter::Show.new(product).process
  end

  private

  def render_404
    respond_to do |format|
      format.html { render file: "#{Rails.root}/public/404", layout: false, status: :not_found }
    end
  end
end
