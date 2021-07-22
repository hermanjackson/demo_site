from flask import Flask, request, jsonify, url_for, Blueprint
from src.models import db, User
from flask_admin.contrib.sqla import ModelView



api = Blueprint('api', __name__)


@api.route('/User', methods=['POST'])
def create_user():
    body= request.get_json()
    user = User(email=body["email"], password=body["password"],is_active=True)

   
    return jsonify("success"), 200
