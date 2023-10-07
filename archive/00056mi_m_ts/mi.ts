function merge(intervals: number[][]): number[][] {
    // Sort the intervals by their start time
    intervals.sort((a, b) => a[0] - b[0]);
  
    // Initialize the result array with the first interval
    const result: number[][] = [intervals[0]];
  
    // Merge overlapping intervals
    for (let i = 1; i < intervals.length; i++) {
      const currInterval = intervals[i];
      const lastInterval = result[result.length - 1];
  
      if (currInterval[0] <= lastInterval[1]) {
        // The current interval overlaps with the last interval in the result array,
        // so merge them by updating the end time of the last interval
        lastInterval[1] = Math.max(lastInterval[1], currInterval[1]);
      } else {
        // The current interval does not overlap with the last interval in the result array,
        // so add it to the result array
        result.push(currInterval);
      }
    }
  
    return result;
  }