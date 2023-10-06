class Solution {
    /**
     * @param Integer $n
     * @return Integer
     */
    function reverseBits($n) {
        $reversed = 0;
        
        for ($i = 0; $i < 32; $i++) {
            $reversed <<= 1;  // Left shift the reversed number by 1 bit
            
            // Check if the least significant bit of $n is 1
            if (($n & 1) == 1) {
                $reversed |= 1;  // Set the least significant bit of $reversed to 1
            }
            
            $n >>= 1;  // Right shift $n by 1 bit
        }
        
        return $reversed;
    }
}