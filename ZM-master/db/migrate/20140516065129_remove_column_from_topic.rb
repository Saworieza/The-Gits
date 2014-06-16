class RemoveColumnFromTopic < ActiveRecord::Migration
  def change
    remove_column :topics, :last_poster_id, :integer
  end
end
