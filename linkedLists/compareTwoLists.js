// You’re given the pointer to the head nodes of two linked lists.
// Compare the data in the nodes of the linked lists to check if they are equal.
// If all data attributes are equal and the lists are the same length,
// return 1 .
// Otherwise, return 0.

// * For your reference:
// *
// * SinglyLinkedListNode {
// *     int data;
// *     SinglyLinkedListNode next;
// * }
// *
// */

function CompareLists(llist1, llist2) {
  let current1 = llist1;
  let current2 = llist2;
  while (current1 !== null || current2 !== null) {
    if (current1 === null || current2 === null) {
      return 0;
    }
    if (current1.data !== current2.data) {
      return 0;
    } else {
      current1 = current1.next;
      current2 = current2.next;
    }
  }
  return 1;
}

