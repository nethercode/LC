class Solution {
    fun wordBreak(s: String, wordDict: List<String>): List<String> {
        val memo = HashMap<String, List<String>>()
        return wordBreakHelper(s, wordDict, memo)
    }

    private fun wordBreakHelper(
        s: String,
        wordDict: List<String>,
        memo: MutableMap<String, List<String>>
    ): List<String> {
        if (memo.containsKey(s)) {
            return memo[s]!!
        }
        
        val result = ArrayList<String>()
        
        if (s.isEmpty()) {
            result.add("")
            return result
        }
        
        for (word in wordDict) {
            if (s.startsWith(word)) {
                val subList = wordBreakHelper(s.substring(word.length), wordDict, memo)
                for (sub in subList) {
                    val space = if (sub.isEmpty()) "" else " "
                    result.add(word + space + sub)
                }
            }
        }
        
        memo[s] = result
        return result
    }
}