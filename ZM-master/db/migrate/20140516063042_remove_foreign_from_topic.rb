class RemoveForeignFromTopic < ActiveRecord::Migration
  def change
    remove_column :topics, :forum_id, :integer
  end
end
