from flask import Flask, request, jsonify, url_for, Blueprint
from src.models import db, User


api = Blueprint('api', __name__)


@api.route('/user', methods=['POST'])
def create_user():
    body= request.get_json()
    user = User(email=body["email"], password=body["password"],is_active=True)

    db.session.add(user)
    db.session.commit()

    return jsonify("success"), 200
