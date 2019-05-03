@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :user_id, :title, :description, :price, :quantity, :category_id
        json.photoUrl url_for(product.photo)
    end
end


json.users do
    @products.each do |product|
        json.set! product.user.id do
            json.extract! product.user, :id, :username, :email
        end
    end
end