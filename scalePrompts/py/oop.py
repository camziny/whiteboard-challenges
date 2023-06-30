class Account:
    def __init__(self, account_number, balance):
        self.account_number = account_number
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount

    def withdraw(self, amount):
        if amount <= self.balance:
            self.balance -= amount
        else:
            print("Insufficient funds!")

    def get_balance(self):
        return self.balance


class Bank:
    def __init__(self):
        self.accounts = []

    def create_account(self, account_number, initial_balance):
        new_account = Account(account_number, initial_balance)
        self.accounts.append(new_account)

    def get_account_balance(self, account_number):
        for account in self.accounts:
            if account.account_number == account_number:
                return account.get_balance()
        print("Account not found!")


bank = Bank()
bank.create_account("123456789", 1000)
bank.create_account("987654321", 500)

bank.get_account_balance("123456789")  # Output: 1000
bank.get_account_balance("987654321")  # Output: 500

account = bank.accounts[0]
account.deposit(500)
