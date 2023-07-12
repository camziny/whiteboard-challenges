import os
import requests


def send_email(email_template_id, email_subject, email_body, email_to_addresses):
    """Sends an email based on an email template in Dynamics 365 Customer Engagement.

    Args:
        email_template_id (str): The ID of the email template.
        email_subject (str): The subject of the email.
        email_body (str): The body of the email.
        email_to_addresses (list): A list of email addresses to send the email to.

    Returns:
        None
    """

    url = (
        "https://your-crm-instance.crm.dynamics.com/api/data/v9.0/email/templates/%s/send"
        % email_template_id
    )
    payload = {"subject": email_subject, "body": email_body, "to": email_to_addresses}

    response = requests.post(url, json=payload)

    if response.status_code == 200:
        print("Email sent successfully.")
    else:
        print("Error sending email.")


def main():
    """Main function."""

    email_template_id = "your-email-template-id"
    email_subject = "This is an email from Azure Webjob."
    email_body = "This is the body of the email."
    email_to_addresses = ["your-email-address@example.com"]

    send_email(email_template_id, email_subject, email_body, email_to_addresses)


if __name__ == "__main__":
    main()
