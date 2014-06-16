class AddColumnToTopic < ActiveRecord::Migration
  def change
    add_column :topics, :last_poster_name, :string
  end
end
