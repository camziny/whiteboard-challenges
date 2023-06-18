import random
import string


def generate_password(length, keyword):
    """Generates a random password of the given length with the given keyword."""

    # Get the most used password.
    most_used_password = get_most_used_password()

    # Generate a random string of the given length.
    password = "".join(
        random.choice(
            string.ascii_lowercase
            + string.ascii_uppercase
            + string.digits
            + string.punctuation
        )
        for _ in range(length)
    )

    # Replace the first occurrence of the keyword with the most used password.
    password = password.replace(keyword, most_used_password)

    return password


def get_most_used_password():
    """Gets the most used password from the password database."""

    # Connect to the database.
    connection = connect_to_database()

    # Get the most used password.
    most_used_password = connection.execute(
        "SELECT password FROM passwords ORDER BY count DESC LIMIT 1"
    ).fetchone()[0]

    # Close the connection.
    connection.close()

    return most_used_password


def connect_to_database():
    """Connects to the password database."""

    # Create a connection to the database.
    connection = sqlite3.connect("passwords.db")

    # Return the connection.
    return connection


if __name__ == "__main__":
    # Get the length of the password.
    length = int(input("Enter the length of the password: "))

    # Get the keyword.
    keyword = input("Enter the keyword: ")

    # Generate the password.
    password = generate_password(length, keyword)

    # Print the password.
    print(password)
