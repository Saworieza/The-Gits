class User < ActiveRecord::Base
	has_many :topics
	has_many :posts

	def self.authenticate(username, password)
		user = find_by_username_and_password(username, password)
	end
end
