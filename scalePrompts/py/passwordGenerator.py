import random

# Define the alphabet
alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+{}[]<>,.?/"

# Get the password length from the user
password_length = int(input("Enter the password length: "))

# Generate the password
password = ""
for i in range(password_length):
    password += random.choice(alphabet)

# Print the password
print("Your password is:", password)
