class Solution {
    /**
     * @param String[][] $board
     * @return NULL
     */
    function solve(&$board) {
        $rows = count($board);
        if ($rows == 0) {
            return;
        }
        $cols = count($board[0]);

        // Step 1: Traverse the border cells and mark 'O's and connected cells as 'B'
        for ($i = 0; $i < $rows; $i++) {
            for ($j = 0; $j < $cols; $j++) {
                if (($i == 0 || $i == $rows - 1 || $j == 0 || $j == $cols - 1) && $board[$i][$j] == 'O') {
                    $this->dfs($board, $i, $j, $rows, $cols);
                }
            }
        }

        // Step 2: Flip 'O's to 'X' and restore 'B's to 'O'
        for ($i = 0; $i < $rows; $i++) {
            for ($j = 0; $j < $cols; $j++) {
                if ($board[$i][$j] == 'O') {
                    $board[$i][$j] = 'X';
                } elseif ($board[$i][$j] == 'B') {
                    $board[$i][$j] = 'O';
                }
            }
        }
    }

    // Depth-first search to mark 'O's and connected cells as 'B'
    function dfs(&$board, $i, $j, $rows, $cols) {
        if ($i < 0 || $i >= $rows || $j < 0 || $j >= $cols || $board[$i][$j] != 'O') {
            return;
        }

        $board[$i][$j] = 'B';

        $dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];
        foreach ($dirs as $dir) {
            $newX = $i + $dir[0];
            $newY = $j + $dir[1];
            $this->dfs($board, $newX, $newY, $rows, $cols);
        }
    }
}