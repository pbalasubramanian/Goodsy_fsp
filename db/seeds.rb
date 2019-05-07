# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Product.delete_all
User.delete_all

user1 = User.create!(
    email: "demo@gmail.com", 
    username: "demouser", 
    password: "password"
)
user2 = User.create!(
    email: "will@yahoo.com",
    username: "will",
    password: "password"
)
user3 = User.create!(
    email:"john@gmail.com", 
    username: "john", 
    password: "password"
)
user4 = User.create!(
    email:"liz@yahoo.com", 
    username: "liz", 
    password: "password"
)


p1 = Product.create(
    user_id: user1.id,
    title: "Graduation Keychain - Class of - Stamped Penny",
    description: "This keychain comes with the words engraved on the penny \'Class of\' then we engrave a heart around the year on the penny. From the drop menu choose the year that you would like us to engrave a heart around.",
    price: 6.95,
    quantity: 50,
    category_id: 1
)
# p1.photo.attach(io: File.open("./app/assets/images/il_794xN.1171814082_mc3f.jpg"), filename:"keychain1.jpg")

# file = open('https://s3.amazonaws.com/goodsy-pro/keychain1.jpg')
file = open('https://s3-us-west-1.amazonaws.com/goodsy-pro/keychain1.jpg')
p1.photo.attach(io: file, filename: 'keychain1.jpg')

p2 = Product.create(
    user_id: user1.id,
    title: "Graduation Gift. 2019 penny! Class of 2019",
    description: "This would be the perfect gift to give the high school or college graduate in your life for their graduation! This penny has a graduation cap stamped on it, along with a heart stamped around the 2019 on the penny. The keychain also comes with any one initial charm of your choice.",
    price: 12.99,
    quantity: 50,
    category_id: 1
)
file = open('https://s3-us-west-1.amazonaws.com/goodsy-pro/keychain2.jpg')
p2.photo.attach(io: file, filename: 'keychain2.jpg')

p3 = Product.create(
    user_id: user2.id,
    title: "Mountains sweater slouchy sweatshirt Graphic Design",
    description: "Handprinted adult sweatshirt in vintage heather light gray color with Mountains drawing in white designed and printed by wear2.me. Sweater is printed in silk screen printing technique with water-based Eco friendly ink.",
    price: 23.25,
    quantity: 20,
    category_id: 1
)
file = open('https://s3-us-west-1.amazonaws.com/goodsy-pro/sweater1.jpg')
p3.photo.attach(io: file, filename: 'sweater1.jpg')
