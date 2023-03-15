require_relative 'app/commands/cep.rb'
require_relative 'app/menu/menu.rb'
require 'rest-client'
require 'json'

name = gets('NAME > ')
password = gets('PPASSWORD > ')
if password == '1234'
    return { message => 'sucess' }
else
    return { message => 'not found'}
end