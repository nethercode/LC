class Solution {
    fun minInsertions(s: String): Int {
        val n = s.length
        val dp = Array(n) { IntArray(n) }

        for (length in 2..n) {
            for (i in 0 until n - length + 1) {
                val j = i + length - 1
                if (s[i] == s[j]) {
                    dp[i][j] = dp[i + 1][j - 1]
                } else {
                    dp[i][j] = minOf(dp[i + 1][j], dp[i][j - 1]) + 1
                }
            }
        }

        return dp[0][n - 1]
    }
}
