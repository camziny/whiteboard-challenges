import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv("data.csv")

df.plot(x="Date", y="Value", kind="line", figsize=(10, 6))
plt.title("Line Chart")
plt.show()

df.plot(x="Category", y="Value", kind="bar", figsize=(10, 6))
plt.title("Bar Chart")
plt.show()


df.plot(x="X", y="Y", kind="scatter", figsize=(10, 6))
plt.title("Scatter Plot")
plt.show()
