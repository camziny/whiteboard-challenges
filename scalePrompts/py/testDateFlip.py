import datetime


def date_flip(date_str: str) -> str:
    """Flip the day and month of a date string.

    Args:
        date_str (str): like "2020-10-01"

    Returns:
        str: like "01-10-2020"
    """

    date_obj = datetime.datetime.strptime(date_str, "%Y-%m-%d")
    new_date_str = date_obj.strftime("%d-%m-%Y")
    return new_date_str


def test_date_flip():
    date_str = "2020-10-01"
    expected_result = "01-10-2020"
    actual_result = date_flip(date_str)
    assert actual_result == expected_result


if __name__ == "__main__":
    test_date_flip()
