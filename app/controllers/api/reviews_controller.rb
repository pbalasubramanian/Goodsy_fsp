class Api::ReviewsController < ApplicationController
    
    def index
        if params[:productId]
            @reviews = Review.where(product_id: params[:productId])
        # else 
        #     @reviews = Review.all 
        end 
        render :index
    end 

    def create 
        @review = Review.new(review_params)
        if @review.save 
            render "api/reviews/show" 
        else 
            render json: @review.errors.full_messages, status: 422
        end 
    end 

    def update
        @review = Review.find_by(id: params[:id])
        if @review.update(review_params)
            render :show 
        else 
            render json: @review.errors.full_messages, status: 422 
        end
    end 

    def destroy
        @review = Review.find_by(id: params[:id])
        if @review.destroy 
            render :show
        else 
            render json: @review.errors.full_messages, status: 422 
        end 
    end 

    def review_params 
        params.require(:review).permit(:reviewer_id, :product_id, :rating, :description)
    end 
end
