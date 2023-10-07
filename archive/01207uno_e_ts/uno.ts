function uniqueOccurrences(arr: number[]): boolean {
    const countMap = new Map<number, number>();
    
    // Count the occurrences of each value in the array
    for (const num of arr) {
      countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    
    // Check if the number of occurrences is unique
    const occurrenceCounts = new Set(countMap.values());
    return occurrenceCounts.size === countMap.size;
  }