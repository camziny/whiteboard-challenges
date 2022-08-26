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
