class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        # Step 1: Calculate the length of the list
        length = 0
        curr = head
        while curr:
            length += 1
            curr = curr.next
        
        # Step 2: Handle special cases
        if length == 0 or length == 1 or k % length == 0:
            return head
        
        # Step 3: Adjust the value of k
        k = k % length
        
        # Step 4: Find the new head of the rotated list
        new_head_pos = length - k
        curr = head
        prev = None
        for _ in range(new_head_pos):
            prev = curr
            curr = curr.next
        
        # Step 5: Find the tail of the original list
        tail = curr
        while tail.next:
            tail = tail.next
        
        # Step 6: Make the list circular
        tail.next = head
        
        # Step 7: Traverse k nodes and disconnect the list
        new_tail_pos = length - k - 1
        curr = head
        for _ in range(new_tail_pos):
            curr = curr.next
        new_tail = curr
        
        # Step 8: Set the new head and new tail connections
        new_head = new_tail.next
        new_tail.next = None
        
        # Step 10: Return the new head
        return new_head
