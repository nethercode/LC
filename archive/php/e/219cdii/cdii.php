class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Boolean
     */
    function containsNearbyDuplicate($nums, $k) {
        $hashTable = array();
        
        for ($i = 0; $i < count($nums); $i++) {
            $num = $nums[$i];
            
            // Check if the element already exists in the hash table
            if (array_key_exists($num, $hashTable)) {
                // If the difference between the current index and the previous index of the element
                // is less than or equal to k, return true
                if ($i - $hashTable[$num] <= $k) {
                    return true;
                }
            }
            
            // Update the hash table with the current index of the element
            $hashTable[$num] = $i;
        }
        
        return false;
    }
}