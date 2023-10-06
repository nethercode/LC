class Solution {
    private val directions = arrayOf(intArrayOf(-1, 0), intArrayOf(1, 0), intArrayOf(0, -1), intArrayOf(0, 1))
    
    fun longestIncreasingPath(matrix: Array<IntArray>): Int {
        if (matrix.isEmpty()) return 0
        
        val m = matrix.size
        val n = matrix[0].size
        val cache = Array(m) { IntArray(n) }
        var maxLength = 0
        
        for (i in 0 until m) {
            for (j in 0 until n) {
                val length = dfs(matrix, i, j, m, n, cache)
                maxLength = maxOf(maxLength, length)
            }
        }
        
        return maxLength
    }
    
    private fun dfs(matrix: Array<IntArray>, i: Int, j: Int, m: Int, n: Int, cache: Array<IntArray>): Int {
        if (cache[i][j] != 0) return cache[i][j]
        
        var maxLength = 1
        
        for (direction in directions) {
            val newRow = i + direction[0]
            val newCol = j + direction[1]
            
            if (newRow in 0 until m && newCol in 0 until n && matrix[newRow][newCol] > matrix[i][j]) {
                val length = 1 + dfs(matrix, newRow, newCol, m, n, cache)
                maxLength = maxOf(maxLength, length)
            }
        }
        
        cache[i][j] = maxLength
        
        return maxLength
    }
}
