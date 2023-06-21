import pandas as pd
import numpy as np
from sklearn.cluster import KMeans

# Load the data
data = pd.read_csv("prime_ministers_eu.csv")

# Create the feature matrix
X = data[["age", "hometown", "full_name", "years_in_service", "marital_status"]]

# Normalize the data
X = (X - X.mean()) / X.std()

# Choose the number of clusters
k = 5

# Train the KMeans model
model = KMeans(n_clusters=k, random_state=0)
model.fit(X)

# Print the cluster labels
labels = model.labels_

# Print the cluster centroids
centroids = model.cluster_centers_

# Print the results
print("The number of clusters:", k)
print("The cluster labels:", labels)
print("The cluster centroids:", centroids)
