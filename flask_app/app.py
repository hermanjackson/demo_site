from flask import Flask 

import os
from flask import Flask, request, jsonify, url_for, send_from_directory
from flask_migrate import Migrate

from flask_cors import CORS

from src.models import db
from src.routes import api

#from models import Person




app = Flask(__name__)
# database condiguration

app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:////tmp/test.db"

app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
MIGRATE = Migrate(app, db)
db.init_app(app)

# Allow CORS requests to this API
CORS(app)

# add the admin


# Add all endpoints form the API with a "api" prefix
app.register_blueprint(api, url_prefix='/api')







@app.route('/')
def index():
    return "hello"

if __name__== '__main__':
    app.run()