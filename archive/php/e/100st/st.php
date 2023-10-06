class Solution {
    /**
     * @param TreeNode $p
     * @param TreeNode $q
     * @return Boolean
     */
    function isSameTree($p, $q) {
        // If both trees are empty, they are the same
        if ($p === null && $q === null) {
            return true;
        }

        // If one tree is empty and the other is not, they are different
        if ($p === null || $q === null) {
            return false;
        }

        // If the node values are different, the trees are different
        if ($p->val !== $q->val) {
            return false;
        }

        // Recursively check the left and right subtrees
        $leftSame = $this->isSameTree($p->left, $q->left);
        $rightSame = $this->isSameTree($p->right, $q->right);

        // Return true only if both subtrees are the same
        return $leftSame && $rightSame;
    }
}