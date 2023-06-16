import PyPDF2

# Open the PDF file
pdf_file = open("scientific_article.pdf", "rb")

# Extract the text from the PDF file
pdf_reader = PyPDF2.PdfFileReader(pdf_file)
text = pdf_reader.extract_text()

# Split the text into a list of words
words = text.split()

# Remove any duplicate words from the list
unique_words = set(words)

# Save the list of words to a file
with open("word_bank.txt", "w") as f:
    for word in unique_words:
        f.write(word + "\n")
