// Delete the node at a given position in a linked list and return a reference to the head node.
// The head is at position 0. 
// The list may be empty after you delete the node. In that case, return a null value.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(llist, position) {
    if(position === 0) {
        return llist = llist.next
    }
    let newNode = llist
    for(let i = 1; i < position; i++) {
        newNode = newNode.next
    }
    newNode.next = newNode.next.next
    return llist
}