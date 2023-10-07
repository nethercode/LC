class Solution:
    def reverseBetween(self, head: Optional[ListNode], left: int, right: int) -> Optional[ListNode]:
        # Base case: empty list
        if not head:
            return None
        
        # Step 1: Initialize pointers
        dummy = ListNode(0)  # Dummy node to handle the case when sublist starts at the head
        dummy.next = head
        prev = dummy
        curr = head
        for _ in range(left - 1):
            prev = prev.next
            curr = curr.next
        next_node = curr.next
        
        # Step 3: Reverse sublist
        for _ in range(right - left):
            temp = next_node.next
            next_node.next = curr
            curr = next_node
            next_node = temp
        
        # Step 4: Connect reversed sublist back to the original list
        prev.next.next = next_node
        prev.next = curr
        
        # Step 5: Update head if sublist starts at the head
        if left == 1:
            return dummy.next
        
        # Step 6: Return modified list
        return head
