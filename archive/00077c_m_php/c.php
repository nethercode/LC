class Solution {
    private $result;
    
    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer[][]
     */
    function combine($n, $k) {
        $this->result = array();
        $current = array();
        $start = 1;
        
        $this->backtrack($n, $k, $start, $current);
        
        return $this->result;
    }
    
    private function backtrack($n, $k, $start, $current) {
        if (count($current) == $k) {
            $this->result[] = $current;
            return;
        }
        
        for ($i = $start; $i <= $n; $i++) {
            $current[] = $i;
            $this->backtrack($n, $k, $i + 1, $current);
            array_pop($current);
        }
    }
}
