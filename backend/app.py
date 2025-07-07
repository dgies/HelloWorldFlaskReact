from flask import Flask, jsonify
from flask_cors import CORS
import time
import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api/data')
def get_data():
    return jsonify({"message": "Hello from Flask route /api/data !"})

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
