from typing import List

class Solution:
    def canJump(self, nums: List[int]) -> bool:
        n = len(nums)
        farthest = 0
        
        for i in range(n):
            if i > farthest:
                return False
            farthest = max(farthest, i + nums[i])
            
        return True

# Example usage
if __name__ == "__main__":
    s = Solution()
    nums = [2,3,1,1,4]
    result = s.canJump(nums)
    print(result) # Output: True
