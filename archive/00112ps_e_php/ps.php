class Solution {
    /**
     * @param TreeNode $root
     * @param Integer $targetSum
     * @return Boolean
     */
    function hasPathSum($root, $targetSum) {
        if ($root == null) {
            return false; // Empty tree, no path exists
        }
        
        if ($root->left == null && $root->right == null) {
            return $root->val == $targetSum; // Check if leaf node value equals target sum
        }
        
        $remainingSum = $targetSum - $root->val;
        return $this->hasPathSum($root->left, $remainingSum) || $this->hasPathSum($root->right, $remainingSum);
    }
}
