package main

import "fmt"

func rotate(nums []int, k int) {
    n := len(nums)
    k %= n // to handle cases where k > n

    // Reverse the first n-k elements
    for i, j := 0, n-k-1; i < j; i, j = i+1, j-1 {
        nums[i], nums[j] = nums[j], nums[i]
    }

    // Reverse the last k elements
    for i, j := n-k, n-1; i < j; i, j = i+1, j-1 {
        nums[i], nums[j] = nums[j], nums[i]
    }

    // Reverse the entire array
    for i, j := 0, n-1; i < j; i, j = i+1, j-1 {
        nums[i], nums[j] = nums[j], nums[i]
    }
}

func testRotate() {
    nums := []int{1, 2, 3, 4, 5, 6, 7}
    k := 3
    fmt.Println("Input array:", nums)
    fmt.Println("K:", k)
    rotate(nums, k)
    fmt.Println("Rotated array:", nums)
}

func main() {
    testRotate()
}
