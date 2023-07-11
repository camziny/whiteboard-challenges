import backtrader as bt
import pandas as pd

# Set the Alpaca API key and secret
API_KEY = "YOUR_API_KEY"
API_SECRET = "YOUR_API_SECRET"

# Create a data feed
data = bt.feeds.AlpacaStore(
    symbol="AAPL",
    start="2022-01-01",
    end="2023-06-30",
    historical=True,
    api_key=API_KEY,
    api_secret=API_SECRET,
)

# Create a strategy
class MyStrategy(bt.Strategy):

    def __init__(self):
        # Initialize variables
        self.position = None

    def next(self):
        # Check if we are in a position
        if self.position is not None:
            # Check if we should close the position
            if self.position.is_long and data.close[0] < self.sma[0]:
                self.close()
            elif self.position.is_short and data.close[0] > self.sma[0]:
                self.close()

        # Check if we should open a position
        if self.position is None:
            if data.close[0] > self.sma[0]:
                self.buy()
            elif data.close[0] < self.sma[0]:
                self.short()

        # Update the SMA
        self.sma = bt.indicators.SimpleMovingAverage(
            data=data.close, period=10
        )

# Create a backtest
cerebro = bt.Cerebro()
cerebro.adddata(data)
cerebro.addstrategy(MyStrategy)

# Run the backtest
cerebro.run()

# Print the results
print(cerebro.results)
