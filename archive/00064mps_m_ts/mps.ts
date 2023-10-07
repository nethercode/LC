function minPathSum(grid: number[][]): number {
    const m = grid.length;
    const n = grid[0].length;
  
    // Initialize dp array
    const dp = new Array(m).fill(0).map(() => new Array(n).fill(0));
    dp[0][0] = grid[0][0];
  
    // Fill in dp array row by row and column by column
    for (let i = 1; i < m; i++) {
      dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    for (let j = 1; j < n; j++) {
      dp[0][j] = dp[0][j-1] + grid[0][j];
    }
    for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        dp[i][j] = grid[i][j] + Math.min(dp[i-1][j], dp[i][j-1]);
      }
    }
  
    // Return minimum path sum to reach bottom-right cell
    return dp[m-1][n-1];
  }
  

// Test input
const grid = [  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
];

// Compute minimum path sum
const minSum = minPathSum(grid);

// Print output to console
console.log(`The minimum path sum in the given grid is: ${minSum}`);
