# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  category_id :integer          not null
#  title       :string           not null
#  description :text             not null
#  price       :float            not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  quantity    :integer
#

class Product < ApplicationRecord
    validates :user_id, :category_id, :title, :description, :price, :quantity, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_one_attached :photo

    has_many :cart_items, dependent: :destroy

    has_many :reviews, 
        primary_key: :id, 
        foreign_key: :product_id, 
        class_name: :Review

    def self.search_results(query_params)
        return Product.all if query_params == ""
       
        param = "%" + query_params.downcase + '%'
    
        products = Product.where('lower(title) LIKE ?', param).to_a
    end

end
