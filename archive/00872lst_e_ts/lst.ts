class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.left = (left===undefined ? null : left);
        this.right = (right===undefined ? null : right);
    }
  }
  
  function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
      const leaves1: number[] = [];
      const leaves2: number[] = [];
      dfs(root1, leaves1);
      dfs(root2, leaves2);
      return arraysEqual(leaves1, leaves2);
  }
  
  function dfs(node: TreeNode | null, leaves: number[]) {
      if (!node) return;
      if (!node.left && !node.right) {
          leaves.push(node.val);
      }
      dfs(node.left, leaves);
      dfs(node.right, leaves);
  }
  
  function arraysEqual(a: any[], b: any[]): boolean {
      if (a.length !== b.length) return false;
      for (let i = 0; i < a.length; i++) {
          if (a[i] !== b[i]) return false;
      }
      return true;
  }
  