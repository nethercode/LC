var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
};

let rtls = [1,null,2];

console.log(maxDepth(rtls));
