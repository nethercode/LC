class Solution {
    /**
     * @param String $a
     * @param String $b
     * @return String
     */
    function addBinary($a, $b) {
        $result = ""; // To store the resulting binary string
        $carry = 0; // To store the carry during addition
        
        // Traverse the strings from right to left
        $i = strlen($a) - 1;
        $j = strlen($b) - 1;
        
        while ($i >= 0 || $j >= 0 || $carry > 0) {
            // Get the current bits from each string (or 0 if the string has been traversed)
            $bitA = $i >= 0 ? intval($a[$i]) : 0;
            $bitB = $j >= 0 ? intval($b[$j]) : 0;
            
            // Calculate the sum of the current bits and the carry
            $sum = $bitA + $bitB + $carry;
            
            // Determine the current bit and update the carry
            $bit = $sum % 2;
            $carry = intdiv($sum, 2);
            
            // Prepend the current bit to the result string
            $result = strval($bit) . $result;
            
            // Move to the next bits in each string
            $i--;
            $j--;
        }
        
        return $result;
    }
}
