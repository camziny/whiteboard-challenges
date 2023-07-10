def score_archery_tournament(targets_hit):
    """
    Calculates the score of an archer in an archery tournament.

    Args:
      targets_hit: A list of the targets that the archer hit.

    Returns:
      The archer's score.
    """

    score = 0
    seen_targets = set()
    for target in targets_hit:
        if target not in seen_targets:
            score += target
            seen_targets.add(target)
    return score


if __name__ == "__main__":
    targets_hit = [1, 3, 2, 3, 1, 1]
    score = score_archery_tournament(targets_hit)
    print(f"The archer's score is {score}")
