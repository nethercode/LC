func removeDuplicates(nums []int) int {
    if len(nums) <= 2 {
        return len(nums)
    }

    k := 2 // Initialize the pointer for the next position to be filled

    for i := 2; i < len(nums); i++ {
        // If the current number is different from the two previous numbers,
        // it can be included in the final result
        if nums[i] != nums[k-2] || nums[i] != nums[k-1] {
            nums[k] = nums[i]
            k++
        }
    }

    return k
}
