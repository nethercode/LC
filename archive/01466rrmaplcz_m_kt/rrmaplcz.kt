class Solution {
    fun minReorder(n: Int, connections: Array<IntArray>): Int {
        val graph = buildGraph(n, connections)
        val visited = BooleanArray(n)
        return dfs(0, graph, visited)
    }
    
    private fun buildGraph(n: Int, connections: Array<IntArray>): Array<MutableList<Int>> {
        val graph = Array(n) { mutableListOf<Int>() }
        for (connection in connections) {
            val from = connection[0]
            val to = connection[1]
            graph[from].add(to)
            graph[to].add(-from) // Reverse the direction of the road
        }
        return graph
    }
    
    private fun dfs(node: Int, graph: Array<MutableList<Int>>, visited: BooleanArray): Int {
        visited[node] = true
        var count = 0
        for (neighbor in graph[node]) {
            if (!visited[Math.abs(neighbor)]) {
                count += if (neighbor > 0) 1 else 0 // Count reversed edges
                count += dfs(Math.abs(neighbor), graph, visited)
            }
        }
        return count
    }
}
