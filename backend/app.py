from flask import Flask, jsonify
from flask_cors import CORS
import time
import datetime
import requests

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from Flask route /api/data !"})

# https://api.agify.io/?name=meelad
@app.route('/agify/<name>')
def get_agify(name):
    print(f"Getting agify for {name}")
    url = "https://api.agify.io/"
    params = {'name': name}
    response = requests.get(url=url, params=params)
    if response.status_code == 200 and 'age' in response.json():
        print(response.json())
        return jsonify({
            # "message": f"The expected age of someone named {name} is {response.json()['age']} years.",
            'name': name,
            'age': response.json()['age'],
            'count': response.json()['count']
        })
    else:
        return jsonify({"message": "Something went wrong!"})

# Generally speaking, for any backend framework you choose (including those based on Java),
# we recommend covering the following topics:
# -   Routing (setting up HTTP routes)
# -   Variables/route params
# -   HTTP Methods (GET and POST)
# -   API Responses (how to format an API response and test it)
# -   APIs requests/responses using JSON
@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

@app.route('/time')
def get_current_time():
    return {'time': datetime.datetime.now().astimezone().isoformat()}

# Create route /foo/bar
# which hits some public rest API foo
# and passes query bar
# processes the response and shows it using React UI

if __name__ == '__main__':
    app.run(debug=True)
