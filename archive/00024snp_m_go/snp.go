/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

 func swapPairs(head *ListNode) *ListNode {
    // if the list is empty or has only one node, no swap is needed
    if head == nil || head.Next == nil {
        return head
    }
    
    // use three pointers to swap nodes in pairs
    var prev *ListNode = nil
    curr := head
    next := head.Next
    newHead := next // the new head of the list after swapping
    
    for curr != nil && next != nil {
        curr.Next = next.Next
        next.Next = curr
        if prev != nil {
            prev.Next = next
        }
        prev = curr
        curr = curr.Next
        if curr != nil {
            next = curr.Next
        } else {
            next = nil
        }
    }
    
    return newHead
}
