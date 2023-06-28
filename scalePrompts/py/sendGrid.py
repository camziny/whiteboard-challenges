import requests

# Replace with your SendGrid API key
SENDGRID_API_KEY = "YOUR_SENDGRID_API_KEY"

# Replace with the email address you want to check
to_address = "recipient@example.com"

# Replace with the subject of the email you want to check
subject = "Your email subject"

# SendGrid API endpoint for retrieving email activity
url = "https://api.sendgrid.com/v3/messages"

# Set the query parameters for filtering the email
params = {"query": f'to_email={to_address} AND subject="{subject}"', "limit": 1}

# Set the headers with the SendGrid API key
headers = {"Authorization": f"Bearer {SENDGRID_API_KEY}"}

# Make the API call to SendGrid
response = requests.get(url, params=params, headers=headers)

# Check the response status code
if response.status_code == 200:
    # Extract the email data from the response
    email_data = response.json()

    # Check if any emails match the query
    if email_data["result_count"] > 0:
        # Get the first email from the results
        email = email_data["messages"][0]

        # Check the delivery status of the email
        if email["status"] == "delivered":
            print("Email delivered successfully!")
        else:
            print("Email not delivered.")
    else:
        print("No matching emails found.")
else:
    print("Error occurred while making the API call:", response.text)
