/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) {
        return 1;
    }
    let dp = [1, 1];
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i-1] + dp[i-2];
    }
    return dp[n];
};

// Example usage with print output
const n = 4;
const ways = climbStairs(n);
console.log(`The number of distinct ways to climb ${n} stairs is ${ways}.`);
