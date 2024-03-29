// Given the pointer to the head node 
// of a linked list and an integer to insert at a certain position, 
// create a new node with the given integer as its data attribute, 
// insert this node at the desired position and return the head node.
// A position of 0 indicates head, 
// a position of 1 indicates one node away from the head and so on. 
// The head pointer given may be null meaning that the initial list is empty.


// * For your reference:
// *
// * SinglyLinkedListNode {
// *     int data;
// *     SinglyLinkedListNode next;
// * }
// *
// */

function insertNodeAtPosition(llist, data, position) {
    let newNode = new SinglyLinkedListNode(data);
    let current = llist;
    let prev = null;
    let count = 0;
    while (count < position && current) {
      prev = current;
      current = current.next;
      count++;
    }
    if (prev) {
      prev.next = newNode;
      newNode.next = current;
    }
    return llist;
  }
  