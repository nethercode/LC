/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * Counts the number of paths in a binary tree where the sum of the values
 * along the path equals a given target sum.
 * @param {TreeNode} root - The root of the binary tree.
 * @param {number} targetSum - The target sum.
 * @return {number} The number of paths in the binary tree that add up to the target sum.
 */
var pathSum = function(root, targetSum) {
    let count = 0;
    const prefixSums = {0: 1}; // initialize prefixSums with 0:1 to handle cases where node.val = targetSum
    
    const dfs = (node, currentSum) => {
        if (!node) return;
        
        currentSum += node.val;
        count += prefixSums[currentSum - targetSum] || 0;
        prefixSums[currentSum] = (prefixSums[currentSum] || 0) + 1;
        
        dfs(node.left, currentSum);
        dfs(node.right, currentSum);
        
        prefixSums[currentSum] -= 1; // backtrack to remove current sum from prefixSums
    }
    
    dfs(root, 0);
    return count;
};

// Example usage:
const root = {
    val: 10,
    left: {
        val: 5,
        left: {
            val: 3,
            left: {
                val: 3,
                left: null,
                right: null
            },
            right: {
                val: -2,
                left: null,
                right: null
            }
        },
        right: {
            val: 2,
            left: null,
            right: {
                val: 1,
                left: null,
                right: null
            }
        }
    },
    right: {
        val: -3,
        left: null,
        right: {
            val: 11,
            left: null,
            right: null
        }
    }
};

const targetSum = 8;

console.log(pathSum(root, targetSum)); // Output: 3
