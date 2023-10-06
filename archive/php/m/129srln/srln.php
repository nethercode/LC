class Solution {
    /**
     * @param TreeNode $root
     * @return Integer
     */
    function sumNumbers($root) {
        return $this->dfs($root, 0);
    }

    /**
     * Helper function for DFS traversal.
     * @param TreeNode $node
     * @param Integer $currentSum
     * @return Integer
     */
    function dfs($node, $currentSum) {
        if ($node === null) {
            return 0;
        }
        
        $currentSum = ($currentSum * 10) + $node->val;

        if ($node->left === null && $node->right === null) {
            return $currentSum;
        }

        $leftSum = $this->dfs($node->left, $currentSum);
        $rightSum = $this->dfs($node->right, $currentSum);

        return $leftSum + $rightSum;
    }
}