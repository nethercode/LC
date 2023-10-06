function maxSlidingWindow(nums: number[], k: number): number[] {
    const result: number[] = [];
    const deque: number[] = [];
  
    for (let i = 0; i < nums.length; i++) {
      // Remove elements outside of the current window
      if (deque.length > 0 && deque[0] < i - k + 1) {
        deque.shift();
      }
  
      // Remove elements smaller than the current element
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
        deque.pop();
      }
  
      deque.push(i);
  
      // Add the maximum element to the result
      if (i >= k - 1) {
        result.push(nums[deque[0]]);
      }
    }
  
    return result;
  }
  
  // Test the function with sample input
  const nums = [1,3,-1,-3,5,3,6,7];
  const k = 3;
  const result = maxSlidingWindow(nums, k);
  
  // Print the result to the CLI
  console.log(result);
  