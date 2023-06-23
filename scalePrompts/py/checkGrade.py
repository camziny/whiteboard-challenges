def check_grade(grade):
    """
    This function checks a grade and outputs the corresponding letter grade.

    Parameters:
      grade (int): The grade to be checked.

    Returns:
      str: The letter grade corresponding to the input grade.
    """

    if grade >= 90:
        return "A"
    elif grade >= 80:
        return "B"
    elif grade >= 70:
        return "C"
    elif grade >= 60:
        return "D"
    else:
        return "F"


# Test cases

print(check_grade(95))  # Should print "A"
print(check_grade(80))  # Should print "B"
print(check_grade(70))  # Should print "C"
print(check_grade(60))  # Should print "D"
print(check_grade(50))  # Should print "F"
