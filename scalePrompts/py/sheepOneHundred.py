import subprocess


def run_shell_command(command):
    """Runs a shell command in the background.

    Args:
      command: The shell command to run.

    Returns:
      The process object for the running command.
    """
    process = subprocess.Popen(
        command, shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL
    )
    return process


if __name__ == "__main__":
    process = run_shell_command("sleep 100")
    print("The command 'sleep 100' is running in the background.")
