import time
import random


def hello_world():
    print("Hello, world!")
    print("The time is", time.ctime())
    print("A random number between 1 and 10 is", random.randint(1, 10))


if __name__ == "__main__":
    hello_world()
