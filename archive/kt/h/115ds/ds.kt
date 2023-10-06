class Solution {
    fun numDistinct(s: String, t: String): Int {
        val m = s.length
        val n = t.length
        val dp = Array(m + 1) { IntArray(n + 1) }

        // Initialize the dp array
        for (i in 0..m) {
            dp[i][0] = 1
        }

        for (i in 1..m) {
            for (j in 1..n) {
                if (s[i - 1] == t[j - 1]) {
                    dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j]
                } else {
                    dp[i][j] = dp[i - 1][j]
                }
            }
        }

        return dp[m][n]
    }
}
