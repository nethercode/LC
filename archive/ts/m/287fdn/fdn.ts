function findDuplicate(nums: number[]): number {
    // Use Floyd's cycle detection algorithm
    let slow = nums[0];
    let fast = nums[0];
    do {
      slow = nums[slow];
      fast = nums[nums[fast]];
    } while (slow !== fast);
  
    // Find the entrance of the cycle
    let ptr1 = nums[0];
    let ptr2 = slow;
    while (ptr1 !== ptr2) {
      ptr1 = nums[ptr1];
      ptr2 = nums[ptr2];
    }
  
    return ptr1;
  }
  
  // CLI output test
  const nums = [1, 3, 4, 2, 2];
  const expectedOutput = 2;
  const actualOutput = findDuplicate(nums);
  
  if (actualOutput === expectedOutput) {
    console.log(`PASS: Expected output: ${expectedOutput}. Actual output: ${actualOutput}.`);
  } else {
    console.error(`FAIL: Expected output: ${expectedOutput}. Actual output: ${actualOutput}.`);
  }
  