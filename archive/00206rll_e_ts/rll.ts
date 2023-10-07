interface ListNode {
    val: number;
    next: ListNode | null;
}

function reverseList(head: ListNode | null): ListNode | null {
    let prev: ListNode | null = null;
    let current = head;

    while (current != null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }

    return prev;
}

// Example usage
const node1: ListNode = { val: 1, next: null };
const node2: ListNode = { val: 2, next: null };
const node3: ListNode = { val: 3, next: null };
const node4: ListNode = { val: 4, next: null };

node1.next = node2;
node2.next = node3;
node3.next = node4;

console.log(reverseList(node1)); // output: { val: 4, next: { val: 3, next: { val: 2, next: { val: 1, next: null } } } }
