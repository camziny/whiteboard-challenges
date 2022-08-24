// Delete the node at a given position in a linked list and return a reference to the head node.
// The head is at position 0. 
// The list may be empty after you delete the node. In that case, return a null value.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function deleteNode(llist, position) {
    if(position === 0) {
        return llist = llist.next
    }
    let newNode = llist
    for(let i = 1; i < position; i++) {
        newNode = newNode.next
    }
    newNode.next = newNode.next.next
    return llist
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const llistCount = parseInt(readLine(), 10);

    let llist = new SinglyLinkedList();

    for (let i = 0; i < llistCount; i++) {
        const llistItem = parseInt(readLine(), 10);
        llist.insertNode(llistItem);
    }

    const position = parseInt(readLine(), 10);

    let llist1 = deleteNode(llist.head, position);

    printSinglyLinkedList(llist1, " ", ws)
    ws.write("\n");

    ws.end();
}