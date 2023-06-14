class Queue:
    def __init__(self):
        self.items = []

    def enqueue(self, item):
        self.items.append(item)

    def is_empty(self):
        return len(self.items) == 0

    def dequeue(self):
        if self.is_empty():
            raise ValueError("Queue is empty")
        return self.items.pop(0)
