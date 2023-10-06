func removeNthFromEnd(head *ListNode, n int) *ListNode {
    fast := head
    for i := 0; i < n; i++ {
        fast = fast.Next
    }
    if fast == nil {
        // the nth node is the head of the list
        return head.Next
    }
    slow := head
    for fast.Next != nil {
        fast = fast.Next
        slow = slow.Next
    }
    // slow is pointing at the (n-1)th node from the end
    slow.Next = slow.Next.Next
    return head
}
