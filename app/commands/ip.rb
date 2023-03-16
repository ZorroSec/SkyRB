require 'rest-client'
require 'json'

def ip
    print 'IP > '
    ip = gets.chomp
    r = RestClient.get "http://ip-api.com/json/#{ip}"
    json = JSON.parse(r.body)
    json.each do |key, value|
        puts "#{key} => #{value}"
    end
end
