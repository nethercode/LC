from typing import List

class Solution:
    def jump(self, nums: List[int]) -> int:
        n = len(nums)
        jumps = 0
        curr_end = 0
        curr_max = 0
        
        for i in range(n-1):
            curr_max = max(curr_max, i+nums[i])
            
            if i == curr_end:
                jumps += 1
                curr_end = curr_max
                
        return jumps

nums = [2,3,1,1,4]
solution = Solution()
print(solution.jump(nums))  # Output: 2
