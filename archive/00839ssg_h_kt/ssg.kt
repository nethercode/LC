class Solution {
    fun numSimilarGroups(strs: Array<String>): Int {
        val n = strs.size
        val parent = IntArray(n) { it }
        var count = n

        fun find(x: Int): Int {
            if (x != parent[x]) {
                parent[x] = find(parent[x])
            }
            return parent[x]
        }

        fun union(x: Int, y: Int) {
            val rootX = find(x)
            val rootY = find(y)
            if (rootX != rootY) {
                parent[rootX] = rootY
                count--
            }
        }

        fun isSimilar(a: String, b: String): Boolean {
            var diffCount = 0
            for (i in a.indices) {
                if (a[i] != b[i]) {
                    diffCount++
                    if (diffCount > 2) {
                        return false
                    }
                }
            }
            return true
        }

        for (i in 0 until n) {
            for (j in i + 1 until n) {
                if (isSimilar(strs[i], strs[j])) {
                    union(i, j)
                }
            }
        }

        return count
    }
}