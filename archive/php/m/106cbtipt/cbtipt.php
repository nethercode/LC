class Solution {
    /**
     * @param Integer[] $inorder
     * @param Integer[] $postorder
     * @return TreeNode
     */
    function buildTree($inorder, $postorder) {
        // Base case: empty tree
        if (empty($inorder) || empty($postorder)) {
            return null;
        }

        // Get the root value from the last element of postorder
        $rootValue = end($postorder);

        // Create a new TreeNode with the root value
        $root = new TreeNode($rootValue);

        // Find the index of the root value in the inorder traversal
        $rootIndex = array_search($rootValue, $inorder);

        // Split the inorder and postorder traversals into left and right subtrees
        $leftInorder = array_slice($inorder, 0, $rootIndex);
        $rightInorder = array_slice($inorder, $rootIndex + 1);
        $leftPostorder = array_slice($postorder, 0, count($leftInorder));
        $rightPostorder = array_slice($postorder, count($leftInorder), -1);

        // Recursively build the left and right subtrees
        $root->left = $this->buildTree($leftInorder, $leftPostorder);
        $root->right = $this->buildTree($rightInorder, $rightPostorder);

        return $root;
    }
}