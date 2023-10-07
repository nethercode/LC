class Solution {
    fun findCircleNum(isConnected: Array<IntArray>): Int {
        val n = isConnected.size
        val visited = BooleanArray(n)
        var count = 0
        
        for (i in 0 until n) {
            if (!visited[i]) {
                dfs(isConnected, visited, i)
                count++
            }
        }
        
        return count
    }
    
    private fun dfs(isConnected: Array<IntArray>, visited: BooleanArray, city: Int) {
        visited[city] = true
        
        for (neighbor in isConnected[city].indices) {
            if (isConnected[city][neighbor] == 1 && !visited[neighbor]) {
                dfs(isConnected, visited, neighbor)
            }
        }
    }
}
