function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);

const inorderTraversal = (root) => {
    const result = [];
    
    const inorder = (node) => {
        if (!node) {
            return;
        }
        inorder(node.left);
        result.push(node.val);
        inorder(node.right);
    };
    
    inorder(root);
    return result;
};

console.log(inorderTraversal(root)); // [1, 3, 2]
