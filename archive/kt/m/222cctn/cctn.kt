class Solution {
    fun countNodes(root: TreeNode?): Int {
        if (root == null) return 0
        
        var leftHeight = 0
        var rightHeight = 0
        
        var left = root
        var right = root
        
        while (left != null) {
            left = left.left
            leftHeight++
        }
        
        while (right != null) {
            right = right.right
            rightHeight++
        }
        
        if (leftHeight == rightHeight) {
            return (1 shl leftHeight) - 1
        }
        
        return 1 + countNodes(root.left) + countNodes(root.right)
    }
}
