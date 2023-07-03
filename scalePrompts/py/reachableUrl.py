import requests


def is_url_reachable(url):
    try:
        response = requests.head(url)
        if response.status_code == 200:
            return True
        else:
            return False
    except Exception as e:
        return False


def main():
    # Get the list of URLs from the file
    with open("urls.txt", "r") as f:
        urls = f.readlines()

    # Check if each URL is reachable
    for url in urls:
        reachable = is_url_reachable(url)
        print(f"{url} is reachable: {reachable}")


if __name__ == "__main__":
    main()
