class UpdateProductsUserIdIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :products, :user_id
    add_index :products, :user_id
  end
end
