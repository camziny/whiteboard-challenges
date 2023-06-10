import requests
import json


def register_user(google_user_id, zoom_api_key, zoom_api_secret):
    zoom_url = "https://api.zoom.us/v2/users"
    headers = {
        "Authorization": "Bearer " + zoom_api_key,
    }
    data = {
        "email": google_user_id + "@example.com",
        "first_name": "John",
        "last_name": "Doe",
    }
    response = requests.post(zoom_url, headers=headers, data=json.dumps(data))
    if response.status_code == 200:
        return json.loads(response.content)["id"]
    else:
        raise Exception("Failed to register user with Zoom")


def main():
    google_user_id = "johndoe@example.com"
    zoom_api_key = "1234567890abcdef"
    zoom_api_secret = "abcdef1234567890"

    zoom_user_id = register_user(google_user_id, zoom_api_key, zoom_api_secret)
    print("Successfully registered user with Zoom: " + zoom_user_id)


if __name__ == "__main__":
    main()
