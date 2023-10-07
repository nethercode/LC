/**
 * Finds the maximum path sum in a binary tree. A path is defined as any
 * sequence of nodes from some starting node to any node in the tree along
 * the parent-child connections. The path must contain at least one node
 * and does not need to go through the root.
 *
 * @param {TreeNode} root The root node of the binary tree.
 * @return {number} The maximum path sum.
 */

var maxPathSum = function(root) {
    let maxSum = -Infinity;
  
    function maxPathSumHelper(node) {
      // base case: return 0 for null nodes
      if (!node) {
        return 0;
      }
  
      // find the maximum path sum for the left and right subtrees
      const leftSum = Math.max(0, maxPathSumHelper(node.left));
      const rightSum = Math.max(0, maxPathSumHelper(node.right));
  
      // calculate the maximum path sum that includes the current node
      const pathSum = node.val + leftSum + rightSum;
  
      // update the maximum path sum seen so far
      maxSum = Math.max(maxSum, pathSum);
  
      // return the maximum path sum that includes the current node
      return node.val + Math.max(leftSum, rightSum);
    }
  
    // call the helper function to compute the maximum path sum
    maxPathSumHelper(root);
  
    // return the maximum path sum, or 0 if the tree is empty
    return maxSum !== -Infinity ? maxSum : 0;
  };
  
/* Code for test:
const tree = new TreeNode(1);
tree.left = new TreeNode(2);
tree.right = new TreeNode(3);

console.log(maxPathSum(tree)); // expect 6
*/