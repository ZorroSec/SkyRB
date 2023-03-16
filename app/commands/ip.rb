require 'rest-client'
require 'json'
require_relative 'app/commands/back.rb'
def ip
    print 'IP > '
    ip = gets.chomp
    r = RestClient.get "http://ip-api.com/json/#{ip}"
    json = JSON.parse(r.body)
    json.each do |key, value|
        puts "#{key} => #{value}"
    end
    back()
end
