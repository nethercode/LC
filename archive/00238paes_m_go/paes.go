package main

import "fmt"

func productExceptSelf(nums []int) []int {
    n := len(nums)
    ans := make([]int, n)
    
    // Calculate the product of all elements to the left of each element
    leftProduct := make([]int, n)
    leftProduct[0] = 1
    for i := 1; i < n; i++ {
        leftProduct[i] = leftProduct[i-1] * nums[i-1]
    }
    
    // Calculate the product of all elements to the right of each element
    rightProduct := 1
    for i := n-1; i >= 0; i-- {
        ans[i] = leftProduct[i] * rightProduct
        rightProduct *= nums[i]
    }
    
    return ans
}

func main() {
    // Test the productExceptSelf function with sample input
    nums := []int{1, 2, 3, 4}
    result := productExceptSelf(nums)
    fmt.Println(result)
}
