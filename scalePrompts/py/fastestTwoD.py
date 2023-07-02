def fastest_route(road1, road2):
    """
    Returns the value of the fastest route from A to B.

    Args:
      road1: A one-dimensional array filled with positive integers of length N.
      road2: A one-dimensional array filled with positive integers of length N.

    Returns:
      The value of the fastest route.
    """

    n = len(road1)
    fastest_route_1 = [0] * n
    fastest_route_2 = [0] * n

    for i in range(n):
        fastest_route_1[i] = fastest_route_1[i - 1] + road1[i]
        fastest_route_2[i] = fastest_route_2[i - 1] + road2[i]

    for i in range(1, n):
        fastest_route_1[i] = min(fastest_route_1[i], fastest_route_2[i - 1] + road1[i])
        fastest_route_2[i] = min(fastest_route_2[i], fastest_route_1[i - 1] + road2[i])

    return min(fastest_route_1[n - 1], fastest_route_2[n - 1])
