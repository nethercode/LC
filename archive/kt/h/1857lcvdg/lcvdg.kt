import java.util.*

class Solution {
    fun largestPathValue(colors: String, edges: Array<IntArray>): Int {
        val n = colors.length
        val connections = Array<MutableList<Int>>(n) { mutableListOf<Int>() }
        val inCounts = IntArray(n)

        for (edge in edges) {
            connections[edge[0]].add(edge[1])
            inCounts[edge[1]]++
        }

        val counts = Array(n) { IntArray(26) }
        val queue: Queue<Int> = LinkedList()

        for (i in 0 until n) {
            if (inCounts[i] == 0) {
                queue.offer(i)
            }
        }

        var max = 0
        var nodesSeen = 0

        while (queue.isNotEmpty()) {
            val node = queue.poll()
            max = maxOf(max, ++counts[node][colors[node] - 'a'])
            nodesSeen++

            for (neighbor in connections[node]) {
                for (x in 0 until 26) {
                    counts[neighbor][x] = maxOf(counts[neighbor][x], counts[node][x])
                }

                if (--inCounts[neighbor] == 0) {
                    queue.offer(neighbor)
                }
            }
        }

        return if (nodesSeen < n) -1 else max
    }
}