function longestObstacleCourseAtEachPosition(obstacles: number[]): number[] {
    const n = obstacles.length;
    const ans: number[] = new Array(n);
    const tails: number[] = [];
    for (let i = 0; i < n; i++) {
      const obstacle = obstacles[i];
      let lo = 0;
      let hi = tails.length;
      while (lo < hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (tails[mid] <= obstacle) {
          lo = mid + 1;
        } else {
          hi = mid;
        }
      }
      ans[i] = lo + 1;
      tails[lo] = obstacle;
      if (lo === tails.length) {
        tails.push(obstacle);
      }
    }
    return ans;
  }
  