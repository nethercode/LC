class Solution:
    def deleteDuplicates(self, head):
        # Handle the case where the list is empty or has only one node
        if not head or not head.next:
            return head

        # Create a dummy node to serve as the new head
        dummy = ListNode(0)
        dummy.next = head

        # Initialize prev and curr pointers
        prev = dummy
        curr = head

        while curr:
            # Skip duplicate nodes
            while curr.next and curr.val == curr.next.val:
                curr = curr.next

            # If no duplicates were found, move the prev pointer
            if prev.next == curr:
                prev = prev.next
            # Otherwise, skip the duplicate nodes by updating the prev pointer's next reference
            else:
                prev.next = curr.next

            curr = curr.next

        return dummy.next
