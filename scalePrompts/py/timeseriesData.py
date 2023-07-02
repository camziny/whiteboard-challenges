import pandas as pd
import numpy as np
import networkx as nx

# Load the stock timeseries data
df = pd.read_csv("stock_data.csv")

# Create a list of equities
equities = df["equity"].tolist()

# Create a list of indices
indices = df["index"].tolist()

# Create a graph
G = nx.Graph()

# Add nodes to the graph
for equity in equities:
    G.add_node(equity)

# Add edges to the graph
for index in indices:
    for equity in equities:
        if equity in index:
            G.add_edge(equity, index)

# Create a timeseries of graphs
graphs = []
for i in range(len(df)):
    graphs.append(G)

# Save the graph timeseries data
np.save("graph_data.npy", graphs)
