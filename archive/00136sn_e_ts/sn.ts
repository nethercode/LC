function singleNumber(nums: number[]): number {
    let result = 0;
    for (let num of nums) {
      result ^= num;
    }
    return result;
  }
  
  // Example usage:
  const nums = [1, 2, 2, 3, 3];
  const expected = 1;
  const actual = singleNumber(nums);
  console.log(`Input: ${nums}`);
  console.log(`Expected output: ${expected}`);
  console.log(`Actual output: ${actual}`);
  console.log(`Test passed? ${expected === actual}`);
  