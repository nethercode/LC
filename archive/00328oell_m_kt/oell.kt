class Solution {
    fun oddEvenList(head: ListNode?): ListNode? {
        if (head?.next == null) {
            return head
        }
        
        var oddPtr = head
        var evenPtr = head.next
        val evenHead = evenPtr
        
        while (evenPtr?.next != null) {
            oddPtr?.next = evenPtr.next
            oddPtr = oddPtr?.next
            evenPtr.next = oddPtr?.next
            evenPtr = evenPtr.next
        }
        
        oddPtr?.next = evenHead
        return head
    }
}