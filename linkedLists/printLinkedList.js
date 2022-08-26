// This is an to practice traversing a linked list. 
// Given a pointer to the head node of a linked list, print each node's data element, 
// one per line. If the head pointer is null (indicating the list is empty), 
// there is nothing to print.

// Complete the printLinkedList function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function printLinkedList(head) {
    let node = head
    while (node !== null) {
        console.log(node.data)
        node = node.next
    }
}
