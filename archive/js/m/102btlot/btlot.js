var levelOrder = function(root) {
    if (!root) {
      return [];
    }
    const result = [];
    const queue = [root];
    while (queue.length) {
      const level = [];
      const levelSize = queue.length;
      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift();
        level.push(node.val);
        if (node.left) {
          queue.push(node.left);
        }
        if (node.right) {
          queue.push(node.right);
        }
      }
      result.push(level);
    }
    return result;
  };
  

let rtls = [3,9,20,null,null,15,7];

console.log(levelOrder(rtls));