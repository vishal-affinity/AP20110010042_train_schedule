from flask import Flask, jsonify

app = Flask(__name__)

# Sample train data (replace with your actual data)
trains = [
    {
        "trainName": "Delhi Door Hai Exp",
        "trainNumber": "2344",
        "departureTime": {
            "Hours": 9,
            "Minutes": 45,
            "Seconds": 0
        },
        "delayedBy": 3,
        "price": {
            "sleeper": 1,
            "AC": 723
        },
        "seatsAvailable": {
            "sleeper": 32,
            "AC": 1
        }
    },
    {
        "trainName": "Nau Do Gyarah Exp",
        "trainNumber": "2345",
        "departureTime": {
            "Hours": 9,
            "Minutes": 55,
            "Seconds": 0
        },
        "delayedBy": 5,
        "price": {
            "sleeper": 1,
            "AC": 753
        },
        "seatsAvailable": {
            "sleeper": 32,
            "AC": 1
        }
    },
    {
        "trainName": "Ara Jeela Exp",
        "trainNumber": "2544",
        "departureTime": {
            "Hours": 10,
            "Minutes": 45,
            "Seconds": 0
        },
        "delayedBy": 10,
        "price": {
            "sleeper": 1,
            "AC": 823
        },
        "seatsAvailable": {
            "sleeper": 32,
            "AC": 1
        }
    },
    {
        "trainName": "Sapna Exp",
        "trainNumber": "2364",
        "departureTime": {
            "Hours": 10,
            "Minutes": 55,
            "Seconds": 0
        },
        "delayedBy": 30,
        "price": {
            "sleeper": 1,
            "AC": 623
        },
        "seatsAvailable": {
            "sleeper": 32,
            "AC": 1
        }
    }
]


@app.route('/api/trains', methods=['GET'])
def get_all_trains():
    return jsonify(trains)

@app.route('/api/train/<int:train_id>', methods=['GET'])
def get_single_train(train_id):
    if(train_id<=len(trains)):
        train = trains[train_id-1]
        if train:
            return jsonify(train)
    else:
        return jsonify({"error": "Train not found"}), 404



if __name__ == '__main__':
    app.run(debug=True)
