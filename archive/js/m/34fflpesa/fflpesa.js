var searchRange = function(nums, target) {
    // Find the leftmost occurrence of the target.
    let left = 0;
    let right = nums.length - 1;
    let first = -1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        first = mid;
        right = mid - 1;
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    // If the target is not found, return [-1, -1].
    if (first === -1) {
      return [-1, -1];
    }
    
    // Find the rightmost occurrence of the target.
    left = first;
    right = nums.length - 1;
    let last = first;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) {
        last = mid;
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return [first, last];
  };


let nmls = [5,7,7,8,8,10];
let targ = 6;

console.log(searchRange(nmls, targ));