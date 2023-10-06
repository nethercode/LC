function numSquares(n: number): number {
    const dp = new Array(n + 1).fill(Number.MAX_VALUE);
    dp[0] = 0;
  
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j * j <= i; j++) {
        dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
      }
    }
  
    return dp[n];
  }
  
  // test the function with some inputs
  const inputs = [12, 13, 25, 100];
  for (let i = 0; i < inputs.length; i++) {
    const n = inputs[i];
    const result = numSquares(n);
    console.log(`For n = ${n}, least number of perfect squares = ${result}`);
  }
  