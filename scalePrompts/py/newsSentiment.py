import backtrader as bt
import alpaca_trade_api as tradeapi
import pandas as pd


class NewsSentimentStrategy(bt.Strategy):
    def __init__(self):
        super().__init__()

        # Initialize the sentiment analysis model
        self.sentiment_model = SentimentModel()

        # Create a list to store the news sentiment scores for each day
        self.news_sentiment_scores = []

    def on_data(self, data):
        # Get the news sentiment score for the current day
        news_sentiment_score = self.sentiment_model.predict(data.datetime)

        # Add the news sentiment score to the list
        self.news_sentiment_scores.append(news_sentiment_score)

    def next(self):
        # Get the current price of the stock
        current_price = data.close

        # If the news sentiment score is positive, buy 100 shares of the stock
        if self.news_sentiment_scores[-1] > 0:
            self.order(symbol="AAPL", qty=100, side="buy")

        # If the news sentiment score is negative, sell 100 shares of the stock
        elif self.news_sentiment_scores[-1] < 0:
            self.order(symbol="AAPL", qty=100, side="sell")

        # Do nothing if the news sentiment score is neutral
        else:
            pass


if __name__ == "__main__":
    # Initialize the Backtrader engine
    engine = bt.Backtrader()

    # Initialize the Alpaca API client
    api = tradeapi.REST("YOUR_API_KEY", "YOUR_SECRET_KEY", "https://api.alpaca.markets")

    # Get the historical data for AAPL
    data = api.get_historical_data("AAPL", start="2023-01-01", end="2023-06-30")

    # Create a DataFrame from the Alpaca data
    df = pd.DataFrame(data)

    # Initialize the NewsSentimentStrategy
    strategy = NewsSentimentStrategy()

    # Backtest the strategy
    engine.run(data=df, strategy=strategy)
