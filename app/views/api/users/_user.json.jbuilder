json.extract! user, :id, :email, :username

json.cart do 
  json.extract! user.cart, :id
end