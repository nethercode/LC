class Solution {
    fun sortItems(n: Int, m: Int, group: IntArray, beforeItems: List<List<Int>>): IntArray {
        val grp = mutableMapOf<Int, MutableSet<Int>>()
        var single = -1

        for (i in 0 until n) {
            if (group[i] == -1) {
                group[i] = single--
            }

            grp.getOrPut(group[i]) { mutableSetOf() }.add(i)
        }

        val edges = mutableMapOf<Int, MutableList<Int>>()
        val innerEdges = mutableMapOf<Int, MutableList<Int>>()

        for (i in beforeItems.indices) {
            val before = beforeItems[i]
            for (b in before) {
                if (group[b] != group[i]) {
                    edges.getOrPut(group[i]) { mutableListOf() }.add(group[b])
                } else {
                    innerEdges.getOrPut(i) { mutableListOf() }.add(b)
                }
            }
        }

        val order = ArrayDeque<Int>()
        val traversed = mutableSetOf<Int>()
        val visited = mutableSetOf<Int>()

        for (node in grp.keys) {
            if (node !in traversed) {
                if (!topoSort(edges, node, order, traversed, visited)) {
                    return intArrayOf()
                }
            }
        }

        val innerList = mutableMapOf<Int, ArrayDeque<Int>>()
        val ans = IntArray(n)
        traversed.clear()
        visited.clear()

        for (node in innerEdges.keys) {
            innerList.getOrPut(group[node]) { ArrayDeque() }
            if (node !in traversed) {
                if (!topoSort(innerEdges, node, innerList[group[node]]!!, traversed, visited)) {
                    return intArrayOf()
                }
            }
        }

        var x = 0

        while (order.isNotEmpty()) {
            val g = order.poll()
            var y = 0

            if (g in innerList) {
                while (innerList[g]!!.isNotEmpty()) {
                    ans[x] = innerList[g]!!.poll()
                    grp[g]?.remove(ans[x])
                    x++
                }
            }

            grp[g]?.forEach { i ->
                ans[x++] = i
            }
        }

        return ans
    }

    private fun topoSort(
        edges: MutableMap<Int, MutableList<Int>>,
        node: Int,
        order: ArrayDeque<Int>,
        traversed: MutableSet<Int>,
        visited: MutableSet<Int>
    ): Boolean {
        if (node in traversed) return true
        if (node in visited) return false

        visited.add(node)

        edges[node]?.let { list ->
            for (i in list) {
                if (!topoSort(edges, i, order, traversed, visited)) {
                    return false
                }
            }
        }

        traversed.add(node)
        order.add(node)
        visited.remove(node)

        return true
    }
}