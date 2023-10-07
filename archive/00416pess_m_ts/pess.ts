function canPartition(nums: number[]): boolean {
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    if (totalSum % 2 !== 0) {
        return false;
    }

    const halfSum = totalSum / 2;
    const dp: boolean[] = new Array(halfSum + 1).fill(false);
    dp[0] = true;

    for (const num of nums) {
        for (let j = halfSum; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    return dp[halfSum];
}

const nums = [1, 5, 10, 6];
const canPartitionResult = canPartition(nums);
console.log(canPartitionResult); // expected output: true
