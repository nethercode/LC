// Define a binary tree
//       1
//      / \
//     2   5
//    / \   \
//   3   4   6

function TreeNode(val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
root.left.right = new TreeNode(4);
root.right = new TreeNode(5);
root.right.right = new TreeNode(6);

// Flatten the binary tree into a linked list
function flatten(root) {
    if (!root) {
        return;
    }
    flatten(root.left);
    flatten(root.right);
    let temp = root.right;
    root.right = root.left;
    root.left = null;
    let curr = root;
    while (curr.right) {
        curr = curr.right;
    }
    curr.right = temp;
}

flatten(root);

// Traverse the linked list and print the values
let curr = root;
while (curr) {
    console.log(curr.val);
    curr = curr.right;
}
