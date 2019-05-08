class Api::CartsController < ApplicationController
    def create
        @cart = Cart.new(cart_params)
        unless @cart.save
            render json: @cart.errors.full_messages, status: 422
        end
    end

    private

    def cart_params
        params.require(:cart).permit(:user_id)
    end
end
