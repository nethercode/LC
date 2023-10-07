class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        i, n = 0, len(nums)
        while i < n:
            if nums[i] == val:
                nums[i], nums[n-1] = nums[n-1], nums[i]
                n -= 1
            else:
                i += 1
        return n

nums = [3, 2, 2, 3]
val = 3

solution = Solution()
k = solution.removeElement(nums, val)
result = nums[:k]

print(result)
