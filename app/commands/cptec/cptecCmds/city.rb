require 'rest-client'
require 'json'
require_relative '../../back.rb'
def cityName
	print 'CITY > '
	city = gets.chomp
	req = RestClient.get "https://brasilapi.com.br/api/cptec/v1/cidade/#{city}"
	ret = JSON.parse(req.body)
	ret.each do |key,value|
		puts "#{key} => #{value}"
	end
	back()
end