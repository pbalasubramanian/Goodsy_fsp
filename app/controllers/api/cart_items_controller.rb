class Api::CartItemsController < ApplicationController

    def index
        @cart_items = CartItem.where(cart_id: params[:cart_item])
    end

    def create
        @cart_item = CartItem.new(cart_item_params)
        unless @cart_item.save
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find(params[:id])
        if @cart_item.destroy
            render 'api/cart_items/show'
        else
            render json: @cart_item.errors.full_messsages, status: 422
        end
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:cart_id, :product_id, :quantity)
    end

end
