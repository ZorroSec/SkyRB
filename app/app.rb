require_relative 'commands/cep.rb'
require_relative 'menu/menu.rb'
require_relative 'commands/ip.rb'
require_relative 'commands/back.rb'
require_relative 'commands/cepV2.rb'
require_relative 'commands/cnpj.rb'
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
# system ('cls')
while true
    menu()
    op = gets.chomp.to_i
    if op == 1
        system ('cls||clear')
        cep()
    end
    if op == 2
        system ('cls||clear')
        ip()
    end
    if op == 3
        system ('cls||clear')
        cnpj()
    end
    if op == 4
        system ('cls||clear')
        cepv2()
    end
end