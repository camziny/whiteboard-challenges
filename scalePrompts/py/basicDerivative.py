def derivative(f, x):
    h = 1e-6
    return (f(x + h) - f(x)) / h


def main():
    x = 3
    f = lambda x: x**2
    print(derivative(f, x))


if __name__ == "__main__":
    main()
