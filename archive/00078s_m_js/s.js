var subsets = function(nums) {
    nums.sort((a, b) => a - b);
    const subsets = [];
  
    const backtrack = (start, subset) => {
      subsets.push(subset.slice());
      for (let i = start; i < nums.length; i++) {
        if (i > start && nums[i] === nums[i-1]) continue; // skip duplicates
        subset.push(nums[i]);
        backtrack(i+1, subset);
        subset.pop();
      }
    };
  
    backtrack(0, []);
  
    return subsets;
  };

  let nums_a = [1,2,3];
  let nums_b = [0];

  console.log(subsets(nums_a));
  console.log(subsets(nums_b));
