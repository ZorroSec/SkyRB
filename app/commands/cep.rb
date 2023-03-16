require 'rest-client'
require 'json'
require_relative 'back.rb'
def cep
    print "CEP > "
    cep = gets.chomp
    req = "https://viacep.com.br/ws/#{cep}/json/"
    r = RestClient.get "#{req}"
    ret = JSON.parse(r.body)
    ret.each do |key, value|
        puts "#{key} => #{value}"
    end
    back()
end