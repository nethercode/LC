// Example usage
const TreeNode = function(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  };
  
  const rightSideView = function(root) {
    if (!root) {
      return [];
    }
  
    const result = [];
    const queue = [root];
  
    while (queue.length > 0) {
      const levelSize = queue.length;
  
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
  
        if (i === levelSize - 1) {
          result.push(node.val);
        }
  
        if (node.left) {
          queue.push(node.left);
        }
  
        if (node.right) {
          queue.push(node.right);
        }
      }
    }
  
    return result;
  };
  
  // Example tree
  const root = new TreeNode(1);
  root.left = new TreeNode(2);
  root.left.right = new TreeNode(5);
  root.right = new TreeNode(3);
  root.right.right = new TreeNode(4);
  
  // Print right side view of the tree
  console.log(rightSideView(root)); // Output: [1, 3, 4]
  