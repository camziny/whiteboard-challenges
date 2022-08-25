// Given the pointer to the head node of a linked list, 
// change the next pointers of the nodes so that their order is reversed. 
// The head pointer given may be null meaning that the initial list is empty.

function reverse(llist) {
    let prev = null
    let next = null

    while (llist !== null) {
        next = llist.next
        llist.next = prev
        prev = llist
        llist = next
    }
    return prev
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

        let llist1 = reverse(llist.head);

        printSinglyLinkedList(llist1, " ", ws)
        ws.write("\n");
    }

    ws.end();
}