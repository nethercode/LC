class Solution {
    fun longestOnes(nums: IntArray, k: Int): Int {
        var left = 0 // left pointer of the window
        var maxOnes = 0 // maximum consecutive ones
        var zeros = 0 // number of zeros in the current window

        for (right in nums.indices) {
            if (nums[right] == 0) {
                zeros++
            }

            // Shrink the window if the number of zeros exceeds k
            while (zeros > k) {
                if (nums[left] == 0) {
                    zeros--
                }
                left++
            }

            // Update the maximum consecutive ones if necessary
            maxOnes = maxOf(maxOnes, right - left + 1)
        }

        return maxOnes
    }
}
