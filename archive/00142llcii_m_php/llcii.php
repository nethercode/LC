class Solution {
    /**
     * @param ListNode $head
     * @return ListNode
     */
    function detectCycle($head) {
        $slow = $head;
        $fast = $head;

        // Detect cycle
        while ($fast !== null && $fast->next !== null) {
            $slow = $slow->next;
            $fast = $fast->next->next;

            if ($slow === $fast) {
                break;
            }
        }

        // No cycle
        if ($fast === null || $fast->next === null) {
            return null;
        }

        // Find starting node of cycle
        $slow = $head;
        while ($slow !== $fast) {
            $slow = $slow->next;
            $fast = $fast->next;
        }

        return $slow;
    }
}
