import java.util.*

class Solution {
    fun kSmallestPairs(nums1: IntArray, nums2: IntArray, k: Int): List<List<Int>> {
        val result = mutableListOf<List<Int>>()
        
        // Create a min-heap based on the sum of pairs
        val minHeap = PriorityQueue<PairSumComparator>()
        
        // Add the initial pairs (nums1[i], nums2[0]) where i is in the range [0, nums1.size)
        for (i in nums1.indices) {
            minHeap.offer(PairSumComparator(nums1[i], nums2[0], i, 0))
        }
        
        // Perform k iterations or until the min-heap is empty
        for (iteration in 0 until k) {
            if (minHeap.isEmpty()) break
            
            val pair = minHeap.poll()
            val num1 = pair.num1
            val num2 = pair.num2
            val index1 = pair.index1
            val index2 = pair.index2
            
            result.add(listOf(num1, num2))
            
            // Add the next pair (nums1[index1], nums2[index2 + 1]) if it exists
            if (index2 + 1 < nums2.size) {
                minHeap.offer(PairSumComparator(num1, nums2[index2 + 1], index1, index2 + 1))
            }
        }
        
        return result
    }
    
    private class PairSumComparator(
        val num1: Int,
        val num2: Int,
        val index1: Int,
        val index2: Int
    ) : Comparable<PairSumComparator> {
        private val sum = num1 + num2
        
        override fun compareTo(other: PairSumComparator): Int {
            return sum.compareTo(other.sum)
        }
    }
}
