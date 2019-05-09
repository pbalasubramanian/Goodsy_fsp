json.extract! @product, :id, :user_id, :title, :description, :price, :quantity, :category_id, :updated_at
json.photoUrl url_for(@product.photo)

json.user do
    json.set! @product.user.id do
        json.extract! @product.user, :id, :username, :email
    end
end