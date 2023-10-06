class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function maxSubarraySumCircular($nums) {
        $n = count($nums);

        // Find the maximum sum subarray using Kadane's algorithm
        $maxSum = $nums[0];
        $currentMax = $nums[0];
        for ($i = 1; $i < $n; $i++) {
            $currentMax = max($nums[$i], $currentMax + $nums[$i]);
            $maxSum = max($maxSum, $currentMax);
        }

        // If the maximum sum is negative, it means all elements are negative.
        // In that case, return the maximum element.
        if ($maxSum < 0) {
            return max($nums);
        }

        // Find the minimum sum subarray using Kadane's algorithm
        $minSum = $nums[0];
        $currentMin = $nums[0];
        for ($i = 1; $i < $n; $i++) {
            $currentMin = min($nums[$i], $currentMin + $nums[$i]);
            $minSum = min($minSum, $currentMin);
        }

        // Calculate the total sum of the array
        $totalSum = array_sum($nums);

        // The maximum sum of a non-empty subarray in a circular array is either
        // the maximum sum found using Kadane's algorithm or the total sum minus the minimum sum.
        return max($maxSum, $totalSum - $minSum);
    }
}