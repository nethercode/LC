function coinChange(coins: number[], amount: number): number {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
  
    for (const coin of coins) {
      for (let i = coin; i <= amount; i++) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1);
      }
    }
  
    return dp[amount] === Infinity ? -1 : dp[amount];
  }  

const coins = [1, 2, 5];
const amount = 11;
const result = coinChange(coins, amount);

if (result === -1) {
  console.log(`It is impossible to make up ${amount} using the given coins.`);
} else {
  console.log(`The minimum number of coins needed to make up ${amount} is ${result}.`);
}
