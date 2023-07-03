import requests

def post_data(url, data):
    response = requests.post(url, data=data)
    if response.status_code == 200:
        return response.json()
    else:
        return None

if __name__ == "__main__":
    url = "https://yourorg.crm.dynamics.com/api/data/v9.0/incidents"
    data = {
        "name": "New Incident",
        "description": "This is a new incident.",
        "priority": "High",
    }

    response = post_data(url, data)
    if response is not None:
        print(response)
