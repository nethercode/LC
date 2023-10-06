function maxSubArray(nums: number[]): number {
    return maxSubArrayHelper(nums, 0, nums.length - 1);
}

function maxSubArrayHelper(nums: number[], left: number, right: number): number {
    if(left == right) {
        return nums[left];
    }
    
    let mid = Math.floor((left + right) / 2);
    let leftSum = Number.MIN_SAFE_INTEGER;
    let rightSum = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    
    for(let i = mid; i >= left; i--) {
        sum += nums[i];
        leftSum = Math.max(leftSum, sum);
    }
    
    sum = 0;
    
    for(let i = mid + 1; i <= right; i++) {
        sum += nums[i];
        rightSum = Math.max(rightSum, sum);
    }
    
    let crossSum = leftSum + rightSum;
    let maxLeftSum = maxSubArrayHelper(nums, left, mid);
    let maxRightSum = maxSubArrayHelper(nums, mid + 1, right);
    
    return Math.max(crossSum, maxLeftSum, maxRightSum);
}
