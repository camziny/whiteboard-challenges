import requests
from bs4 import BeautifulSoup
import re

# Get the Reddit comments
url = "https://www.reddit.com/r/wallstreetbetsdaily/comments/"
response = requests.get(url)
soup = BeautifulSoup(response.content, "html.parser")

# Find all comments that contain a stock symbol
comments = soup.find_all("div", class_="md")
for comment in comments:
    for match in re.finditer(r"\b[A-Z]{2,}\b", comment.text):
        print(match.group())
