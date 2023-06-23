import subprocess
import re


def check_network_issues(pod_name):
    """Check for network related issues in the pod logs.

    Args:
      pod_name: The name of the pod to check.

    Returns:
      A boolean indicating whether or not any network related issues were found.
    """

    pod_logs = subprocess.check_output(["kubectl", "logs", pod_name])
    network_issues = re.findall(r"(Error|Failure): Network (.*)", pod_logs)

    return len(network_issues) > 0


def check_sftp_issues(pod_name):
    """Check for SFTP related issues in the pod logs.

    Args:
      pod_name: The name of the pod to check.

    Returns:
      A boolean indicating whether or not any SFTP related issues were found.
    """

    pod_logs = subprocess.check_output(["kubectl", "logs", pod_name])
    sftp_issues = re.findall(r"(Error|Failure): SFTP (.*)", pod_logs)

    return len(sftp_issues) > 0


if __name__ == "__main__":
    pod_name = input("Enter the name of the pod to check: ")

    network_issues = check_network_issues(pod_name)
    sftp_issues = check_sftp_issues(pod_name)

    if network_issues or sftp_issues:
        print("There are network or SFTP issues in the pod logs.")
    else:
        print("There are no network or SFTP issues in the pod logs.")
