def find_median(matrix):
    arr = []
    for i in range(len(matrix)):
        for j in range(len(matrix[0])):
            arr.append(matrix[i][j])
     
    arr.sort()
     
    mid = len(arr) // 2
    if len(arr) % 2 == 0:
        median = (arr[mid-1] + arr[mid]) / 2
    else:
        median = arr[mid]
     
    return median

matrix1 = [[1, 3, 5],
           [2, 6, 9],
           [3, 6, 9]]
median1 = find_median(matrix1)
print("Median of matrix1:", median1)
 

matrix2 = [[1, 3, 4],
           [2, 5, 6],
           [7, 8, 9]]
median2 = find_median(matrix2)
print("Median of matrix2:", median2)