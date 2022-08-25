// Given a pointer to the head of a linked list, insert a new node before the head.
// The next value in the new node should point to head and 
// the data value should be replaced with a given value. 
// Return a reference to the new head of the list. 
// The head pointer given may be null meaning that the initial list is empty.



function insertNodeAtHead(head, data) {
    let newNode = new SinglyLinkedListNode(data)
    newNode.next = head
    head = newNode
    return head
}