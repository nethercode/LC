class Solution {
    fun closeStrings(
        word1: String,
        word2: String,
        f: (String) -> List<Int> = { it.groupBy { it }.values.map { it.size }.sorted() }
    ): Boolean = f(word1) == f(word2) && word1.toSet() == word2.toSet()
}