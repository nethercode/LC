var isValidBST = function(root) {
    let prev = null;
    
    const inorder = (node) => {
        if (!node) return true;
        
        if (!inorder(node.left)) return false;
        
        if (prev !== null && node.val <= prev) return false;
        prev = node.val;
        
        return inorder(node.right);
    }
    
    return inorder(root);
};

let rtls = [5,1,4,null,null,3,6];

console.log(isValidBST(rtls));