class Solution {
    fun deleteMiddle(head: ListNode?): ListNode? {
        if (head == null || head.next == null) {
            // If the list is empty or has only one node, return null
            return null
        }

        var slow: ListNode? = head
        var fast: ListNode? = head
        var prev: ListNode? = null

        while (fast != null && fast.next != null) {
            fast = fast.next?.next
            prev = slow
            slow = slow?.next
        }

        prev?.next = slow?.next

        return head
    }
}
