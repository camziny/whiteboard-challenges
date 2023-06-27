import pandas as pd
import pickle

# Save a DataFrame to a pickle file
df = pd.DataFrame({"Name": ["John Doe", "Jane Doe", "John Smith"], "Age": [30, 25, 40]})
df.to_pickle("df.pkl")

# Read the pickle file
df_loaded = pd.read_pickle("df.pkl")

# Print the DataFrame
print(df_loaded)
