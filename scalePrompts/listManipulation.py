def main():
    while True:
        try:
            n = int(input("Enter the number of students:"))
        except ValueError:
            print("Invalid input. Please enter a valid integer.")
            continue
        else:
            break

    mark = []

    for i in range(n):
        print("Student ", i + 1, ": ", end="")
        while True:
            try:
                mark_input = int(input("Enter a mark between 0 and 100: "))
            except ValueError:
                print("Invalid input. Please enter a valid integer between 0 and 100.")
                continue
            else:
                if mark_input < 0 or mark_input > 100:
                    print("Invalid mark. Please enter a mark between 0 and 100.")
                    continue
                else:
                    mark.append(mark_input)
                    break

    print("choose from the following actions:")
    print("1. Find average mark")
    print("2. Find highest mark")
    print("3. Find the number of students with highest mark")
    print("4. Find lowest mark")
    print("5. Find the number of students with lowest mark")
    print("6. Insert a student's mark")
    print("7. Delete a student's mark")
    print("8. Exit")

    while True:
        x = input("your action:")
        if x == "8":
            break
        if not x.isdigit():
            print("Invalid choice. Please enter a number between 1 and 8.")
            continue
        x = int(x)
        if x < 1 or x > 8:
            print("Invalid choice. Please enter a number between 1 and 8.")
            continue

        if x == 1:
            avg = sum(mark) / n
            print(f"Average mark: {avg:.2f}")
        elif x == 2:
            print(max(mark))
        elif x == 3:
            a = max(mark)
            b = mark.count(a)
            print(b)
        elif x == 4:
            print(min(mark))
        elif x == 5:
            c = min(mark)
            d = mark.count(c)
            print(d)
        elif x == 6:
            g = int(input("Enter the marks of students:"))
            mark.insert(n + 1, g)
            print(mark)
        elif x == 7:
            print(mark)
            while True:
                k = int(input("who do you want to delete:"))
                if k > n or k < 1:
                    print("Invalid index. Please enter an index between 1 and n.")
                    continue
                mark.pop(k - 1)
                print(mark)
                break
        else:
            print("Invalid choice. Please enter a number between 1 and 8.")


if __name__ == "__main__":
    main()
