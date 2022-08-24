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

    let result = CompareLists(llist1.head, llist2.head);

    ws.write((result ? 1 : 0) + "\n");
  }

  ws.end();
}
