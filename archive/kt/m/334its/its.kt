class Solution {
    fun increasingTriplet(nums: IntArray): Boolean {
        var small = Int.MAX_VALUE
        var big = Int.MAX_VALUE
        
        for (num in nums) {
            if (num <= small) {
                small = num
            } else if (num <= big) {
                big = num
            } else {
                // Found a triplet where nums[i] < nums[j] < nums[k]
                return true
            }
        }
        
        return false
    }
}
