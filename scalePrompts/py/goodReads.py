import csv
import openlibrary

# Read your exported Goodreads data
with open("goodreads.csv", "r") as f:
    reader = csv.reader(f)
    books = []
    for row in reader:
        books.append({"title": row[0], "author": row[1], "isbn": row[2]})

# Check if the books are in the Open Library database
for book in books:
    if not openlibrary.book_exists(book["isbn"]):
        # Import the book to the Open Library database
        openlibrary.add_book(book["title"], book["author"], book["isbn"])
