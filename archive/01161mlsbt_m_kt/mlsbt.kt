import java.util.*

class Solution {
    fun maxLevelSum(root: TreeNode?): Int {
        if (root == null) return 0

        var maxSum = Int.MIN_VALUE
        var maxLevel = 1
        var level = 1

        val queue: Queue<TreeNode> = LinkedList()
        queue.offer(root)

        while (!queue.isEmpty()) {
            val size = queue.size
            var levelSum = 0

            for (i in 0 until size) {
                val node = queue.poll()
                levelSum += node.`val`

                node.left?.let { queue.offer(it) }
                node.right?.let { queue.offer(it) }
            }

            if (levelSum > maxSum) {
                maxSum = levelSum
                maxLevel = level
            }

            level++
        }

        return maxLevel
    }
}