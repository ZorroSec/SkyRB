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