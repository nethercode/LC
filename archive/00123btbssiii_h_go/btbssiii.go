func maxProfit(prices []int) int {
    n := len(prices)
    if n <= 1 {
        return 0
    }
    minPrice := prices[0]
    maxProfit1 := 0
    maxProfits1 := make([]int, n)
    for i := 1; i < n; i++ {
        if prices[i] < minPrice {
            minPrice = prices[i]
        }
        profit := prices[i] - minPrice
        if profit > maxProfit1 {
            maxProfit1 = profit
        }
        maxProfits1[i] = maxProfit1
    }
    maxPrice := prices[n-1]
    maxProfit2 := 0
    maxProfits2 := make([]int, n)
    for i := n - 2; i >= 0; i-- {
        if prices[i] > maxPrice {
            maxPrice = prices[i]
        }
        profit := maxPrice - prices[i]
        if profit > maxProfit2 {
            maxProfit2 = profit
        }
        maxProfits2[i] = maxProfit2
    }
    maxProfit := 0
    for i := 0; i < n; i++ {
        if maxProfits1[i]+maxProfits2[i] > maxProfit {
            maxProfit = maxProfits1[i] + maxProfits2[i]
        }
    }
    return maxProfit
}
