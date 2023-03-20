require 'rest-client'
require 'json'
require_relative '../back.rb'
def menuCptec
	menu = "
	l---------------------------l
	l     [ 01 ] City           l
	l     [ 02 ] CLima          l
	l---------------------------l
	>>> "
	print menu
	opc = gets.chomp.to_i
end
