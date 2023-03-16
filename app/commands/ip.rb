require 'rest-client'
require 'json'
require_relative 'back.rb'
def ip
    print 'IP > '
    ip = gets.chomp
    api = "http://ip-api.com/json/#{ip}"
    r = RestClient.get "#{api}"
    ret = JSON.parse(r.body)
    ret.each do |key, value|
        puts "#{key} => #{value}"
    end
    back()
end
