import requests
import json


class ReservationSyncer:
    def __init__(
        self, wix_api_key, wix_site_url, airtable_base_url, airtable_table_name
    ):
        self.wix_api_key = wix_api_key
        self.wix_site_url = wix_site_url
        self.airtable_base_url = airtable_base_url
        self.airtable_table_name = airtable_table_name

    def get_reservations(self):
        """
        Gets all reservations from the Wix API.

        Returns:
            A list of reservation objects.
        """
        reservations_url = (
            f"{self.wix_site_url}/reservations/?apiKey={self.wix_api_key}"
        )
        response = requests.get(reservations_url)
        if response.status_code == 200:
            return json.loads(response.content)
        else:
            raise Exception(f"Error getting reservations: {response.status_code}")

    def sync_reservations(self):
        """
        Syncs the reservations from Wix API to Airtable.
        """
        reservations = self.get_reservations()
        for reservation in reservations:
            self.create_airtable_record(reservation)

    def create_airtable_record(self, reservation):
        """
        Creates a record in Airtable for the given reservation.

        Args:
            reservation: A reservation object.
        """
        airtable_record = {
            "Name": reservation["name"],
            "Email": reservation["email"],
            "Date": reservation["date"],
            "Time": reservation["time"],
            "Guests": reservation["guests"],
        }
        airtable_record_url = f"{self.airtable_base_url}/{self.airtable_table_name}/?apiKey={self.wix_api_key}"
        response = requests.post(airtable_record_url, json=airtable_record)
        if response.status_code == 200:
            print(f"Created reservation {reservation['name']} in Airtable.")
        else:
            raise Exception(
                f"Error creating reservation in Airtable: {response.status_code}"
            )


if __name__ == "__main__":
    wix_api_key = "YOUR_WIX_API_KEY"
    wix_site_url = "YOUR_WIX_SITE_URL"
    airtable_base_url = "YOUR_AIRTABLE_BASE_URL"
    airtable_table_name = "YOUR_AIRTABLE_TABLE_NAME"

    syncer = ReservationSyncer(
        wix_api_key, wix_site_url, airtable_base_url, airtable_table_name
    )
    syncer.sync_reservations()
