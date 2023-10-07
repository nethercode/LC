class Solution {
    /**
     * @param Integer[] $digits
     * @return Integer[]
     */
    function plusOne($digits) {
        $carry = 1;
        for ($i = count($digits) - 1; $i >= 0; $i--) {
            $digits[$i] += $carry;
            if ($digits[$i] == 10) {
                $digits[$i] = 0;
                $carry = 1;
            } else {
                $carry = 0;
                break;
            }
        }
        if ($carry == 1) {
            array_unshift($digits, 1);
        }
        return $digits;
    }
}
