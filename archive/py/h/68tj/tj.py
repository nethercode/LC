class Solution:
    def fullJustify(self, words, maxWidth):
        result = []
        i = 0
        while i < len(words):
            j = i + 1
            line_length = len(words[i])
            while j < len(words) and (line_length + len(words[j]) + j - i) <= maxWidth:
                line_length += len(words[j])
                j += 1
            
            num_words = j - i
            if num_words == 1 or j == len(words):
                line = " ".join(words[i:j])
                line += " " * (maxWidth - len(line))
            else:
                num_spaces = maxWidth - line_length
                num_gaps = num_words - 1
                space_between_words = num_spaces // num_gaps
                extra_spaces = num_spaces % num_gaps
                line = ""
                for k in range(i, j-1):
                    line += words[k]
                    line += " " * space_between_words
                    if extra_spaces > 0:
                        line += " "
                        extra_spaces -= 1
                line += words[j-1]
            
            result.append(line)
            i = j
        
        return result

words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16

sol = Solution()
result = sol.fullJustify(words, maxWidth)
print(result)
