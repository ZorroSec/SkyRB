require 'rest-client'
require 'json'
require_relative '../../back.rb'
def clima
	print 'CITY CODE > '
	code = gets.chomp
	req = RestClient.get "https://brasilapi.com.br/api/cptec/v1/clima/previsao/#{code}"
	ret = JSON.parse(req.body)
	ret.each do |key,value|
		puts "#{key} => #{value}"
	end
	back()
end