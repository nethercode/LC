class Solution {
    /**
     * @param Integer[][] $board
     * @return Integer
     */
    function snakesAndLadders($board) {
        $n = count($board);
        $visited = array_fill(0, $n, array_fill(0, $n, false));
        
        $queue = new SplQueue();
        $queue->enqueue([1, 0]); // Starting position: square 1 with 0 moves
        
        while (!$queue->isEmpty()) {
            [$curr, $moves] = $queue->dequeue();
            
            if ($curr == $n * $n) {
                return $moves;
            }
            
            for ($i = 1; $i <= 6; $i++) {
                $next = $curr + $i;
                
                if ($next > $n * $n) {
                    break;
                }
                
                [$row, $col] = $this->getRowCol($next, $n);
                
                // Check if the next square has a snake or ladder
                if ($board[$row][$col] != -1) {
                    $next = $board[$row][$col];
                }
                
                [$newRow, $newCol] = $this->getRowCol($next, $n);
                
                if (!$visited[$newRow][$newCol]) {
                    $visited[$newRow][$newCol] = true;
                    $queue->enqueue([$next, $moves + 1]);
                }
            }
        }
        
        return -1; // The destination square (n2) is not reachable
    }
    
    // Helper function to convert the linear index to row and column indices
    function getRowCol($num, $n) {
        $row = $n - 1 - floor(($num - 1) / $n);
        $col = ($n - 1 - $row) % 2 == 0 ? ($num - 1) % $n : $n - 1 - ($num - 1) % $n;
        return [$row, $col];
    }
}
