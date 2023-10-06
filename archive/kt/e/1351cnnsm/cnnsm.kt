class Solution {
    fun countNegatives(grid: Array<IntArray>): Int {
        val rows = grid.size
        val cols = grid[0].size
        var count = 0
        var r = rows - 1
        var c = 0

        while (r >= 0 && c < cols) {
            if (grid[r][c] < 0) {
                count += cols - c
                r--
            } else {
                c++
            }
        }

        return count
    }
}
