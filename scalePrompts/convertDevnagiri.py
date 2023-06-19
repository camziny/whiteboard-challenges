import unicodedata


def convert_to_unicode(string):
    """Converts a Devanagari string to its Unicode representation.

    Args:
      string: The Devanagari string to convert.

    Returns:
      The Unicode representation of the string.
    """

    # Convert the string to a list of characters.
    characters = list(string)

    # For each character, get its Unicode code point.
    code_points = [unicodedata.name(c).split(".")[1] for c in characters]

    # Convert the list of code points to a string.
    unicode_string = "".join(code_points)

    return unicode_string
