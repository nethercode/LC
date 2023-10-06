import java.util.*

class Solution {
    fun nearestExit(maze: Array<CharArray>, entrance: IntArray): Int {
        val m = maze.size
        val n = maze[0].size
        val directions = arrayOf(intArrayOf(-1, 0), intArrayOf(1, 0), intArrayOf(0, -1), intArrayOf(0, 1))

        val queue: Queue<Pair<Int, Int>> = LinkedList()
        queue.offer(Pair(entrance[0], entrance[1]))
        maze[entrance[0]][entrance[1]] = '+' // mark the entrance as visited

        var steps = 0

        while (!queue.isEmpty()) {
            val size = queue.size

            for (i in 0 until size) {
                val curr = queue.poll()
                val row = curr.first
                val col = curr.second

                if (isExit(row, col, m, n)) {
                    if (!(row == entrance[0] && col == entrance[1]))
                        return steps // found an exit
                }

                for (dir in directions) {
                    val newRow = row + dir[0]
                    val newCol = col + dir[1]

                    if (isValidCell(newRow, newCol, maze, m, n)) {
                        queue.offer(Pair(newRow, newCol))
                        maze[newRow][newCol] = '+' // mark the cell as visited
                    }
                }
            }

            steps++
        }

        return -1 // no exit found
    }

    private fun isExit(row: Int, col: Int, m: Int, n: Int): Boolean {
        return row == 0 || row == m - 1 || col == 0 || col == n - 1
    }

    private fun isValidCell(row: Int, col: Int, maze: Array<CharArray>, m: Int, n: Int): Boolean {
        return row in 0 until m && col in 0 until n && maze[row][col] == '.'
    }
}