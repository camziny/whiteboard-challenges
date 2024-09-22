class Node:
    def __init__(self, char):
        self.char = char
        self.next = None


def build_linked_list(sentence):
    head = None
    tail = None
    for char in sentence:
        new_node = Node(char)
        if not head:
            head = new_node
            tail = new_node
        else:
            tail.next = new_node
            tail = new_node
    return head


def print_linked_list(head):
    current = head
    output = ""
    while current:
        output += current.char
        current = current.next
    print(output)


sentence = "I'm on vacation"
head = build_linked_list(sentence)
print_linked_list(head)
