class Solution {
    fun minEatingSpeed(piles: IntArray, h: Int): Int {
        var left = 1
        var right = Int.MIN_VALUE
        for (pile in piles) {
            if (pile > right) {
                right = pile
            }
        }

        while (left < right) {
            val mid = left + (right - left) / 2
            if (canEatAll(piles, h, mid)) {
                right = mid
            } else {
                left = mid + 1
            }
        }

        return left
    }

    private fun canEatAll(piles: IntArray, h: Int, k: Int): Boolean {
        var hours = 0
        for (pile in piles) {
            hours += (pile + k - 1) / k
        }
        return hours <= h
    }
}