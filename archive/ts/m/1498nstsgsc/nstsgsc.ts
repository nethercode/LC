function numSubseq(nums: number[], target: number): number {
    const mod = 1e9 + 7;
    const n = nums.length;
    const sorted = nums.sort((a, b) => a - b);
    let i = 0;
    let j = n - 1;
    let res = 0;
    const pow2 = new Array(n);
    pow2[0] = 1;
    for (let k = 1; k < n; k++) {
      pow2[k] = pow2[k - 1] * 2 % mod;
    }
    while (i <= j) {
      if (sorted[i] + sorted[j] <= target) {
        res = (res + pow2[j - i]) % mod;
        i++;
      } else {
        j--;
      }
    }
    return res;
  }
  
  // Unit Test
  const nums = [
    9, 25, 9, 28, 24, 12, 17, 8, 28, 7, 21, 25, 10, 2, 16, 19, 12, 13, 15, 28,
    14, 12, 24, 9, 6, 7, 2, 15, 19, 13, 30, 30, 23, 19, 11, 3, 17, 2, 14, 20, 22,
    30, 12, 1, 11, 2, 2, 20, 20, 27, 15, 9, 10, 4, 12, 30, 13, 5, 2, 11, 29, 5,
    3, 13, 22, 5, 16, 19, 7, 19, 11, 16, 11, 25, 29, 21, 29, 3, 2, 9, 20, 15, 9,
  ];
  const target = 32;
  const expected = 91931447;
  const result = numSubseq(nums, target);
  if (result === expected) {
    console.log("Test passed");
  } else {
    console.log(`Test failed. Expected ${expected}, but got ${result}`);
  }
  