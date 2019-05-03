class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.integer :user_id, null: false
      t.integer :category_id, null: false
      t.string :title, null: false
      t.text :description, null: false
      t.float :price, null: false

      t.timestamps
    end
    add_index :products, :user_id, unique: true
    add_index :products, :title
    add_index :products, [:title, :user_id], unique:true
  end
end
