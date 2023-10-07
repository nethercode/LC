class Solution {
    fun mostPoints(questions: Array<IntArray>): Long {
        val dp = LongArray(questions.size + 1)

        for (i in (dp.size - 2) downTo 0) {
            val points = questions[i][0]
            val bp = questions[i][1]
            val take = 
                if (i + bp + 1 >= dp.size) points.toLong()
                else points + dp[i + bp + 1]
            val notTake = dp[i + 1]
            dp[i] = Math.max(take, notTake)
        }

        return dp[0]
    }
}
