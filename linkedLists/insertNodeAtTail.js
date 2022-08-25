// You are given the pointer to the head node of a linked list and an integer to add to the list.
// Create a new node with the given integer. 
// Insert this node at the tail of the linked list 
// and return the head node of the linked list formed after inserting this new node. 
// The given head pointer may be null, meaning that the initial list is empty.

function insertNodeAtTail(head, data) {
    let newNode = new SinglyLinkedListNode(data)
    if(head === null) {
        head = newNode
        return head
    } else {
        let value = head
        while(value.next !== null) {
            value = value.next
        }
        value.next = newNode
        return head
    }
    }