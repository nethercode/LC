/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

/**
 * Inverts a binary tree.
 * @param {TreeNode} root The root node of the binary tree.
 * @return {TreeNode} The root node of the inverted binary tree.
 */
function invertTree(root) {
    if (!root) {
        return null;
    }
    
    let temp = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(temp);
    
    return root;
}

// Sample binary tree:      4
//                        /   \
//                       2     7
//                      / \   / \
//                     1   3 6   9

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(7);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(9);

// Print the original tree
console.log("Original tree:");
printTree(root);

// Invert the tree
invertTree(root);

// Print the inverted tree
console.log("Inverted tree:");
printTree(root);

function printTree(node, level = 0) {
    if (!node) {
        return;
    }
    printTree(node.right, level + 1);
    console.log(" ".repeat(level * 4) + node.val);
    printTree(node.left, level + 1);
}
