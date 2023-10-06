class Solution {
    fun numTilings(n: Int): Int {
        val cache = Array<Array<Array<Long>>>(n + 1) { Array(2) { Array(2) { -1L } } }
        val mod = 1_000_000_007L

        fun dfs(pos: Int, topFree: Int, bottomFree: Int): Long {
            if (pos > n) return 0L
            if (pos == n) return if (topFree == 1 && bottomFree == 1) 1L else 0L
            if (cache[pos][topFree][bottomFree] != -1L)
                return cache[pos][topFree][bottomFree]

            var count = 0L

            when {
                topFree == 1 && bottomFree == 1 -> {
                    count += dfs(pos + 1, 1, 1) // vertical
                    count += dfs(pos + 1, 0, 0) // horizontal
                    count += dfs(pos + 1, 1, 0) // tromino top
                    count += dfs(pos + 1, 0, 1) // tromino bottom
                }
                topFree == 1 -> {
                    count += dfs(pos + 1, 0, 0) // tromino
                    count += dfs(pos + 1, 1, 0) // horizontal
                }
                bottomFree == 1 -> {
                    count += dfs(pos + 1, 0, 0) // tromino
                    count += dfs(pos + 1, 0, 1) // horizontal
                }
                else -> {
                    count += dfs(pos + 1, 1, 1) // skip
                }
            }

            count %= mod
            cache[pos][topFree][bottomFree] = count
            return count
        }

        return dfs(0, 1, 1).toInt()
    }
}