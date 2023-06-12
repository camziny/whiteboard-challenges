def create_vector(n, m):
    """Creates a vector of numbers with all the numbers until n which each one appear m times.

    Args:
      n: The upper bound of the numbers to include.
      m: The number of times each number should appear.

    Returns:
      A NumPy array of the desired vector.
    """

    # Create a list of all the numbers from 1 to n.
    numbers = list(range(1, n + 1))

    # Create a dictionary to track the number of times each number has appeared.
    counts = {}
    for number in numbers:
        counts[number] = 0

    # Iterate over the numbers and increment the count for each number.
    for number in numbers:
        counts[number] += 1

    # Create a list of the numbers that have appeared m times.
    desired_numbers = []
    for number, count in counts.items():
        if count == m:
            desired_numbers.append(number)

    # Return a NumPy array of the desired numbers.
    return np.array(desired_numbers)
