import subprocess


def ping(hostname):
    """
    Pings a hostname and returns the response code.

    Args:
      hostname: The hostname to ping.

    Returns:
      The response code from the ping command.
    """
    command = ["ping", "-c", "1", hostname]
    response = subprocess.run(
        command, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
    )
    return response.returncode


if __name__ == "__main__":
    hostname = "google.com"
    response_code = ping(hostname)
    if response_code == 0:
        print(f"{hostname} is up!")
    else:
        print(f"{hostname} is down!")
