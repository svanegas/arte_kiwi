module Admin
  class ProductsController < ApplicationController
    before_action :set_product, only: [:show, :edit, :update, :destroy]

    # GET /products
    # GET /products.json
    def index
      @products = Product.order(:name)
    end

    # GET /products/1
    # GET /products/1.json
    def show
    end

    # GET /products/new
    def new
      @product = Product.new
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
          format.html { redirect_to admin_products_url, notice: 'Product was successfully created.' }
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
      # binding.pry
      respond_to do |format|
        # The product images defintely shouldn't be loaded like this,
        # but this is just to see how they're getting into the parameters.
        # Since we're using a relation for ProductImages, we're creating the instance of it before updating.
        # There must be a way to update this straight away from params...
        product_images = []
        new_params = product_params
        if product_params[:product_images].present?
          product_params[:product_images].each do |value|
            product_images << ProductImage.new(image: value.second) # why is it an array and second element contains the actual image? Diosito knows.
          end
          new_params[:product_images] = product_images
        end
        if @product.update(new_params)
          format.html { redirect_to admin_products_url, notice: 'Product was successfully updated.' }
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
        format.html { redirect_to products_url, notice: 'Product was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_product
        # binding.pry
        @product = Product.find(params[:id])
      end

      # Only allow a list of trusted parameters through.
      def product_params
        params.require(:product).permit(:name, :description, :price, data: [:physical_price], product_images: [:image])
      end
  end
end
