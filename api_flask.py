from flask import Flask, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world() :
  return 'Alô Mundão'

@app.route('/palavraSecreta')
def palavraSecreta() :
  palavras = [
    { 'nome': 'Gato'},
    { 'nome': 'Tigre'},
    { 'nome': 'Onça'},
    { 'nome': 'Leopardo'},
    { 'nome': 'Leão'},
  ]
  palavra = palavras[random.randint(0, len(palavras) - 1)]
  return jsonify(palavra)

if __name__ == '__main__':
  app.run(debug=True)