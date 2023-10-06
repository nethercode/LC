class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findPeakElement($nums) {
        $left = 0;
        $right = count($nums) - 1;

        while ($left < $right) {
            $mid = intval(($left + $right) / 2);

            if ($nums[$mid] < $nums[$mid + 1]) {
                // The peak element is on the right side of the mid
                $left = $mid + 1;
            } else {
                // The peak element is on the left side of the mid
                $right = $mid;
            }
        }

        // At the end of the loop, left and right will be pointing to the peak element
        return $left;
    }
}