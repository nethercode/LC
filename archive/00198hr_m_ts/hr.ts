function rob(nums: number[]): number {
    const n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    const dp = new Array<number>(n + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    for (let i = 2; i <= n; i++) {
      dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i-1]);
    }
    return dp[n];
  }
  
  // Test case 1
const nums1 = [1, 2, 3, 1];
const expected1 = 4;
const result1 = rob(nums1);
console.log(`Test case 1: expected=${expected1}, actual=${result1}`);

// Test case 2
const nums2 = [2, 7, 9, 3, 1];
const expected2 = 12;
const result2 = rob(nums2);
console.log(`Test case 2: expected=${expected2}, actual=${result2}`);

// Test case 3
const nums3 = [];
const expected3 = 0;
const result3 = rob(nums3);
console.log(`Test case 3: expected=${expected3}, actual=${result3}`);

// Test case 4
const nums4 = [1];
const expected4 = 1;
const result4 = rob(nums4);
console.log(`Test case 4: expected=${expected4}, actual=${result4}`);

// Test case 5
const nums5 = [1, 2];
const expected5 = 2;
const result5 = rob(nums5);
console.log(`Test case 5: expected=${expected5}, actual=${result5}`);
