def find_symmetric_pairs(pairs):
  """Finds all symmetric pairs in an array of pairs of integers.

  Args:
    pairs: An array of pairs of integers.

  Returns:
    A set of all symmetric pairs.
  """

  # Create a hash table to store the pairs.
  hash_table = {}
  for pair in pairs:
    hash_table[pair] = True

  # Find all pairs that are mirrors of each other.
  symmetric_pairs = set()
  for pair in pairs:
    if pair[1] in hash_table and pair[1] != pair:
      symmetric_pairs.add(pair)

  return symmetric_pairs


if __name__ == "__main__":
  # Create an array of pairs of integers.
  pairs = [(3, 4), (1, 2), (5, 2), (7, 10), (4, 3), (2, 5)]

  # Find all symmetric pairs.
  symmetric_pairs = find_symmetric_pairs(pairs)

  # Print the symmetric pairs.
  print(symmetric_pairs)
