/**
 * Example:
 * var ti = TreeNode(5)
 * var v = ti.`val`
 * Definition for a binary tree node.
 * class TreeNode(var `val`: Int) {
 *     var left: TreeNode? = null
 *     var right: TreeNode? = null
 * }
 */
class Solution {
    fun deleteNode(root: TreeNode?, key: Int): TreeNode? {
        if (root == null) return null

        if (key < root.`val`) {
            root.left = deleteNode(root.left, key)
        } else if (key > root.`val`) {
            root.right = deleteNode(root.right, key)
        } else {
            if (root.left == null) return root.right
            else if (root.right == null) return root.left

            val minValue = findMinValue(root.right!!)
            root.`val` = minValue
            root.right = deleteNode(root.right, minValue)
        }

        return root
    }

    private fun findMinValue(node: TreeNode): Int {
        var current = node
        while (current.left != null) {
            current = current.left!!
        }
        return current.`val`
    }
}