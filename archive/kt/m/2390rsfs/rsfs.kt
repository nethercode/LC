class Solution {
    fun removeStars(s: String): String {
        val stack = mutableListOf<Char>()
        for (c in s) {
            if (c == '*') {
                if (stack.isNotEmpty()) {
                    stack.removeAt(stack.lastIndex)
                }
            } else {
                stack.add(c)
            }
        }
        return stack.joinToString("")
    }
}
