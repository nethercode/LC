func findKthLargest(nums []int, k int) int {
    if len(nums) == 1 {
        return nums[0]
    }
    pivot := nums[0]
    left := 0
    right := len(nums) - 1
    for left <= right {
        for left <= right && nums[left] >= pivot {
            left++
        }
        for left <= right && nums[right] < pivot {
            right--
        }
        if left < right {
            nums[left], nums[right] = nums[right], nums[left]
        }
    }
    nums[0], nums[right] = nums[right], nums[0]
    if right+1 == k {
        return nums[right]
    } else if right+1 < k {
        return findKthLargest(nums[right+1:], k-right-1)
    } else {
        return findKthLargest(nums[:right], k)
    }
}
