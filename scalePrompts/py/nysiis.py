import nysiis


def save_nysiis_result_to_dictionary(word):
    # Get the NYSIIS encoding of the word.
    nysiis_encoding = nysiis.encode(word)

    # Create a dictionary to store the result.
    result = {}

    # Add the word and its NYSIIS encoding to the dictionary.
    result["word"] = word
    result["nysiis_encoding"] = nysiis_encoding

    # Return the dictionary.
    return result


# Example usage.
dictionary = save_nysiis_result_to_dictionary("hello")

# Print the dictionary.
print(dictionary)
