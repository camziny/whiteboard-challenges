import pandas as pd

# Read the commodity prices data from the CSV file
df = pd.read_csv("commodity_prices.csv")

# Convert the "Date" column to a datetime object
df["Date"] = pd.to_datetime(df["Date"], utc=True)

# Get the price of US Sugar on June 1st and June 2nd
us_sugar_price_june_1 = df[df["Date"] == "2023-06-01"]["US Sugar"].to_numpy()[0]
us_sugar_price_june_2 = df[df["Date"] == "2023-06-02"]["US Sugar"].to_numpy()[0]

# Calculate the percentage change in price
percentage_change = (
    (us_sugar_price_june_2 - us_sugar_price_june_1) / us_sugar_price_june_1 * 100
)

# Print the percentage change
print(
    f"The percentage change in the price of US Sugar from June 1st to June 2nd is {percentage_change:.2f}%."
)
