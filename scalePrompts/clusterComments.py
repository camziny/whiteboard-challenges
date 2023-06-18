import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans

# Load the comments data
comments = pd.read_csv("comments.csv")

# Extract the text from the comments
text = comments["text"]

# Create a TF-IDF vectorizer
vectorizer = TfidfVectorizer()

# Transform the text into TF-IDF vectors
X = vectorizer.fit_transform(text)

# Create a K-Means clustering model
kmeans = KMeans(n_clusters=5)

# Fit the model to the data
kmeans.fit(X)

# Predict the cluster labels for each comment
labels = kmeans.predict(X)

# Print the cluster labels for each comment
comments["cluster"] = labels

# Print the number of comments in each cluster
print(comments["cluster"].value_counts())
