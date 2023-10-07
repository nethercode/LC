class Solution {
    fun maxOperations(nums: IntArray, k: Int): Int {
        val countMap = HashMap<Int, Int>()
        var operationsCount = 0

        for (num in nums) {
            val count = countMap.getOrDefault(num, 0)
            val diff = k - num

            if (countMap.containsKey(diff) && countMap[diff]!! > 0) {
                operationsCount++
                countMap[diff] = countMap[diff]!! - 1
            } else {
                countMap[num] = count + 1
            }
        }

        return operationsCount
    }
}
