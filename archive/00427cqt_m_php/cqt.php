class Solution {
    /**
     * @param Integer[][] $grid
     * @return Node
     */
    function construct($grid) {
        $n = count($grid);
        
        // Check if the grid is a leaf node
        if ($n == 1) {
            return new Node($grid[0][0] == 1, true);
        }
        
        // Check if all values in the grid are the same
        $allSame = true;
        $firstVal = $grid[0][0];
        
        foreach ($grid as $row) {
            foreach ($row as $val) {
                if ($val != $firstVal) {
                    $allSame = false;
                    break 2;
                }
            }
        }
        
        // If all values are the same, create a leaf node
        if ($allSame) {
            return new Node($firstVal == 1, true);
        }
        
        // Otherwise, divide the grid into four sub-grids
        $half = $n / 2;
        $topLeft = [];
        $topRight = [];
        $bottomLeft = [];
        $bottomRight = [];
        
        for ($i = 0; $i < $half; $i++) {
            $topLeft[] = array_slice($grid[$i], 0, $half);
            $topRight[] = array_slice($grid[$i], $half);
        }
        
        for ($i = $half; $i < $n; $i++) {
            $bottomLeft[] = array_slice($grid[$i], 0, $half);
            $bottomRight[] = array_slice($grid[$i], $half);
        }
        
        // Recursively construct the Quad-Tree for each sub-grid
        $root = new Node(false, false);
        $root->topLeft = $this->construct($topLeft);
        $root->topRight = $this->construct($topRight);
        $root->bottomLeft = $this->construct($bottomLeft);
        $root->bottomRight = $this->construct($bottomRight);
        
        return $root;
    }
}
