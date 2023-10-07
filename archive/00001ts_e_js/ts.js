var twoSum = function(nums, target) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in hash) {
            return [hash[complement], i];
        }
        hash[nums[i]] = i;
    }
};

const nums = [2, 7, 11, 15];
const target = 9;

const result = twoSum(nums, target);

console.log(result); // prints [0, 1]
