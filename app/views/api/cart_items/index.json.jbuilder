@cart_items.each do |cart_item|
  json.cart_items do
    json.set! cart_item.id do
      json.extract! cart_item, :id, :cart_id, :product_id, :quantity, :updated_at
    end
  end

  json.products do
    json.set! cart_item.product_id do
      json.extract! cart_item.product, :id, :user_id, :title, :description, :price, :category_id
      json.photoUrl url_for(cart_item.product.photo)
    end
  end
end