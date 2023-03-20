require 'rest-client'
require 'json'
require_relative 'back.rb'
def cepv2
	print 'CEP > '
	cep2 = gets.chomp
	req = RestClient.get "https://brasilapi.com.br/api/cep/v2/#{cep2}"
	ret = JSON.parse(req.body)
	ret.each do |key,value|
		puts "#{key} => #{value}"
	end
	back()
end