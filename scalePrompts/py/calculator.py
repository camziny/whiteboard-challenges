def add(num1, num2):
    return num1 + num2


def subtract(num1, num2):
    return num1 - num2


def multiply(num1, num2):
    return num1 * num2


def divide(num1, num2):
    return num1 / num2


while True:
    print("Select operation.")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    operation = input("Select operation(1/2/3/4): ")

    if operation in ("1", "2", "3", "4"):
        num1 = float(input("Enter first number: "))
        num2 = float(input("Enter second number: "))

        if operation == "1":
            print(num1, "+", num2, "=", add(num1, num2))
        elif operation == "2":
            print(num1, "-", num2, "=", subtract(num1, num2))
        elif operation == "3":
            print(num1, "*", num2, "=", multiply(num1, num2))
        else:
            print(num1, "/", num2, "=", divide(num1, num2))

    else:
        print("Invalid input!")

    choice = input("Continue calculation? (Y/N): ")
    if choice == "N":
        break
