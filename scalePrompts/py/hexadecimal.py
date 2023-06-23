def convert_to_hex(number):
    hex_digits = "0123456789ABCDEF"
    result = ""
    while number > 0:
        result = hex_digits[number % 16] + result
        number //= 16

    return "0x" + result


if __name__ == "__main__":
    number = int(input("Enter a number: "))
    print(f"The hexadecimal representation of {number} is {convert_to_hex(number)}")
