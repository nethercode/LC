class Solution {
    /**
     * @param Integer $n
     * @return Boolean
     */
    function isHappy($n) {
        $set = array(); // hash set to keep track of numbers generated
        while ($n != 1) {
            $sum = 0;
            // calculate sum of squares of digits
            while ($n > 0) {
                $digit = $n % 10;
                $sum += $digit * $digit;
                $n = intval($n / 10);
            }
            // check if sum is already in set
            if (isset($set[$sum])) {
                return false;
            }
            // add sum to set and continue process
            $set[$sum] = true;
            $n = $sum;
        }
        return true;
    }
}