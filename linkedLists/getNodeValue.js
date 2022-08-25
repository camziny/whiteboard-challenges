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






function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const tests = parseInt(readLine(), 10);

    for (let testsItr = 0; testsItr < tests; testsItr++) {
        const llistCount = parseInt(readLine(), 10);

        let llist = new SinglyLinkedList();

        for (let i = 0; i < llistCount; i++) {
            const llistItem = parseInt(readLine(), 10);
            llist.insertNode(llistItem);
        }

        const position = parseInt(readLine(), 10);

        let result = getNode(llist.head, position);

        ws.write(result + "\n");
    }

    ws.end();
}