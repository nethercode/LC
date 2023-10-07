class Solution {
    fun goodNodes(root: TreeNode?): Int {
        return dfs(root, Int.MIN_VALUE)
    }

    private fun dfs(node: TreeNode?, maxValue: Int): Int {
        if (node == null) {
            return 0
        }

        var count = 0
        if (node.`val` >= maxValue) {
            count++
        }

        count += dfs(node.left, maxOf(maxValue, node.`val`))
        count += dfs(node.right, maxOf(maxValue, node.`val`))

        return count
    }
}