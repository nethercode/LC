func minimumTotal(triangle [][]int) int {
    n := len(triangle)
    
    // Create a dp array to store the minimum path sum
    dp := make([]int, n)
    
    // Copy the last row of the triangle to dp as the base case
    for i := 0; i < n; i++ {
        dp[i] = triangle[n-1][i]
    }
    
    // Start from the second last row and calculate the minimum path sum
    for i := n - 2; i >= 0; i-- {
        for j := 0; j <= i; j++ {
            // Choose the smaller of the two adjacent elements in the next row
            minSum := min(dp[j], dp[j+1])
            
            // Add the current element's value to the minimum sum
            dp[j] = triangle[i][j] + minSum
        }
    }
    
    // The minimum path sum will be stored at dp[0]
    return dp[0]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}
