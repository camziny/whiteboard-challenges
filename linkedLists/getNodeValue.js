// Given a pointer to the head of a linked list and a specific position, 
// determine the data value at that position. Count backwards from the tail node. 
// The tail is at postion 0, its parent is at 1 and so on.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function getNode(llist, positionFromTail) {
    let pointer = llist
    let count = 0
    while (llist !== null) {
        if (count > positionFromTail) {
            pointer = pointer.next
        }
        llist = llist.next
        count++
    }
    return pointer.data
}




