import subprocess
import time
import discord

# Get the Discord client
client = discord.Client()


# Get the Debian console output
def get_debian_console_output():
    process = subprocess.Popen(["/bin/bash", "-c", "tail -n 1"], stdout=subprocess.PIPE)
    output = process.communicate()[0].decode("utf-8")
    return output


# Send the Debian console output to Discord DM every 30 minutes
while True:
    time.sleep(1800)
    output = get_debian_console_output()
    client.send_message(discord.Object(id="YOUR_DISCORD_DM_ID"), output)
