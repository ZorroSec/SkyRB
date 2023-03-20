require  'rest-client'
require 'json'
require_relative 'back.rb'
def cnpj
    print 'CNPJ > '
    cnpj = gets.chomp
    req = RestClient.get "https://brasilapi.com.br/api/cnpj/v1/#{cnpj}"
    ret = JSON.parse(req.body)
    ret.each do |key,value|
        puts "#{key} => #{value}"
    end
    back()
end