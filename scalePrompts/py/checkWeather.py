import requests
import json

# Enter your API key here.
api_key = "Your_API_Key"

# Get the city name from the user.
city_name = input("Enter city name: ")

# Create the base URL.
base_url = "https://api.openweathermap.org/data/2.5/weather?"

# Complete the URL with the API key and city name.
complete_url = base_url + "appid=" + api_key + "&q=" + city_name

# Make the request.
response = requests.get(complete_url)

# Check the response status code.
if response.status_code == 200:
    # The request was successful, so parse the JSON response.
    weather_data = json.loads(response.content)

    # Print the weather information.
    print(
        "The weather in {} is {} degrees Celsius and {}% humidity.".format(
            weather_data["name"],
            weather_data["main"]["temp"],
            weather_data["main"]["humidity"],
        )
    )

else:
    # The request failed, so print an error message.
    print("Error getting weather data: {}".format(response.status_code))
