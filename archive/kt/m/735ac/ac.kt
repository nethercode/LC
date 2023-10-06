class Solution {
    fun asteroidCollision(asteroids: IntArray): IntArray {
        val stack = mutableListOf<Int>()
        
        for (asteroid in asteroids) {
            if (asteroid > 0) {
                stack.add(asteroid)
            } else {
                while (stack.isNotEmpty() && stack.last() > 0 && stack.last() < -asteroid) {
                    stack.removeAt(stack.lastIndex)
                }
                
                if (stack.isEmpty() || stack.last() < 0) {
                    stack.add(asteroid)
                } else if (stack.last() == -asteroid) {
                    stack.removeAt(stack.lastIndex)
                }
            }
        }
        
        return stack.toIntArray()
    }
}
