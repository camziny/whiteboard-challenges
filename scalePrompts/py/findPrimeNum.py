def is_prime(number):
    """
    Checks if a number is prime.

    Args:
      number: The number to check.

    Returns:
      True if the number is prime, False otherwise.
    """

    if number <= 1:
        return False

    for i in range(2, int(number**0.5) + 1):
        if number % i == 0:
            return False

    return True


def main():
    number = int(input("Enter a number: "))

    if is_prime(number):
        print(f"{number} is a prime number.")
    else:
        print(f"{number} is not a prime number.")


if __name__ == "__main__":
    main()
