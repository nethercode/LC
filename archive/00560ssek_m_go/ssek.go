func subarraySum(nums []int, k int) int {
    prefixSum := make(map[int]int)
    prefixSum[0] = 1 // For the case where a subarray with sum k starts from index 0
    count, sum := 0, 0
    for _, num := range nums {
        sum += num
        if val, ok := prefixSum[sum-k]; ok {
            count += val
        }
        prefixSum[sum]++
    }
    return count
}
