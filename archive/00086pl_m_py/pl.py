class Solution:
    def partition(self, head: Optional[ListNode], x: int) -> Optional[ListNode]:
        # Create dummy nodes for the two partitions
        less_head = ListNode(0)
        greater_head = ListNode(0)
        less_ptr = less_head
        greater_ptr = greater_head
        
        # Iterate through the original list
        curr = head
        while curr:
            if curr.val < x:
                # Append node to the less partition
                less_ptr.next = curr
                less_ptr = less_ptr.next
            else:
                # Append node to the greater partition
                greater_ptr.next = curr
                greater_ptr = greater_ptr.next
            curr = curr.next
        
        # Connect the two partitions
        less_ptr.next = greater_head.next
        greater_ptr.next = None
        
        return less_head.next
