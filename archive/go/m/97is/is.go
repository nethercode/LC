func isInterleave(s1 string, s2 string, s3 string) bool {
    m, n := len(s1), len(s2)
    
    // Check if the lengths of s1 and s2 add up to s3
    if m+n != len(s3) {
        return false
    }
    
    // Initialize the dynamic programming array
    dp := make([][]bool, m+1)
    for i := range dp {
        dp[i] = make([]bool, n+1)
    }
    
    // Base case: empty strings
    dp[0][0] = true
    
    // Fill in the first row (s1 = "")
    for j := 1; j <= n; j++ {
        dp[0][j] = dp[0][j-1] && (s2[j-1] == s3[j-1])
    }
    
    // Fill in the first column (s2 = "")
    for i := 1; i <= m; i++ {
        dp[i][0] = dp[i-1][0] && (s1[i-1] == s3[i-1])
    }
    
    // Fill in the remaining cells
    for i := 1; i <= m; i++ {
        for j := 1; j <= n; j++ {
            dp[i][j] = (dp[i-1][j] && (s1[i-1] == s3[i+j-1])) ||
                       (dp[i][j-1] && (s2[j-1] == s3[i+j-1]))
        }
    }
    
    // Return the result
    return dp[m][n]
}