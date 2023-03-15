require_relative 'app/commands/cep.rb'
require_relative 'app/menu/menu.rb'
require 'rest-client'
require 'json'

# print 'NAME > '
# name = gets
# print 'PASSWORD > '
# password = gets
# if password == '1234'
#     return password
# else
#     return
# end
while true
    system ('clear')
    menu()
    op = gets.chomp.to_i
    if op == 1
        cep()
    end
end