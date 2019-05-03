class RemoveUsernameIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, column: :username
  end
end
