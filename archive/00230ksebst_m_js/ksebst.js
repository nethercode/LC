function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

var kthSmallest = function(root, k) {
    let count = 0;
    let result = null;
    
    const traverse = (node) => {
        if (node.left) traverse(node.left);
        
        count++;
        if (count === k) {
            result = node.val;
            return;
        }
        
        if (node.right) traverse(node.right);
    };
    
    traverse(root);
    
    return result;
};

// Example usage:

const root = new TreeNode(5,
    new TreeNode(3,
        new TreeNode(2),
        new TreeNode(4)
    ),
    new TreeNode(6,
        null,
        new TreeNode(7)
    )
);

const k = 3;

const kth = kthSmallest(root, k);

console.log(kth); // Output: 4
