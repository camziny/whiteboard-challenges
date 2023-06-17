def test_dictionary_initialization():
    # Create a dictionary with a list of words and their definitions.
    dictionary = {"word1": "definition1", "word2": "definition2"}

    # Assert that the dictionary contains the expected words and definitions.
    assert "word1" in dictionary
    assert dictionary["word1"] == "definition1"
    assert "word2" in dictionary
    assert dictionary["word2"] == "definition2"


def test_dictionary_query():
    # Create a dictionary with a list of words and their definitions.
    dictionary = {"word1": "definition1", "word2": "definition2"}

    # Query the dictionary for the definition of a word.
    definition = dictionary["word1"]

    # Assert that the definition is correct.
    assert definition == "definition1"


def test_dictionary_update():
    # Create a dictionary with a list of words and their definitions.
    dictionary = {"word1": "definition1", "word2": "definition2"}

    # Update the dictionary with a new word and definition.
    dictionary["word3"] = "definition3"

    # Assert that the dictionary contains the new word and definition.
    assert "word3" in dictionary
    assert dictionary["word3"] == "definition3"


def test_dictionary_save_and_load():
    # Create a dictionary with a list of words and their definitions.
    dictionary = {"word1": "definition1", "word2": "definition2"}

    # Save the dictionary to a file.
    dictionary.save("dictionary.txt")

    # Load the dictionary from the file.
    loaded_dictionary = Dictionary.load("dictionary.txt")

    # Assert that the loaded dictionary is the same as the original dictionary.
    assert dictionary == loaded_dictionary


def test_dictionary_synonyms_and_antonyms():
    # Create a dictionary with a list of words and their definitions.
    dictionary = {"word1": "definition1", "word2": "definition2"}

    # Find the synonyms of a word.
    synonyms = dictionary.synonyms("word1")

    # Assert that the synonyms are correct.
    assert synonyms == ["synonym1", "synonym2"]

    # Find the antonyms of a word.
    antonyms = dictionary.antonyms("word1")

    # Assert that the antonyms are correct.
    assert antonyms == ["antonym1", "antonym2"]
