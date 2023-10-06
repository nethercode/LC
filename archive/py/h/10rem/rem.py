class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        # Create a 2D dp table with s.length + 1 rows and p.length + 1 columns
        dp = [[False] * (len(p) + 1) for _ in range(len(s) + 1)]
        
        # Initialize the dp table
        dp[0][0] = True  # Empty string matches empty pattern
        
        # Initialize the first row of the dp table
        for j in range(2, len(p) + 1):
            dp[0][j] = dp[0][j - 2] and p[j - 1] == '*'
        
        # Fill in the remaining cells of the dp table
        for i in range(1, len(s) + 1):
            for j in range(1, len(p) + 1):
                if p[j - 1] == '.' or p[j - 1] == s[i - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                elif p[j - 1] == '*':
                    # Case 1: Zero occurrence of the preceding element
                    dp[i][j] = dp[i][j - 2]
                    # Case 2: One or more occurrences of the preceding element
                    if p[j - 2] == '.' or p[j - 2] == s[i - 1]:
                        dp[i][j] = dp[i][j] or dp[i - 1][j]
        
        # Return the result
        return dp[-1][-1]
