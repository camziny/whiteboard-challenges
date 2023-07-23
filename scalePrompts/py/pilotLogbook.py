import blockchain
import datetime


class PilotLogbook:
    def __init__(self):
        self.blockchain = blockchain.Blockchain()

    def add_flight(self, aircraft_type, date, time, hours, minutes):
        flight = {
            "aircraft_type": aircraft_type,
            "date": date,
            "time": time,
            "hours": hours,
            "minutes": minutes,
        }
        block = blockchain.Block(flight)
        self.blockchain.add_block(block)

    def get_currency_and_training_status(self):
        currency_and_training_status = {}
        for block in self.blockchain.blocks:
            flight = block.data
            hours = flight["hours"] + (flight["minutes"] / 60)
            currency_and_training_status[flight["aircraft_type"]] = hours
        return currency_and_training_status


def main():
    logbook = PilotLogbook()
    logbook.add_flight(
        "Cessna 172", datetime.date.today(), datetime.time(12, 00), 1, 00
    )
    logbook.add_flight(
        "Boeing 737", datetime.date.today(), datetime.time(14, 00), 2, 00
    )
    print(logbook.get_currency_and_training_status())


if __name__ == "__main__":
    main()
