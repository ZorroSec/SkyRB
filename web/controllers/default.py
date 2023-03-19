from flask import render_template, request, url_for, redirect
from app import app
import requests
import sys

@app.route('/', methods=['GET', 'POST'])
def index():
    return redirect('/home')

@app.route('/home', methods=['GET', 'POST'])
def homepage():
    return render_template('index.html')

@app.route('/cep', methods=['GET','POST'])
def cep():
    return render_template('cep.html')

@app.route('/ip', methods=['GET', 'POST'])
def ip():
    return render_template('ip.html')

@app.route('/cnpj', methods=['GET', 'POST'])
def cnpj():
    return render_template('cnpj.html')

@app.route('/ddd', methods=['GET', 'POST'])
def ddd():
    return render_template('ddd.html')

@app.route('/localidade', methods=['GET', 'POST'])
def localidades():
    return render_template('localidade.html')