// Function definition
function majorityElement(nums: number[]): number {
    let count = 1;
    let candidate = nums[0];
    
    // Iterate through the array
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] === candidate) {
        // If the current element matches the candidate, increment the count
        count++;
      } else {
        // If the current element does not match the candidate, decrement the count
        count--;
        if (count === 0) {
          // If the count becomes zero, update the candidate to the current element and reset the count to 1
          candidate = nums[i];
          count = 1;
        }
      }
    }
    
    return candidate;
  }
  
  // Example usage
  let nm = [2,2,1,1,1,2,2];
  let majority = majorityElement(nm);
  console.log(`The majority element in [${nm}] is ${majority}.`);
  
  // Output: The majority element in [2,2,1,1,1,2,2] is 2.
  