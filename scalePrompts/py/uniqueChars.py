def is_unique(string):
    """Returns 1 if the string has all unique characters, else returns 0."""
    seen = set()
    for char in string:
        if char in seen:
            return 0
        else:
            seen.add(char)
    return 1


def main():
    """Prompts the user to enter a string and prints whether it has all unique characters."""
    string = input("Enter the string: ")
    if is_unique(string):
        print("The string has all unique characters")
    else:
        print("The string does not have all unique characters")


if __name__ == "__main__":
    main()
