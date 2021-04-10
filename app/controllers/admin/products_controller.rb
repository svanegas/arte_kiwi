module Admin
  class ProductsController < ApplicationController
    layout "product"

    before_action :authenticate_user!
    before_action :set_templates, only: [:edit, :new]
    before_action :set_product, only: [:show, :edit, :update, :destroy]

    # GET /products
    # GET /products.json
    def index
      @products = Product.order(:name)

      respond_to do |format|
        format.html
        format.csv { send_data @products.to_csv }
      end
    end

    # GET /products/1
    # GET /products/1.json
    def show
    end

    # GET /products/new
    def new
      @product = Product.new
      @product.product_images.build
    end

    # GET /products/1/edit
    def edit
    end

    # POST /products
    # POST /products.json
    def create
      @product = Product.new(product_params)

      respond_to do |format|
        if @product.save
          format.html { redirect_to admin_products_url, notice: 'Producto creado exitosamente.' }
          format.json { render :show, status: :created, location: @product }
        else
          format.html { render :new }
          format.json { render json: @product.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /products/1
    # PATCH/PUT /products/1.json
    def update
      respond_to do |format|
        if @product.update(product_params)
          format.html { redirect_to admin_products_url, notice: 'Producto actualizado exitosamente.' }
          format.json { render :show, status: :ok, location: @product }
        else
          format.html { render :edit }
          format.json { render json: @product.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /products/1
    # DELETE /products/1.json
    def destroy
      @product.destroy
      respond_to do |format|
        format.html { redirect_to admin_products_url, notice: 'Producto eliminado exitosamente.' }
        format.json { head :no_content }
      end
    end

    private

      def set_templates
        @templates = ["marker", "virtual-book", "book", "binnacle", "organizer", "kit"]
      end

      # Use callbacks to share common setup or constraints between actions.
      def set_product
        @product = Product.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def product_params
        params.require(:product).permit(:name,
                                        :description,
                                        :price,
                                        :template,
                                        :category_id,
                                        data: [:physical_price],
                                        product_images_attributes: [:id, :image])
      end
  end
end
