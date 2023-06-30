def find_symmetric_pairs(arr):
    # Create an empty dictionary to store pairs
    hash_map = {}

    # Create an empty list to store symmetric pairs
    symmetric_pairs = []

    # Traverse through the given array
    for pair in arr:
        # Form a tuple from the pair
        pair_tup = tuple(pair)

        # Form a reversed tuple from the pair
        reversed_tup = tuple(reversed(pair))

        # If the reversed tuple is in the hash_map, then we've found a symmetric pair
        if hash_map.get(reversed_tup):
            symmetric_pairs.append([pair_tup, reversed_tup])

        # Add the pair to the hash_map
        else:
            hash_map[pair_tup] = 1

    return symmetric_pairs


# Test the function
arr = [[3, 4], [1, 2], [5, 2], [7, 10], [4, 3], [2, 5]]
print(find_symmetric_pairs(arr))
