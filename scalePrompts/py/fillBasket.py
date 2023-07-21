def fill_basket(fruits, weights, capacity):
    # Step 1: Initialize an empty set for the picked fruits
    picked_fruits = set()

    # Step 2: Iterate over the fruits list
    for i in range(len(fruits)):
        # Step 3: Check if the fruit can be added to the basket
        if weights[i] <= capacity:
            # Step 4: Add the fruit to the set
            picked_fruits.add(fruits[i])
            # Subtract the weight of the added fruit from the capacity
            capacity -= weights[i]

        # If the basket is full, break the loop
        if capacity == 0:
            break

    # Step 6: Return the set of picked fruits
    return picked_fruits
