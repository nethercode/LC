class Solution {
    fun nextGreatestLetter(letters: CharArray, target: Char): Char {
        var left = 0
        var right = letters.size - 1

        // Special case: if the target is greater than the last letter,
        // wrap around and return the first letter.
        if (target >= letters[right]) {
            return letters[0]
        }

        while (left <= right) {
            val mid = left + (right - left) / 2

            if (letters[mid] <= target) {
                // If the current letter is less than or equal to the target,
                // search in the right half of the array.
                left = mid + 1
            } else {
                // If the current letter is greater than the target,
                // search in the left half of the array.
                right = mid - 1
            }
        }

        // The loop terminates when left > right.
        // The smallest character greater than the target is letters[left].
        return letters[left]
    }
}
