from flask import Flask, jsonify, request, session, g, redirect, url_for
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

@app.route('/')
def home():
    return "Welcome to Flask with Docker! This is the backend api route."

@app.route('/this is a data route', methods=['GET'])
def accept_friend_request():
    
    return(jsonify({'data': 1}))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)