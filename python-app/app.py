import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

node_server_url = "http://localhost:3000/pong"

@app.route('/ping', methods=['POST'])
def ping():
    data = request.get_json()
    count = data.get('count', 1)
    if count <= 0:
        return jsonify({"message": "Ping-Pong completo!"})
    
    print(f"Recebi Pong {count} de aplicacao node")
    next_count = count - 1

    response = requests.post(node_server_url, json={"count": next_count})
    return jsonify({"message": f"Ping {count} enviado para aplicacao node", "node_response": response.json()})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
