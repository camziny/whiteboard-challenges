// Given pointers to the heads of two sorted linked lists, merge them into a single,
// sorted linked list.
// Either head pointer may be null meaning that the corresponding list is empty.

// * For your reference:
// *
// * SinglyLinkedListNode {
// *     int data;
// *     SinglyLinkedListNode next;
// * }
// *
// */
function mergeLists(head1, head2) {
  if (head1 === null) return head2;
  if (head2 === null) return head1;
  let current1 = head1;
  let current2 = head2;
  if (current1.data < current2.data) {
    current1.next = mergeLists(current1.next, current2);
    return current1;
  } else {
    current2.next = mergeLists(current1, current2.next);
    return current2;
  }
}



