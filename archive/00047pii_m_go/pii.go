func permuteUnique(nums []int) [][]int {
    result := [][]int{}
    visited := make([]bool, len(nums))
    permutation := []int{}
    sort.Ints(nums) // Sort the input to handle duplicates

    backtrack(nums, visited, permutation, &result)

    return result
}

func backtrack(nums []int, visited []bool, permutation []int, result *[][]int) {
    if len(permutation) == len(nums) {
        temp := make([]int, len(permutation))
        copy(temp, permutation)
        *result = append(*result, temp)
        return
    }

    for i := 0; i < len(nums); i++ {
        // Skip visited elements or skip duplicates
        if visited[i] || (i > 0 && nums[i] == nums[i-1] && !visited[i-1]) {
            continue
        }

        visited[i] = true
        permutation = append(permutation, nums[i])
        backtrack(nums, visited, permutation, result)
        permutation = permutation[:len(permutation)-1]
        visited[i] = false
    }
}