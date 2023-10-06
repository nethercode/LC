class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        if len(nums) == 0:
            return 0
        
        i = 0
        for j in range(1, len(nums)):
            if nums[i] != nums[j]:
                i += 1
                nums[i] = nums[j]
                
        return i+1

# Example usage and output
nums = [1, 1, 2, 2, 2, 3, 4, 5, 5, 5]
sol = Solution()
k = sol.removeDuplicates(nums)
print("The number of unique elements in the array is:", k)
print("The array with duplicates removed is:", nums[:k])
