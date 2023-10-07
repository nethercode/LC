class BSTIterator {
    private $stack;

    /**
     * @param TreeNode $root
     */
    function __construct($root) {
        $this->stack = [];
        $this->leftmostInorder($root);
    }
  
    /**
     * @return Integer
     */
    function next() {
        $topmostNode = array_pop($this->stack);
        if ($topmostNode->right != null) {
            $this->leftmostInorder($topmostNode->right);
        }
        return $topmostNode->val;
    }
  
    /**
     * @return Boolean
     */
    function hasNext() {
        return !empty($this->stack);
    }
  
    /**
     * @param TreeNode $node
     */
    private function leftmostInorder($node) {
        while ($node != null) {
            $this->stack[] = $node;
            $node = $node->left;
        }
    }
}