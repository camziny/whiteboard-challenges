def ask(prompt: str, type: Type):
    while True:
        try:
            response = input(prompt)
            return type(response)
        except ValueError:
            print("Invalid input, please try again.")


def can_purchase_alcohol_in_uk() -> bool:
    percieved_age = ask("How old does the person seem to be?", float)

    if percieved_age > 25:
        return True

    actual_age = ask("Age according to photographic ID?", float)

    return actual_age >= 18


def can_claim_cyprus_tax_residency() -> bool:
    year = ask("What year are you claiming residency for?", int)

    if year < 2017:
        days_in_cyprus = ask("How many days did you spend in Cyprus in that year?", int)

        return days_in_cyprus > 183

    else:
        days_in_cyprus = ask("How many days did you spend in Cyprus in that year?", int)
        days_in_other_countries = ask(
            "How many days did you spend in other countries in that year?", int
        )

        return (
            days_in_cyprus >= 60
            and days_in_other_countries <= 183
            and ask("Do you carry out any business in Cyprus?", bool)
            and ask("Are you employed in Cyprus?", bool)
            and ask(
                "Do you hold an office (director) of a company tax resident in Cyprus?",
                bool,
            )
            and ask(
                "Do you maintain a permanent residential property in Cyprus that is either owned or rented by you?",
                bool,
            )
        )


if __name__ == "__main__":
    print("Welcome to the Cyprus Tax Residency CLI!")

    while True:
        action = ask(
            "What would you like to do? (1) Check if you can purchase alcohol in the UK, (2) Check if you can claim Cyprus tax residency, or (3) Quit",
            int,
        )

        if action == 1:
            print(can_purchase_alcohol_in_uk())

        elif action == 2:
            print(can_claim_cyprus_tax_residency())

        elif action == 3:
            break

        else:
            print("Invalid input, please try again.")

    print("Goodbye!")
