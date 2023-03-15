require 'rest-client'
require 'json'

def cep
    req = "https://viacep.com.br/ws/01001000/json/"
    r = RestClient.get "#{req}"
    ret = JSON.parse(r.body)
    ret.each do |key, value|
        puts "#{key} => #{value}"
    end
end