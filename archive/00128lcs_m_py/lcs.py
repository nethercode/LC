from typing import List

class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        num_dict = {}
        longest_sequence = 0
        
        for num in nums:
            if num not in num_dict:
                left = num_dict.get(num-1, 0)
                right = num_dict.get(num+1, 0)
                current_sequence = left + right + 1
                longest_sequence = max(longest_sequence, current_sequence)
                
                num_dict[num] = current_sequence
                num_dict[num-left] = current_sequence
                num_dict[num+right] = current_sequence
        
        return longest_sequence

# Example usage
s = Solution()
nums = [100, 4, 200, 1, 3, 2]
print(s.longestConsecutive(nums))  # Output: 4
