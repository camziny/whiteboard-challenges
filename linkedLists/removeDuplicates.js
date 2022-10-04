// You're given the head of a Singly Linked List whose nodes are in sorted order
// with respect to their values. Write a function that returns a modified version
// of the Linked List that doesn't contain any nodes with duplicate values. The
// Linked List should be modified in place (i.e., you shouldn't create a brand
// new list), and the modified Linked List should still have its nodes sorted
// with respect to their values.

// Each LinkedList node has an integer value as well as a next node pointing to the next node
// in the list or to None / null if it's the tail of the list.

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const removeDuplicatesFromLinkedList = (linkedList) => {
  let curr = linkedList;
  while (curr !== null) {
    let nextUniqueNode = curr.next;
    while (nextUniqueNode !== null && nextUniqueNode.value == curr.value) {
      nextUniqueNode = nextUniqueNode.next;
    }
    curr.next = nextUniqueNode;
    curr = nextUniqueNode;
  }
  return linkedList;
};
