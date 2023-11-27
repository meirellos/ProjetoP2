from flask import Flask, jsonify, request
from flask_pymongo import PyMongo
from bson import json_util, ObjectId
from bson.errors import InvalidId
from flask_cors import CORS 

app = Flask(__name__)
app.config['MONGO_URI'] = 'mongodb://localhost:27017/pizzariaexagerada'
mongo = PyMongo(app)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

@app.route('/')
def rota_padrao():
    return 'Bem-vindo à página inicial!'

@app.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    senha = data.get('senha')
    user = mongo.db.users.find_one({'username': username, 'senha': senha})
    if user:
        return jsonify({'message': 'Login efetuado com sucesso'}), 200
    else:
        return jsonify({'message': 'Credenciais inválidas'}), 401
    
@app.route('/api/admin', methods=['POST'])
def login_admin():
    data = request.get_json()
    username = data['username']
    senha = data['senha']
    user = mongo.db.adminusers.find_one({'username': username, 'senha': senha})
    if user:
        return jsonify({'message': 'Login efetuado com sucesso'}), 200
    else:
        return jsonify({'message': 'Credenciais inválidas'}), 401
    
@app.route('/api/produtos', methods=['GET'])
def get_produtos():
    produtos_cursor = mongo.db.products.find()
    produtos = list(produtos_cursor)
    json_produtos = json_util.dumps(produtos)
    return json_produtos, 200, {'Content-Type': 'application/json'}

@app.route('/api/produtos', methods=['POST'])
def cadastrar_produto():
    data = request.get_json()
    if 'product_name' not in data or 'product_desc' not in data or 'product_price' not in data:
        return jsonify({'message': 'Por favor, preencha todos os campos.'}), 400
    produto = {
        'product_name': data['product_name'],
        'product_desc': data['product_desc'],
        'product_price': data['product_price'],
        'product_img': data['product_img']
    }
    produto_inserido = mongo.db.products.insert_one(produto)
    return jsonify({'message': 'Produto cadastrado com sucesso: ', 'product_id': str(produto_inserido.inserted_id)}), 201

@app.route('/api/produtos/<string:product_id>', methods=['PUT'])
def alterar_produto(product_id):
    data = request.get_json()
    if 'product_name' not in data or 'product_desc' not in data or 'product_price' not in data:
        return jsonify({'message': 'Por favor, preencha todos os campos.'}), 400
    produto_atualizado = {
        'product_name': data['product_name'],
        'product_desc': data['product_desc'],
        'product_price': data['product_price'],
        'product_img': data['product_img']
    }
    mongo.db.products.update_one({'_id': ObjectId(product_id)}, {'$set': produto_atualizado})
    return jsonify({'message': 'Produto alterado com sucesso'}), 200

@app.route('/api/produtos/<string:product_id>', methods=['GET'])
def produto_por_id(product_id):
    try:
        produto = mongo.db.products.find_one({'_id': ObjectId(product_id)})
        if produto:
            produto['_id'] = str(produto['_id'])
            return jsonify(produto), 200
        else:
            return jsonify({'message': 'Produto não encontrado na base'}), 404
    except InvalidId:
        return jsonify({'message': 'ID de produto inválido'}), 400
       

@app.route('/api/produtos/<string:product_id>', methods=['DELETE'])
def excluir_produto(product_id):
    produto = mongo.db.products.find_one({'_id': ObjectId(product_id)})
    if not produto:
        return jsonify({'message': 'Produto não encontrado na base'}), 404
    mongo.db.products.delete_one({'_id': ObjectId(product_id)})
    return jsonify({'message': 'Produto excluido com sucesso'}), 200

if __name__ == '__main__':
    app.run(debug=True)
