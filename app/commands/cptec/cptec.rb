require 'rest-client'
require 'json'
require_relative '../back.rb'
require_relative 'cptec/city.rb'
require_relative 'cptec/clima.rb'
def menuCptec
	menu = "
	l---------------------------l
	l     [ 01 ] City           l
	l     [ 02 ] CLima          l
	l---------------------------l
	>>> "
	print menu
	opc = gets.chomp.to_i
	if opc == 1
		system ('cls||clear')
		cityName()
	end
	if opc == 2
		system ('cls||clear')
		clima()
	end
end
