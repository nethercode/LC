function firstMissingPositive(arr: number[]): number {
    const n = arr.length;
  
    // First pass: move all positive integers to the left side of the array
    for (let i = 0; i < n; i++) {
      while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
        const j = arr[i] - 1;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  
    // Second pass: find the first missing positive integer
    for (let i = 0; i < n; i++) {
      if (arr[i] !== i + 1) {
        return i + 1;
      }
    }
  
    // If all positive integers from 1 to n are present, return n+1
    return n + 1;
  }
  
  // Example usage and output
  let arr = [3, 4, -1, 1, 5, -2];
  let result = firstMissingPositive(arr);
  console.log(result); // Output: 2
  