import java.util.PriorityQueue

class Solution {
    fun maxScore(nums1: IntArray, nums2: IntArray, k: Int): Long {
        val zipped = nums1.zip(nums2).sortedByDescending { (_, min) -> min }
        val pq = PriorityQueue<Int>()
        var bestSum = 0L
        var ans = 0L

        zipped.forEach { (term, min) ->
            pq.add(term)
            bestSum += term

            if (pq.size > k) {
                bestSum -= pq.poll()
            }

            if (pq.size == k) {
                ans = maxOf(ans, min * bestSum)
            }
        }

        return ans
    }
}