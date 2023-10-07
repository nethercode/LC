class Solution {
    fun longestSubarray(nums: IntArray): Int {
        var left = 0
        var right = 0
        var zeroCount = 0
        var maxLength = 0
        
        while (right < nums.size) {
            if (nums[right] == 0) {
                zeroCount++
            }
            
            while (zeroCount > 1) {
                if (nums[left] == 0) {
                    zeroCount--
                }
                left++
            }
            
            maxLength = maxOf(maxLength, right - left)
            
            right++
        }
        
        return maxLength
    }
}
