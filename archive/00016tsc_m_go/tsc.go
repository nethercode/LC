import "sort"

func threeSumClosest(nums []int, target int) int {
    n := len(nums)
    closestSum := nums[0] + nums[1] + nums[2]
    diff := abs(closestSum - target)
    
    sort.Ints(nums)
    
    for i := 0; i < n-2; i++ {
        left := i + 1
        right := n - 1
        
        for left < right {
            sum := nums[i] + nums[left] + nums[right]
            currentDiff := abs(sum - target)
            
            if currentDiff < diff {
                diff = currentDiff
                closestSum = sum
            }
            
            if sum < target {
                left++
            } else if sum > target {
                right--
            } else {
                return sum
            }
        }
    }
    
    return closestSum
}

func abs(num int) int {
    if num < 0 {
        return -num
    }
    return num
}