def quicksort(arr):
  if len(arr) <= 1:
    return arr

  pivot = arr[0]
  left = []
  right = []

  for i in range(1, len(arr)):
    if arr[i] > pivot:
      left.append(arr[i])
    else:
      right.append(arr[i])

  return sorted(quicksort(left) + [pivot] + quicksort(right))





arr = [5, 1, 8, 3, 2]

print("original array:", arr)

sorted_arr = quicksort(arr)

print("Sorted array:", sorted_arr)