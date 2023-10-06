func maxProfit(k int, prices []int) int {
    n := len(prices)
    if n < 2 {
        return 0
    }
    if k > n/2 {
        // can do as many transactions as possible
        maxProfit := 0
        for i := 1; i < n; i++ {
            if prices[i] > prices[i-1] {
                maxProfit += prices[i] - prices[i-1]
            }
        }
        return maxProfit
    }
    buy := make([][]int, n)
    sell := make([][]int, n)
    for i := range buy {
        buy[i] = make([]int, k+1)
        sell[i] = make([]int, k+1)
    }
    for j := 1; j <= k; j++ {
        buy[0][j] = -prices[0]
        sell[0][j] = 0
    }
    for i := 1; i < n; i++ {
        buy[i][0] = max(buy[i-1][0], -prices[i])
        for j := 1; j <= k; j++ {
            buy[i][j] = max(buy[i-1][j], sell[i-1][j-1]-prices[i])
            sell[i][j] = max(sell[i-1][j], buy[i-1][j]+prices[i])
        }
    }
    return sell[n-1][k]
}

func max(x, y int) int {
    if x > y {
        return x
    }
    return y
}
