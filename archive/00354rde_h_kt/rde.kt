class Solution {
    fun maxEnvelopes(envelopes: Array<IntArray>): Int {
        envelopes.sortWith(compareBy({ it[0] }, { -it[1] }))
        val n = envelopes.size
        val dp = mutableListOf<Int>()
        
        for (i in 0 until n) {
            val envelope = envelopes[i]
            val index = binarySearch(dp, envelope[1])
            if (index == dp.size) {
                dp.add(envelope[1])
            } else {
                dp[index] = envelope[1]
            }
        }
        
        return dp.size
    }
    
    private fun binarySearch(nums: List<Int>, target: Int): Int {
        var left = 0
        var right = nums.size - 1
        
        while (left <= right) {
            val mid = left + (right - left) / 2
            if (nums[mid] == target) {
                return mid
            } else if (nums[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
        
        return left
    }
}