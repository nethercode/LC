var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
};

// Make an array
const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

// Define search target
const target = 12;

// Call function to index target in array
const index = search(nums, target);

// Check if target found and print result
if (index >= 0) {
  console.log(`output :: target( ${target} ) @@ index( ${index} )`);
} else {
  console.log(`( ${target} ) not found in array.`);
}