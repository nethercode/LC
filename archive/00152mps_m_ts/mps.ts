function maxProduct(nums: number[]): number {
    let maxDP = new Array(nums.length);
    let minDP = new Array(nums.length);
    maxDP[0] = nums[0];
    minDP[0] = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxDP[i] = Math.max(nums[i], maxDP[i-1] * nums[i], minDP[i-1] * nums[i]);
        minDP[i] = Math.min(nums[i], maxDP[i-1] * nums[i], minDP[i-1] * nums[i]);
        result = Math.max(result, maxDP[i]);
    }

    return result;
}

// CLI output test
console.log(maxProduct([2, 3, -2, 4])); // expected output: 6 (from subarray [2, 3])
console.log(maxProduct([-2, 0, -1])); // expected output: 0 (from subarray [0])
