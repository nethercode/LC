var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        return mid;
      }
      if (nums[left] <= nums[mid]) {
        // Left half of the array is sorted.
        if (nums[left] <= target && target < nums[mid]) {
          // Target is in the left half of the array.
          right = mid - 1;
        } else {
          // Target is in the right half of the array.
          left = mid + 1;
        }
      } else {
        // Right half of the array is sorted.
        if (nums[mid] < target && target <= nums[right]) {
          // Target is in the right half of the array.
          left = mid + 1;
        } else {
          // Target is in the left half of the array.
          right = mid - 1;
        }
      }
    }
    // Target not found.
    return -1;
  };
  
let nmls = [4,5,6,7,0,1,2];
let targ = 3;

console.log(search(nmls, targ));