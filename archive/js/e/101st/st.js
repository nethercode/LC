var isSymmetric = function(root) {
    if (!root) return true; // empty tree is symmetric
    
    // helper function to check if two nodes are mirror images of each other
    const isMirror = function(node1, node2) {
        if (!node1 && !node2) return true; // both nodes are null, so they are mirror images
        if (!node1 || !node2) return false; // one node is null, so they are not mirror images
        if (node1.val !== node2.val) return false; // values are not equal, so they are not mirror images
        // recursively check if the left subtree of node1 is a mirror image of the right subtree of node2,
        // and the right subtree of node1 is a mirror image of the left subtree of node2
        return isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left);
    }
    
    // call the helper function on the left and right children of the root
    return isMirror(root.left, root.right);
};

let rtls = [1,2,2,3,4,4,3];

console.log(isSymmetric(rtls));