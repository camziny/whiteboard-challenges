def calculateOptimalRoute(addresses):
    gmaps = googlemaps.Client(gmaps_key)

    # Request driving directions
    directions_result = gmaps.directions(addresses[0], addresses[-1], mode="driving")

    optimized_addresses = []
    for step in directions_result[0]["legs"][0]["steps"]:
        optimized_addresses.append(step["start_location"]["address"])

    return optimized_addresses


def getAddressList(file_name="./address_list.txt"):
    try:
        with open(file_name, "r") as file:
            lines = file.readlines()
        # Remove newline characters and ignore lines starting with '#'
        lines = [line.rstrip("\n") for line in lines if not line.startswith("#")]
        return lines
    except FileNotFoundError:
        print(f"File {file_name} not found.")
        return []


def getBasicInfo(address):
    pass


def generateWorksheet():
    addresses = getAddressList()
    addresses = calculateOptimalRoute(addresses)

    # Load credentials from the 'google_credentials.json' file
    creds = service_account.Credentials.from_service_account_file(
        "google_credentials.json"
    )

    # Build the service
    service = build("keep", "v1", credentials=creds)

    # Define the note
    note = {
        "title": "Listing Preview - " + datetime.now().strftime("%Y-%m-%d"),
        "body": {"text": {"text": "\n\n".join(addresses)}},
    }

    # Create the note
    try:
        result = service.notes().create(body=note).execute()
        print("Created note with ID: {0}".format(result.get("id")))
    except HttpError as error:
        print("An error occurred: {0}".format(error))
