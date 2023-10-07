class Solution:
    def longestCommonPrefix(self, strs: list[str]) -> str:
        if not strs:
            return ""
        
        # Sort the array of strings
        strs.sort()
        
        # Get the first and last string in the array
        first = strs[0]
        last = strs[-1]
        
        # Find the common prefix between the first and last string
        prefix = ""
        for i in range(len(first)):
            if first[i] == last[i]:
                prefix += first[i]
            else:
                break
        
        return prefix

# Call the function and print the result
strs = ["flower", "flow", "flight"]
solution = Solution()
print("Longest common prefix:", solution.longestCommonPrefix(strs))
