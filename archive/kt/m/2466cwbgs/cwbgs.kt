class Solution {
    fun countGoodStrings(low: Int, high: Int, zero: Int, one: Int): Int {
        val dp = mutableMapOf<Int, Int>()
        dp[0] = 1
        val mod = 1_000_000_007

        for (i in 1..high) {
            val z = dp.getOrDefault(i - zero, 0)
            val o = dp.getOrDefault(i - one, 0)
            val n = (z + o) % mod
            dp[i] = n
        }

        var ans = 0
        for (i in low..high) {
            ans = (ans + dp.getOrDefault(i, 0)) % mod
        }

        return ans
    }
}
