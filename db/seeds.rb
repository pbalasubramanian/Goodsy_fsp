# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Product.delete_all
Cart.delete_all
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

Cart.create!(user_id: user1.id)
Cart.create!(user_id: user2.id)
Cart.create!(user_id: user3.id)
Cart.create!(user_id: user4.id)

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

p4 = Product.create(
    user_id: user1.id,
    title: "Coffee T-Shirt, Food Shirt, Coffee Screen Printed T Shirt",
    description: "This is a 100% cotton screen printed graphic t shirt with various ways to brew coffee. This coffee tshirt listing is for a Bella + Canvas 100% combed and ringspun cotton tee. This tee is lighter and softer than our Gildan tees.",
    price: 25,
    quantity: 20,
    category_id: 1
)
file = open('https://s3-us-west-1.amazonaws.com/goodsy-pro/shirt_coffee.jpg')
p4.photo.attach(io: file, filename: 'shirt_coffee.jpg')

p5 = Product.create(
    user_id: user2.id,
    title: "Message in a Bottle, Laser Engraved, Our Story, USB Flash Drive, Usb Stick, Memory Stick, 8GB, 16GB",
    description: "This is for 1 \"Message in a Bottle\" Glass Bottle Flash Drives with Cork Plug . Perfect for special events: Weddings, Bridal Showers, Engagements, Birthdays, Graduations",
    price: 12.95,
    quantity: 30,
    category_id: 1
)
file = open('https://s3-us-west-1.amazonaws.com/goodsy-pro/usb_bottle.jpg')
p5.photo.attach(io: file, filename: 'usb_bottle.jpg')

p6 = Product.create(
    user_id: user1.id,
    title: "Multicolor Mouse Pad Marble Pad Mouse Color MousePad",
    description: "Are you looking for a bright, colorful and stylish Mousepad for your desktop? Great! I'm glad to introduce you Mousepads in my shop! All of them are made by myself with best wishes to their future owners.",
    price: 10.75,
    quantity: 35,
    category_id: 1
)
file = open('https://s3-us-west-1.amazonaws.com/goodsy-pro/mousepad.jpg')
p6.photo.attach(io: file, filename: 'mousepad.jpg')

p7 = Product.create(
    user_id: user3.id,
    title: "contemporary wall art,Palette Knife Painting,colorful Landscape painting",
    description: "A new type of Abstract Wall Painting. This painting is definitely a great gift.It's also Perfect choice for home and office decorations. Medium: Acrylic on gallery-wrapped stretched canvas, palette knife",
    price: 378,
    quantity: 5,
    category_id: 1
)
file = open('https://s3-us-west-1.amazonaws.com/goodsy-pro/wall_art_knife.jpg')
p7.photo.attach(io: file, filename: 'wall_art_knife.jpg')

p8 = Product.create(
    user_id: user2.id,
    title: "Sunflowers painting still life oil painting on canvas yellow flower painting",
    description: "Sunflowers painting still life oil painting on canvas yellow flower painting original Yellow painting Bouquet Floral painting green apples",
    price: 225,
    quantity: 5,
    category_id: 1
)
file = open('https://s3-us-west-1.amazonaws.com/goodsy-pro/sunflower_oil_painting.jpg')
p8.photo.attach(io: file, filename: 'sunflower_oil_painting.jpg')

p9 = Product.create(
    user_id: user3.id,
    title: "Handmade fiber art/quilting/--tulips-customized products",
    description: "This fiber art piece is self designed and made by colorful hand dye batik fabric. The thread painting and fabric painting technique add great dimension and texture to this quilt.",
    price: 144.75,
    quantity: 5,
    category_id: 1
)
file = open('https://s3-us-west-1.amazonaws.com/goodsy-pro/handmade_fiberart.jpg')
p9.photo.attach(io: file, filename: 'handmade_fiberart.jpg')

p10 = Product.create(
    user_id: user4.id,
    title: "Stained Glass Suncatcher, Multi Coloured Star, Handmade Rainbow Art Panel",
    description: "Handcrafted Stained Glass Suncatcher Panel. Multi Coloured Stained Glass Star. Eight Point Star measuring 14cm wide (approx). Attached is an attractive chain with a hanging ring.",
    price: 225,
    quantity: 5,
    category_id: 1
)
file = open('https://s3-us-west-1.amazonaws.com/goodsy-pro/stainedglass_suncatcher.jpg')
p10.photo.attach(io: file, filename: 'stainedglass_suncatcher.jpg')