class Solution {
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function singleNumber($nums) {
        $ones = 0; // Tracks bits that appear once
        $twos = 0; // Tracks bits that appear twice
        
        foreach ($nums as $num) {
            $ones = (~$twos) & ($ones ^ $num); // Update 'ones' for bits that appear once
            $twos = (~$ones) & ($twos ^ $num); // Update 'twos' for bits that appear twice
        }
        
        return $ones;
    }
}