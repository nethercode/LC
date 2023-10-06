class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
}

var buildTree = function(preorder, inorder) {
    function build(preStart, inStart, inEnd) {
        if (inStart > inEnd) {
            return null;
        }
        
        const root = new TreeNode(preorder[preStart]);
        const rootIndex = inorder.indexOf(preorder[preStart]);
        const leftSize = rootIndex - inStart;
        
        root.left = build(preStart + 1, inStart, rootIndex - 1);
        root.right = build(preStart + leftSize + 1, rootIndex + 1, inEnd);
        
        return root;
    }
    
    return build(0, 0, inorder.length - 1);
};

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];
const root = buildTree(preorder, inorder);
console.log(root);
