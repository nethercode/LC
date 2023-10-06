class Solution {
    fun pairSum(head: ListNode?): Int {
        val values = mutableListOf<Int>()
        var current = head
        var maxSum = 0
        
        // Traverse the linked list and store node values
        while (current != null) {
            values.add(current.`val`)
            current = current.next
        }
        
        val n = values.size
        
        // Iterate until the middle of the linked list
        for (i in 0 until n / 2) {
            val twinSum = values[i] + values[n - 1 - i]
            if (twinSum > maxSum) {
                maxSum = twinSum
            }
        }
        
        return maxSum
    }
}
