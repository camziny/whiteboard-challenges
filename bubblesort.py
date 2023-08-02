def bubble_sort(a_list):

    for i in range(0,len(a_list)-1): 

        for j in range(len(a_list)-1): 

            if(a_list[j]>a_list[j+1]): 

                temp = a_list[j] 

                a_list[j] = a_list[j+1] 

                a_list[j+1] = temp 

    return a_list 

list_a= input("Enter a list of numbers, separated by commas: ")

a_list=[int(num) for num in list_a.split(',')]

print("original list: ", a_list) 

print("list after sorting: ", bubble_sort(a_list))