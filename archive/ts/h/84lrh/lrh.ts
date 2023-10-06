function largestRectangleArea(heights: number[]): number {
    const stack: number[] = [];
    let maxArea = 0;
    for (let i: number = 0; i <= heights.length; i++) {
      const height: number = i === heights.length ? 0 : heights[i];
      while (stack.length > 0 && heights[stack[stack.length - 1]] > height) {
        const index: number = stack.pop() as number;
        const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, heights[index] * width);
      }
      stack.push(i);
    }
    return maxArea;
  }
  
  // Test
  const heights: number[] = [2, 1, 5, 6, 2, 3];
  const result: number = largestRectangleArea(heights);
  console.log(result); // Output: 10
  