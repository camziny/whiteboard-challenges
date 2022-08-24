// Given a pointer to the head of a singly-linked list,
// print each data value from the reversed list.
// If the given list is empty, do not print anything.

// * For your reference:
// *
// * SinglyLinkedListNode {
// *     int data;
// *     SinglyLinkedListNode next;
// * }
// *
// */

function reversePrint(llist) {
  if (!llist) return;
  reversePrint(llist.next);
  console.log(llist.data);
}

function main() {
  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
      const llistItem = parseInt(readLine(), 10);
      llist.insertNode(llistItem);
    }

    reversePrint(llist.head);
  }
}
