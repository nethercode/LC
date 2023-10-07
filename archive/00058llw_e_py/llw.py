class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.split()
        if not words:
            return 0
        return len(words[-1])

s = "Hello world"
solution = Solution()
last_word_length = solution.lengthOfLastWord(s)
print("The length of the last word in '{}' is {}.".format(s, last_word_length))
