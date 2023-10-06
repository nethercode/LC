class Solution {
    /**
     * @param Integer $x
     * @return Integer
     */
    function mySqrt($x) {
        $left = 0;
        $right = $x;
        while ($left <= $right) {
            $mid = floor(($left + $right) / 2);
            if ($mid * $mid <= $x && ($mid + 1) * ($mid + 1) > $x) {
                return $mid;
            } elseif ($mid * $mid < $x) {
                $left = $mid + 1;
            } else {
                $right = $mid - 1;
            }
        }
        return $left; // We never reach here.
    }
}
