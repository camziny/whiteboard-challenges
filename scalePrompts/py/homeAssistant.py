import asyncio
import asyncws


async def main():
    # Connect to the WebSocket API
    ws = await asyncws.connect("ws://localhost:8123/api/websocket")

    # Authenticate with the Home Assistant server
    await ws.send(
        {"type": "auth", "username": "YOUR_USERNAME", "password": "YOUR_PASSWORD"}
    )

    # Listen for state changes
    while True:
        message = await ws.recv()

        # If the message is a state change, print the new state
        if message["type"] == "event" and message["event"] == "state_changed":
            print(message["data"]["state"])


if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    loop.run_until_complete(main())
