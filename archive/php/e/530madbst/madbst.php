class Solution {
    private $minDiff = PHP_INT_MAX;
    private $prevValue = null;

    /**
     * @param TreeNode $root
     * @return Integer
     */
    function getMinimumDifference($root) {
        $this->inorderTraversal($root);
        return $this->minDiff;
    }

    private function inorderTraversal($node) {
        if ($node == null) {
            return;
        }

        $this->inorderTraversal($node->left);

        if ($this->prevValue !== null) {
            $this->minDiff = min($this->minDiff, abs($node->val - $this->prevValue));
        }
        $this->prevValue = $node->val;

        $this->inorderTraversal($node->right);
    }
}