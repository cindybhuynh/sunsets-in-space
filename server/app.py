from flask import Flask, jsonify
from flask_cors import CORS # Essential for connecting to your frontend!
from datetime import datetime
import time
import os

app = Flask(__name__, static_folder="../client", static_url_path="/")
CORS(app) # Enables your frontend to make requests

@app.route('/')
def serve_index():
    return app.send_static_file("index.html") #for frontend

@app.route('/api/theme')
def get_theme():
    current_hour = datetime.now().hour
    #determine theme based on time
    if 6 <= current_hour < 18:
        theme = "day"
    else:
        theme = "night"
    
    return jsonify({"theme": theme})

if __name__ == '__main__':
    # Use a non-default port to avoid conflicts
    app.run(debug=True, port=5000)