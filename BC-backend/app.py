from flask import Flask, jsonify, request, session, g, redirect, url_for
from flask_cors import CORS
import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

secret_key = os.getenv("SECRET_KEY")
supabase_url = os.getenv("SUPABASE_URL")

app = Flask(__name__)
CORS(app, origins="http://localhost:3000")

supabase: Client = create_client(str(supabase_url), str(secret_key))

@app.route('/')
def home():
    return "Welcome to Flask with Docker! This is the backend api route."

@app.route('/data')
def data():
    try:
        response = (
            supabase.table("books")
            .select("*")
            .execute()
        )

        return(jsonify({"status": "success", "response": response.data}))

    except Exception as e:
        app.logger.error(f"Exception occured in request {e}")
        return(jsonify({"status": "failure", "error": "An unexpected error occured"}))

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)