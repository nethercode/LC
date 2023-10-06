function hasCycle(head: ListNode | null): boolean {
    let slow = head;
    let fast = head?.next;

    while (fast && fast.next) {
        if (fast === slow) {
            return true;  // cycle detected
        }
        slow = slow!.next;
        fast = fast.next?.next;
    }

    return false;  // no cycle detected
}
