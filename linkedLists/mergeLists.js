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




function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const tests = parseInt(readLine(), 10);

  for (let testsItr = 0; testsItr < tests; testsItr++) {
    const llist1Count = parseInt(readLine(), 10);

    let llist1 = new SinglyLinkedList();

    for (let i = 0; i < llist1Count; i++) {
      const llist1Item = parseInt(readLine(), 10);
      llist1.insertNode(llist1Item);
    }

    const llist2Count = parseInt(readLine(), 10);

    let llist2 = new SinglyLinkedList();

    for (let i = 0; i < llist2Count; i++) {
      const llist2Item = parseInt(readLine(), 10);
      llist2.insertNode(llist2Item);
    }

    let llist3 = mergeLists(llist1.head, llist2.head);

    printSinglyLinkedList(llist3, " ", ws);
    ws.write("\n");
  }

  ws.end();
}
