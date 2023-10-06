function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const maxCandies = Math.max(...candies); // find the maximum number of candies
  
    return candies.map((candy) => candy + extraCandies >= maxCandies); // check for each kid
  }