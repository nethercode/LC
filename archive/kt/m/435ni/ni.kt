class Solution {
    fun eraseOverlapIntervals(intervals: Array<IntArray>): Int {
        // Sort the intervals by their end points in ascending order
        intervals.sortBy { it[1] }
        
        var count = 0
        var end = Int.MIN_VALUE
        
        for (interval in intervals) {
            val start = interval[0]
            if (start >= end) {
                // Current interval doesn't overlap with the previous one
                // Update the end point
                end = interval[1]
            } else {
                // Current interval overlaps with the previous one
                // Increment the count of intervals to be removed
                count++
            }
        }
        
        return count
    }
}