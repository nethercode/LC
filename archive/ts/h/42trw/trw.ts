function trap(height: number[]): number {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0;
    let result = 0;

    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += rightMax - height[right];
            }
            right--;
        }
    }

    return result;
}

// CLI test
const testCases: [number[], number][] = [
  [[0,1,0,2,1,0,1,3,2,1,2,1], 6],
  [[4,2,0,3,2,5], 9],
  [[], 0],
  [[3], 0],
  [[5,4,3,2,1], 0],
];

for (const [input, expected] of testCases) {
  const result = trap(input);
  if (result !== expected) {
    console.error(`Test failed for input: ${input}. Expected ${expected}, but got ${result}.`);
  } else {
    console.log(`Test passed for input: ${input}.`);
  }
}
