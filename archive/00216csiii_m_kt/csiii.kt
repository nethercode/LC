class Solution {
    fun combinationSum3(k: Int, n: Int): List<List<Int>> {
        val combinations = mutableListOf<List<Int>>()
        backtrack(k, n, 1, mutableListOf(), combinations)
        return combinations
    }

    private fun backtrack(k: Int, target: Int, start: Int, combination: MutableList<Int>, combinations: MutableList<List<Int>>) {
        if (target < 0 || combination.size > k) {
            return
        }
        
        if (target == 0 && combination.size == k) {
            combinations.add(combination.toList())
            return
        }
        
        for (i in start..9) {
            combination.add(i)
            backtrack(k, target - i, i + 1, combination, combinations)
            combination.removeAt(combination.size - 1)
        }
    }
}
