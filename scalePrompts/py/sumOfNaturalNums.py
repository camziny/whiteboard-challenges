def sum_of_first_n_natural_numbers(n):

  sum = 0
  for i in range(1, n + 1):
    sum += i
  return sum


if __name__ == "__main__":
  n = 100
  sum = sum_of_first_n_natural_numbers(n)
  print("The sum of first {} natural numbers is {}".format(n, sum))
