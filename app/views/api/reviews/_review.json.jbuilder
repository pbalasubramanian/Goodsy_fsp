json.extract! review, :id, :reviewer_id, :product_id, :rating, :description, :created_at
json.user review.reviewer.username 
json.product review.product.title 