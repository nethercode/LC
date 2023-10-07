function lengthOfLIS(nums: number[]): number {
    const ends: number[] = [];
    for (const num of nums) {
        let left = 0;
        let right = ends.length - 1;
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (ends[mid] < num) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        ends[left] = num;
    }
    return ends.length;
}

const nums = [10, 9, 2, 5, 3, 7, 101, 18];
const lisLength = lengthOfLIS(nums);
console.log(`Longest increasing subsequence length: ${lisLength}`);