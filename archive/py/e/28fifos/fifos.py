class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        if not needle:
            return 0
        for i in range(len(haystack)):
            if haystack[i:i+len(needle)] == needle:
                return i
        return -1

# Example usage
solution = Solution()
haystack = "hello world"
needle = "world"
index = solution.strStr(haystack, needle)
print(index) # Output: 6
