class Solution {
    fun longestZigZag(root: TreeNode?): Int = dfs(root, 0, 0)

    private fun dfs(root: TreeNode?, leftCount: Int, rightCount: Int): Int {
        if (root == null) return maxOf(leftCount, rightCount) - 1
        return maxOf(dfs(root.left, rightCount + 1, 0), dfs(root.right, 0, leftCount + 1))
    }
}
